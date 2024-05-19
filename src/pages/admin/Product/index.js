import React, { useState, useEffect } from 'react';
import {
    Typography,
    Button,
    Table,
    TableContainer,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
} from '@mui/material';

function Product() {
    // State to store list of products
    const [products, setProducts] = useState([]);

    // Function to fetch products from backend
    const fetchProducts = async () => {
        try {
            // Make API call to fetch products
            const response = await fetch('/api/products');
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    // useEffect hook to fetch products when component mounts
    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Product Management
            </Typography>
            <Button variant="contained" color="primary" style={{ marginBottom: '16px' }}>
                Add Product
            </Button>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{product.description}</TableCell>
                                <TableCell>${product.price}</TableCell>
                                <TableCell>
                                    <Button variant="outlined" color="primary" style={{ marginRight: '8px' }}>
                                        Edit
                                    </Button>
                                    <Button variant="outlined" color="secondary">
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default Product;
