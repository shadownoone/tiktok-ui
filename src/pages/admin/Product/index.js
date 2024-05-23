import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import ReactPaginate from 'react-paginate';
import * as shoeService from '~/services/shoeService';
import CreateAndUpdate from './CreateAndUpdate';

const cx = classNames.bind(styles);

const Product = () => {
    const [product, setProduct] = useState();
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [newProduct, setNewProduct] = useState({
        product_name: '',
        sku: '',
        description: '',
        price: '',
        discount_price: '',
        stock_quantity: '',
        gender: '',
        active: false,
        sizes: [],
        images: [],
    });

    useEffect(() => {
        shoeService.getProductAll().then((res) => {
            setProducts(res);
        });
    }, []);

    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5;

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleAddProductClick = () => {
        setShowForm(true);
    };

    const handleCloseForm = () => {
        setShowForm(false);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setNewProduct({
            ...newProduct,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (product) {
            shoeService.updateProduct(product);
        } else {
            shoeService.createProduct(newProduct);
            setProducts([...products, { ...newProduct, id: products.length + 1 }]);
        }
        setShowForm(false);
    };

    const handleViewProduct = (id) => {
        alert(`Viewing product with ID: ${id}`);
    };

    const handleUpdateProduct = (product) => {
        setProduct(product);
        setShowForm(true);
        console.log(product);
    };

    const handleDeleteProduct = (id) => {
        shoeService.deleteProduct(id);
        setProducts(products.filter((product) => product.id !== id));
    };

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    const handleAddSize = (e) => {
        e.preventDefault();
        setNewProduct({
            ...newProduct,
            sizes: [...newProduct.sizes, ''],
        });
    };

    const handleSizeChange = (index, value) => {
        const updatedSizes = newProduct.sizes.map((size, i) => (i === index ? value : size));
        setNewProduct({
            ...newProduct,
            sizes: updatedSizes,
        });
    };

    const handleRemoveSize = (index) => {
        const updatedSizes = newProduct.sizes.filter((_, i) => i !== index);
        setNewProduct({
            ...newProduct,
            sizes: updatedSizes,
        });
    };

    const handleAddImage = () => {
        setNewProduct((prevProduct) => ({
            ...prevProduct,
            images: [...prevProduct.images, ''],
        }));
    };

    const handleImageChange = (index, value) => {
        const newImages = [...newProduct.images];
        newImages[index] = value;
        setNewProduct((prevProduct) => ({
            ...prevProduct,
            images: newImages,
        }));
    };

    const handleRemoveImage = (index) => {
        const newImages = [...newProduct.images];
        newImages.splice(index, 1);
        setNewProduct((prevProduct) => ({
            ...prevProduct,
            images: newImages,
        }));
    };

    // Calculate the range of products to display based on the current page
    const offset = currentPage * itemsPerPage;
    const currentPageProducts = products.slice(offset, offset + itemsPerPage);

    return (
        <div className={cx('product-container')}>
            <h1>Product Management</h1>
            <div className={cx('search-add')}>
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className={cx('search-input')}
                />
                <button onClick={handleAddProductClick} className={cx('add-button')}>
                    Add Product
                </button>
            </div>
            <table className={cx('product-table')}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Discount Price</th>
                        <th>Stock</th>
                        <th>Gender</th>
                        <th>Active</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentPageProducts.map((product) => (
                        <tr key={product.id}>
                            <td>{product.product_name}</td>
                            <td>{product.price}</td>
                            <td>{product.discount_price}</td>
                            <td>{product.stock_quantity}</td>
                            <td>{product.gender}</td>
                            <td>{product.active ? 'Yes' : 'No'}</td>
                            <td className={cx('actions')}>
                                <button onClick={() => handleViewProduct(product.id)} className={cx('action-button')}>
                                    <FontAwesomeIcon icon={faEye} />
                                </button>
                                <button onClick={() => handleUpdateProduct(product)} className={cx('action-button')}>
                                    <FontAwesomeIcon icon={faEdit} />
                                </button>
                                <button
                                    onClick={() => handleDeleteProduct(product.id)}
                                    className={cx('action-button', 'delete-button')}
                                >
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                pageCount={Math.ceil(products.length / itemsPerPage)}
                onPageChange={handlePageClick}
                containerClassName={cx('pagination')}
                activeClassName={cx('active')}
            />
            <CreateAndUpdate
                showForm={showForm}
                newProduct={product || newProduct}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                handleCloseForm={handleCloseForm}
                handleAddSize={handleAddSize}
                handleSizeChange={handleSizeChange}
                handleRemoveSize={handleRemoveSize}
                handleAddImage={handleAddImage}
                handleImageChange={handleImageChange}
                handleRemoveImage={handleRemoveImage}
            />
        </div>
    );
};

export default Product;
