import React from 'react';

import styles from './Women.module.scss';
import classNames from 'classnames/bind';
import CourseItem from '../../../components/CourseItem';
import ImageCaption from '../../../components/ImageCaption';

const cx = classNames.bind(styles);

function Women() {
    return (
        <div className={cx('pad-50')}>
            <div className={cx('sub-title')}>
                <div>
                    <nav className={cx('nav-sub')}>
                        <h1>Women</h1>
                        <div>
                            <ul className={cx('list-sub')}>
                                <li className={cx('sub-item')}>
                                    <a href="/">Shoes</a>
                                </li>
                                <li className={cx('sub-item')}>
                                    <a href="/">Clothing</a>
                                </li>
                                <li className={cx('sub-item')}>
                                    <a href="/">Gear</a>
                                </li>
                            </ul>
                        </div>
                        <div></div>
                    </nav>
                </div>
            </div>
            <ImageCaption
                subTitle="Just In"
                title="Nike Air Max Dn"
                desc="Step into the unreal world of Sha'Carri Richardson."
                imageSrc="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1377,c_limit/c6217bce-b1e1-44d0-860d-e1c286c19e84/women-s-shoes-clothing-accessories.jpg"
                buttonLink="/"
                buttonText="Shop"
            />
            <ImageCaption
                mainTitle="Trending"
                subTitle="Trending"
                title="Nike Dunk"
                desc="UNAPOLOGETICALLY ORIGINAL - Serve up your undeniable style in the iconic versatility of a hoops legend."
                imageSrc="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1377,c_limit/5dac0785-1c08-40f8-9d56-2d0fffaa0af5/nike-just-do-it.png"
                buttonLink="/"
                buttonText="Shop"
            />

            <div>
                <h2 className={cx('mg-bt-24')}>Trending</h2>
                <div className={cx('course-list')}>
                    <CourseItem
                        imageSrc="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_618,c_limit/f57c74cd-655d-46ab-b9e9-8a520ff9b0be/women-s-shoes-clothing-accessories.png"
                        title="Nike Air Max Dn Coming Soon"
                        buttonLink="/"
                        buttonText="ShopGet Notified"
                    />
                    <CourseItem
                        imageSrc="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_618,c_limit/eb7ba260-272d-497f-ab35-6a2a305674f8/women-s-shoes-clothing-accessories.png"
                        title="Retro Running Shoes"
                        buttonLink="/"
                        buttonText="Shop"
                    />
                    <CourseItem
                        imageSrc="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_618,c_limit/a8f49ccf-e473-413f-bea4-dcfaeb8bb34d/women-s-shoes-clothing-accessories.png"
                        title="From the J's Up"
                        buttonLink="/"
                        buttonText="Shop"
                    />
                </div>
            </div>
        </div>
    );
}

export default Women;
