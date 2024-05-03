//layout

import config from '~/config';
import Home from '~/pages/Home';
import Product from '~/pages/Product';
import Cart from '~/pages/Cart';
import Checkout from '~/pages/Checkout';
import Login from '~/pages/Login';
import ListProduct from '~/pages/ListProduct';

const publicRoutes = [
    {
        path: config.routes.login,
        component: Login,
    },
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.listproduct,
        component: ListProduct,
    },
    {
        path: config.routes.product,
        component: Product,
    },
    {
        path: config.routes.cart,
        component: Cart,
    },
    {
        path: config.routes.checkout,
        component: Checkout,
    },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
