# promise
promise是异步编程的一种解决方案，promise有三个状态，pending，fulfiled，rejected，状态一旦改变，就不会再变。创造promise实例后，会立即执行。

promise可以用来解决回调地狱的问题，回调地狱，函数里有很多的回调嵌套问题

promise可以支持多个并发的请求，获取并发请求中的数据

promise可以解决异步的问题，但不能说promise是异步的

promise是一个构造函数，自己身上有all、reject、resolve这几个眼熟的方法，原型上有then和catch方法

promise构造函数接收一个参数：函数，并且这个函数需要传入两个参数：
resolve：异步操作执行成功后的回调函数
reject：异步操作执行失败后的回调函数

then方法可以接收两个参数，第一个对应resolve的回调，第二个对应reject的回调。所以我们能够分别拿到他们传过来的数据。

catch方法用来指定reject的回调。

all方法，并行执行多个异步操作，并且在一个回调中处理所有的返回数据

race方法，哪个异步操作快，就执行哪个异步