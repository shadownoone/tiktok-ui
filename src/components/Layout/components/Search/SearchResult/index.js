// SearchResult.js

import React from 'react';
import classNames from 'classnames/bind';
import styles from './SearchResult.module.scss';

const cx = classNames.bind(styles);

function SearchResult({ isTyping }) {
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
                            <li>
                                <a href="/">
                                    <span> air force 1</span>
                                </a>
                            </li>
                            <li>
                                <span>
                                    {' '}
                                    <a href="/">air force 1</a>
                                </span>
                            </li>
                            <li>
                                <span>
                                    {' '}
                                    <a href="/">air force 1</a>
                                </span>
                            </li>
                            <li>
                                <span>
                                    {' '}
                                    <a href="/">air force 1</a>
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('search-spinner')}></div>
                    <ul className={cx('search-results')}>
                        {Array.from({ length: 5 }, (_, index) => (
                            <li key={index}>
                                <a href="/">
                                    <figure className={cx('product-card')}>
                                        <div className={cx('card-placeholder')}>
                                            <img
                                                src={`https://static.nike.com/a/images/t_default/aa5bdbd3-09b6-4701-a6f2-5fc0c5d06a96/air-force-1-07-lv8-shoes-Smph4G.png`}
                                                alt=""
                                            />
                                        </div>
                                    </figure>
                                    <figcaption className={cx('product-info')}>
                                        <h4>Nike Air Force 1 '07 LV8</h4>
                                        <p>Men's Shoes</p>
                                        <div className={cx('product-price')}>
                                            <p>₫3,519,000</p>
                                        </div>
                                    </figcaption>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default SearchResult;