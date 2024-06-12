// SearchResult.js

import React from 'react';
import classNames from 'classnames/bind';
import styles from './SearchResult.module.scss';

const cx = classNames.bind(styles);

function SearchResult({ isTyping, filteredItems }) {
    const formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN').format(price) + 'đ';
    };
    return (
        <div className={cx('search-result')}>
            {!isTyping && (
                <div className={cx('search-popular')}>
                    <p className={cx('popular-header')}>
                        <span>Popular Search Terms</span>
                    </p>
                    <ul>
                        <li>
                            <a href="/">Air Force 1</a>
                        </li>
                        <li>
                            <a href="/">Jordan</a>
                        </li>
                        <li>
                            <a href="/">Air Max</a>
                        </li>
                        <li>
                            <a href="/">Blazer</a>
                        </li>
                    </ul>
                </div>
            )}
            {isTyping && (
                <div className={cx('search-overlay')}>
                    <div className={cx('search-suggestions')}>
                        <p className={cx('suggestions-header')}>
                            <span>Top Suggestions</span>
                        </p>
                        <ul>
                            {filteredItems.slice(0, 5).map((item, index) => (
                                <li key={index}>
                                    <a href={'/product/' + item.id}>
                                        <span>{item.product_name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {filteredItems.length > 0 ? (
                        <ul className={cx('search-results')}>
                            {filteredItems.slice(0, 5).map((item, index) => (
                                <li key={index}>
                                    <a href={'/product/' + item.id}>
                                        <figure className={cx('product-card')}>
                                            <div className={cx('card-placeholder')}>
                                                <img src={item.ShoeImages[0]?.image_url} alt={item.product_name} />
                                            </div>
                                        </figure>
                                        <figcaption className={cx('product-info')}>
                                            <h4>{item.product_name}</h4>

                                            <div className={cx('product-price')}>
                                                <p>{formatPrice(item.price)}</p>
                                            </div>
                                        </figcaption>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className={cx('no-results')}>
                            <p>No results found.</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default SearchResult;
