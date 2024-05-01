//layout

import config from '~/config';
import Home from '~/pages/Home';
import Product from '~/pages/Product';
import Cart from '~/pages/Cart';

const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.product,
        component: Product,
    },
    {
        path: config.routes.cart,
        component: Cart,
    },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
