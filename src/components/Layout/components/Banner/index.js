import classNames from 'classnames/bind';
import React from 'react';
import Slider from 'react-slick';

import styles from './Banner.module.scss';

const cx = classNames.bind(styles);

function Banner() {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplaySpeed: 3000,
        autoplay: true,
        cssEase: 'linear',
        centerMode: true,
        centerPadding: '60px',
    };

    return (
        <div className={cx('banner')}>
            <div className={cx('main-content')}>
                <Slider {...settings}>
                    <div className={cx('banner-item')}>
                        <div className={cx('info')}>
                            <p className={cx('title')}>Save Up to 40%</p>
                            <p className={cx('desc')}>
                                <u>Shop All Our New Markdowns</u>
                            </p>
                        </div>
                    </div>
                    <div className={cx('banner-item')}>
                        <div className={cx('info')}>
                            <p className={cx('title')}>Free Delivery</p>
                            <p className={cx('desc')}>
                                <u>Applies to orders of 5.000.000₫ or more. </u>
                            </p>
                        </div>
                    </div>
                    <div className={cx('banner-item')}>
                        <div className={cx('info')}>
                            <p className={cx('title')}>Move, Shop, Customise & Celebrate With Us.</p>
                            <p className={cx('desc')}>
                                <u>No matter what you feel like doing today, It's better as a Member.</u>
                            </p>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default Banner;
