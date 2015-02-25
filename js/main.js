$(document).ready(function() {
	// breadcrumb
    $('.service-pills ul li a').click(function() {
        var currentTabText = $(this).text();
        $('.breadcrumb li.active').text(currentTabText);
    });

    // subscribe notification
    $('.subscribe-btn').click(function(){
        $('.subscribe').animate({right: "0px"});
    });
    $('.subscribe-close').click(function(){
        $('.subscribe').animate({right: "-300px"});
    });

	// my account
    $('.account-btn').click(function(){
        $('.account').animate({right: "0px"});
    });
    $('.account-close').click(function(){
        $('.account').animate({right: "-300px"});
    });

    // contact us
    $('.contact-btn').click(function(){
        $('.contact').animate({right: "0px"});
    });
    $('.contact-close').click(function(){
        $('.contact').animate({right: "-300px"});
    });

    // log in
    $('.login-btn').click(function(){
        $('.login').animate({right: "0px"});
        //$('.left-part, .mid-part').animate({right: "300px"}, 200);
    });
    $('.login-close').click(function(){
        $('.login').animate({right: "-300px"});
        //$('.left-part, .mid-part').animate({right: "0px"}, 200);
    });

});
