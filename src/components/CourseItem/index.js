import React from 'react';
import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './CourseItem.module.scss';

const cx = classNames.bind(styles);

function CourseItem({ imageSrc, title, buttonLink, buttonText }) {
    return (
        <div className={cx('course-item')}>
            <a href={buttonLink}>
                <img src={imageSrc} alt={title} className={cx('thumb')} />
            </a>
            <div className="info">
                <div>
                    <h3>{title}</h3>
                    <Button featured to={buttonLink}>
                        {buttonText}
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default CourseItem;
