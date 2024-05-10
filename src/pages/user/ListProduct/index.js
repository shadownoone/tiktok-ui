import { React, useEffect, useState } from 'react';
import styles from './ListProduct.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons';

import axios from 'axios';

const cx = classNames.bind(styles);
function ListProduct() {
    // const [listOfPosts, setListOfPosts] = useState([]);

    // useEffect(() => {
    //     axios.get('http://localhost:5000/users').then((response) => {
    //         setListOfPosts(response.data.data);
    //     });
    // }, []);

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
                    <div className={cx('ln-scroller')}>
                        <div className={cx('simplebar-wrapper')} style={{ margin: '0px' }}>
                            <div className={cx('simplebar-mask')}>
                                <div className={cx('simplebar-offset')} style={{ right: '0px', bottom: '0px' }}>
                                    <div className={cx('simplebar-content-wrapper')} style={{ height: 'auto' }}>
                                        <div className={cx('simplebar-content')} style={{ padding: '0px' }}>
                                            <div className={cx('left-nav-wrapper', 'css-m62fj8')}>
                                                <nav className={cx('left-nav', 'categories-present', 'css-2sl1x4')}>
                                                    <div className={cx('left-nav__categories')}>
                                                        <div className={cx('categories', 'is--desktop', 'css-whzydw')}>
                                                            <div className={cx('categories__content')}>
                                                                <a
                                                                    className={cx(
                                                                        'is--link',
                                                                        'categories__item',
                                                                        'css-g9lrg8',
                                                                    )}
                                                                    href="/"
                                                                >
                                                                    Lifestyle
                                                                </a>
                                                                <a
                                                                    className={cx(
                                                                        'is--link',
                                                                        'categories__item',
                                                                        'css-g9lrg8',
                                                                    )}
                                                                    href="/"
                                                                >
                                                                    Jordan
                                                                </a>
                                                                <a
                                                                    className={cx(
                                                                        'is--link',
                                                                        'categories__item',
                                                                        'css-g9lrg8',
                                                                    )}
                                                                    href="/"
                                                                >
                                                                    Running
                                                                </a>
                                                                <a
                                                                    className={cx(
                                                                        'is--link',
                                                                        'categories__item',
                                                                        'css-g9lrg8',
                                                                    )}
                                                                    href="/"
                                                                >
                                                                    Football
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={cx('left-nav__filters')}>
                                                        <div className={cx('filters', 'css-gr3fpq')}>
                                                            <div
                                                                className={cx(
                                                                    'Collapsible',
                                                                    'filter-group',
                                                                    'filter-group__closed',
                                                                    'css-1sv5wvp',
                                                                )}
                                                            >
                                                                <span
                                                                    className={cx(
                                                                        'Collapsible__trigger',
                                                                        'is-closed',
                                                                        'filter-group__btn',
                                                                        'headline-5',
                                                                    )}
                                                                >
                                                                    <div className={cx('trigger-content')}>
                                                                        <div className={cx('trigger-content__label')}>
                                                                            Gender
                                                                        </div>
                                                                        <div
                                                                            className={cx('icon-chevron', 'css-304bid')}
                                                                        ></div>
                                                                    </div>
                                                                </span>
                                                                <div
                                                                    className={cx(
                                                                        'Collapsible__contentOuter',
                                                                        'filter-group__outer',
                                                                    )}
                                                                >
                                                                    <div
                                                                        className={cx(
                                                                            'Collapsible__contentInner',
                                                                            'filter-group__content',
                                                                        )}
                                                                    >
                                                                        <div
                                                                            className={cx('filter-group__items-group')}
                                                                        >
                                                                            <a href="/">
                                                                                <div
                                                                                    className={cx(
                                                                                        'pseudo-checkbox',
                                                                                        'css-18pl6ws',
                                                                                    )}
                                                                                ></div>
                                                                                <span
                                                                                    className={cx(
                                                                                        'filter-item__item-label',
                                                                                    )}
                                                                                >
                                                                                    Men
                                                                                </span>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('product-grid', 'css-1hl0l1w')}>
                        <main>
                            <section>
                                <div className={cx('product-grid__items', 'css-hvew4t')}>
                                    {/* {listOfPosts.map((product, index) => ( */}
                                    <div
                                        // key={product.id}
                                        className={cx('product-card', 'product-grid__card', 'css-1t0asop')}
                                    >
                                        <div className={cx('product-card__body')}>
                                            <figure>
                                                <a
                                                    href="https://www.nike.com/vn/t/air-force-1-07-lv8-shoes-2gP9Bc/FN8349-100"
                                                    className={cx('product-card__link-overlay')}
                                                ></a>
                                                <a href="/" className={cx('product-card__img-link-overlay')}>
                                                    <img
                                                        src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a6432319-892e-4dac-a3fd-de0a1609220d/air-force-1-07-lv8-shoes-2gP9Bc.png"
                                                        alt=""
                                                        className={cx('product-card__hero-image', 'css-1fxh5tw')}
                                                    />
                                                </a>
                                                <div
                                                    className={cx(
                                                        'product-card__info',
                                                        'disable-animations',
                                                        'for--product',
                                                    )}
                                                >
                                                    <div className={cx('product_msg_info')}>
                                                        <div className={cx('product-card__messaging')}>
                                                            Promo Exclusion
                                                        </div>
                                                        <div className={cx('product-card__titles')}>
                                                            <div className={cx('product-card__title')}>
                                                                {/* {product.firstName} */}
                                                            </div>
                                                            <div className={cx('product-card__subtitle')}>
                                                                Men's Shoes
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={cx('product-card__count-wrapper')}></div>
                                                    <div className={cx('product-card__animation_wrapper')}>
                                                        <div className={cx('product-card__price-wrapper')}>
                                                            <div className={cx('product-card__price')}>
                                                                <div
                                                                    className={cx(
                                                                        'product-price__wrapper',
                                                                        'css-9xqpgk',
                                                                    )}
                                                                >
                                                                    <div
                                                                        className={cx(
                                                                            'product-price vn__styling',
                                                                            'is--current-price',
                                                                            'css-11s12ax',
                                                                        )}
                                                                    >
                                                                        2,929,000₫
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </figure>
                                        </div>
                                    </div>
                                    {/* ))} */}
                                </div>
                            </section>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListProduct;
