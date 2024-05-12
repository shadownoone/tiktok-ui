//layout

import config from '~/config';
import Home from '~/pages/user/Home';
import Product from '~/pages/user/Product';
import Cart from '~/pages/user/Cart';
import Checkout from '~/pages/user/Checkout';
import Login from '~/pages/user/Login';
import ListProduct from '~/pages/user/ListProduct';
import Register from '~/pages/user/Register';
import Men from '~/pages/user/Men';
import Women from '~/pages/user/Women';

const publicRoutes = [
    {
        path: config.routes.login,
        component: Login,
    },
    {
        path: config.routes.register,
        component: Register,
    },
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.men,
        component: Men,
    },
    {
        path: config.routes.women,
        component: Women,
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
