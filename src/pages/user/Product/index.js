import React, { useState, useRef, useEffect } from 'react';

import styles from './Product.module.scss';

import Slider from 'react-slick';

import SliderItem from '~/components/SliderItem';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { faAngleLeft, faAngleRight, faStar } from '@fortawesome/free-solid-svg-icons';
import ProductImage from './ProductImage';

const cx = classNames.bind(styles);

function Product() {
    // Khởi tạo một mảng items để truyền cho SliderItem
    const [items, setItems] = useState([
        {
            title: 'Product 1',
            imageUrl:
                'https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/86087b33-bcf3-44c7-ad14-7f6d42aff283/fff-2024-25-match-home-dri-fit-adv-football-authentic-shirt-JZCzQH.png',
            url: 'https://example.com/product1',
            subtitle: 'Description 1',
            price: '$100',
        },
        {
            title: 'Product 2',
            imageUrl:
                'https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/86087b33-bcf3-44c7-ad14-7f6d42aff283/fff-2024-25-match-home-dri-fit-adv-football-authentic-shirt-JZCzQH.png',
            url: 'https://example.com/product2',
            subtitle: 'Description 2',
            price: '$150',
        },
        {
            title: 'Product 3',
            imageUrl:
                'https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/86087b33-bcf3-44c7-ad14-7f6d42aff283/fff-2024-25-match-home-dri-fit-adv-football-authentic-shirt-JZCzQH.png',
            url: 'https://example.com/product2',
            subtitle: 'Description 2',
            price: '$150',
        },
        // Thêm các mục khác nếu cần
    ]);

    const [selectedSize, setSelectedSize] = useState(null);

    const handleSizeSelection = (size) => {
        setSelectedSize(size);
    };
    const handleAddToBag = () => {
        if (!selectedSize) {
            alert('Please select a size before adding to bag.');
            return;
        }
        // Xử lý logic khi người dùng nhấn vào nút "Add to Bag"
    };

    const handleFavourite = () => {
        if (!selectedSize) {
            alert('Please select a size before adding to favourites.');
            return;
        }
        // Xử lý logic khi người dùng nhấn vào nút "Favourite"
    };
    return (
        <div>
            <div className={cx('product')}>
                <ProductImage />
                <div className={cx('product-info')}>
                    <div className={cx('info-layout')}>
                        <div>
                            <div className={cx('product-main')}>
                                <div className={cx('main-info')}>
                                    <h1 className={cx('info-title')}>Nike</h1>
                                    <h2 className={cx('info-sub-title')}>Men's Shoes</h2>
                                    <div className={cx('info-price')}>
                                        <div className={'product-price'}>
                                            <span>3,239,000₫</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('product-sub')}>
                                <form id="buyTools">
                                    <div>
                                        <fieldset className={cx('mt5-sm')}>
                                            <legend className={cx('css-ybrhvy')}>
                                                <div className={cx('css-uf1ume')}>
                                                    <h3>Select Size</h3>
                                                    <a href="/">Sizes Guild</a>
                                                </div>
                                            </legend>
                                            <div className={cx('sizes-guild')}>
                                                <div
                                                    className={cx('sizes-item', { selected: selectedSize === 'EU 40' })}
                                                    onClick={() => handleSizeSelection('EU 40')}
                                                >
                                                    <input className={cx('visually-hidden')} type="radio" />
                                                    <label className={cx('css-xf3ahq')}>EU 40</label>
                                                </div>
                                                <div
                                                    className={cx('sizes-item', { selected: selectedSize === 'EU 41' })}
                                                    onClick={() => handleSizeSelection('EU 41')}
                                                >
                                                    <input className={cx('visually-hidden')} type="radio" />
                                                    <label className={cx('css-xf3ahq')}>EU 41</label>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>
                                    <div>
                                        <div>
                                            <div className={cx('css-18lb4yz')}>
                                                <Button
                                                    add_to_bag
                                                    to=""
                                                    className={cx('btn-add-to-bag')}
                                                    onClick={handleAddToBag}
                                                >
                                                    Add to Bag
                                                </Button>
                                                <Button
                                                    favourite
                                                    className={cx('btn-favourite')}
                                                    onClick={handleFavourite}
                                                >
                                                    Favourite
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                    <section className={cx('promo')}>
                                        <span>This product is excluded from site promotions and discounts.</span>
                                    </section>
                                </form>
                            </div>
                            <span className={cx('product-description')}>
                                <div className={cx('product-note')}>
                                    <div className={cx('description-preview')}>
                                        <p>
                                            This '80s basketball icon returns with classic details and throwback hoops
                                            flair. Channelling vintage style, its padded, low-cut collar lets you take
                                            your game anywhere—in comfort.
                                        </p>
                                        <ul className={cx('description-preview__features')}>
                                            <li className={cx('description-preview__color-description', 'ncss-li')}>
                                                Colour Shown: Sail/Cream II/Limestone/Pacific Moss
                                            </li>
                                            <li className={cx('description-preview__style-color', 'ncss-li')}>
                                                Style: HF4262-133
                                            </li>
                                        </ul>
                                    </div>
                                    <Button featured to="/">
                                        <span>View Product Details</span>
                                    </Button>
                                </div>
                            </span>
                            <div className={cx('product-feedback')}>
                                <div className={cx('css-w11ebw')}>
                                    <details className={cx('css-1hbr3d8')}>
                                        <summary>
                                            <h3>Free Delivery and Returns</h3>
                                        </summary>
                                        <div>
                                            <div className={cx('prl1-sm')}>
                                                <p>Your order of 5.000.000₫ or more gets free standard delivery.</p>
                                                <br />
                                                <ul className={cx('ncss-list-ul', 'mt4-sm', 'mb4-sm')}>
                                                    <li className={cx('ncss-li')}>
                                                        Standard delivered 4-5 Business Days
                                                    </li>
                                                </ul>
                                                <br />
                                                <p>
                                                    Orders are processed and delivered Monday-Friday (excluding public
                                                    holidays)
                                                </p>
                                                <br />
                                                <p style={{ marginBottom: '40px' }}>
                                                    Nike Members enjoy{' '}
                                                    <u>
                                                        <a href="https://www.nike.com/vn/help/a/returns-policy-gs">
                                                            free returns
                                                        </a>
                                                    </u>
                                                </p>
                                            </div>
                                        </div>
                                    </details>
                                    <details className={cx('css-1hbr3d8')}>
                                        <summary className={cx('css-rptnlm')}>
                                            <h3>Reviews (1)</h3>
                                            <div className={cx('css-n209rx')}>
                                                <span>
                                                    <span className={cx('mr1-sm', 'd-sm-ib')}>
                                                        <FontAwesomeIcon icon={faStar} />
                                                    </span>{' '}
                                                    <span className={cx('mr1-sm', 'd-sm-ib')}>
                                                        <FontAwesomeIcon icon={faStar} />
                                                    </span>{' '}
                                                    <span className={cx('mr1-sm', 'd-sm-ib')}>
                                                        <FontAwesomeIcon icon={faStar} />
                                                    </span>{' '}
                                                    <span className={cx('mr1-sm', 'd-sm-ib')}>
                                                        <FontAwesomeIcon icon={faStar} />
                                                    </span>
                                                </span>
                                            </div>
                                        </summary>
                                        <div>
                                            <div className={cx('css-1e0k2gt')}>
                                                <div className={cx('reviews-component', 'mb5-sm')}>
                                                    <div className={cx('product-review', 'mb10-sm')}>
                                                        <div className={cx('star-rating', 'stars', 'd-sm-ib')}>
                                                            <span>
                                                                <span className={cx('mr1-sm', 'd-sm-ib')}>
                                                                    <FontAwesomeIcon icon={faStar} />
                                                                </span>
                                                                <span className={cx('mr1-sm', 'd-sm-ib')}>
                                                                    <FontAwesomeIcon icon={faStar} />
                                                                </span>
                                                                <span className={cx('mr1-sm', 'd-sm-ib')}>
                                                                    <FontAwesomeIcon icon={faStar} />
                                                                </span>
                                                                <span className={cx('mr1-sm', 'd-sm-ib')}>
                                                                    <FontAwesomeIcon icon={faStar} />
                                                                </span>
                                                            </span>
                                                        </div>
                                                        <p className={cx('d-sm-ib', 'pl4-sm')}>4 Starts</p>
                                                        <p className={cx('pt2-sm', 'd-lg-b')}>
                                                            <Button featured to="/">
                                                                Write a Review
                                                            </Button>
                                                        </p>
                                                    </div>
                                                    <ul>
                                                        <li className={cx('review', 'mb10-sm')}>
                                                            <h4>Nike dunk lows</h4>
                                                            <div className={cx('star-rating', 'stars', 'd-sm-ib')}>
                                                                <span>
                                                                    <span className={cx('mr1-sm', 'd-sm-ib')}>
                                                                        <FontAwesomeIcon icon={faStar} />
                                                                    </span>
                                                                    <span className={cx('mr1-sm', 'd-sm-ib')}>
                                                                        <FontAwesomeIcon icon={faStar} />
                                                                    </span>
                                                                    <span className={cx('mr1-sm', 'd-sm-ib')}>
                                                                        <FontAwesomeIcon icon={faStar} />
                                                                    </span>
                                                                    <span className={cx('mr1-sm', 'd-sm-ib')}>
                                                                        <FontAwesomeIcon icon={faStar} />
                                                                    </span>
                                                                </span>
                                                            </div>
                                                            <p
                                                                className={cx(
                                                                    'pl4-sm',
                                                                    'd-sm-ib',
                                                                    'text-color-secondary',
                                                                    'responsive-body-3-2',
                                                                )}
                                                            >
                                                                GiftA855881275 - 13 Apr 2024
                                                            </p>
                                                            <p
                                                                className={cx(
                                                                    'text-color-secondary',
                                                                    'responsive-body-3-2',
                                                                    'pb2-sm',
                                                                    'u-align-left',
                                                                )}
                                                            ></p>
                                                            <div>
                                                                <p>
                                                                    Awesome colour way, decent comfort, lots of lacing
                                                                    options
                                                                </p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <p className={cx('mt10-sm', 'mb10-sm')}>
                                                        <Button featured to="/">
                                                            <label className={cx('css-15juft3')}>More Reviews</label>
                                                        </Button>
                                                    </p>
                                                </div>
                                                <br />
                                            </div>
                                        </div>
                                    </details>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SliderItem items={items} />
        </div>
    );
}

export default Product;
