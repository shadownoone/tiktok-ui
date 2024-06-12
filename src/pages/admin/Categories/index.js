import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Categories.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import * as categoryService from '~/services/categoriesService'; // Assume this service exists and provides necessary methods

const cx = classNames.bind(styles);

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [newCategory, setNewCategory] = useState(null);
    const [reload, setReload] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const categoriesPerPage = 5;

    useEffect(() => {
        categoryService
            .getCategoriesAll()
            .then((res) => {
                setCategories(res);
            })
            .catch((error) => {
                console.error('Error fetching category data:', error);
            });
    }, [reload]);

    const indexOfLastCategory = currentPage * categoriesPerPage;
    const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
    const currentCategories = categories
        .filter((category) => category.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .slice(indexOfFirstCategory, indexOfLastCategory);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleEditCategory = (category) => {
        setNewCategory(category);
        setShowForm(true);
    };

    const handleDeleteCategory = async (id) => {
        await categoryService.deleteCategories(id);
        setReload((prev) => !prev);
    };

    const handleAddCategoryClick = () => {
        setNewCategory(null);
        setShowForm(true);
    };

    const handleCloseForm = () => {
        setShowForm(false);
    };

    const handleFormSubmit = (category) => {
        if (newCategory) {
            // Update category logic
            categoryService.updateCategories(newCategory.id, category).then(() => {
                setReload((prev) => !prev);
            });
        } else {
            // Create new category logic
            categoryService.createCategories(category).then(() => {
                setReload((prev) => !prev);
            });
        }
        setShowForm(false);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className={cx('category-container')}>
            <h1>Category Management</h1>
            <div className={cx('search-add')}>
                <input
                    type="text"
                    placeholder="Search categories..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className={cx('search-input')}
                />
                <button onClick={handleAddCategoryClick} className={cx('add-button')}>
                    Add Category
                </button>
            </div>
            <table className={cx('category-table')}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentCategories.map((category) => (
                        <tr key={category.id}>
                            <td>{category.id}</td>
                            <td>{category.name}</td>
                            <td className={cx('actions')}>
                                <button onClick={() => handleEditCategory(category)} className={cx('action-button')}>
                                    <FontAwesomeIcon icon={faEdit} />
                                </button>
                                <button
                                    onClick={() => handleDeleteCategory(category.id)}
                                    className={cx('action-button', 'delete-button')}
                                >
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className={cx('pagination')}>
                <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={cx('pagination-button')}
                >
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                {[...Array(Math.ceil(categories.length / categoriesPerPage)).keys()].map((number) => (
                    <button
                        key={number + 1}
                        onClick={() => paginate(number + 1)}
                        className={cx('pagination-button', {
                            active: currentPage === number + 1,
                        })}
                    >
                        {number + 1}
                    </button>
                ))}
                <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === Math.ceil(categories.length / categoriesPerPage)}
                    className={cx('pagination-button')}
                >
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </div>
    );
};

export default Categories;
