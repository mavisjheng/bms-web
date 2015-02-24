$(document).ready(function() {
    $('.service-pills ul li a').click(function() {
        var currentTabText = $(this).text();
        $('.breadcrumb li.active').text(currentTabText);

    });

});
