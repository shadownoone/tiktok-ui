import styles from './Caption.module.scss';
import classNames from 'classnames/bind';
import Button from '../Button';

const cx = classNames.bind(styles);

function Caption({ subTitle, title, desc, buttonLink, buttonText }) {
    return (
        <figcaption className={cx('caption')}>
            <div className={cx('content')}>
                <p className={cx('sub-title')}>{subTitle}</p>
                <h3 className={cx('title')}>{title}</h3>
                <p className={cx('desc')}>{desc}</p>
                <div className={cx('cta-container')}>
                    <Button primary to={buttonLink}>
                        <span>{buttonText}</span>
                    </Button>
                </div>
            </div>
        </figcaption>
    );
}

export default Caption;
