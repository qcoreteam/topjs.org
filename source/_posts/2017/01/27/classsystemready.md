---
title: 类系统特性已经实现了，欢迎大家体验
date: 2017-01-27 10:41:14
tags:
categories: devel
---
当前Javascript的ES6标准已经发布，但是还是缺失了一些面向对象的特性，可能以后会陆续的进行添加，但是为了更好的实现TopJs框架，我们添加了一些跟Javascript
类相关的函数。等到相关标准原生支持的时候，我们会相应移除。现在我们简单的看看我们添加的函数，详细文档请查看编程手册。

在TopJs框架里面我们调用函数`TopJs.namespace("some name space"")`创建一个名称空间, 例如：
```javascript
let ns = TopJs.namespace("App.kernel"); // create a namespace object
console.log(ns.name); // App.kernel
```
TopJs框架本身的名称空间就是通过这个函数进行组织。
当我们需要使用一个类的时候，比如使用TopJs的`TopJs.stdlib.MaxHeap`类，您只要在您的代码开头写上
```
let MaxHeap = TopJs.requre("TopJs.stdlib.MaxHeap");
let heap = new TopJs.stdlib.MaxHeap();
let heap1 = new MaxHeap();
```
我们这样调用的前提是咱们的代码严格按照名称空间在文件系统进行创建，拿咱们的`TopJs.stdlib.MaxHeap`类为例子，这个类在文件系统的路径为：
`TopJsRootDir/stdlib/MaxHeap.js`
其他的特性有：
* 实现接口，已经判断一个类是否实现指定的接口
* 将指定的类注册到指定的名称空间
* 使用字符串创建指定类的实例

咱们就简单的介绍到这里，详情可以进一步阅读编程手册