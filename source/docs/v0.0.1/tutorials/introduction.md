---
layout: doc
title: introduction
---
## 比较函数
比较两个函数的大小
```
var a = 1;
var b = 2;
console.log(compare(a,b));
function compare(a, b)
{
    return a > b ?  a : b;
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