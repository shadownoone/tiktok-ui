import { React, useEffect, useState } from 'react';
import styles from './SimpleBar.module.scss';
import classNames from 'classnames/bind';
import axios from 'axios';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function SimpleBar() {
    const [listCategories, setListCategories] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/categories').then((response) => {
            setListCategories(response.data.data);
        });
    }, []);

    return (
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
                                                {listCategories.map((categories, index) => (
                                                    <div key={categories.id} className={cx('categories__content')}>
                                                        <Link
                                                            className={cx('is--link', 'categories__item', 'css-g9lrg8')}
                                                            to={'/listproduct/' + categories.id}
                                                        >
                                                            {categories.name}
                                                        </Link>
                                                    </div>
                                                ))}
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
                                                            <div className={cx('trigger-content__label')}>Gender</div>
                                                            <div className={cx('icon-chevron', 'css-304bid')}></div>
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
                                                            <div className={cx('filter-group__items-group')}>
                                                                <input type="checkbox" href="/"></input>
                                                                <span className={cx('filter-item__item-label')}>
                                                                    Men
                                                                </span>
                                                            </div>
                                                            <div className={cx('filter-group__items-group')}>
                                                                <input type="checkbox" href="/"></input>
                                                                <span className={cx('filter-item__item-label')}>
                                                                    Women
                                                                </span>
                                                            </div>
                                                            <div className={cx('filter-group__items-group')}>
                                                                <input type="checkbox" href="/"></input>
                                                                <span className={cx('filter-item__item-label')}>
                                                                    Kids
                                                                </span>
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
    );
}

export default SimpleBar;
