$(document).ready(function() {
    // pie chart
    $('.easy-pie-chart.percentage').each(function() {
        var $box = $(this).closest('.infobox');
        $(this).easyPieChart({
            barColor: '#69aa46',
            trackColor: '#E2E2E2',
            lineWidth: 18,
            lineCap: 'butt',
            scaleColor: false,
            size: 130,
        });
    })

    //morris chart
    var graph = new Morris.Line({
        element: 'module-history-line-chart',
        data: [{
            y: '2007',
            a: 200
        }, {
            y: '2008',
            a: 130
        }, {
            y: '2009',
            a: 65
        }, {
            y: '2010',
            a: 100
        }, {
            y: '2011',
            a: 75
        }, {
            y: '2012',
            a: 150
        }, {
            y: '2013',
            a: 130
        }, {
            y: '2014',
            a: 178
        }],
        xkey: 'y',
        ykeys: ['a'],
        labels: ['平均'],
        ymin: 0,
        ymax: 200,
        lineColors: ['purple']
    });

    // update cell-history-morris-chart upon the type selection changes
    $("#module-chart-submit").click(function() {
        var chartType = $("#module-chart-type option:selected").text();
        if (chartType === '控母电压') {
            var volData1 = [{
                y: '2007',
                a: 10
            }, {
                y: '2008',
                a: 20
            }, {
                y: '2009',
                a: 30
            }, {
                y: '2010',
                a: 40
            }, {
                y: '2011',
                a: 50
            }, {
                y: '2012',
                a: 60
            }, {
                y: '2013',
                a: 70
            }, {
                y: '2014',
                a: 80
            }];
            graph.setData(volData1);
        } else if (chartType === '合母电压') {
            var volData2 = [{
                y: '2007',
                a: 200
            }, {
                y: '2008',
                a: 100
            }, {
                y: '2009',
                a: 200
            }, {
                y: '2010',
                a: 100
            }, {
                y: '2011',
                a: 200
            }, {
                y: '2012',
                a: 100
            }, {
                y: '2013',
                a: 200
            }, {
                y: '2014',
                a: 100
            }];
            graph.setData(volData2);
        } else if (chartType === '浮充电流') {
            var currData = [{
                y: '2007',
                a: 200
            }, {
                y: '2008',
                a: 190
            }, {
                y: '2009',
                a: 180
            }, {
                y: '2010',
                a: 50
            }, {
                y: '2011',
                a: 50
            }, {
                y: '2012',
                a: 170
            }, {
                y: '2013',
                a: 180
            }, {
                y: '2014',
                a: 190
            }];
            graph.setData(currData);
        } else if (chartType === '绝缘电阻') {
            var resData1 = [{
                y: '2007',
                a: 0
            }, {
                y: '2008',
                a: 50
            }, {
                y: '2009',
                a: 100
            }, {
                y: '2010',
                a: 150
            }, {
                y: '2011',
                a: 200
            }, {
                y: '2012',
                a: 150
            }, {
                y: '2013',
                a: 100
            }, {
                y: '2014',
                a: 50
            }];
            graph.setData(resData1);
        } else if (chartType === '直流母线电阻') {
            var resData2 = [{
                y: '2007',
                a: 130
            }, {
                y: '2008',
                a: 130
            }, {
                y: '2009',
                a: 130
            }, {
                y: '2010',
                a: 130
            }, {
                y: '2011',
                a: 130
            }, {
                y: '2012',
                a: 130
            }, {
                y: '2013',
                a: 130
            }, {
                y: '2014',
                a: 130
            }];
            graph.setData(resData2);
        } else if (chartType === '单体电池內阻') {
            var resData3 = [{
                y: '2007',
                a: 20
            }, {
                y: '2008',
                a: 200
            }, {
                y: '2009',
                a: 75
            }, {
                y: '2010',
                a: 160
            }, {
                y: '2011',
                a: 100
            }, {
                y: '2012',
                a: 130
            }, {
                y: '2013',
                a: 10
            }, {
                y: '2014',
                a: 55
            }];
            graph.setData(resData3);
        } else if (chartType === '电池组容量') {
            var capaData = [{
                y: '2007',
                a: 100
            }, {
                y: '2008',
                a: 80
            }, {
                y: '2009',
                a: 80
            }, {
                y: '2010',
                a: 57
            }, {
                y: '2011',
                a: 63
            }, {
                y: '2012',
                a: 77
            }, {
                y: '2013',
                a: 81
            }, {
                y: '2014',
                a: 65
            }];
            graph.setData(capaData);
        } else if (chartType === '温度') {
            var tempData = [{
                y: '2007',
                a: 40
            }, {
                y: '2008',
                a: 28
            }, {
                y: '2009',
                a: 27
            }, {
                y: '2010',
                a: 35
            }, {
                y: '2011',
                a: 30
            }, {
                y: '2012',
                a: 24
            }, {
                y: '2013',
                a: 29
            }, {
                y: '2014',
                a: 32
            }];
            graph.setData(tempData);
        } else {
            var originData = [{
                y: '2007',
                a: 200
            }, {
                y: '2008',
                a: 20
            }, {
                y: '2009',
                a: 65
            }, {
                y: '2010',
                a: 100
            }, {
                y: '2011',
                a: 75
            }, {
                y: '2012',
                a: 130
            }, {
                y: '2013',
                a: 130
            }, {
                y: '2014',
                a: 55
            }];
            graph.setData(originData);
        }
    });

});
