import httpRequest from '~/utils/httpRequest';

// const getOrderBySlug = async (id) => {
//     return await httpRequest.get('/users/' + id).then((res) => res.data);
// };

const getOrderById = async (id) => {
    return await httpRequest.get('/orders/' + id);
};

const getOrderAll = async () => {
    return await httpRequest.get('/orders/').then((res) => res.data);
};

const createOrder = async (data) => {
    return await httpRequest.post('/orders/', data).then((res) => res.data);
};

const updateOrder = async (data) => {
    return await httpRequest.put('/orders/', data.id, data).then((res) => res.data);
};

export { getOrderById, getOrderAll, createOrder, updateOrder };
