# 百度一面
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
  当两个值都是对象时，==比较的是两个引用值在内存中是否是同一个地址，很显然，都不是

- 盒模型
  有两种盒模型
  box-sizing：content-box //W3C盒模型（标准盒模型） （content）+padding+border+margin
  box-sizing：border-box // IE盒模型（怪异盒模型）  （content+padding+border）+margin
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

- null、undefined、object
  undefined：未定义的值，希望表示一个变量最原始的状态，不是人为操作的结果，如
  - 声明一个变量，但是没有赋值
  - 访问对象上不存在的属性
  - 定义了形参，但是没有传递实参
  - 使用void对表达式求值

  null：空值，语义是希望表示一个对象被人为的重置为空对象，而非
  
