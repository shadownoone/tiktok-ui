import React, { useState, useRef, useEffect } from 'react';

import styles from './MainProduct.module.scss';
import * as shoeService from '~/services/shoeService';
import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

function MainProduct() {
    const [product, setProduct] = useState();
    const { id } = useParams();

    useEffect(() => {
        shoeService.getProductBySlug(id).then((res) => {
            setProduct(res);

            // console.log(res);
        });
    });

    const formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN').format(price) + 'đ';
    };
    return (
        <div className={cx('product-main')}>
            <div className={cx('main-info')}>
                <h1 className={cx('info-title')}>{product?.product_name}</h1>
                <h2 className={cx('info-sub-title')}>{product?.gender} Shoes</h2>
                <div className={cx('info-price')}>
                    <div className={'product-price'}>
                        <span>{formatPrice(product?.price)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainProduct;
