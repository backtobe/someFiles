## 第二章

### 1、defer和async

​		没有 defer 或 async，浏览器会立即加载并执行指定的脚本，“立即”指的是在渲染该 script 标签之下的文档元素之前，也就是说不等待后续载入的文档元素，读到就加载并执行。

​		有 async，加载和渲染后续文档元素的过程将和 script.js 的加载与执行并行进行（异步）。

​		有 defer，加载后续文档元素的过程将和 script.js 的加载并行进行（异步），但是 script.js 的执行要在所有元素解析完成之后，[DOMContentLoaded](当纯HTML被完全加载以及解析时，**`DOMContentLoaded`** 事件会被触发，而不必等待样式表，图片或者子框架完成加载。) 事件触发之前完成。

![1443517782-57c6928b20b56_articlex](C:\Users\张二木\Desktop\前端小知识\1443517782-57c6928b20b56_articlex.jpg)

蓝色线代表网络读取，红色线代表执行时间，这俩都是针对脚本的；绿色线代表 HTML 解析。

​		defer 和 async 在网络读取（下载）这块儿是一样的，都是异步的（相较于 HTML 解析）
它俩的差别在于脚本下载完之后何时执行，显然 defer 是最接近我们对于应用脚本加载和执行的要求的
​		关于 defer，此图未尽之处在于它是按照加载顺序执行脚本的，这一点要善加利用
​		async 则是一个乱序执行的主，反正对它来说脚本的加载和执行是紧紧挨着的，所以不管你声明的顺序如何，只要它加载完了就会立刻执行



自我理解：

​		普通script标签会立即加载并且中断html解析随后执行该脚本 

​		带有defer和async的script会异步加载脚本，但是async会在标签内容加载完后立即执行并且会中断html解析，defer会在所有元素解析完成之后，[DOMContentLoaded](当纯HTML被完全加载以及解析时，**`DOMContentLoaded`** 事件会被触发，而不必等待样式表，图片或者子框架完成加载。) 事件触发之前完成。



## 第三章

### 1、数据类型

基本数据类型：Undefined、Null、Boolean、Number、String
复杂数据类型：Object：Object、Array、Function

### 2、typeof 操作符

作用：检测给定变量的数据类型

返回值															数据类型/变量
"undefined"													未定义

"boolean"														true/false

"string"															字符串

"number"														数值

"object"															复杂类型/null

"function"														函数

注：typeof null ="object"	因为特殊值null被认为是一个空的对象引用



### 3、基本数据类型

1)、Undefined	变量已经声明，

