import httpRequest from '~/utils/httpRequest';

const getProductBySlug = async (id) => {
    return await httpRequest.get('/shoes/' + id).then((res) => res.data);
};

export { getProductBySlug };
