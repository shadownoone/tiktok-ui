// Tạo file MenuNotification.jsx
import React from 'react';
import classNames from 'classnames/bind';
import styles from './MenuNotification.module.scss';

const cx = classNames.bind(styles);

function MenuNotification() {
    const shoesData = [
        {
            title: 'Featured',
            tag: <span className={cx('tag')}>New</span>,
            items: [
                'New Releases',
                'Bestsellers',
                'Member Exclusive',
                'Jordan',
                'Retro Running',
                'Customise with Nike By You',
                'Running Shoe Finder',
                'Sustainable Materials',
            ],
        },
        {
            title: 'Shoes',
            items: ['All Shoes', 'Newest Sneakers', 'Jordan', 'Lifestyle', 'Running', 'Gym and Training', 'Basketball'],
        },
        {
            title: 'Clothing',
            items: ['New All Clothing', 'Tops and T-Shirts', 'Shorts', 'Hoodies and Sweatshirts', 'Pants and Leggings'],
        },
        {
            title: 'Shop By Sport',
            items: ['Running', 'Basketball', 'Football', 'Golf', 'Tennis', 'Gym and Training', 'Yoga', 'Skateboarding'],
        },
    ];

    function renderShoesSubMenu() {
        return shoesData.map((shoe, index) => (
            <ul key={index} className={cx('sub-menu')}>
                {/* Đây là tiêu đề có thẻ và chứa biến tag */}
                <h3>
                    {shoe.title}
                    {shoe.tag}
                </h3>
                {/* Render danh sách menu item chỉ khi có dữ liệu */}
                {shoe.items &&
                    shoe.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                            <a href="/#">{item}</a>
                        </li>
                    ))}
            </ul>
        ));
    }

    return <div className={cx('menu-notification')}>{renderShoesSubMenu()}</div>;
}

export default MenuNotification;
