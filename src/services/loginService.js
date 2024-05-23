import httpRequest from '~/utils/httpRequest';

const login = async (data) => {
    return await httpRequest.post('/auth/login', data).then((res) => res.data);
};

export default login;
