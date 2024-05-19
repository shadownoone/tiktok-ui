import React from 'react';
import styles from './Check.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Check({ handleGdprConsentChange }) {
    return (
        <div className={cx('gdpr-consent')}>
            <label className={cx('checkbox-container')}>
                <div className={cx('input-checkbox')}>
                    <label className={cx('input-checkbox__container')}>
                        <input type="checkbox" id="gdpr" required="" onChange={handleGdprConsentChange} />
                        <div className={cx('help-text')}>
                            <div className={cx('consent-description')}>
                                I have read and consent to eShopWorld processing my information in accordance with the{' '}
                                {''}
                                <a className={cx('link-privacy')} href="https://www.eshopworld.com/privacy-policy/">
                                    Privacy Statement {''}
                                </a>
                                and
                                <a href="https://www.eshopworld.com/cookie-policy/" className={cx('link-cookie')}>
                                    {''} Cookie Policy {''}
                                </a>
                                . eShopWorld is a trusted Nike partner.
                            </div>
                        </div>
                    </label>
                </div>
            </label>
        </div>
    );
}

export default Check;
