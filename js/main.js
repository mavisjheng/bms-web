$(document).ready(function() {
    // sidebar edit action for every page
    $(".edit-bar").css({
        display: "none"
    });
    var editBar = $(".edit-bar");
    var showBox = $(".show-box");
    $("#edit-btn").click(function() {
        editBar.toggle();
        showBox.toggle();
    });
    $('[data-rel=tooltip]').tooltip();

});