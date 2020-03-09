import React, { Component } from 'react';
import Layout from '../components/Layout';
import Carousel from '../components/Carousel';
import Swiper from 'swiper/js/swiper.js';
import 'swiper/css/swiper.min.css';

class Home extends Component {

  componentDidMount() {
    new Swiper('.swiper-container', {
      loop: true, // 循环模式选项
      slidesPerView: 'auto',
      // slidesPerView:3,
      loopedSlides: 3,
      // spaceBetween: 20,
      centeredSlides: true,
      centeredSlidesBounds: true,
      watchActiveIndex: true,
      pagination: {
        el: '.swiper-pagination',
      }
    })
  }

  render() {
    return (
      <Layout>
        <img alt={'banner'} src="https://ljkj-web.oss-cn-hangzhou.aliyuncs.com/heartisanMobile/banner.png" className={'w100vw margin-bottom20'} />

        <div className={'col product margin-bottom20 bg-color padding15'}>
          <div className={'fz24 c333'}>平台产品</div>
          <div className={'fz16 c666 margin-bottom22'}>platform product</div>
          <Carousel />
        </div>

        <div className={'col margin-bottom20 bg-color padding15'}>
          <div className={'fz24 c333'}>平台科技</div>
          <div className={'fz16 c666 margin-bottom22'}>platform of science and technology</div>
          <img alt={'technology1 padding15'} src="https://ljkj-web.oss-cn-hangzhou.aliyuncs.com/heartisanMobile/technology/technology1.png" />
          <img alt={'technology2 padding15'} src="https://ljkj-web.oss-cn-hangzhou.aliyuncs.com/heartisanMobile/technology/technology3.png" />
          <img alt={'technology3 padding15'} src="https://ljkj-web.oss-cn-hangzhou.aliyuncs.com/heartisanMobile/technology/technology2.png" />
        </div>

        <div className={'col margin-bottom20 bg-color padding15'}>
          <div className={'fz24 c333'}>品牌线下门店</div>
          <div className={'fz16 c666 margin-bottom22'}>offline store</div>
          <div style={{ width: 283 }} className={'fz12 c999 row margin-bottom20'}>
            <div>我们拥有自己的线下门店，提供产品，服务，技术为一体的场景化解决方案。让客户通过线上微商城了解产品，到线下展厅现场体验，线上线下相互融合，实</div>
            <div>现了效率和体验的共同提高</div>
          </div>
          <img alt={'technology1'} src="https://ljkj-web.oss-cn-hangzhou.aliyuncs.com/heartisanMobile/offline/offline1.png" className={'margin-top20'} />
          <div className={'fz12 c666 margin-top10'}>杭州线下门店</div>
          <img alt={'technology2'} src="https://ljkj-web.oss-cn-hangzhou.aliyuncs.com/heartisanMobile/offline/offline2.png" className={'margin-top20'} />
          <div className={'fz12 c666 margin-top10'}>绍兴线下门店</div>
        </div>

        <div className={'col margin-bottom20 bg-color padding15'}>
          <div className={'fz24 c333'}>平台咨询</div>
          <div className={'fz16 c666 margin-bottom22'}>offline store</div>
          <div className="swiper-container swiper-container-horizontal" id="swiper-container">
            <div className="swiper-wrapper row-l">
              <div className="swiper-slide row fz18 cfff">
                <img
                  className=""
                  src="https://ljkj-web.oss-cn-hangzhou.aliyuncs.com/heartisanMobile/advisory/advisory1.png"
                  alt="First slide"
                />
                <div className={'advisory-title'}>
                  芯云软装杭州发布会进行中
                </div>
              </div>
              <div className="swiper-slide row">
                <img
                  className=""
                  src="https://ljkj-web.oss-cn-hangzhou.aliyuncs.com/heartisanMobile/advisory/advisory2.jpg"
                  alt="First slide"
                /></div>
              <div className="swiper-slide row">
                <img
                  className=""
                  src="https://ljkj-web.oss-cn-hangzhou.aliyuncs.com/heartisanMobile/advisory/advisory3.jpg"
                  alt="First slide"
                /></div>
              <div className="swiper-slide row">
                <img
                  className=""
                  src="https://ljkj-web.oss-cn-hangzhou.aliyuncs.com/heartisanMobile/advisory/advisory4.jpg"
                  alt="First slide"
                /></div>
              <div className="swiper-slide row">
                <img
                  className=""
                  src="https://ljkj-web.oss-cn-hangzhou.aliyuncs.com/heartisanMobile/advisory/advisory5.jpg"
                  alt="First slide"
                /></div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
          <div className={'row-sa codes'}>
            <div className={'col code'}>
              <img alt="vx" src="https://ljkj-web.oss-cn-hangzhou.aliyuncs.com/heartisanMobile/advisory/vx.jpg" className={'img'} />
              <div className={'fz14 c666 reamke'}>客服微信</div>
            </div>
            <div className={'col code'}>
              <img alt="公众号" src="https://ljkj-web.oss-cn-hangzhou.aliyuncs.com/heartisanMobile/advisory/public.jpg" className={'img'} />
              <div className={'fz14 c666 reamke'}>平台公众号</div>
            </div>
            <div className={'col code'}>
              <img alt="App" src="https://ljkj-web.oss-cn-hangzhou.aliyuncs.com/heartisanMobile/advisory/app.jpg" className={'img'} />
              <div className={'fz14 c666 reamke'}>平台软件</div>
            </div>
          </div>
        </div>

        <style jsx>{`
        .w100vw{
          width:100vw;
        }
        
        .margin-bottom20{
          margin-bottom:20px;
        }

        .margin-bottom22{
          margin-bottom:22px;
        }

        .margin-top10{
          margin-top:10px;
        }

        .margin-top20{
          margin-top:20px;
        }

        .bg-color{
          background: #F8F8F8;
        }

        .padding15{
          padding:15px 0;
        }

        .advisory-title{
          position: absolute;
        }

        .swiper-container {
          width: 100vw;
          height: 220px;
          overflow: hidden;
        }
        #swiper-container {
          --swiper-pagination-color: #9F9D9D;
      } 
        .swiper-slide {
          text-align: center;
          font-size: 18px;
          background: #f8f8f8;
          display: flex;
          -webkit-box-align: center;
          -webkit-align-items: center;
          align-items: center;
          transition: 300ms;
          transform: scale(0.8);
          margin:0;
        }
      .swiper-slide-active,.swiper-slide-duplicate-active{
          transform: scale(1);
      }
      .swiper-pagination {
        position: absolute;
        text-align: center;
        transition: .3s opacity;
        transform: translate3d(0,0,0);
        z-index: 10;
      }
      .swiper-container-horizontal>.swiper-pagination-bullets{
        width: 100%;
        height: 12px;
      }
      .swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet {
        margin: 0 4px;
      }
      .swiper-pagination-bullet-active {
        opacity: 1;
        background: var(--swiper-pagination-color,var(--swiper-theme-color));
      }
      .swiper-pagination-bullet {
        width: 12px;
        height: 12px;
        display: inline-block;
        border-radius: 100%;
      }

      .img{
        width: 104px;
        height: 104px;
      }

      .codes{
        width: 343px;
        margin-top:40px;
      }

      .code{
        padding:0; 
      }

      .reamke{
        padding:5px 0;

      }
      `}</style>
      </Layout >
    )
  }
}


export default Home;