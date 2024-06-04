import httpRequest from '~/utils/httpRequest';

// const getCategoriesBySlug = async (id) => {
//     return await httpRequest.get('/users/' + id).then((res) => res.data);
// };

const getCategoriesById = async (id) => {
    return await httpRequest.get('/categories/' + id);
};

const getCategoriesAll = async () => {
    return await httpRequest.get('/categories/').then((res) => res.data);
};

const createCategories = async (data) => {
    return await httpRequest.post('/categories/', data).then((res) => res.data);
};

const updateCategories = async (data) => {
    return await httpRequest.put('/categories/', data.id, data).then((res) => res.data);
};

export { getCategoriesById, getCategoriesAll, createCategories, updateCategories };
