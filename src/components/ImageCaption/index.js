import React from 'react';
import Caption from '~/components/Caption';
import styles from './ImageCaption.module.scss';
import classNames from 'classnames/bind';
import config from '~/config';

const cx = classNames.bind(styles);

function ImageCaption({ imageSrc, subTitle, title, desc, mainTitle, buttonLink, buttonText }) {
    return (
        <div>
            <a href={'/listproduct/all'}>
                <h2 className={cx('mg-bt-24')}>{mainTitle}</h2>
                <img src={imageSrc} alt="" />
                <Caption
                    subTitle={subTitle}
                    title={title}
                    desc={desc}
                    buttonLink={buttonLink}
                    buttonText={buttonText}
                />
            </a>
        </div>
    );
}

export default ImageCaption;
