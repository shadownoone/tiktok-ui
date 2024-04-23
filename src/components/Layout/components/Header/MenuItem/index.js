import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './MenuItem.module.scss';
import MenuNotification from '../MenuNotification';

const cx = classNames.bind(styles);

function MenuItem({ title, hasSubMenu, children, isHeader, className }) {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleSubMenuToggle = () => {
        setIsSubMenuOpen(!isSubMenuOpen);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <li
            className={cx('menu-item', className, {
                'has-sub-menu': hasSubMenu,
                'header-item': isHeader,
                'show-notification': isHovered,
            })}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <a href="/#" onClick={hasSubMenu ? handleSubMenuToggle : undefined}>
                {title}
            </a>
            {hasSubMenu && isSubMenuOpen && isHovered && <MenuNotification />}
        </li>
    );
}

export default MenuItem;
