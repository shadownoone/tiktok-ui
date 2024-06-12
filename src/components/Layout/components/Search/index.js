// Search.js
import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import SearchResult from './SearchResult'; // Import SearchResult component
import styles from './Search.module.scss';
import images from '~/assets/images';

import axios from 'axios';

const cx = classNames.bind(styles);

function Search() {
    const [showOverlay, setShowOverlay] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const overlayRef = useRef(null);
    const inputRef = useRef(null);
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/shoes').then((response) => {
            setItems(response.data.data);
        });
    }, []);

    const handleSearchClick = () => {
        setShowOverlay(true);
        document.body.classList.add('overlay-header-hidden'); // Thêm lớp CSS để ẩn header
    };

    const handleClickOutside = (event) => {
        if (event.target === event.currentTarget) {
            setShowOverlay(false);
            document.body.classList.remove('overlay-header-hidden'); // Loại bỏ lớp CSS để hiển thị lại header
        }
    };

    const handleInputChange = (event) => {
        const inputValue = event.target.value.toLowerCase(); // Convert input to lowercase
        setIsTyping(inputValue !== '');
        setSearchInput(event.target.value);
        // Filter items based on search input matching product name or SKU (case-insensitive)
        const filtered = items.filter(
            (item) =>
                item.product_name.toLowerCase().includes(inputValue) || item.sku.toLowerCase().includes(inputValue),
        );
        setFilteredItems(filtered);
    };

    const handleCancelClick = () => {
        setShowOverlay(false);
        setIsTyping(false); // Reset typing state when cancelling search
        setSearchInput(''); // Clear search input
        document.body.classList.remove('overlay-header-hidden'); // Loại bỏ lớp CSS để hiển thị lại header
    };

    const handleClearInput = () => {
        setSearchInput('');
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    return (
        <>
            {showOverlay && (
                <>
                    <div className={cx('overlay')} ref={overlayRef} onClick={handleClickOutside}>
                        <div className={cx('pre-search')}>
                            <div>
                                <div className={cx('search-header')}>
                                    <div className={cx('logo')}>
                                        <a href={'/'}>
                                            <img className={cx('logo-main')} src={images.logo} alt="abc" />
                                        </a>
                                    </div>
                                    <div className={cx('search-box')}>
                                        <input
                                            ref={inputRef}
                                            className={cx('search-input')}
                                            placeholder="Search"
                                            value={searchInput}
                                            onChange={handleInputChange}
                                        />
                                        <button className={cx('search-btn')}>
                                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                                        </button>
                                        <button className={cx('close-btn')} onClick={handleClearInput}>
                                            <FontAwesomeIcon icon={faXmark} />
                                        </button>
                                    </div>
                                    <button className={cx('close-search')} onClick={handleCancelClick}>
                                        Cancel
                                    </button>
                                </div>
                                {/* Use SearchResult component */}
                                <SearchResult isTyping={isTyping} filteredItems={filteredItems} />
                            </div>
                        </div>
                    </div>
                </>
            )}
            <div className={cx('search')} onClick={handleSearchClick}>
                <input placeholder="Search" spellCheck={false} value={searchInput} onChange={handleInputChange} />
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </>
    );
}

export default Search;
