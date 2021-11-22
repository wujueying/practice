import React, { Component } from 'react';
/**
 * useEffect
 * - 用来解决react hooks没有生命周期函数的问题
*/
class Example extends Component {
    constructor(props) {
        super(props);
        this.state = { count:0 }
    }
    componentDidMount(){
        console.log(`componentDidMount=> You clicked ${this.state.count} times`)
    }
    componentDidUpdate(){
        console.log(`componentDidUpdate=>You clicked ${this.state.count} times`)
    }
    render() { 
        return ( 
            <div>
                <p>You clicked {this.state.count} times</p>
                <button>{this.addCount.bind()}</button>
            </div>
        );
    }
}
 
export default Example;