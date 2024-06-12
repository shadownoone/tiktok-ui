import React, { useState, useEffect } from 'react';
import * as shoeService from '~/services/shoeService';

const Update = ({ productId, onClose }) => {
    const [product, setProduct] = useState({
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
        shoeService.getProductBySlug(productId).then((res) => {
            if (res) {
                setProduct(res);
            }
        });
    }, [productId]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setProduct({
            ...product,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSizeChange = (index, value) => {
        const updatedSizes = product.sizes.map((size, i) => (i === index ? value : size));
        setProduct({
            ...product,
            sizes: updatedSizes,
        });
    };

    const handleImageChange = (index, value) => {
        const newImages = product.images.map((image, i) => (i === index ? value : image));
        setProduct({
            ...product,
            images: newImages,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await shoeService.updateProduct(productId, product);
        onClose();
    };

    // Render loading state while waiting for product data
    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Update Product</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="product_name" value={product.product_name} onChange={handleChange} />
                <input type="text" name="sku" value={product.sku} onChange={handleChange} />
                <input type="text" name="description" value={product.description} onChange={handleChange} />
                <input type="number" name="price" value={product.price} onChange={handleChange} />
                <input type="number" name="discount_price" value={product.discount_price} onChange={handleChange} />
                <input type="number" name="stock_quantity" value={product.stock_quantity} onChange={handleChange} />
                <input type="text" name="gender" value={product.gender} onChange={handleChange} />
                <input type="checkbox" name="active" checked={product.active} onChange={handleChange} />
                {product.sizes &&
                    product.sizes.length > 0 &&
                    product.sizes.map((size, index) => (
                        <input
                            key={index}
                            type="text"
                            value={size}
                            onChange={(e) => handleSizeChange(index, e.target.value)}
                        />
                    ))}
                <button type="button" onClick={() => setProduct({ ...product, sizes: [...product.sizes, ''] })}>
                    Add Size
                </button>
                {product.images &&
                    product.images.length > 0 &&
                    product.images.map((image, index) => (
                        <input
                            key={index}
                            type="text"
                            value={image}
                            onChange={(e) => handleImageChange(index, e.target.value)}
                        />
                    ))}
                <button type="button" onClick={() => setProduct({ ...product, images: [...product.images, ''] })}>
                    Add Image
                </button>
                <button type="submit">Update Product</button>
            </form>
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default Update;
