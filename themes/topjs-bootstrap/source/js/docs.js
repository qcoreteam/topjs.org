/**
 * Created by liushuai on 2017/1/21.
 */

$('pre').addClass('prettyprint').attr('style', 'overflow:auto;');
prettyPrint();

var width = $('#slide').width();
$('#slide').css({
    "left": -(width + 2)
});


$('#slideClose').click(function (e) {
    e.stopPropagation();
    var width = $('.sidebar-left').width();
    var left = $('.sidebar-left').css('left');
    if (parseInt(left) === 0) {
        $('#slide').css({
            "left": -(width + 2),
            "opacity": 0
        });
    } else {
        $('#slide').css({
            "left": 0,
            "opacity": 1
        });
    }
});
$('nav').click(function (e) {
    e.stopPropagation();
});

$('.list-group-item').click(function (e) {
    if ($(this).next('.list-group').length === 0) {
        return;
    }
    $('#categoryList .list-group').not($(this).next('.list-group')).slideUp();
    $(this).next('.list-group').slideToggle();
});

$('#slide').click(function (e) {
    e.stopPropagation();
});

maoDian(10);
$(document).click(function () {
    var width = $('#slide').width();
    $('#slide').css({
        "left": -(width + 2),
        "opacity": 0
    });
});