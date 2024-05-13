import React from 'react';

import styles from './CartItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { faHeart, faTrashCan } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function CartItem() {
    return (
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
    );
}

export default CartItem;
