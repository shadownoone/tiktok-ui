import httpRequest from '~/utils/httpRequest';

const getProductBySlug = async (id) => {
    return await httpRequest.get('/shoes/' + id).then((res) => res.data);
};
const getProductAll = async () => {
    return await httpRequest.get('/shoes/').then((res) => res.data);
};

const createProduct = async (data) => {
    return await httpRequest.post('/shoes/', data).then((res) => res.data);
};

const updateProduct = async (data) => {
    return await httpRequest.put('/shoes/', data.id, data).then((res) => res.data);
};

const deleteProduct = async (id) => {
    return await httpRequest.delete('/shoes/' + id).then((res) => res.data);
};

export { getProductBySlug, getProductAll, createProduct, updateProduct, deleteProduct };
