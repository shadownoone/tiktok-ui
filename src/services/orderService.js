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

const deleteOrder = async (id) => {
    return await httpRequest.delete('/orders/' + id).then((res) => res.data);
};

const updateOrderStatus = async (id, status) => {
    return await httpRequest.put('/orders/' + id + '/status', { status }).then((res) => res.data);
};

const getOrderByCustomerID = async (customerId) => {
    return await httpRequest.get('/orders/' + customerId).then((res) => res.data);
};

export { getOrderById, getOrderAll, createOrder, updateOrder, deleteOrder, updateOrderStatus, getOrderByCustomerID };
