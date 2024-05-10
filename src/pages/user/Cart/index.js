import React from 'react';

import styles from './Cart.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { faHeart, faTrashCan } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function Cart() {
    return (
        <div className={cx('container')}>
            <main className={cx('css-1mogwid')}>
                <div className={cx('css-1efyhwg')}>
                    <div className={cx('css-1k22aut')}>
                        <div className={cx('css-8j20tp')}>
                            <h1>Bag</h1>
                            <div className={cx('css-1xvlvuc')}>
                                <div className={cx('cart-item', 'css-48ks35')}>
                                    <div className={cx('css-k008qs')}>
                                        <figure className={cx('css-wu61ed')}>
                                            <a href="/">
                                                <img
                                                    src="https://secure-images.nike.com/is/image/DotCom/CW2288_111?align=0,1&cropN=0,0,0,0&resMode=sharp&bgc=f5f5f5&fmt=jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </figure>
                                        <div className={cx('css-1muntc4')}>
                                            <div className={cx('css-18o14p5')}>
                                                <div className={cx('css-1u52liu')}>
                                                    <a href="/">
                                                        <h2>Nike Air Force 1 '07</h2>
                                                    </a>
                                                    <div className={cx('css-1f31asj')}>Men's Shoes</div>
                                                    <div className={cx('css-1sk38s6')}>White/White</div>
                                                    <div className={cx('css-3x77rp')}>
                                                        <div className={cx('css-1grl6ds')}>
                                                            <label>Size</label>
                                                            <div className={cx('css-123i213')}>
                                                                <div className={cx('css-1ilkyak')}></div>
                                                                <select className={cx('css-46rwad')}>
                                                                    <option>40</option>
                                                                    <option>41</option>
                                                                    <option>42</option>
                                                                    <option>43</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className={cx('css-1grl6ds')}>
                                                            <label>Quantity</label>
                                                            <div className={cx('css-123i213')}>
                                                                <div className={cx('css-1ilkyak')}></div>
                                                                <select className={cx('css-46rwad')}>
                                                                    <option>1</option>
                                                                    <option>2</option>
                                                                    <option>3</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={cx('css-q2xuk9')}>
                                                    <p>
                                                        <span className={cx('css-1892kza')}>
                                                            <span className={cx('price')}>
                                                                <span className={cx('css-144dtt')}>
                                                                    <span>2,929,000₫</span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className={cx('css-97bjgu')}>
                                                <ul>
                                                    <li className={cx('css-1fqekfo')}>
                                                        <Button className={cx('move_favourite')}>
                                                            <FontAwesomeIcon icon={faHeart} />
                                                        </Button>
                                                    </li>
                                                    <li className={cx('css-1fqekfo')}>
                                                        <Button className={cx('move_favourite')}>
                                                            <FontAwesomeIcon icon={faTrashCan} />
                                                        </Button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('css-xvg8qz')}></div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('css-fmwpya')}>
                            <aside className={cx('css-1gkmirf')}>
                                <h2 className={cx('css-22zdcr')}>Summary</h2>
                                <div className={cx('css-1uo8q9v')}>
                                    Subtotal
                                    <div className={cx('css-1wwm6t9')}>
                                        <div className={cx('css-bvtceq')}>
                                            <Button className={cx('css-dw6iwb')}></Button>
                                            <div className={cx('css-16m8u5c')}>
                                                The subtotal reflects the total price of your order, including taxes,
                                                before any applicable discounts. It does not include delivery costs and
                                                international transaction fees.
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('css-1rvmomr')}>
                                        <span>
                                            <span>2,929,000₫</span>
                                        </span>
                                    </div>
                                </div>
                                <div className={cx('css-1uo8q9v')}>
                                    Estimated Delivery & Handling
                                    <div className={cx('css-1rvmomr')}>
                                        <span>
                                            <span>250,000₫</span>
                                        </span>
                                    </div>
                                </div>
                                <div className={cx('css-1tsu91r')}>
                                    <p>Total</p>
                                    <span>
                                        <span>
                                            <span>3,179,000₫</span>
                                        </span>
                                    </span>
                                </div>
                                <div className={cx('css-1e78l50')}>
                                    <Button add_to_bag className={cx('btn-add-to-bag')}>
                                        Guest Checkout
                                    </Button>
                                    <Button add_to_bag className={cx('btn-add-to-bag')}>
                                        Member Checkout
                                    </Button>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Cart;
