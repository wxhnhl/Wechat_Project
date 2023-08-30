function grade(){
var myChart1 = echarts.init(document.getElementById('grade'));
var spNum = 5,
    _max = 100;
var legendData = ['较差', '中等', '良好', '优秀','极好'];
var y_data = ['信用等级'];
var _datamax = [100, 100, 100, 100, 100],
    _data1 = [1, 15, 30, 50, 100],
    _data2 = [100, 120, 160, 180, 200],
    _data3 = [200, 220, 260, 280, 300],
    _data4 = [150, 200, 250, 180, 600]
var fomatter_fn = function(v) {
    return (v.value / _max * 100).toFixed(0)
}
var _label = {
    normal: {
        show: true,
        position: 'inside',
        formatter: fomatter_fn,
        textStyle: {
            color: '#fff',
            fontSize: 16
        }
    }
};
option1= {
    
    grid: {
        containLabel: true,
        left: '1%',
        right: '1%',
        bottom: 0
    },
    tooltip: {
        show: true,
        backgroundColor: '#fff',
        borderColor: '#ddd',
        borderWidth: 1,
        textStyle: {
            color: '#3c3c3c',
            fontSize: 16
        },
        extraCssText: 'box-shadow: 0 0 5px rgba(0, 0, 0, 1)'
    },
    xAxis: {
        splitNumber: spNum,
        interval: _max / spNum,
        max: _max,
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }

    },
    yAxis: [{
            type: 'category',
            data: y_data,
            axisLine: {
                show: false
            },
            axisLabel: {
                inside: true,
                padding: [-50, 0, 10, 0],
                color: '#fff',
                fontSize: 28,
            },
            splitLine: {
                show: false
            },
            axisTick: { //y轴刻度线
                show: false
            },
        },
        {
            type: 'category',
            data: '优',
            axisLine: {
                show: false
            },
            axisLabel: {
                inside: true,
                padding: [-50, 0, 10, 0],
                color: '#fff',
                fontSize: 28,
            },
            splitLine: {
                show: false
            },
            axisTick: { //y轴刻度线
                show: false
            },
        }
    ],
    series: [{
        type: 'bar',
        name: '较差',
        stack: '2',
        legendHoverLink: false,
        barWidth: 20,
        itemStyle: {
            normal: {
                color: 'rgba(143,225,211,0.001)'
            }

        },
        data: _data1
    }, {
        type: 'bar',
        name: '中等',
        stack: '2',
        legendHoverLink: false,
        barWidth: 20,
        itemStyle: {
            normal: {
                color: 'rgba(143,225,211,0.15)'
            }

        },
        data: _data2
    }, {
        type: 'bar',
        stack: '2',
        name: '良好',
        legendHoverLink: false,
        barWidth: 20,
        itemStyle: {
            normal: {
                color: 'rgba(143,225,211,0.3)'
            }

        },
        data: _data3
    }, {
        type: 'bar',
        stack: '2',
        name: '优秀',
        legendHoverLink: false,
        barWidth: 20,
        itemStyle: {
            normal: {
                color: 'rgba(143,225,211,1.0)'
            }
        },
        data: _data4
    }, {
        type: 'bar',
        barGap: '-100%',
        barBorderRadius: 50,
        barWidth: 20,
        silent: true,
        label: _label,
        itemStyle: {
            normal: {
                barBorderRadius: 50,
                color: 'rgba(241, 241, 241, 1)'
            },

        },
        z: 1,
        data: _datamax
    }]
};
myChart1.setOption(option1) ;
}