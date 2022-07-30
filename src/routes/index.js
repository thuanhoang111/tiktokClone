import routes from '~/config/routes';
// pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import HeaderOnly from '~/components/Layouts/HeaderOnly';

// public router

const publicRouter = [
   {
      path: routes.home,
      component: Home,
   },
   {
      path: routes.following,
      component: Following,
   },
   {
      path: routes.profile,
      component: Profile,
   },
   {
      path: routes.upload,
      component: Upload,
      layout: null,
   },
   {
      path: routes.search,
      component: Upload,
      layout: HeaderOnly,
   },
];

const privateLayout = [];
export { publicRouter };
