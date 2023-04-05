

import { NoSidebar } from '../layouts';
import {Home, Test}  from '../Pages'

const publicRoutes = [
    { path: '/', component: Home, layout: NoSidebar },
    { path: '/login', component: Home, layout: null },
    { path: '/test', component: Test },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
