import React, { useState, useEffect } from 'react';
import * as shoeService from '~/services/shoeService';
import styles from './Description.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

function Description() {
    const [product, setProduct] = useState();
    const { id } = useParams();

    useEffect(() => {
        shoeService.getProductBySlug(id).then((res) => {
            setProduct(res);
        });
    });
    return (
        <span className={cx('product-description')}>
            <div className={cx('product-note')}>
                <div className={cx('description-preview')}>
                    <p>{product?.description}</p>
                    <ul className={cx('description-preview__features')}>
                        <li className={cx('description-preview__color-description', 'ncss-li')}>
                            Colour Shown: Sail/Cream II/Limestone/Pacific Moss
                        </li>
                        <li className={cx('description-preview__style-color', 'ncss-li')}>Style: {product?.sku}</li>
                    </ul>
                </div>
                <Button featured to="/">
                    <span>View Product Details</span>
                </Button>
            </div>
        </span>
    );
}

export default Description;
