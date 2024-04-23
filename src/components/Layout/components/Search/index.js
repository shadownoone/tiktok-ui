// Search.js

import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import SearchResult from './SearchResult'; // Import SearchResult component
import styles from './Search.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Search() {
    const [showOverlay, setShowOverlay] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const overlayRef = useRef(null);
    const inputRef = useRef(null);

    const handleSearchClick = () => {
        setShowOverlay(true);
    };

    const handleClickOutside = (event) => {
        if (event.target === event.currentTarget) {
            setShowOverlay(false);
        }
    };

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setIsTyping(inputValue !== '');
        setSearchInput(inputValue);
    };

    const handleCancelClick = () => {
        setShowOverlay(false);
        setIsTyping(false); // Reset typing state when cancelling search
        setSearchInput(''); // Clear search input
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
                                <SearchResult isTyping={isTyping} />
                            </div>
                        </div>
                    </div>
                </>
            )}
            <Tippy>
                <div className={cx('search')} onClick={handleSearchClick}>
                    <input placeholder="Search" spellCheck={false} value={searchInput} onChange={handleInputChange} />

                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </Tippy>
        </>
    );
}

export default Search;
