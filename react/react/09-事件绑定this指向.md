# 事件绑定this指向
1. 箭头函数
2. Function.prototype.bind()
3. class的实例方法

1. 箭头函数
  - 利用箭头函数自身不绑定this的特点
  - render()方法中的this为组件实例，可以获取到setState()
```
class Hello extends React.Component{
    onIncrement(){
        this.setState({
            ...
        })
    }
    render(){
        <!-- 箭头函数中的this指向外部环境，此处为：render方法 -->
        return(
            <button onClick={() => this.onIncrement}></button>
        )
    }
}
```

2. Function.prototype.bind()
- 利用ES5中的bind方法，将事件处理程序中的this与组件实例绑定到一起
```
class Hello extends React.Component {
    constructor(){
        super()
        this.onIncrement = this.onIncrement.bind(this)
    }
    onIncrement = () => {
        this.setState({...})
    }
    render(){
        return (
            <button onClick={this.onIncrement}></button>
        )
    }
}
```

3. class的实例方法
- 利用箭头函数形式的class实例方法
```
class Hello extends React.Component {
    onIncrement = () => {
        this.setState({...})
    }
    render(){
        return (
            <button onClick={this.onIncrement}></button>
        )
    }
}
```
   