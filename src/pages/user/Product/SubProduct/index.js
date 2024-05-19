import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './SubProduct.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function SubProduct({ listSize = [] }) {
    const [selectedSize, setSelectedSize] = useState(null);

    const handleSizeSelection = (size) => {
        setSelectedSize(size);
    };

    const handleAddToBag = () => {
        if (!selectedSize) {
            alert('Please select a size before adding to bag.');
            return;
        }
        // Handle logic for adding to bag
    };

    const handleFavourite = () => {
        if (!selectedSize) {
            alert('Please select a size before adding to favourites.');
            return;
        }
        // Handle logic for adding to favourites
    };

    return (
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
                    <div>
                        <div className={cx('css-18lb4yz')}>
                            <Button add_to_bag to="" className={cx('btn-add-to-bag')} onClick={handleAddToBag}>
                                Add to Bag
                            </Button>
                            <Button favourite className={cx('btn-favourite')} onClick={handleFavourite}>
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
    );
}

export default SubProduct;
