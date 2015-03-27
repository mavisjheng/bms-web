$(document).ready(function() {
    // easy pie chart
    $('.easy-pie-chart.percentage').each(function() {
        $(this).easyPieChart({
            barColor: function colorChange(percentage) {
                if (percentage < 50) {
                    return '#d4301d';
                } else if (percentage > 49 && percentage < 80){
                    return '#f6a509';
                } else {
                    return '#2e8965';
                }
            },
            trackColor: '#E2E2E2',
            lineCap: 'butt',
            lineWidth: 6,
            scaleColor: false,
            size: 80
        });
    });

    //create random percentage when system-module click switched
    $('.system-switch').click(function() {
        $('.system-widget .easy-pie-chart.percentage').each(function() {
            var cellPercent = Math.floor(Math.random() * 100 + 1);
            $(this).find('.percent').text(cellPercent);
            $(this).data('easyPieChart').update(cellPercent);
        });

        var systemTree = ['系统XWZ', '系统CHA', '系统TPE', '系统KH', '系统AMR'];
        var moduleTree = ['模组DL', '模组P', '模组TU', '模组NN', '模组JH', '模组KP',
            '模组ASO', '模组OCD', '模组MNL', '模组NHK', '模组NASA', '模组JP'
        ];

        var systemLength = systemTree.length;
        var systemIndex = Math.floor(Math.random() * systemLength);
        var systemName = systemTree[systemIndex];

        function preparemoduleName() {
            var moduleLength = moduleTree.length;
            var data = [];
            for (var i = 0; i <= 3; i++) {
                var moduleIndex = Math.floor(Math.random() * moduleLength);
                var moduleName = moduleTree[moduleIndex];
                data.push(moduleName);
            }
            return data;
        }
        var moduleNames = preparemoduleName();
        
        $('#system-name1').text(systemName + ' / ' + moduleNames[0]);
        $('#system-name2').text(systemName + ' / ' + moduleNames[1]);
        $('#system-name3').text(systemName + ' / ' + moduleNames[2]);
        $('#system-name4').text(systemName + ' / ' + moduleNames[3]);
    });
});
