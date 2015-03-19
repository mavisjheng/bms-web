$(document).ready(function() {
    // date-range-picker for cell.html and log.html
    $('input[name=cell-history-range]').daterangepicker({
        'applyClass': 'btn-sm btn-success',
        'cancelClass': 'btn-sm btn-default',
        locale: {
            applyLabel: '确认',
            cancelLabel: '取消',
            fromLabel: '起始',
            toLabel: '结束',
            customRangeLabel: 'Custom',
            daysOfWeek: ['日', '一', '二', '三', '四', '五', '六'],
            monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
            firstDay: 1
        }
    }).prev().on(ace.click_event, function() {
        $(this).next().focus();
    });

    // dataTable
    $('#cell-history-table').dataTable({
        lengthMenu: [5, 10, 20, 30, 50, "All"],
        length: false,
        ordering: true,
        paging: true,
        info: true,
        filter: true,
        language: {
            lengthMenu: "显示 _MENU_ 项结果",
            zeroRecords: "没有匹配结果",
            info: "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
            infoEmpty: "显示第 0 至 0 项结果，共 0 项",
            infoFiltered: "(由 _MAX_ 项结果过滤)",
            search: "搜索：",
            paginate: {
                previous: "上页",
                next: "下页",
                first: "首页",
                last: "末页"
            }
        }
    });

    // easy pie chart
    $('.easy-pie-chart.percentage').each(function() {
        var $box = $(this).closest('.infobox');
        $(this).easyPieChart({
            barColor: '#87AA2A',
            trackColor: '#E2E2E2',
            lineWidth: 20,
            scaleColor: false,
            size: 160,
        });
    });

    // update cell capacity percentage automatically
    var percentStr = $('.easy-pie-chart.percentage span').text();
    var percentInt = parseInt(percentStr);
    var percentage = percentInt;

    function updateStatus(percentage) {
        $('.easy-pie-chart.percentage span').text(percentage);
        $('.easy-pie-chart.percentage').data('easyPieChart').update(percentage);
    }
    setInterval(function() {
        // percentage decreases 1 every 5 seconds until reach to 0%
        percentage--;
        if (percentage < 0) {
            percentage = percentInt;
        }
        // update
        updateStatus(percentage);
    }, 5000);

    // morris chart
    var graph = new Morris.Line({
        element: 'cell-history-line-chart',
        data: [{
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
        }],
        xkey: 'y',
        ykeys: ['a'],
        labels: ['平均'],
        ymin: 0,
        ymax: 200,
        lineColors: ['red']
    });

    // update cell-history-morris-chart upon the type selection changes
    $("#cell-chart-type-submit").click(function() {
        var chartType = $("#cell-chart-type option:selected").text();
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
            var curData = [{
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
            graph.setData(curData);
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
