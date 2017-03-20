/**
 * Created by liushuai on 2017/1/21.
 */

$('pre').addClass('prettyprint').attr('style', 'overflow:auto;');
prettyPrint();

var width = $('#slide').width();
$('#slide').css({
    "left": -(width + 2)
});

$(document).bind('touchend', function (e) {
    e.stopPropagation();
    var width = $('#slide').width();
    var left = $('#slide').css('left');
    if (parseInt(left) === 0) {
        $('#slide').animate({
            "left": -(width + 2),
            "opacity": 0
        }, 500);
    } else {
        $('#slide').animate({
            "left": 0,
            "opacity": 1
        }, 500);
    }
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
$(document).bind('touchend', function (e) {
    var width = $('#slide').width();
    $('#slide').animate({
        "left": -(width + 2),
        "opacity": 0
    });
});
$(document).click(function () {
    var width = $('#slide').width();
    $('#slide').animate({
        "left": -(width + 2),
        "opacity": 0
    });
});