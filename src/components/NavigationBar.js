import React from 'react';

export default function NavigationBar() {
  return (
    <div className={'row bar'}>
      <nav className={'row-sa nav'}>
        <img alt={'logo'} src="https://ljkj-web.oss-cn-hangzhou.aliyuncs.com/heartisanMobile/logo.png" />
        <img alt={'menu'} src="https://ljkj-web.oss-cn-hangzhou.aliyuncs.com/heartisanMobile/menu.png" />
      </nav>
      <style jsx>{`
      .bar{
        position:fixed;
        z-index:100;
        left:0;
        top:0;
        border:#fff;
        background: #000;
        margin:0;
      }

      .nav {
        justify-content: space-between;
        width:100vw;
        padding:10px 16px;
        margin:0
      }   
      
      .w100vw{
        width:100vw;
      }
      `}</style>
    </div>
  )
}

