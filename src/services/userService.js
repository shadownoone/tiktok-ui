import httpRequest from '~/utils/httpRequest';

const getUserById = async (id) => {
    return await httpRequest.get('/accounts/' + id);
};

const getUserAll = async () => {
    return await httpRequest.get('/accounts/').then((res) => res.data);
};

const createUser = async (data) => {
    return await httpRequest.post('/accounts/', data).then((res) => res.data);
};

const update = async (data) => {
    return await httpRequest.put(`/accounts/${data.id}`, data).then((res) => res.data);
};

export { getUserById, getUserAll, createUser, update };
