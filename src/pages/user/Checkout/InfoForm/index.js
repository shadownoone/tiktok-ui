import React from 'react';
import styles from './InfoForm.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function InfoForm({ formData, handleInputChange }) {
    return (
        <form className={cx('contact-form')}>
            {Object.keys(formData).map((field) => (
                <div key={field} className={cx('wd-100pct')}>
                    <div className={cx('text-input')}>
                        <input
                            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                            className={cx('pr-8')}
                            name={field}
                            value={formData[field]}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
            ))}
        </form>
    );
}

export default InfoForm;
