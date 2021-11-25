import React, {useState, useMemo} from 'react';

function Example7(){
    const [xiaohong, setXiaohong] = useState('小红在代课')
    const [zhiling, setZhiling] = useState('志玲在代课')
    return (
        <>
            <button onClick={()=>{setXiaohong(new Date().getTime())}}>小红</button>
            <button onClick={()=>{setZhiling(new Date().getTime()+'志玲向我们走来')}}>志玲</button>
            <ChildComponent name={xiaohong}>{zhiling}</ChildComponent>
        </>
    )
}
// 父组件里的状态发生改变，子组件就会一起进行更新，这是一个性能问题
// useMemo是同步的，useEffect是异步的
function ChildComponent({name, children}){

    function changeXiao(){
        console.log('*******');
        return name+'小红走过来'
    }

    const actionXiao = useMemo(()=>changeXiao(name),[name])  

    return (
        <>
            <div>{actionXiao}</div>
            <div>{children}</div>
        </>
    )
}

export default Example7;