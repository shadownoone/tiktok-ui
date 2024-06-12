import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import ReactPaginate from 'react-paginate';
import * as shoeService from '~/services/shoeService';
import * as categoryService from '~/services/categoriesService';
import ProductForm from './ProductForm';

const cx = classNames.bind(styles);

const Product = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
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
        categoryID: '',
    });
    const [isUpdate, setIsUpdate] = useState(false);
    const [currentProductId, setCurrentProductId] = useState(null);

    useEffect(() => {
        shoeService.getProductAll().then((res) => {
            setProducts(res);
        });
        categoryService.getCategoriesAll().then((res) => {
            setCategories(res);
        });
    }, []);

    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5;

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleAddProductClick = () => {
        setNewProduct({
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
            categoryID: '',
        });
        setShowForm(true);
        setIsUpdate(false);
    };

    const handleEditProductClick = (product) => {
        setNewProduct(product);
        setShowForm(true);
        setIsUpdate(true);
        setCurrentProductId(product.id);
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isUpdate) {
            await shoeService.updateProduct(currentProductId, newProduct);
        } else {
            const createdProduct = await shoeService.createProduct(newProduct);
            setProducts([...products, { ...createdProduct, id: products.length + 1 }]);
        }
        setShowForm(false);
    };

    const handleDeleteProduct = (id) => {
        shoeService.deleteProduct(id);
        setProducts(products.filter((product) => product.id !== id));
    };

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    const handleAddSize = () => {
        setNewProduct((prevProduct) => ({
            ...prevProduct,
            sizes: [...prevProduct.sizes, ''],
        }));
    };

    const handleSizeChange = (index, value) => {
        const updatedSizes = newProduct.sizes.map((size, i) => (i === index ? value : size));
        setNewProduct((prevProduct) => ({
            ...prevProduct,
            sizes: updatedSizes,
        }));
    };

    const handleRemoveSize = (index) => {
        setNewProduct((prevProduct) => ({
            ...prevProduct,
            sizes: prevProduct.sizes.filter((_, i) => i !== index),
        }));
    };

    const handleAddImage = () => {
        setNewProduct((prevProduct) => ({
            ...prevProduct,
            images: [...prevProduct.images, ''],
        }));
    };

    const handleImageChange = (index, value) => {
        const updatedImages = newProduct.images.map((image, i) => (i === index ? value : image));
        setNewProduct((prevProduct) => ({
            ...prevProduct,
            images: updatedImages,
        }));
    };

    const handleRemoveImage = (index) => {
        setNewProduct((prevProduct) => ({
            ...prevProduct,
            images: prevProduct.images.filter((_, i) => i !== index),
        }));
    };

    const filteredProducts = products.filter((product) =>
        product.product_name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    const paginatedProducts = filteredProducts.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h1>Product</h1>
                <div className={cx('actions')}>
                    <button className={cx('button')} onClick={handleAddProductClick}>
                        Add Product
                    </button>
                </div>
            </div>
            <input
                className={cx('search')}
                type="text"
                placeholder="Search by product name"
                value={searchTerm}
                onChange={handleSearch}
            />
            <table className={cx('table')}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>SKU</th>
                        <th>Gender</th>
                        <th>Category</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedProducts.map((product, index) => (
                        <tr key={product.id}>
                            <td>{currentPage * itemsPerPage + index + 1}</td>
                            <td>{product.product_name}</td>
                            <td>{product.price}</td>
                            <td>{product.sku}</td>
                            <td>{product.gender}</td>
                            <td>{product.Category?.name}</td>
                            <td className={cx('actions')}>
                                <button className={cx('action-button')} onClick={() => handleEditProductClick(product)}>
                                    <FontAwesomeIcon icon={faEdit} />
                                </button>
                                <button className={cx('action-button')} onClick={() => handleDeleteProduct(product.id)}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ReactPaginate
                previousLabel={'Previous'}
                nextLabel={'Next'}
                breakLabel={'...'}
                pageCount={Math.ceil(filteredProducts.length / itemsPerPage)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={cx('pagination')}
                activeClassName={cx('active')}
            />
            <ProductForm
                showForm={showForm}
                product={newProduct}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                handleCloseForm={handleCloseForm}
                handleAddSize={handleAddSize}
                handleSizeChange={handleSizeChange}
                handleRemoveSize={handleRemoveSize}
                handleAddImage={handleAddImage}
                handleImageChange={handleImageChange}
                handleRemoveImage={handleRemoveImage}
                isUpdate={isUpdate}
                categories={categories} // Pass categories to ProductForm
            />
        </div>
    );
};

export default Product;
