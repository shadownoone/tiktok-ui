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

    const { id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:5000/shoes/' + id).then((response) => {
            setListOfPosts(response.data.data);
            setListImg(response.data.data.ShoeImages);
            setListSize(response.data.data.Sizes);
        });
    }, []);

    // Khởi tạo một mảng items để truyền cho SliderItem
    const [items, setItems] = useState([
        {
            title: 'Product 1',
            imageUrl:
                'https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/86087b33-bcf3-44c7-ad14-7f6d42aff283/fff-2024-25-match-home-dri-fit-adv-football-authentic-shirt-JZCzQH.png',
            url: 'https://example.com/product1',
            subtitle: 'Description 1',
            price: '$100',
        },
        {
            title: 'Product 2',
            imageUrl:
                'https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/86087b33-bcf3-44c7-ad14-7f6d42aff283/fff-2024-25-match-home-dri-fit-adv-football-authentic-shirt-JZCzQH.png',
            url: 'https://example.com/product2',
            subtitle: 'Description 2',
            price: '$150',
        },
        {
            title: 'Product 3',
            imageUrl:
                'https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/86087b33-bcf3-44c7-ad14-7f6d42aff283/fff-2024-25-match-home-dri-fit-adv-football-authentic-shirt-JZCzQH.png',
            url: 'https://example.com/product2',
            subtitle: 'Description 2',
            price: '$150',
        },
        // Thêm các mục khác nếu cần
    ]);

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
