import { React, useEffect, useState } from 'react';
import styles from './ProductList.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function ProductList() {
    return (
        <div className={cx('product-grid', 'css-1hl0l1w')}>
            <main>
                <section>
                    <div className={cx('product-grid__items', 'css-hvew4t')}>
                        {/* {listOfPosts.map((product, index) => ( */}
                        <div
                            // key={product.id}
                            className={cx('product-card', 'product-grid__card', 'css-1t0asop')}
                        >
                            <div className={cx('product-card__body')}>
                                <figure>
                                    <a
                                        href="https://www.nike.com/vn/t/air-force-1-07-lv8-shoes-2gP9Bc/FN8349-100"
                                        className={cx('product-card__link-overlay')}
                                    >
                                        Nike Air Force 1 '07 LV8
                                    </a>
                                    <a href="/" className={cx('product-card__img-link-overlay')}>
                                        <img
                                            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a6432319-892e-4dac-a3fd-de0a1609220d/air-force-1-07-lv8-shoes-2gP9Bc.png"
                                            alt=""
                                            className={cx('product-card__hero-image', 'css-1fxh5tw')}
                                        />
                                    </a>
                                    <div className={cx('product-card__info', 'disable-animations', 'for--product')}>
                                        <div className={cx('product_msg_info')}>
                                            <div className={cx('product-card__messaging')}>Promo Exclusion</div>
                                            <div className={cx('product-card__titles')}>
                                                <div className={cx('product-card__title')}>Nike Air Force 1 '07</div>
                                                <div className={cx('product-card__subtitle')}>Men's Shoes</div>
                                            </div>
                                        </div>
                                        <div className={cx('product-card__count-wrapper')}></div>
                                        <div className={cx('product-card__animation_wrapper')}>
                                            <div className={cx('product-card__price-wrapper')}>
                                                <div className={cx('product-card__price')}>
                                                    <div className={cx('product-price__wrapper', 'css-9xqpgk')}>
                                                        <div
                                                            className={cx(
                                                                'product-price vn__styling',
                                                                'is--current-price',
                                                                'css-11s12ax',
                                                            )}
                                                        >
                                                            2,929,000₫
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </figure>
                            </div>
                        </div>
                        {/* ))} */}
                    </div>
                </section>
            </main>
        </div>
    );
}

export default ProductList;
