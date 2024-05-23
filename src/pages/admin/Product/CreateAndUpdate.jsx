import React from 'react';
import classNames from 'classnames/bind';
import styles from './Product.module.scss';

const cx = classNames.bind(styles);

const CreateAndUpdate = ({
    showForm,
    newProduct = {
        product_name: '',
        sku: '',
        description: '',
        price: '',
        discount_price: '',
        stock_quantity: '',
        gender: '',
        active: false,
        sizes: [],
        images: [], // Ensure images is initialized as an empty array
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
}) => {
    return (
        showForm && (
            <div className={cx('overlay')}>
                <div className={cx('form-container')}>
                    <h2>Add New Product</h2>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Name:
                            <input
                                type="text"
                                name="product_name"
                                value={newProduct.product_name}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            SKU:
                            <input type="text" name="sku" value={newProduct.sku} onChange={handleChange} required />
                        </label>
                        <label>
                            Price:
                            <input
                                type="number"
                                name="price"
                                value={newProduct.price}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            DiscountPrice:
                            <input
                                type="number"
                                name="discount_price"
                                value={newProduct.discount_price}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Stock:
                            <input
                                type="number"
                                name="stock_quantity"
                                value={newProduct.stock_quantity}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Gender:
                            <select name="gender" value={newProduct.gender} onChange={handleChange} required>
                                <option>Choose Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="kids">Kids</option>
                            </select>
                        </label>
                        <label>
                            Description:
                            <input
                                type="text"
                                name="description"
                                value={newProduct.description}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Sizes:
                            {newProduct.sizes.map((size, index) => (
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
                            {newProduct.images.map((image, index) => (
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
                            <input type="checkbox" name="active" checked={newProduct.active} onChange={handleChange} />
                        </label>
                        <button type="submit" className={cx('submit-button')}>
                            Add Product
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

export default CreateAndUpdate;
