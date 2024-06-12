import httpRequest from '~/utils/httpRequest';

const getProductBySlug = async (id) => {
    return await httpRequest.get('/shoes/' + id).then((res) => res.data);
};
const getProductAll = async (categoryID) => {
    return await httpRequest
        .get('/shoes/', {
            params: {
                categoryID: categoryID,
            },
        })
        .then((res) => res.data);
};

const createProduct = async (data) => {
    return await httpRequest.post('/shoes/', data).then((res) => res.data);
};

const updateProduct = async (id, newData) => {
    return await httpRequest.put(`/shoes/${id}`, newData).then((res) => res.data);
};

const deleteProduct = async (id) => {
    return await httpRequest.delete('/shoes/' + id).then((res) => res.data);
};

export { getProductBySlug, getProductAll, createProduct, updateProduct, deleteProduct };
