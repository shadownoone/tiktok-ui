import httpRequest from '~/utils/httpRequest';

const getCourseBySlug = async (id) => {
    return await httpRequest.get('/users/' + id).then((res) => res.data);
};

export { getCourseBySlug };
