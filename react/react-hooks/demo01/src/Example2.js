import React, { useState } from 'react';

function Example2(){
    // useState不能存在条件语句中...
    const [age, setAge] = useState(18);  // 数组解构
    
    const [sex, setSex] = useState('女');  // 数组解构
    const [work, setWork] = useState('前端程序员');  // 数组解构
    
    return (
        <div>
            <p>吴珏莹今年：{age}岁</p>
            <p>性别：{sex}</p>
            <p>工作:{work}</p>
        </div>
    )
}
export default Example2;

// useEffect() 副作用  