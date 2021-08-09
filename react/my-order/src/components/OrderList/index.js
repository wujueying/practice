import React, { Component } from 'react'
import OrderItem from '../OrderItem'





export default class OrderList extends Component {
   
    constructor(props){
        super(props);
        this.state = {data: []}
    }
    // 在组件渲染完毕后触发
    componentDidMount() {
        // 对mock进行数据的请求，拿到json里面的data数据
        fetch('/mock/orders.json').then(res => {
            // 用.then()方法判断res就是result是否请求成功
            if(res.ok){
                res.json().then(data => {
                    this.setState({
                        data
                    })
                })
            }
        })
    }
   
    render() {
        return (
            <div>
                {
                    this.state.data.map(item => {
                      return <OrderItem key={item.id} data={item}/>
                    })
                }
                
            </div>
        )
    }
}
