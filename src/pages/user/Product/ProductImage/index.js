// Trong file ProductImage.js
import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ProductImage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function ProductImage() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [mainImage, setMainImage] = useState(
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c960a73e-8565-4cc6-9329-d2449c1944df/dunk-low-shoes-kKHp1z.png',
    );

    const imageUrls = [
        'https://static.nike.com/a/images/t_default/1419ed34-7762-420a-9f2a-2e2a65d5aba9/dunk-low-shoes-kKHp1z.png',
        'https://static.nike.com/a/images/t_default/4a476c7c-2928-478e-b4c5-3455a2bc84ac/dunk-low-shoes-kKHp1z.png',
        'https://static.nike.com/a/images/t_default/891ced2d-ace8-4e80-95d6-628e5a0c7de6/dunk-low-shoes-kKHp1z.png',
        'https://static.nike.com/a/images/t_default/b4d66184-8a02-485d-8c86-16216fdeec9e/dunk-low-shoes-kKHp1z.png',
        'https://static.nike.com/a/images/t_default/2fad4dd9-0379-4e79-8915-9f2d24b01d81/dunk-low-shoes-kKHp1z.png',
    ];

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1));
        setMainImage(imageUrls[currentImageIndex === imageUrls.length - 1 ? 0 : currentImageIndex + 1]);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1));
        setMainImage(imageUrls[currentImageIndex === 0 ? imageUrls.length - 1 : currentImageIndex - 1]);
    };

    const handleMouseEnter = (index) => {
        setCurrentImageIndex(index);
        setMainImage(imageUrls[index]);
    };

    return (
        <div className={cx('product-img')}>
            <div className={cx('product-img-show')}>
                <div className={cx('product-list-img')}>
                    {imageUrls.map((imageUrl, index) => (
                        <div key={index} className={cx('img-item')}>
                            <input type="radio" className={cx('input-img')} />
                            <label
                                role="button"
                                className={cx('label-img')}
                                onMouseEnter={() => handleMouseEnter(index)}
                            >
                                <img src={imageUrl} alt="" />
                            </label>
                        </div>
                    ))}
                </div>
                <div className={cx('product-main-img')}>
                    <img src={mainImage} alt="Nike Dunk Low Men" />
                    <div className={cx('css-19ih7ns')}>
                        <Button className={cx('trannin')} onClick={prevImage}>
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </Button>
                        <Button className={cx('trannin')} onClick={nextImage}>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductImage;
