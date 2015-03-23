$(document).ready(function() {
    // easy pie chart
    $('.easy-pie-chart.percentage').each(function() {
        $(this).easyPieChart({
            barColor: '#2e8965',
            trackColor: '#E2E2E2',
            lineCap: 'butt',
            lineWidth: 6,
            scaleColor: false,
            size: 80
        });
    });

    //create random percentage when system-module click switched
    $('.module-switch').click(function() {
        $('#module-widget .easy-pie-chart.percentage').each(function() {
            var cellPercent = Math.floor(Math.random() * 100 + 1);
            $(this).find('.percent').text(cellPercent);
            $(this).data('easyPieChart').update(cellPercent);
        });

        var systemTree = ['系统XWZ / 模组1', '系统XWZ / 模组P', '系统XWZ / 模组TU', '系统XWZ / 模组NN', '系统CHA / 模组JH', '系统CHA / 模组KP',
            '系统CHA / 模组ASO', '系统CHA / 模组OCD', '系统TPE / 模组MNL', '系统TPE / 模组NHK', '系统TPE / 模组NASA', '系统TPE / 模组JP'];
        var treeLength = systemTree.length;
        var treeIndex = Math.floor(Math.random() * treeLength);
        var moduleName = systemTree[treeIndex];
        $('#system-module').text(moduleName);
    });
});

