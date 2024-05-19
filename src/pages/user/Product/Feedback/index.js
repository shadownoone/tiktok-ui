import React from 'react';

import styles from './Feedback.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Feedback() {
    return (
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
                                <li className={cx('ncss-li')}>Standard delivered 4-5 Business Days</li>
                            </ul>
                            <br />
                            <p>Orders are processed and delivered Monday-Friday (excluding public holidays)</p>
                            <br />
                            <p style={{ marginBottom: '40px' }}>
                                Nike Members enjoy{' '}
                                <u>
                                    <a href="https://www.nike.com/vn/help/a/returns-policy-gs">free returns</a>
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
                                            <p>Awesome colour way, decent comfort, lots of lacing options</p>
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
    );
}

export default Feedback;
