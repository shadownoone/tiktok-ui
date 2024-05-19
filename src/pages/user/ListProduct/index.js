import { React, useEffect, useState } from 'react';
import styles from './ListProduct.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons';

import ProductList from './ProductList';
import SimpleBar from './SimpleBar';

const cx = classNames.bind(styles);
function ListProduct() {
    return (
        <div className={cx('wall', 'css-1s0cf0f')}>
            <div className={cx('results', 'css-1qezlf9')}>
                <div className={cx('wall-header-offset')}></div>
                <div className={cx('css-iqr4dm')}>
                    <header className={cx('wall-header')}>
                        <div className={cx('wall-header__content')}>
                            <h1 className={cx('wall-header__title', 'css-r2u0ax')}>List Product</h1>
                            <nav className={cx('wall-header__nav')}>
                                <Button className={cx('css-1oqgtvq')}>
                                    <span className={cx('filters-btn__filter_text')}>Hide Filters</span>
                                    <FontAwesomeIcon style={{ color: '#111' }} icon={faSliders} />
                                </Button>
                                <div className={cx('css-lrxey8')}>
                                    <select>
                                        <option>Featured</option>
                                        <option>Newest</option>
                                        <option>Price: High-Low</option>
                                        <option>Price: Low-High</option>
                                    </select>
                                </div>
                            </nav>
                        </div>
                    </header>
                </div>
                <div className={cx('wall-header-offset')}></div>

                {/* Results */}
                <div className={cx('results__body')}>
                    {/* SimpleBar */}
                    <SimpleBar />

                    {/* List Product */}
                    <ProductList />
                </div>
            </div>
        </div>
    );
}

export default ListProduct;
