$(document).ready(function() {
    // dataTable
    $('.table').dataTable({
        length: false,
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
            lineCap: 'round',
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
        $('#module-widget .easy-pie-chart.percentage').each(function() {
            var cellPercent = Math.floor(Math.random() * 100 + 1);
            $(this).find('.percent').text(cellPercent);
            $(this).data('easyPieChart').update(cellPercent);
        });

        var systemTree = ['系统XWZ / 模组1', '系统XWZ / 模组P', '系统XWZ / 模组TU', '系统XWZ / 模组NN', '系统CHA / 模组JH', '系统CHA / 模组KP',
            '系统CHA / 模组ASO', '系统CHA / 模组OCD', '系统TPE / 模组MNL', '系统TPE / 模组NHK', '系统TPE / 模组NASA', '系统TPE / 模组JP'
        ];
        var treeLength = systemTree.length;
        var treeIndex = Math.floor(Math.random() * treeLength);
        var moduleName = systemTree[treeIndex];
        $('#system-module').text(moduleName);
    });

    // update cell-history-morris-chart upon the type selection changes
    // morris chart
    var initData = prepareDemoCellData();

    var graph = new Morris.Line({
        element: 'history-line-chart',
        data: initData,
        xkey: 'year',
        ykeys: ['value'],
        labels: ['平均'],
        ymin: 0,
        ymax: 200,
        lineColors: ['green']
    });

    function prepareDemoCellData() {
        var data = [];
        for (var startYear = 2007; startYear <= 2014; startYear++) {
            var currentYear = startYear;

            var max = 200;
            var min = 1;

            var value = Math.floor(Math.random() * max + min);
            var dataPoint = {
                year: currentYear.toString(),
                value: value
            };
            data.push(dataPoint);
        }
        return data;
    }

    $("input[name=history]:radio").change(function() {
        var chartType = $("input[type='radio']:checked").val();
        if (chartType) {
            var cellData = prepareDemoCellData(chartType);
            graph.setData(cellData);
        }
    });

    // update table content when discharge pagination button clicked
    var hideDate = $(".more-date");
    var showDate = $(".less-date");
    $("#next-date, #pre-date").click(function() {
        hideDate.toggle();
        showDate.toggle();
    });

    // update table content when error pagination button clicked
    var hideError = $(".more-error");
    var showError = $(".less-error");
    $("#next-error, #pre-error").click(function() {
        hideError.toggle();
        showError.toggle();
    });
});
