import React, { useState, useRef, useEffect } from 'react';

import styles from './Product.module.scss';

import SliderItem from '~/components/SliderItem';
import classNames from 'classnames/bind';
import ProductImage from './ProductImage';

import Feedback from './Feedback';
import Description from './Description';
import SubProduct from './SubProduct';
import MainProduct from './MainProduct';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

function Product() {
    const [listOfPosts, setListOfPosts] = useState();
    const [listImg, setListImg] = useState([]);
    const [listSize, setListSize] = useState([]);
    const [items, setItems] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:5000/shoes/' + id).then((response) => {
            setListOfPosts(response.data.data);
            setListImg(response.data.data.ShoeImages);
            setListSize(response.data.data.Sizes);
        });
    }, []);

    // Khởi tạo một mảng items để truyền cho SliderItem

    useEffect(() => {
        axios.get('http://localhost:5000/shoes').then((response) => {
            setItems(response.data.data);
        });
    }, []);

    return (
        <div>
            <div className={cx('product')}>
                <ProductImage listImg={listImg} />
                <div className={cx('product-info')}>
                    <div className={cx('info-layout')}>
                        <div>
                            {/* MainProduct */}
                            <MainProduct />

                            {/* SubProduct */}
                            <SubProduct listSize={listSize} />
                            {/* Description */}
                            <Description />
                            {/* Feedback */}
                            <Feedback />
                        </div>
                    </div>
                </div>
            </div>
            <SliderItem items={items} />
        </div>
    );
}

export default Product;
