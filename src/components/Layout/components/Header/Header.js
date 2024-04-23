import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Search from '../Search';
import MenuItem from './MenuItem';
import MenuNotification from './MenuNotification';

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
                        <MenuItem title="Find a Store" className="custom-class" />
                        <span>|</span>
                        <MenuItem title="Help" className="custom-class">
                            <ul className={cx('sub-menu')}>
                                <h3>Help</h3>
                                <MenuItem title="Order Status" />
                                <MenuItem title="Dispatch and Delivery" />
                                <MenuItem title="Returns" />
                                <MenuItem title="Contact Us" />
                                <MenuItem title="Privacy Policy" />
                                <MenuItem title="Terms of Sale" />
                                <MenuItem title="Terms of Use" />
                                <MenuItem title="Send Us Feedback" />
                            </ul>
                        </MenuItem>

                        {/* <li className={cx('menu-item')}>
                            <a href="/#">
                                <span>Join Us</span>
                                <span>|</span>
                            </a>
                        </li>
                        <li className={cx('menu-item')}>
                            <a href="/#">
                                <span>Sign In</span>
                            </a>
                        </li> */}
                        <MenuItem title="Hi, Tai" className="custom-class">
                            <FontAwesomeIcon icon={faUser} />
                            <ul className={cx('sub-menu')}>
                                <h3>Help</h3>
                                <MenuItem title="Order Status" />
                                <MenuItem title="Dispatch and Delivery" />
                                <MenuItem title="Returns" />
                                <MenuItem title="Contact Us" />
                                <MenuItem title="Privacy Policy" />
                                <MenuItem title="Terms of Sale" />
                                <MenuItem title="Terms of Use" />
                                <MenuItem title="Send Us Feedback" />
                            </ul>
                        </MenuItem>
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
                        <MenuItem title="New & Featured" />
                        <MenuItem title="Men" hasSubMenu>
                            <MenuNotification />
                        </MenuItem>

                        <MenuItem title="Women" />
                        <MenuItem title="Kids" />
                        <MenuItem title="Customise" />
                        <MenuItem title="SNKRS" />
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
