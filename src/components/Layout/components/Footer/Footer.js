import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Footer.module.scss';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer>
            <div>
                <div className={cx('footer-info')}>
                    <div className={cx('footer-right')}>
                        <div className={cx('footer-menu')}>
                            <ul className={cx('menu-list')}>
                                <h3>Find A Store</h3>

                                <li className={cx('menu-item')}>
                                    <a href="/#">Become A Member</a>
                                </li>
                                <li className={cx('menu-item')}>
                                    <a href="/#">Send Us Feedback</a>
                                </li>
                                <li className={cx('menu-item')}>
                                    <a href="/#">Find A Store</a>
                                </li>
                                <li className={cx('menu-item')}>
                                    <a href="/#">Become A Member</a>
                                </li>
                                <li className={cx('menu-item')}>
                                    <a href="/#">Send Us Feedback</a>
                                </li>
                            </ul>
                        </div>

                        <div className={cx('footer-menu')}>
                            <ul className={cx('menu-list')}>
                                <h3>Help</h3>

                                <li className={cx('menu-item')}>
                                    <a href="/#">Get Help</a>
                                </li>
                                <li className={cx('menu-item')}>
                                    <a href="/#">Order Status</a>
                                </li>
                                <li className={cx('menu-item')}>
                                    <a href="/#">Delivery</a>
                                </li>
                                <li className={cx('menu-item')}>
                                    <a href="/#">Return</a>
                                </li>
                                <li className={cx('menu-item')}>
                                    <a href="/#">Payment Options</a>
                                </li>
                                <li className={cx('menu-item')}>
                                    <a href="/#">Contact Us</a>
                                </li>
                            </ul>
                        </div>

                        <div className={cx('footer-menu')}>
                            <ul className={cx('menu-list')}>
                                <h3>About Nike</h3>

                                <li className={cx('menu-item')}>
                                    <a href="/#">About Nike</a>
                                </li>
                                <li className={cx('menu-item')}>
                                    <a href="/#">News</a>
                                </li>
                                <li className={cx('menu-item')}>
                                    <a href="/#">Careers</a>
                                </li>
                                <li className={cx('menu-item')}>
                                    <a href="/#">Inventors</a>
                                </li>
                                <li className={cx('menu-item')}>
                                    <a href="/#">Sustainability</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('footer-left')}>
                        <div className={cx('footer-social')}>
                            <ul className={cx('social-menu')}>
                                <li className={cx('social-item')}>
                                    <a href="/#">
                                        <FontAwesomeIcon className={cx('icon')} icon={faTwitter} />
                                    </a>
                                </li>
                                <li className={cx('social-item')}>
                                    <a href="/#">
                                        <FontAwesomeIcon className={cx('icon')} icon={faFacebook} />
                                    </a>
                                </li>
                                <li className={cx('social-item')}>
                                    <a href="/#">
                                        <FontAwesomeIcon className={cx('icon')} icon={faYoutube} />
                                    </a>
                                </li>
                                <li className={cx('social-item')}>
                                    <a href="/#">
                                        <FontAwesomeIcon className={cx('icon')} icon={faInstagram} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={cx('sub-footer')}>
                    <div className={cx('footer-location')}>
                        <a href="/#">
                            <FontAwesomeIcon icon={faLocationDot} />
                            <span>Vietnam</span>
                        </a>
                        <span>© 2024 Nike, Inc. All Rights Reserved</span>
                    </div>

                    <div className={cx('sub-footer-menu')}>
                        <ul className={cx('menu-list')}>
                            <li className={cx('menu-item')}>
                                <a href="/#">Guides</a>
                            </li>
                            <li className={cx('menu-item')}>
                                <a href="/#">Terms of Sale</a>
                            </li>
                            <li className={cx('menu-item')}>
                                <a href="/#">Terms of Us</a>
                            </li>
                            <li className={cx('menu-item')}>
                                <a href="/#">Nike Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
