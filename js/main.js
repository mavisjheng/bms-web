$(document).ready(function() {
    $('.service-pills ul li a').click(function() {
        var currentTabText = $(this).text();
        $('.breadcrumb li.active').text(currentTabText);

    });

    $('.network-btn').click(function(){
        $('.network-setting').animate({right: "0px"}, 200);
        $('.move-left').animate({right: "385px"}, 200);
    });

    $('.icon-close').click(function(){
        $('.network-setting').animate({right: "-385px"}, 200);
        $('.move-left').animate({right: "0px"}, 200);
    });
});
