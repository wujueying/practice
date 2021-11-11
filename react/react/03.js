import React from 'react';
import { ReactDOM } from 'react';

/**
 * 函数组件
*/
function Hello (){
    return(
        <div>这是我的第一个函数组件</div>
    )
}

ReactDOM.render(
    <Hello/>,
    document.getElementById('root')
)