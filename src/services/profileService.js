import httpRequest from '~/utils/httpRequest';

const getUserById = async (id) => {
    console.log(id);
    return await httpRequest.get('/customers/' + id);
};

export { getUserById };
