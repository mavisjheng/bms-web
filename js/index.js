$(document).ready(function() {
    // dataTable
    $('.table').dataTable({
        paging: false,
        info: false,
        filter: false
    });

    // easy-pie-chart
    $('.easy-pie-chart.percentage').each(function() {
        var $box = $(this).closest('.infobox');
        var barColor = $(this).css('color') || (!$box.hasClass('infobox-dark') ? $box.css('color') : 'rgba(255,255,255,0.95)');
        var trackColor = barColor == 'rgba(255,255,255,0.95)' ? 'rgba(255,255,255,0.25)' : '#E2E2E2';
        var size = parseInt($(this).data('size')) || 50;
        $(this).easyPieChart({
            barColor: barColor,
            trackColor: trackColor,
            scaleColor: false,
            lineCap: 'butt',
            lineWidth: parseInt(size / 10),
            animate: /msie\s*(8|7|6)/.test(navigator.userAgent.toLowerCase()) ? false : 1000,
            size: size
        });
    });

    // update system main capacity percentage automatically
    var percentStr = $('.easy-pie-chart.percentage #main-percent').text();
    var percentInt = parseInt(percentStr);
    var percentage = percentInt;

    function updateStatus(percentage) {
        $('.easy-pie-chart.percentage #main-percent').text(percentage);
        $('.easy-pie-chart.percentage.color-purple3').data('easyPieChart').update(percentage);
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

    //create random percentage when system-module click switched
    $('.module-switch').click(function() {
        var cellPercent1 = Math.floor(Math.random() * 100 + 1);
        var cellPercent2 = Math.floor(Math.random() * 100 + 1);
        var cellPercent3 = Math.floor(Math.random() * 100 + 1);
        var cellPercent4 = Math.floor(Math.random() * 100 + 1);
        var cellPercent5 = Math.floor(Math.random() * 100 + 1);
        var cellPercent6 = Math.floor(Math.random() * 100 + 1);
        $('#cell1 .cell-percent').text(cellPercent1);
        $('#cell2 .cell-percent').text(cellPercent2);
        $('#cell3 .cell-percent').text(cellPercent3);
        $('#cell4 .cell-percent').text(cellPercent4);
        $('#cell5 .cell-percent').text(cellPercent5);
        $('#cell6 .cell-percent').text(cellPercent6);
        $('#cell1').data('easyPieChart').update(cellPercent1);
        $('#cell2').data('easyPieChart').update(cellPercent2);
        $('#cell3').data('easyPieChart').update(cellPercent3);
        $('#cell4').data('easyPieChart').update(cellPercent4);
        $('#cell5').data('easyPieChart').update(cellPercent5);
        $('#cell6').data('easyPieChart').update(cellPercent6);
        var systemTree = ['系统XWZ / 模组1', '系统XWZ / 模组P', '系统XWZ / 模组TU', '系统XWZ / 模组NN', '系统CHA / 模组JH', '系统CHA / 模组KP',
            '系统CHA / 模组ASO', '系统CHA / 模组OCD', '系统TPE / 模组MNL', '系统TPE / 模组NHK', '系统TPE / 模组NASA', '系统TPE / 模组JP'
        ];
        var treeLength = systemTree.length;
        var treeIndex = Math.floor(Math.random() * treeLength);
        var moduleName = systemTree[treeIndex];
        $('#system-module').text(moduleName);
    });

    // morris line charts
    var graph = new Morris.Line({
        element: 'history-line-chart',
        data: [{
            y: '2007',
            a: 75
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
            a: 10
        }, {
            y: '2014',
            a: 175
        }],
        xkey: 'y',
        ykeys: ['a'],
        labels: ['平均'],
        ymin: 0,
        ymax: 200,
        lineColors: ['green']
    });

    $("input[name=history]:radio").change(function() {
        var text = $("input[type='radio']:checked + span").text();
        if (text === '历史电流') {
            var curData = [{
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
            graph.setData(curData);
        } else {
            var originData = [{
                y: '2007',
                a: 75
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
                a: 10
            }, {
                y: '2014',
                a: 175
            }];
            graph.setData(originData);
        }
    })

});
