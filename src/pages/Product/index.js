import React from 'react';

import styles from './Product.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { faAngleLeft, faAngleRight, faStar } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Product() {
    return (
        <div>
            <div className={cx('product')}>
                <div className={cx('product-img')}>
                    <div className={cx('product-img-show')}>
                        <div className={cx('product-list-img')}>
                            <div className={cx('img-item')}>
                                <input type="radio" className={cx('input-img')} />
                                <label role="button" className={cx('label-img')}>
                                    <img
                                        src="https://static.nike.com/a/images/t_default/1419ed34-7762-420a-9f2a-2e2a65d5aba9/dunk-low-shoes-kKHp1z.png"
                                        alt=""
                                    />
                                </label>
                            </div>
                            <div className={cx('img-item')}>
                                <input type="radio" className={cx('input-img')} />
                                <label role="button" className={cx('label-img')}>
                                    <img
                                        src="https://static.nike.com/a/images/t_default/1419ed34-7762-420a-9f2a-2e2a65d5aba9/dunk-low-shoes-kKHp1z.png"
                                        alt=""
                                    />
                                </label>
                            </div>
                        </div>
                        <div className={cx('product-main-img')}>
                            <img
                                src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c960a73e-8565-4cc6-9329-d2449c1944df/dunk-low-shoes-kKHp1z.png"
                                alt="Nike Dunk Low Men"
                            />
                            <div className={cx('css-19ih7ns')}>
                                <Button className={cx('trannin')}>
                                    <FontAwesomeIcon icon={faAngleLeft} />
                                </Button>
                                <Button className={cx('trannin')}>
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('product-info')}>
                    <div className={cx('info-layout')}>
                        <div>
                            <div className={cx('product-main')}>
                                <div className={cx('main-info')}>
                                    <h1 className={cx('info-title')}>Nike Dunk Low</h1>
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
                                                <div className={cx('sizes-item')}>
                                                    <input className={cx('visually-hidden')} />
                                                    <label className={cx('css-xf3ahq')}>EU 40</label>
                                                </div>
                                                <div className={cx('sizes-item')}>
                                                    <input className={cx('visually-hidden')} />
                                                    <label className={cx('css-xf3ahq')}>EU 40</label>
                                                </div>
                                                <div className={cx('sizes-item')}>
                                                    <input className={cx('visually-hidden')} />
                                                    <label className={cx('css-xf3ahq')}>EU 40</label>
                                                </div>
                                                <div className={cx('sizes-item')}>
                                                    <input className={cx('visually-hidden')} />
                                                    <label className={cx('css-xf3ahq')}>EU 40</label>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>
                                    <div>
                                        <div>
                                            <div className={cx('css-18lb4yz')}>
                                                <Button add_to_bag>Add to Bag</Button>
                                                <Button favourite>Favourite</Button>
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
                                        <div></div>
                                    </details>
                                    <details className={cx('css-1hbr3d8')}>
                                        <summary className={cx('css-rptnlm')}>
                                            <h3>Reviews (1)</h3>
                                            <div className={cx('css-n209rx')}>
                                                <span className={cx('css-end85d')}>
                                                    <span className={cx('mr1-sm')}>
                                                        <span>
                                                            <FontAwesomeIcon icon={faStar} />
                                                        </span>
                                                    </span>
                                                    <span className={cx('mr1-sm')}>
                                                        <span>
                                                            <FontAwesomeIcon icon={faStar} />
                                                        </span>
                                                    </span>
                                                    <span className={cx('mr1-sm')}>
                                                        <span>
                                                            <FontAwesomeIcon icon={faStar} />
                                                        </span>
                                                    </span>
                                                    <span className={cx('mr1-sm')}>
                                                        <span>
                                                            <FontAwesomeIcon icon={faStar} />
                                                        </span>
                                                    </span>
                                                    <span className={cx('mr1-sm')}>
                                                        <span>
                                                            <FontAwesomeIcon icon={faStar} />
                                                        </span>
                                                    </span>
                                                </span>
                                            </div>
                                        </summary>
                                        <div></div>
                                    </details>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
