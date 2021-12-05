import React,{useRef} from 'react';

function Example8(){
    const inputEl = useRef("**")
    const onButtonClick = ()=>{
        inputEl.current.value = "hello,tonight!"
    }

    // const [] = 

    return (
        <>
            <input ref={inputEl} type="text"/>
            <button onClick={onButtonClick}>在input上展示文字</button>
            <br/><br/>
            <input value={} />
        </>
    )
}

export default Example8