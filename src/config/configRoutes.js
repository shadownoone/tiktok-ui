const routes = {
    login: '/login',
    home: '/',
    men: '/men',
    women: '/women',
    listproduct: '/listproduct/:categoryID',
    product: '/product/:id',
    cart: '/cart',
    checkout: '/checkout',
    register: '/register',
    profile: '/profile',
    manageorder: '/manageorder/:customerId',
    invoice: '/invoice/:customerId',

    dashboard: '/admin/dashboard',
    adminprofile: '/admin/profile',
    adminproduct: '/admin/product',
    order: '/admin/order',
    user: '/admin/user',
    categories: '/admin/categories',

    notFound: '/not-found',
};

export default routes;
