// public router
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import HeaderOnly from '~/components/Layouts/HeaderOnly';

const publicRouter = [
   {
      path: '/',
      component: Home,
   },
   {
      path: '/following',
      component: Following,
   },
   {
      path: '/@:nickname',
      component: Profile,
   },
   {
      path: '/upload',
      component: Upload,
      layout: null,
   },
   {
      path: '/upload1',
      component: Upload,
      layout: HeaderOnly,
   },
];

const privateLayout = [];
export { publicRouter };
