$(document).ready(function() {
    $('.service-pills ul li a').click(function() {
        var currentTabText = $(this).text();
        $('.breadcrumb li.active').text(currentTabText);
    });

    // subscribe notification
    $('.subscribe-btn').click(function(){
        $('.subscribe').animate({right: "0px"}, 200);
        $('.left-part, .mid-part').animate({right: "300px"}, 200);
    });
    $('.subscribe-close').click(function(){
        $('.subscribe').animate({right: "-300px"}, 200);
        $('.left-part, .mid-part').animate({right: "0px"}, 200);
    });

	// my account
    $('.account-btn').click(function(){
        $('.account').animate({right: "0px"}, 200);
        $('.left-part, .mid-part').animate({right: "300px"}, 200);
    });
    $('.account-close').click(function(){
        $('.account').animate({right: "-300px"}, 200);
        $('.left-part, .mid-part').animate({right: "0px"}, 200);
    });

    // contact us
    $('.contact-btn').click(function(){
        $('.contact').animate({right: "0px"}, 200);
        $('.left-part, .mid-part').animate({right: "300px"}, 200);
    });
    $('.contact-close').click(function(){
        $('.contact').animate({right: "-300px"}, 200);
        $('.left-part, .mid-part').animate({right: "0px"}, 200);
    });

    // log in
    $('.login-btn').click(function(){
        $('.login').animate({right: "0px"}, 200);
        $('.left-part, .mid-part').animate({right: "300px"}, 200);
    });
    $('.login-close').click(function(){
        $('.login').animate({right: "-300px"}, 200);
        $('.left-part, .mid-part').animate({right: "0px"}, 200);
    });

});
