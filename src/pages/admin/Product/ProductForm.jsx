import React from 'react';
import classNames from 'classnames/bind';
import styles from './Product.module.scss';

const cx = classNames.bind(styles);

const ProductForm = ({
    showForm,
    product = {
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
    },
    handleChange,
    handleSubmit,
    handleCloseForm,
    handleAddSize,
    handleSizeChange,
    handleRemoveSize,
    handleAddImage,
    handleImageChange,
    handleRemoveImage,
    isUpdate = false,
    categories,
}) => {
    return (
        showForm && (
            <div className={cx('overlay')}>
                <div className={cx('form-container')}>
                    <h2>{isUpdate ? 'Update Product' : 'Add New Product'}</h2>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Name:
                            <input
                                type="text"
                                name="product_name"
                                value={product.product_name}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            SKU:
                            <input type="text" name="sku" value={product.sku} onChange={handleChange} required />
                        </label>
                        <label>
                            Price:
                            <input type="number" name="price" value={product.price} onChange={handleChange} required />
                        </label>
                        <label>
                            Discount Price:
                            <input
                                type="number"
                                name="discount_price"
                                value={product.discount_price}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Stock:
                            <input
                                type="number"
                                name="stock_quantity"
                                value={product.stock_quantity}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Gender:
                            <select name="gender" value={product.gender} onChange={handleChange} required>
                                <option>Choose Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="kids">Kids</option>
                            </select>
                        </label>

                        <label>
                            Category:
                            <select name="categoryID" value={product.categoryID} onChange={handleChange} required>
                                <option value="">Select Category</option>
                                {categories.map((category) => (
                                    <option key={category.id} value={category.id}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </label>

                        <label>
                            Description:
                            <input
                                type="text"
                                name="description"
                                value={product.description}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Sizes:
                            {product.sizes &&
                                product.sizes.map((size, index) => (
                                    <div key={index} className={cx('size-select-container')}>
                                        <select
                                            value={size}
                                            onChange={(e) => handleSizeChange(index, e.target.value)}
                                            required
                                            className={cx('size-select')}
                                        >
                                            <option value="">Select size</option>
                                            <option value="36">36</option>
                                            <option value="36.5">36.5</option>
                                            <option value="37">37</option>
                                            <option value="37.5">37.5</option>
                                            <option value="38">38</option>
                                            <option value="38.5">38.5</option>
                                            <option value="39">39</option>
                                            <option value="39.5">39.5</option>
                                            <option value="40">40</option>
                                            <option value="40.5">40.5</option>
                                            <option value="41">41</option>
                                            <option value="41.5">41.5</option>
                                            <option value="42">42</option>
                                            <option value="42.5">42.5</option>
                                            <option value="43">43</option>
                                            <option value="43.5">43.5</option>
                                            <option value="44">44</option>
                                            <option value="44.5">44.5</option>
                                            <option value="45">45</option>
                                        </select>
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveSize(index)}
                                            className={cx('remove-size-button')}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                ))}
                            <button type="button" onClick={handleAddSize} className={cx('add-size-button')}>
                                Add Size
                            </button>
                        </label>
                        <label>
                            Images:
                            {product.images &&
                                product.images.map((image, index) => (
                                    <div key={index} className={cx('image-url-container')}>
                                        <input
                                            type="text"
                                            value={image}
                                            onChange={(e) => handleImageChange(index, e.target.value)}
                                            placeholder="Image URL"
                                            required
                                            className={cx('image-url-input')}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveImage(index)}
                                            className={cx('remove-image-button')}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                ))}
                            <button type="button" onClick={handleAddImage} className={cx('add-image-button')}>
                                Add Image
                            </button>
                        </label>
                        <label>
                            Active:
                            <input type="checkbox" name="active" checked={product.active} onChange={handleChange} />
                        </label>
                        <button type="submit" className={cx('submit-button')}>
                            {isUpdate ? 'Update Product' : 'Add Product'}
                        </button>
                        <button type="button" className={cx('cancel-button')} onClick={handleCloseForm}>
                            Cancel
                        </button>
                    </form>
                </div>
            </div>
        )
    );
};

export default ProductForm;
