## flex布局
  操作方便，布局极为简单，移动端应用很广泛

- 如果是PC端页面布局，还是传统布局

## 布局原理
  任何一个容器都可以制定为flex布局
  - 当父盒子设为flex布局后，子元素的float、clear和vertical-align属性将失效
  - 采用flex布局的元素，称为flex容器，简称容器，它的所有子元素自动成为容器成员，称为flex项目
  - 子容器可以横向排列也可以纵向排列

  总结：就是通过给父盒子添加flex属性，来控制子盒子的位置和排列方式

## 常见父项属性
以下由6个属性是对父元素设置的
  flex-direction: 设置主轴的方向
  justify-content: 设置主轴上的子元素排列方式
  flex-wrap: 设置子元素是否换行
  align-content: 设置侧轴上的子元素排列方式（多行）
  align-items: 设置侧轴上的子元素排列方式（单行）
  flex-flow: 复合属性，相当于同时设置了 flex-direction 和 flex-wrap
  
## flex-direction 设置主轴的方向
1. 主轴与侧轴
  在flex布局中，是分为主轴和侧轴两个方向，同样的叫法有：行和列，x轴和y轴
  - 默认主轴方向就是x方向，水平向右
  - 默认侧轴方向就是y方向，水平向下

2. 属性值
  flex-direction属性决定主轴的方向（即项目的排列方向）
  注意：主轴和侧轴是会变化的，就看flex-direction设置谁为主轴，剩下的就是侧轴，而我们的子元素是跟着主轴来排列的

## justify-content 设置主轴上的子元素排列方式
  flex-start: 默认值从头部开始，如果主轴是x轴，则从左到右
  flex-end: 从尾部开始排列
  center: 在主轴居中对齐（如果主轴是x轴则水平居中）
  space-around: 平分剩余空间
  space-between: 先两边贴边再平分剩余空间（重要）

## flex-wrap 设置子元素是否换行
  flex布局中，默认的子元素是不换行的，如果装不下，会缩小子元素的宽度，放在父元素中
  flex-wrap: nowrap 不换行
  flex-wrap: wrap 换行

## align-items 设置侧轴上的子元素排列方式（单行）
  该属性是控制子项在侧轴（默认是y轴）上的排列方式 在子项是单项的时候使用
  flex-start: 从上到下
  flex-end: 从下到上
  center: 挤在一起居中（垂直居中）
  stretch: 拉伸（默认值） 子盒子不需要给高度

## align-content  设置侧轴上的子元素的排列方式（多行）
  设置子项在侧轴上的排列方式并且只能用于子项出现换行的情况（多行），在单行下是没有效果的。
  
  flex-start: 默认值在侧轴的头部开始排列
  flex-end: 在侧轴的尾部开始排列
  center: 在侧轴中间显示
  space-around: 子项在侧轴平分剩余空间
  space-between: 子项在侧轴先分布在两头，再平分剩余空间
  stretch：设置子项元素高度平分父元素高度

### align-content 和 align-items 区别
  - align-items 适用于单行情况下，只有上对齐、下对齐、居中和拉伸
  - align-content 适用于换行（多行）的情况下（单行情况下无效），可以设置上对齐、下对齐、居中、拉伸以及平均分配剩余空间等属性值
  - 总结就是单行找align-items 多行找align-content

## flex-flow 
  flex-flow属性是flex-direction和flex-wrap属性的复合属性 
  相当于同时设置了flex-direction 和 flex-wrap
  把设置主轴方向和是否换行 （换列）简写
  flex-flow: column wrap; --->  flex-direction: column; flex-wrap: wrap;