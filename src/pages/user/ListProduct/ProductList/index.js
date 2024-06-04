import { React, useEffect, useState } from 'react';
import styles from './ProductList.module.scss';
import classNames from 'classnames/bind';

import axios from 'axios';

const cx = classNames.bind(styles);
function ProductList() {
    const [listOfPosts, setListOfPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/shoes').then((response) => {
            setListOfPosts(response.data.data);
        });
    }, []);
    const formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN').format(price) + 'đ';
    };
    return (
        <div className={cx('product-grid', 'css-1hl0l1w')}>
            <main>
                <section>
                    <div className={cx('product-grid__items', 'css-hvew4t')}>
                        {listOfPosts.map((product, index) => (
                            <div key={product.id} className={cx('product-card', 'product-grid__card', 'css-1t0asop')}>
                                <div className={cx('product-card__body')}>
                                    <figure>
                                        <a href={'/product/' + product.id} className={cx('product-card__link-overlay')}>
                                            Nike Air Force 1 '07 LV8
                                        </a>
                                        <a
                                            href={'/product/' + product.id}
                                            className={cx('product-card__img-link-overlay')}
                                        >
                                            <img
                                                src={product?.ShoeImages[0]?.image_url}
                                                alt=""
                                                className={cx('product-card__hero-image', 'css-1fxh5tw')}
                                            />
                                        </a>
                                        <div className={cx('product-card__info', 'disable-animations', 'for--product')}>
                                            <div className={cx('product_msg_info')}>
                                                <div className={cx('product-card__messaging')}>Promo Exclusion</div>
                                                <div className={cx('product-card__titles')}>
                                                    <div className={cx('product-card__title')}>
                                                        {product.product_name}
                                                    </div>
                                                    <div className={cx('product-card__subtitle')}>
                                                        {product.gender} Shoes
                                                    </div>
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
                                                                {formatPrice(product?.price)}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </figure>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}

export default ProductList;
