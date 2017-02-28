/**
 * Created by liushuai on 2017/1/15.
 */
var pathname = window.location.pathname;
var page = pathname.split('/').pop();
var pageSelector = 'a[href="' + page + '"]';
if ($(pageSelector).length == 0) {
    pageSelector = 'a[href="TopJs.html"]';
}

function init() {
    if ($(pageSelector).parents('.members').length) {
        $(pageSelector).parents('.members').show();
        generateClassMethonPara();
    } else if ($(pageSelector).siblings('.members').length) {
        $(pageSelector).siblings('.members').show();

    }
    $(pageSelector).addClass('current');
}

function generateClassMethonPara() {
    $list = '<ul class="members" style="display: block;">';
    $.each($('section h4.name'), function (i,n) {
        text = $(n).text().split(' ')[1].split('(')[0];
        $list += '<li data-type="member" class="entry-type-class"><a href="#' + $(n).attr('id') + '" class="current">' + text + '</a></li>'
    });

    $(pageSelector).after($list);
}
init();
maoDian(70);

$('#slideClose').click(function (e) {
    e.stopPropagation();
    var width = $('.api-container nav').width();
    var left = $('.api-container nav').css('left');
    if (parseInt(left) === 0) {
        $('.api-container nav').animate({
            "left": -(width + 2),
            "opacity": 0
        });
    } else {
        $('.api-container nav').animate({
            "left": 0,
            "opacity": 1
        });
    }
});

$('nav').click(function (e) {
    e.stopPropagation();
});
$(document).bind('touchend', function (e) {
    var windowWidth = $(window).width();
    if (windowWidth > 768) {
        return;
    }
    var width = $('.api-container nav').width();
    $('.api-container nav').animate({
        "left": -(width + 2),
        "opacity": 0
    });
});
$(document).click(function () {
    var windowWidth = $(window).width();
    if (windowWidth > 768) {
        return;
    }
    var width = $('.api-container nav').width();
    $('.api-container nav').animate({
        "left": -(width + 2),
        "opacity": 0
    });
});


$(window).resize(function (e) {
    var width = $(window).width();
    if ( width > 768) {
        $('.api-container nav').animate({
            "opacity": 1
        });
    }
});

$('table.params').wrap('<div class="table-wrap"></div>')