import React from 'react';
import Link from 'next/link';
import Router from 'next/router';



const Home = () => {

  // routeChangeStart
  // routerChangeComplete
  // beforeHistoryChange
  // routerChangeError
  // hashChangeStart
  // hashChangeComplete

  Router.events.on('routeChangeStart',(...args)=>{
    console.log('1. routeChangeStart-->路由开始变化，参数为：',...args)
  });

  Router.events.on('routeChangeComplete',(...args)=>{
    console.log('2. routeChangeComplete-->路由变化结束，参数为：',...args)
  });

  Router.events.on('beforeHistoryChange',(...args)=>{
    console.log('3. beforeHistoryChange-->路由变化结束，参数为：',...args)
  });

  Router.events.on('routeChangeError',(...args)=>{
    console.log('4. routeChangeError-->路由发生错误，参数为：',...args)
  });

  Router.events.on('hashChangeStart',(...args)=>{
    console.log('5. hashChangeStart-->哈希开始前，参数为：',...args)
  });

  Router.events.on('hashChangeComplete',(...args)=>{
    console.log('6. hashChangeComplete-->哈希完成后，参数为：',...args)
  });
  // function gotoA(){
  //   Router.push('/jspangA')
  // }

  // Lazy Loading  模块moment    组件

  function gotoXiaogege(){
    Router.push({
      pathname:'/xiaogege',
      query:{name:'易烊千玺'}
    });
  }

  return (
    <>
    <div>我是首页</div>
    <div>
      {/* 传递一个对象 */}
      <Link href={{pathname:'/xiaogege',query:{name:'易烊千玺'}}}><a>选择易烊千玺</a></Link>
      <br/>
      {/* 传递字符串 */}
      <Link href="/xiaogege?name=刘昊然"><a>选择刘昊然</a></Link>
    
    </div>
    <div>
      <button onClick={gotoXiaogege}>选易烊千玺</button>
    </div>
    <div>
      <Link href="#jspang"><a>选技术胖</a></Link>
    </div>
    {/* 以下是Link跳转 */}
    {/* <div><Link href="/jspangA"><a>去A页面</a></Link></div>
    <div><Link href="/jspangB"><a>去B页面</a></Link></div> */}
   {/* 以下是编程函数跳转 */}
    {/* <div>
      <button onClick={gotoA}>JSPangA</button>
    </div> */}
  </>
  )
}

export default Home; 