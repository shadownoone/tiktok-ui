import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Search from '../Search';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('header-container')}>
            {/* Sub-Header */}
            <div className={cx('brand-header')}>
                <div className={cx('logo')}>
                    <a href="/#">
                        {' '}
                        <img className={cx('logo-sub')} src={images.logoJordan} alt="abc" />
                    </a>
                </div>
                <div className={cx('user-menu')}>
                    <ul className={cx('menu-list')}>
                        <li className={cx('list-item')}>
                            <a href="/">Find a Store</a>
                            <span>|</span>
                        </li>

                        <li className={cx('list-item')}>
                            <a href="/"> Help</a> <span>|</span>
                            <ul className={cx('sub-menu')}>
                                <h3>Help</h3>
                                <li className={cx('sub-menu-item')}>
                                    <a href="/">Order Status</a>
                                </li>
                                <li className={cx('sub-menu-item')}>
                                    <a href="/">Dispatch and Delivery </a>
                                </li>
                                <li className={cx('sub-menu-item')}>
                                    <a href="/">Returns </a>
                                </li>
                                <li className={cx('sub-menu-item')}>
                                    <a href="/">Contact Us</a>{' '}
                                </li>
                                <li className={cx('sub-menu-item')}>
                                    <a href="/">Privacy Policy</a>{' '}
                                </li>
                                <li className={cx('sub-menu-item')}>
                                    <a href="/">Terms of Sale </a>
                                </li>
                                <li className={cx('sub-menu-item')}>
                                    <a href="/">Terms of Use </a>
                                </li>
                                <li className={cx('sub-menu-item')}>
                                    <a href="/">Send Us Feedback </a>
                                </li>
                            </ul>
                        </li>

                        {/* <li className={cx('menu-item')}>
                            <a href="/#">
                                <span>Sign In</span>
                            </a>
                        </li> */}
                        <li className={cx('list-item')}>
                            <a href="/">Hi,Tai</a> {''}
                            <FontAwesomeIcon icon={faUser} />
                            <ul className={cx('sub-menu')}>
                                <h3>Account</h3>
                                <li className={cx('sub-menu-item')}>
                                    <a href="/">Profile</a>
                                </li>
                                <li className={cx('sub-menu-item')}>
                                    <a href="/">Orders</a>
                                </li>
                                <li className={cx('sub-menu-item')}>
                                    <a href="/">Favourites</a>
                                </li>
                                <li className={cx('sub-menu-item')}>
                                    <a href="/">Experiences</a>
                                </li>

                                <li className={cx('sub-menu-item')}>
                                    <a href="/">Account Settings</a>
                                </li>
                                <li className={cx('sub-menu-item')}>
                                    <a href="/">Terms of Use </a>
                                </li>
                                <li className={cx('sub-menu-item')}>
                                    <a href="/">Log Out</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Main-Header */}
            <div className={cx('main-header')}>
                <div className={cx('logo')}>
                    <a href={'/'}>
                        <img className={cx('logo-main')} src={images.logo} alt="abc" />
                    </a>
                </div>

                <div className={cx('action')}>
                    <ul className={cx('menu')}>
                        <li className={cx('menu-item')}>
                            <a href="/">New & Featured</a>
                        </li>

                        <li className={cx('menu-item')}>
                            <a href="/">Men</a>
                            <div className={cx('menu-notification')}>
                                <div className={cx('sub-menu')}>
                                    <h3>Shoes</h3>
                                    <ul>
                                        <li>
                                            <a href="/">All Shoes</a>
                                            <a href="/">All Shoes</a>
                                            <a href="/">All Shoes</a>
                                            <a href="/">All Shoes</a>
                                            <a href="/">All Shoes</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className={cx('sub-menu')}>
                                    <h3>Shoes</h3>
                                    <ul>
                                        <li>
                                            <a href="/">All Shoes</a>
                                            <a href="/">All Shoes</a>
                                            <a href="/">All Shoes</a>
                                            <a href="/">All Shoes</a>
                                            <a href="/">All Shoes</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className={cx('sub-menu')}>
                                    <h3>Shoes</h3>
                                    <ul>
                                        <li>
                                            <a href="/">All Shoes</a>
                                            <a href="/">All Shoes</a>
                                            <a href="/">All Shoes</a>
                                            <a href="/">All Shoes</a>
                                            <a href="/">All Shoes</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className={cx('sub-menu')}>
                                    <h3>Shoes</h3>
                                    <ul>
                                        <li>
                                            <a href="/">All Shoes</a>
                                            <a href="/">All Shoes</a>
                                            <a href="/">All Shoes</a>
                                            <a href="/">All Shoes</a>
                                            <a href="/">All Shoes</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className={cx('menu-item')}>
                            <a href="/">Women</a>
                        </li>
                        <li className={cx('menu-item')}>
                            <a href="/">Customise</a>
                        </li>
                        <li className={cx('menu-item')}>
                            <a href="/">WoSNKRSmen</a>
                        </li>
                    </ul>
                </div>
                <Search />
                <div className={cx('btn-action')}>
                    <button className={cx('favorites-btn')}>
                        <FontAwesomeIcon icon={faHeart} />
                    </button>
                    <button className={cx('bag-btn')}>
                        <FontAwesomeIcon icon={faBagShopping} />
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
