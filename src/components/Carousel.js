import React, { Component } from 'react';
import Swiper from 'swiper/js/swiper.js';
import 'swiper/css/swiper.min.css';
class Carousel extends Component {
    // componentDidMount() {
    //     //可以加上你需要的条件等，然后生成Swiper对象，
    //     //一定要检查是不是每次都生成了Swiper对象，否则可能出现不滑动的情况和别的情况等
    //     new Swiper('.swiper-container', {
    //         loop: true, // 循环模式选项
    //         slidesPerView: 'auto',
    //         // slidesPerView:3,
    //         loopedSlides: 3,
    //         spaceBetween: 20,
    //         centeredSlides: true,
    //         centeredSlidesBounds: true,
    //         watchActiveIndex: true,
    //         pagination: {
    //             el: '.swiper-pagination',
    //         }
    //         // observer: true,//修改swiper自己或子元素时，自动初始化swiper
    //         // observeParents: true,//修改swiper的父元素时，自动初始化swiper
    //     })
    // }

    render() {
        return (
            <div className="swiper-container swiper-container-horizontal" id="swiper-container">
                <div className="swiper-wrapper row-l">
                    <div className="swiper-slide col fz14 c666">
                        <img
                            className="border-radius"
                            src="https://ljkj-web.oss-cn-hangzhou.aliyuncs.com/heartisanMobile/carousel/carousel1.jpg"
                            alt="First slide"
                        />
                        <div className={'margin-top10'}>百叶产品</div>
                    </div>
                    <div className="swiper-slide col fz14 c666">
                        <img
                            className="border-radius"
                            src="https://ljkj-web.oss-cn-hangzhou.aliyuncs.com/heartisanMobile/carousel/carousel2.jpg"
                            alt="First slide"
                        />
                        <div className={'margin-top10'}>被服产品</div>
                    </div>
                    <div className="swiper-slide col fz14 c666">
                        <img
                            className="border-radius"
                            src="https://ljkj-web.oss-cn-hangzhou.aliyuncs.com/heartisanMobile/carousel/carousel3.jpg"
                            alt="First slide"
                        />
                        <div className={'margin-top10'}>窗帘产品</div>
                    </div>
                    <div className="swiper-slide col fz14 c666">
                        <img
                            className="border-radius"
                            src="https://ljkj-web.oss-cn-hangzhou.aliyuncs.com/heartisanMobile/carousel/carousel4.jpg"
                            alt="First slide"
                        />
                        <div className={'margin-top10'}>椅子产品</div>
                    </div>
                </div>
                <div className="swiper-pagination"></div>
                <style jsx>{`
                .margin-top10{
                    margin-top:10px;
                }
                .border-radius{
                    border-radius:4px;
                }
            .swiper-container {
                width: 100vw;
                height: 450px;
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
            .swiper-slide-duplicate-next,.swiper-slide-next{
                left:-50px;
                z-index:-1;
            }
            .swiper-slide-duplicate-prev,.swiper-slide-prev{
                right:-50px;
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
            height: 15px;
            }
            .swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet {
            margin: 0 4px;
            }
            .swiper-pagination-bullet-active {
            opacity: 1;
            background: var(--swiper-pagination-color,var(--swiper-theme-color));
            }
            .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
            display: inline-block;
            border-radius: 100%;
            }
          `}</style>
            </div>
        )
    }
}


export default Carousel;

