import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router,Route,Link,Routes} from 'react-router-dom';
/**
 * useEffect
 * - useEffect相当于react生命周期里面的componentDidMount和
 * componentWillUnmount，挂载后和组件卸载前
*/
function Index(){
    useEffect(() => {
         console.log('**Index**')
         return ()=>{
             console.log('Index解绑---');
         }
    },[])
    return <h2>Wujueying.com</h2>
}

function List(){
    useEffect(() => {
        console.log('**List**')
   })
    return <h2>List Page</h2>
}

function Example(){
    const [count, setCount] = useState(0);  // 数组解构
    
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>Click me</button>

            <Router>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/list/">列表</Link></li>
                </ul>
                <Routes>
                <Route path="/"  element={<Index />}></Route>
                <Route path="/list"  element={<List />}></Route>
                </Routes>
                
            </Router>

        </div>
    )
}
export default Example;