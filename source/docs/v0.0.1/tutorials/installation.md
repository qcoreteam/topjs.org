---
layout: doc
title: installation
---
installation
```javascript
var a="asfa";
console.log(a);
var a = 1;
var b = 2;
if (a < b) {
    console.log(b);
}

$('#slideClose').click(function (e) {
    e.stopPropagation();
    var width = $('#slide').width();
    var left = $('#slide').css('left');
    if (parseInt(left) === 0) {
        $('#slide').animate({
            "left": -(width + 2),
            "opacity": 0
        });
    } else {
        $('#slide').animate({
            "left": 0,
            "opacity": 1
        });
    }
});
```