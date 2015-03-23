$(document).ready(function() {
    // sidebar edit action for every page
    var editBar = $(".edit-bar");
    var showBox = $(".show-box");
    $("#edit-btn").click(function() {
        editBar.toggle();
        showBox.toggle();
    });
    $('[data-rel=tooltip]').tooltip();

    // breadcrumbs
    $('ul li a').click(function() {
        var currentTabText = $(this).text();
        $('.breadcrumbs li.active').text(currentTabText);
    });
});
