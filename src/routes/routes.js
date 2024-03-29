// import config from '~/config';
// pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import HeaderOnly from '~/Layouts/HeaderOnly';
import config from '../config/index';
import Live from '~/Layouts/Live';
import DefaultLayout from '~/Layouts/DefaultLayout';

// public router

const publicRouter = [
   {
      path: config.routes.home,
      component: Home,
   },
   {
      path: config.routes.following,
      component: Following,
   },
   {
      path: config.routes.profile,
      component: Profile,
   },
   {
      path: config.routes.upload,
      component: Upload,
      layout: null,
   },
   {
      path: config.routes.search,
      component: Upload,
      layout: HeaderOnly,
   },
   {
      path: config.routes.live,
      component: Live,
      // layout: DefaultLayout,
   },
];

const privateLayout = [];
export { publicRouter, privateLayout };
