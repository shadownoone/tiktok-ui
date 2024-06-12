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
import Profile from '~/pages/user/Profile';
import ManageOrder from '~/pages/user/ManageOrder';
import Invoice from '~/pages/user/Invoice';

import AdminLayout from '~/components/Layout/Admin/AdminLayout';
import Dashboard from '~/pages/admin/Dashboard';
import AdminProfile from '~/pages/admin/Profile';
import AdminProduct from '~/pages/admin/Product';
import Order from '~/pages/admin/Order';
import User from '~/pages/admin/User';
import Categories from '~/pages/admin/Categories';

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
        path: config.routes.profile,
        component: Profile,
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
    {
        path: config.routes.manageorder,
        component: ManageOrder,
    },
    {
        path: config.routes.invoice,
        component: Invoice,
    },

    //
    {
        path: config.routes.dashboard,
        component: Dashboard,
        layout: AdminLayout, // Sử dụng AdminLayout cho Dashboard
    },
    {
        path: config.routes.adminprofile,
        component: AdminProfile,
        layout: AdminLayout,
    },
    {
        path: config.routes.adminproduct,
        component: AdminProduct,
        layout: AdminLayout,
    },
    {
        path: config.routes.order,
        component: Order,
        layout: AdminLayout,
    },
    {
        path: config.routes.user,
        component: User,
        layout: AdminLayout,
    },
    {
        path: config.routes.categories,
        component: Categories,
        layout: AdminLayout,
    },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
