import React, { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import Button from '../Button'; // Thay đổi đường dẫn tùy theo cấu trúc thư mục của bạn
import classNames from 'classnames/bind';
import styles from './SliderItem.module.scss'; // Thay đổi đường dẫn tùy theo cấu trúc thư mục của bạn

const cx = classNames.bind(styles);

function SliderItem({ items }) {
    const sliderRef = useRef(null);

    const previous = () => {
        sliderRef.current.slickPrev();
    };

    const next = () => {
        sliderRef.current.slickNext();
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    const formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN').format(price) + 'đ';
    };

    return (
        <aside aria-label="You may also like product carousel" className={cx('css-16dt2qi')}>
            <div className={cx('nds-stack', 'css-z31e8r', 'ej3jrvm0', 'gap-xs-m')}>
                <div className={cx('')}>
                    <section
                        className={cx(
                            'nds-carousel',
                            'navigation-mode-buttonAbove',
                            'grid-aligned',
                            'css-1xkyzis',
                            'e1qnw47h0',
                        )}
                    >
                        <h3 className={cx('carousel-header')}>
                            <span>You Might Also Like</span>
                            <div className={cx('nav-btn-wrapper')}>
                                <Button className={cx('carousel-btn', 'prev-btn')} onClick={previous}>
                                    <div className={cx('icon')}>
                                        <FontAwesomeIcon icon={faAngleLeft} />
                                    </div>
                                </Button>
                                <Button className={cx('carousel-btn', 'next-btn')} onClick={next}>
                                    <div className={cx('icon')}>
                                        <FontAwesomeIcon icon={faAngleRight} />
                                    </div>
                                </Button>
                            </div>
                        </h3>
                        <Slider ref={sliderRef} className={cx('slider')} {...settings}>
                            {items.map((item, index) => (
                                <li className={cx('slide')} key={index}>
                                    <a href={item.url}>
                                        <figure className={cx('css-6df7i4')}>
                                            <a href={'/product/' + item.id}>
                                                <div className={cx('image-wrapper')}>
                                                    <div className={cx('nds-image-wrapper', 'css-p63i3i', 'e1ttvrug0')}>
                                                        <div className={cx('css-w9w6jj', 'finished-loading')}>
                                                            <div className={cx('css-nr5j7g')}>
                                                                <picture>
                                                                    <img
                                                                        alt=""
                                                                        src={item.ShoeImages[0]?.image_url}
                                                                        className={cx(
                                                                            'image-img',
                                                                            'should-transition',
                                                                            'product-image',
                                                                        )}
                                                                    />
                                                                </picture>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={cx('css-tah5ss')}>
                                                    <div className={cx('details-text')}>
                                                        <h3>{item.product_name}</h3>
                                                        <h4>{item.subtitle}</h4>
                                                    </div>
                                                    <div
                                                        className={cx(
                                                            'nds-box',
                                                            'price-info',
                                                            'css-187c8kp',
                                                            'e161jrzw0',
                                                        )}
                                                    >
                                                        <div className={cx('nds-box', 'css-1ho4p3s', 'evb9czr0')}>
                                                            <h3>{formatPrice(item.price)}</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </figure>
                                    </a>
                                </li>
                            ))}
                        </Slider>
                    </section>
                </div>
            </div>
        </aside>
    );
}

export default SliderItem;
