import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { incrementQuantity, decrementQuantity, removeItem, updateSize } from '~/redux/cartSlice';
import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './CartItem.module.scss';
import { useDispatch } from 'react-redux';

const cx = classNames.bind(styles);

function CartItem({ data }) {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(data.quantity);
    const formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN').format(price) + 'đ';
    };

    const totalPrice = data.price * data.quantity;

    const handleIncrement = () => {
        if (quantity < data.stock_quantity) {
            setQuantity(quantity + 1);
            dispatch(incrementQuantity(data.id));
        } else {
            // Hiển thị thông báo hoặc thực hiện hành động tương ứng khi số lượng vượt quá kho
            alert('Sản phẩm đã hết hàng');
        }
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            dispatch(decrementQuantity(data.id));
        }
    };
    const handleSizeChange = (event) => {
        const newSize = event.target.value;
        dispatch(updateSize({ id: data.id, size: newSize }));
    };

    return (
        <div className={cx('cart-item', 'css-48ks35')}>
            <div className={cx('css-k008qs')}>
                <figure className={cx('css-wu61ed')}>
                    <a href="/">
                        <img src={data.ShoeImages[0].image_url} alt={data.product_name} />
                    </a>
                </figure>
                <div className={cx('css-1muntc4')}>
                    <div className={cx('css-18o14p5')}>
                        <div className={cx('css-1u52liu')}>
                            <a href="/">
                                <h2>{data.product_name}</h2>
                            </a>
                            <div className={cx('css-1f31asj')}></div>
                            <div className={cx('css-3x77rp')}>
                                <div className={cx('css-1grl6ds')}>
                                    <label>Size</label>
                                    <div className={cx('css-123i213')}>
                                        <div className={cx('css-1ilkyak')}></div>
                                        <select
                                            className={cx('css-46rwad')}
                                            value={data.selectedSize}
                                            onChange={handleSizeChange}
                                        >
                                            {data.Sizes.map((item) => (
                                                <option key={item.id}>{item.size}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className={cx('cartItem__incrDec')}>
                                        <button onClick={handleDecrement}>-</button>
                                        <p>{data.quantity}</p>
                                        <button onClick={handleIncrement}>+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('css-q2xuk9')}>
                            <p>
                                <span className={cx('css-1892kza')}>
                                    <span className={cx('price')}>
                                        <span className={cx('css-144dtt')}>
                                            <span>{formatPrice(totalPrice)}</span>
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
                                <Button
                                    className={cx('move_favourite')}
                                    onClick={() => dispatch(removeItem({ id: data.id, size: data.selectedSize }))}
                                >
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
