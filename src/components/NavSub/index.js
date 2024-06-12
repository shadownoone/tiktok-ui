import React from 'react';

import styles from './NavSub.module.scss';
import classNames from 'classnames/bind';

import config from '~/config';

const cx = classNames.bind(styles);
function NavSub({ title }) {
    return (
        <nav className={cx('nav-sub')}>
            <h1>{title}</h1>
            <div>
                <ul className={cx('list-sub')}>
                    <li className={cx('sub-item')}>
                        <a href={'/listproduct/all'}>Shoes</a>
                    </li>
                    <li className={cx('sub-item')}>
                        <a href={config.routes.listproduct}>Clothing</a>
                    </li>
                    <li className={cx('sub-item')}>
                        <a href={config.routes.listproduct}>Gear</a>
                    </li>
                </ul>
            </div>
            <div></div>
        </nav>
    );
}

export default NavSub;
