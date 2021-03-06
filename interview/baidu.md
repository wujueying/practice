# 百度一面准备
- JS的数据类型
  JS的数据类型一共有八种，分为基础数据类型和引用数据类型
  基础数据类型：number、string、Boolean、undefined、null
  引用数据类型：object（array、data、function）
  ES6中新增了Symbol
  谷歌中出现了一种bigInt，是指安全存储，操作大整数

- NaN是什么？在什么情况下会出现NaN？
  NaN（not a number，非数），是一种数值的数据类型，表示某个值不是数字，可以使用isNaN()来判断是否是NaN值
  用于数据处理时，数据缺失或者数据不完整时设置为NaN

- [] == [] //false
  当两个值都是对象时，==比较的是两个引用值在内存中是否是同一个地址，很显然，都不是。

- 盒模型
  有两种盒模型
  box-sizing：content-box //W3C盒模型（标准盒模型） （content）+ padding + border + margin
  box-sizing：border-box // IE盒模型（怪异盒模型）  （content + padding + border）+ margin
  chrome浏览器默认为标准盒模型

- BFC是什么？如何开启BFC？
  BFC的全称是“块级格式化上下文”，BFC决定了元素如何对其内容进行定位，以及与其他元素的关系和相互作用，当涉及到可视化布局时，BFC提供了一个环境，HTML在这个环境中按照一定的规则进行布局。

  简单来说就是，BFC是一个完全独立的空间，让空间里的子元素不会影响到外面的布局

  触发BFC的属性：
  - overflow：hidden
  - display：inline-block
  - position：absolute
  - position：fixed
  - display：table-cell
  - display：flex

- null、undefined
  undefined：未定义的值，希望表示一个变量最原始的状态，不是人为操作的结果，如
  - 声明一个变量，但是没有赋值
  - 访问对象上不存在的属性
  - 定义了形参，但是没有传递实参
  - 使用void对表达式求值

  null：空值，语义是希望表示一个对象被人为的重置为空对象，而非一个变量最原始的状态。在内存里的表示就是，栈中的变量没有指向堆中的内存对象

  typeof null // 返回的类型是object

- localStorage和sessionStorage的区别
  他们均只能存储字符串类型的对象
  - 生命周期
    localStorage的生命周期是永久，这意味着除非用户清除浏览器上的localStorage信息，这些信息将永远存在。sessionStorage生命周期为当前窗口或标签页 ，一旦窗口或标签页关闭了，那么通过sessionStorage存储的数据也被清空了。
  - 作用域
    二者都遵从同源策略，但sessionStorage特别的一点在于，即使是相同域名下的两个页面，只要不在同一个浏览器中打开，那么sessionStorage的内容就无法共享。
  - 存储大小
    localStorage和sessionStorage的存储数据大小一般都是：5MB
  - 存储位置
    localStorage和sessionStorage都保存在客户端，不与服务器进行交互通信
  - 存储内容类型
    localStorage和sessionStorage只能存储字符串类型，对于复杂的对象可以使用ECMAcript提供的JSON对象的stringnify和parse来处理
  - 获取方式
    localStorage：常用于长期登录，适合长期保存在本地的数据
    sessionStorage：敏感账号一次登录

- ES6的新特性
  变量声明：由var变为let和const
  模板字符串``:在模板字符串里面支持换行，并可以在里面使用${}来包裹一个变量或表达式
  解构：数组解构和对象解构，可以快速获取数组和对象的值
  展开运算符：在ES6中用...来展开运算符，它可以将数组或者对象进行展开
  箭头函数：函数的快捷写法，不需要通过
  对象的简化赋值：对象赋值时如果属性名和变量名一致可以简写
  类的支持：ES6中添加了对类的支持，引入了class关键字

- 0.1+0.2！=0.3？ 如何使其相等
  计算机是通过二进制的方式存储数据的，所以计算机计算0.1+0.2的时候，实际上是计算两个数的二进制的和。这两个数的二进制都是无限循环的数，所以得到的结果不是整数。使用toFixed()方法可把Number四舍五入为指定小数位的数字。
- 跨域，解决跨域的方式
  跨域问题来源于JavaScript的同源策略，即只有协议+主机名+端口号相同，则允许互相访问。也就是说JavaScript只能访问和操作自己域下的资源，不能访问和操作其他域下的资源。跨域问题是针对JS和Ajax的，HTML本身没有跨域问题，比如a标签、script标签、甚至form标签等
  解决跨域的方法：
  1. 通过jsonp跨域
  2. 通过修改document.domain来跨子域
  3. 使用window.name来进行跨域
  4. 使用代理服务器
  5. 设置cors，cors全称是“跨域资源共享”
- 闭包 
  闭包显著的特征就是函数嵌套函数，它是指可以读取另一个函数作用域的变量的函数。由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，在IE中导致内存泄漏。解决方法是，退出函数之前，将不使用的局部变量全部删除。
- <!DOCTYPE>的作用
  <!DOCTYPE>叫做文件类型定义，作用是为了告诉浏览器该文件的类型。让浏览器解析器知道应该用哪个规范来解析文档。
- 实现两栏布局
- html语义化和新标签
  根据标签的语义，在合适的地方放置合适的标签，使得页面的结构清晰。
  <article>
  <aside>
  <main>
  <head>
  <footer>
- map和set
- 原型链
- CSS3新增哪些
  border-color：为边框设置多种颜色
  border-image：图片边框
  border-radius：圆角边框
  box-shadow：阴影效果
  text-shadow:文本阴影
- float和position
- this指向
  this的最终指向是调用它的对象。
  全局上下文：非严格模式和严格模式中this都是指向顶层对象（浏览器是window）
  函数上下文：
- 数组去重
  1. 遍历数组
  2. 数组下标判断法 indexOf()
- 同步任务和异步任务的区别
  1. 同步任务是那些在主线程上排队执行的任务，只有前一个任务执行完毕了，才会开始执行后面一个任务，在所有任务没有执行完之前，不能执行任务后面的代码。
  2. 异步任务是那些不进入主线程，而进入任务队列的任务。只有当引擎认为某个异步任务可以执行了，该任务才会进入主线程执行。排在异步任务后面的代码，不用等待异步任务结束才执行，而会马上执行。就是说异步任务不具有堵塞效应。
- 事件循环eventLoop
- map和forEach的区别
  forEach()方法不会返回执行结果，而是undefined。也就是说，forEach()会修改原来的数组，而map方法会得到一个新的数组并返回。
- http和https
- 说说new的过程
  1. 创建空对象
    var obj = {};
  2. 甚至新对象的constructor属性为构造函数的名称，设置新对象的proto属性指向构造函数的prototype对象；扩展了新对象的原型链
    obj.proto = ClassA.prototype;
  3. 使用新对象调用函数，函数中的this被指向新实例对象：
    ClassA.call(obj);  //{},构造函数();
  4. 返回this指针。当存在显示返回时，返回return后面的内容。新建的空对象作废。
    function test() {
    this.name = "test";
    }
    test.prototype = {
    a:{},
    b:{}
    }

    var c = new test();
- let、var、const的区别
  - let
    1. let声明的变量只在let命令所在的代码块内有效。（块级作用域）
    2. let命令不存在变量提升
    3. let的作用域只在块级作用域内有效
  - const
    1. const声明一个只读的常量，常量的值不能改变，
    2. const声明的常量也是不提升，只能在声明的位置后面使用。
  - var
    1. var命令会发生变量提升现象，即变量可以在声明之前使用，值为undefined。  
    2. var的作用域为全局作用域
- 事件触发的机制
  事件捕获阶段：window往事件触发处传播，遇到注册的捕获事件会触发（addEventListener的true）
  事件目标处理函数：传播到事件触发时触发注册的事件
  事件冒泡阶段：从事件触发往window传播，遇到注册的冒泡事件会触发（）
- 从输入URL到界面发生了什么
  输入网址，浏览器就会通过DNS（域名解析系统）解析这个域名，将URL解析为对应的IP地址，然后与这个IP地址确定的那台服务器建立起TCP连接，随后我们向服务端抛出我们的HTTP请求，服务器处理完请求后，把目标数据放在HTTP响应里返回给客户端，拿到响应数据的浏览器就可以开始走渲染的流程，渲染完毕，页面便呈现给用户。