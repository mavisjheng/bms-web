$(document).ready(function() {
    // show login-info after user log in
    var userInfo = $('.ace-nav > li.login-info');
    $("#login-btn").click(function() {
        location.href = "index.html";
        userInfo.toggle();
    });
    
});
