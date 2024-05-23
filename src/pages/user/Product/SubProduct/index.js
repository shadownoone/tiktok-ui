import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './SubProduct.module.scss';
import Button from '~/components/Button';
import { useDispatch } from 'react-redux';
import { addToCart } from '~/redux/cartSlice';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const cx = classNames.bind(styles);

function SubProduct() {
    const navigate = useNavigate();
    const [selectedSize, setSelectedSize] = useState(null);
    const [listOfPosts, setListOfPosts] = useState([]);
    const [listImg, setListImg] = useState([]);
    const [listSize, setListSize] = useState([]);
    const dispatch = useDispatch();
    const { id } = useParams();

    const handleSizeSelection = (size) => {
        setSelectedSize(size);
    };

    const handleAddToBag = () => {
        if (!selectedSize) {
            alert('Please select a size before adding to bag.');
            return;
        }
        const productToAdd = {
            ...listOfPosts,
            selectedSize: selectedSize,
        };

        if (window.confirm('Product added to cart. Do you want to go to the cart?')) {
            dispatch(addToCart(productToAdd));
            navigate('/cart');
        } else {
            dispatch(addToCart(productToAdd)); // Add to cart without navigation
        }
    };

    const handleFavourite = () => {
        if (!selectedSize) {
            alert('Please select a size before adding to favourites.');
            return;
        }
        // Handle logic for adding to favourites
    };

    useEffect(() => {
        axios.get(`http://localhost:5000/shoes/${id}`).then((response) => {
            setListOfPosts(response.data.data);
            setListImg(response.data.data.ShoeImages);
            setListSize(response.data.data.Sizes);
        });
    }, [id]);

    return (
        <div className={cx('product-sub')}>
            <div id="buyTools">
                <div>
                    <fieldset className={cx('mt5-sm')}>
                        <legend className={cx('css-ybrhvy')}>
                            <div className={cx('css-uf1ume')}>
                                <h3>Select Size</h3>
                                <a href="/">Sizes Guild</a>
                            </div>
                        </legend>
                        <div className={cx('sizes-guild')}>
                            {listSize.map((size, index) => (
                                <div
                                    key={index}
                                    className={cx('sizes-item', { selected: selectedSize === size.size })}
                                    onClick={() => handleSizeSelection(size.size)}
                                >
                                    <input className={cx('visually-hidden')} type="radio" />
                                    <label className={cx('css-xf3ahq')}>{size.size}</label>
                                </div>
                            ))}
                        </div>
                    </fieldset>
                </div>
                <div>
                    <div className={cx('css-18lb4yz')}>
                        <Button add_to_bag className={cx('btn-add-to-bag')} onClick={handleAddToBag}>
                            Add to Bag
                        </Button>
                        <Button favourite className={cx('btn-favourite')} onClick={handleFavourite}>
                            Favourite
                        </Button>
                    </div>
                </div>
                <section className={cx('promo')}>
                    <span>This product is excluded from site promotions and discounts.</span>
                </section>
            </div>
        </div>
    );
}

export default SubProduct;
