// Trong file ProductImage.js
import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ProductImage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function ProductImage({ listImg = [] }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [mainImage, setMainImage] = useState(listImg[0]?.image_url);
    useEffect(() => {
        setMainImage(listImg[0]?.image_url);
    }, [listImg]);

    const imageUrls = listImg.map((img) => img.image_url);

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
                    {listImg &&
                        listImg.map((imageUrl, index) => {
                            return (
                                <div key={index} className={cx('img-item')}>
                                    <input type="radio" className={cx('input-img')} />
                                    <label
                                        role="button"
                                        className={cx('label-img')}
                                        onMouseEnter={() => handleMouseEnter(index)}
                                    >
                                        <img src={imageUrl.image_url} alt="" />
                                    </label>
                                </div>
                            );
                        })}
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
