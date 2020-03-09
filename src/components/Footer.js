import React from 'react';

const Footer = () => (
  <footer className={'col footer vertical-lt'}>
    <div className={'fz18 cfff'}>首页</div>
    <div className={'fz12 c999 row-l w100 padding'}>
      <div className={'margin-right'}>平台管理</div>
      <div className={'margin-right'}>平台科技</div>
      <div className={'margin-right'}>平台门店</div>
      <div className={'margin-right'}>平台咨询</div>
    </div>
    <div className={'fz18 cfff'}>友情链接</div>
    <div className={'fz12 c999 row-l w100 padding'}>
      <div className={'margin-right'}>加盟平台</div>
      <div className={'margin-right'}>APP软件</div>
      <div className={'margin-right'}>公众号</div>
    </div>
    <div className={'fz18 cfff'}>联系我们</div>
    <div className={'fz12 c999 row-l w100 padding'}>
      <div className={'margin-right'}>咨询电话：0575-85103188</div>
      <div className={'margin-right'}>联系微信：dtqiucai</div>
    </div>
    <style jsx>{`
    .footer{
      padding:40px;
      background-color: #000;
    }

    .margin-right{
      margin-right:20px;
    }

    .padding{
      padding:10px 0 20px 0;
    }

    `}
    </style>
  </footer>
);

export default Footer;