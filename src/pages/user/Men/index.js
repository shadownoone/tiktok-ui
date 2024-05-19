import React from 'react';

import styles from './Men.module.scss';
import classNames from 'classnames/bind';
import CourseItem from '../../../components/CourseItem';
import ImageCaption from '../../../components/ImageCaption';

const cx = classNames.bind(styles);

function Men() {
    return (
        <div className={cx('pad-50')}>
            <div className={cx('sub-title')}>
                <div>
                    <nav className={cx('nav-sub')}>
                        <h1>Men</h1>
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
                desc="Step into the unreal world of Erling Haaland."
                imageSrc="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_844,c_limit/89f9398a-fe81-4fdb-b2fd-d343691f5da9/men-s-shoes-clothing-accessories.jpg"
                buttonLink="/"
                buttonText="Shop Now"
            />
            <ImageCaption
                mainTitle="Featured"
                subTitle="Nike Football"
                title="2024 NATIONAL TEAM KITS"
                desc="Featuring Dri-FIT ADV, built for the moments that matter most."
                imageSrc="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_1019,c_limit/c6a7d92a-360c-4d59-80a8-e91701525330/men-s-shoes-clothing-accessories.jpg"
                buttonLink="/"
                buttonText="Shop"
            />

            <div>
                <h2 className={cx('mg-bt-24')}>Don't Miss</h2>
                <div className={cx('course-list')}>
                    <CourseItem
                        imageSrc="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_862,c_limit/cd1988e8-80a4-4594-8927-137480669b19/men-s-shoes-clothing-accessories.png"
                        title="Nike Air Max Dn Coming Soon"
                        buttonLink="/"
                        buttonText="Shop"
                    />
                    <CourseItem
                        imageSrc="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_862,c_limit/4bed3b09-0f34-4fda-9720-29906576f3b4/men-s-shoes-clothing-accessories.png"
                        title="Retro Running Shoes"
                        buttonLink="/"
                        buttonText="Shop"
                    />
                    <CourseItem
                        imageSrc="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_862,c_limit/faa661bc-d745-4f3c-8f5b-958fdbe2af86/men-s-shoes-clothing-accessories.png"
                        title="From the J's Up"
                        buttonLink="/"
                        buttonText="Shop"
                    />
                </div>
            </div>
        </div>
    );
}

export default Men;
