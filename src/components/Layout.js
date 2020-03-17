import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React, { Fragment } from 'react';
import Head from 'next/head'
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import { Icon } from 'antd';
import 'swiper/css/swiper.min.css';

const copyright = (
  <a className="cursor-pointer cfff fz14" href="http://www.beian.miit.gov.cn">
    网站备案：浙ICP备17044703号-6
  </a>
);

const Layout = props => (
  <Fragment>
    <Head>
      <title>芯云软装</title>
      <meta http-equiv="Content-Type" content="text/html;charset=utf-8"></meta>
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
      <link rel="shortcut icon" href="./static/logo1.ico" />
      <meta name="author" content="绍兴力聚科技信息有限公司"></meta>
      <meta name="keywords" content="芯云,芯云软装,Heartisan,heartisan,软装云平台,设计师共享服务网络,海量软装供应链入驻平台。" />
      <meta name="description" content="提供窗帘墙布背景,挂画,地毯,家纺,床上用品,小布艺,沙发垫,桌布,餐垫家居饰品,花瓶,干花,花艺,家具等优质供应链。同时,软装设计师创业者共享本地服务体验中心,配套上门设计服务,享有厂家与商家双重保障。"></meta>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="https://unpkg.com/swiper/css/swiper.min.css" />
    </Head>
    <NavigationBar />
    <div className="layout-container no-select">
      {props.children}
    </div>
    <Footer />
    <div className={'row bg-c000 content-padding'}>
      {copyright}
    </div>
    <style global jsx>{`
      body {
        margin: 0px;
      }

      // @media screen and (min-width:768px){
      //   .layout-container{
      //     min-width:1200px;
      //     margin:0 auto;
      //   }
      // }

      // @media screen and (max-width: 767px) {
      //   .layout-container{
      //     width:100%;
      //   }
      // }

      .row {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }
      
      .row-l {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
      }
      
      .row-r {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
      }
      
      .row-sb {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }

      .row-sa {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
      }
      
      .col {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      
      .col-t {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
      }
      
      .col-b {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
      }

      .col-sa {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
      }
      
      .vertical-lt {
        align-items: flex-start;
      }
      
      .vertical-rb {
        align-items: flex-end;
      }
      
      .hidden {
        display: none;
      }
      
      .tc {
        text-align: center;
      }
      
      .tl {
        text-align: left;
      }
      
      .tr {
        text-align: right;
      }
      
      .w100 {
        width: 100%;
      }
      
      .h100 {
        height: 100%;
      }
      
      .bg-c000 {
        background-color: #000;
      }
      
      .bg-cfff {
        background-color: #fff;
      }
      
      .c000 {
        color: #000;
      }
      
      .c333 {
        color: #333;
      }
      
      .c666 {
        color: #666;
      }
      
      .c999 {
        color: #999;
      }
      
      .cccc {
        color: #cccc;
      }
      
      .cfff {
        color: #fff;
      }
      
      .fz10 {
        font-size: 10px;
      }
      
      .fz11 {
        font-size: 11px;
      }
      
      .fz12 {
        font-size: 12px;
      }
      
      .fz13 {
        font-size: 13px;
      }
      
      .fz14 {
        font-size: 14px;
      }
      
      .fz15 {
        font-size: 15px;
      }
      
      .fz16 {
        font-size: 16px;
      }
      
      .fz17 {
        font-size: 17px;
      }
      
      .fz18 {
        font-size: 18px;
      }
      
      .fz20 {
        font-size: 20px;
      }
      
      .fz22 {
        font-size: 22px;
      }
      
      .fz24 {
        font-size: 24px;
      }
      
      .fz26 {
        font-size: 26px;
      }
      
      .fz28 {
        font-size: 28px;
      }

      .fz30 {
        font-size: 30px;
      }

      .fz32 {
        font-size: 32px;
      }

      .fz36 {
        font-size: 36px;
      }

      .fz40 {
        font-size: 40px;
      }

      .fz48 {
        font-size: 48px;
      }
      
      .content-padding {
        padding: 10px;
      }
      
      .ellipsis {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap
      }
      
      .ellipsis-line {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      
      .ellipsis-text {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap
      }
      
      .cursor-default {
        cursor: default;
      }
      
      .cursor-pointer {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: pointer
      }
      
      .font-underline {
        text-decoration: underline
      }

      .no-select {
        -moz-user-select: none;
        -webkit-user-select: none;
        user-select: none;
      }
    `}</style>
  </Fragment>
);

export default Layout;