import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

const Home = () => {

  function gotoA(){
    Router.push('/jspangA')
  }

  return (
    <>
    <div>我是首页</div>
    <div><Link href="/jspangA"><a>去A页面</a></Link></div>
    <div><Link href="/jspangB"><a>去B页面</a></Link></div>
   {/* 以下是编程函数跳转 */}
    <div>
      <button onClick={gotoA}>JSPangA</button>
    </div>
  </>
  )
}

export default Home; 