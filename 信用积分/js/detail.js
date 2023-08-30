function detail(){
var myChart2 = echarts.init(document.getElementById('detail'));
// =======================
// 人员关系数据
var links = [
    ['历史', '行为', ''],
    ['行为', '身份', ''],
    ['身份', '人脉', ''],
     ['人脉', '履约能力', ''],
    ['履约能力', '历史', ''],
	
]
// =======================
// 人员信息数据
var nodes = [{
        '按时守约': '65次',
        '已守约': '2020年05月28日',
        '逾期后守约': '2020年05月28日',
       '未守约': '',
        '类别': '历史',
    },
    {
        '购物': '',
        '缴费': '',
        '转账': '',
        '公益活动': '',
        '类别': '行为',
    },
    {
        '基本信息': '',
        '公司邮箱': '',
        '学历学籍': '东北大学秦皇岛分校',
       '驾驶证':'',
        '类别': '身份',
    },
    {
        '朋友': '',
        '家人': '',
        '同事': '',
        '人脉是综合考量的因素': '',
        '类别': '人脉',
    },
{
        '资产情况': '',
        '公积金': '',
        '房产': '',
       '车产': '',
        '类别': '履约能力',
    }
]
// =======================

//数据正确性检查
//检查节点是否有重复人名
var infos = {};
for (var node of nodes){
    if(node['类别'] in infos){
        window.alert('类别重复，请修改: ' + node['类别'])
    }
    infos[node['类别']] = Object.assign({}, node);
}
// 检查边的links的姓名是否都出现在nodes中
for(var link of links){
    if( !( (link[0] in infos) && (link[1] in infos) ) ){
        window.alert('类别未出现导致边非法:' + link)
    }
}

//格式化输入数据
var legend = new Set()
for (var node of nodes){
    legend.add(node['类别']);
}
legend = Array.from(legend);
legend.sort(); 

echar_data = []
for (var node of nodes){
    echar_data.push({
                name: node['类别'],
                category:  legend.findIndex((element) => element == node['类别']),
                draggable: true,
            })
}

echar_links = []
for(var link of links){
    echar_links.push({
                source: link[0],
                target: link[1],
                value: link[2]
            })
} 

option2 = {
    title: {
        text: '历史芝麻分',
       textStyle: {
            color: "#ffeb7b"
        } 
    },
    tooltip: {
        trigger: 'item',
        formatter: function(params) {
            if(params.dataType == 'edge'){
                var info = '<p style="font-size:14px">' + params.name + '</p>'
                info = info + '<p style="font-size:14px">' + params.value + '</p>'
                return info;
            }
            
            if (params.name in infos) {
                var info = '<p style="font-size:14px">' + params.name + '</p>'
                for (var p in infos[params.name]) {
                    info = info + '<p style = "font-size:12px" >' + p + ':' + infos[params.name][p] + '</p>'
                }
                return info;
            }
        },
        backgroundColor: "#ff7f50", //提示标签背景颜色 
        textStyle: {
            color: "#fff"
        } //提示标签字体颜色 
    },
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    label: {
        normal: {
            show: true,
            textStyle: {
                fontSize: 12
            },
        }
    },
    legend: {
        x: "center",
        show: true,
        data: legend 
    },
    series: [

        {
            type: 'graph',
            layout: 'force',
            symbolSize: 45,
            focusNodeAdjacency: true,
            roam: true,
            categories: [{
                name: legend[0],
                itemStyle: {
                    normal: {
                        color: "#009800",
                    }
                }
            }, {
                name: legend[1],
                itemStyle: {
                    normal: {
                        color: "#9592FF",
                    }
                }
            }, {
                name: legend[2],
                itemStyle: {
                    normal: {
                        color: "#3592FF",
                    }
                }
            },
             {
                name: legend[3],
                itemStyle: {
                    normal: {
                        color: "#33362F",
                    }
                }
            },
             {
                name: legend[4],
                itemStyle: {
                    normal: {
                        color: "#31592F",
                    }
                }
            }],
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 12
                    },
                }
            },
            force: {
                repulsion: 1000
            },
            edgeSymbolSize: [4, 50],
            edgeLabel: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 10
                    },
                    formatter: "{c}"
                }
            },
            data: echar_data,
            links: echar_links,
            lineStyle: {
                normal: {
                    opacity: 0.9,
                    width: 1,
                    curveness: 0
                }
            }
        }
    ]
};
myChart2.setOption(option2) ;
}