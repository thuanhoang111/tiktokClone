import style from './Sidebar.module.scss';
import classnames from 'classnames/bind';
import {
   HomeIcon,
   UserGroupActiveIcon,
   LiveActiveIcon,
   HomeActiveIcon,
   UserGroupIcon,
   LiveIcon,
} from '~/components/Icons';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import SuggestedAccount from '~/components/SuggestedAccount';
function Sidebar() {
   const cx = classnames.bind(style);
   return (
      <aside className={cx('wrapper')}>
         <Menu>
            <MenuItem title="For you" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
            <MenuItem
               title="Following"
               to={config.routes.following}
               icon={<UserGroupIcon />}
               activeIcon={<UserGroupActiveIcon />}
            />
            <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
         </Menu>
         <SuggestedAccount label={'Suggested accounts'} />
         <SuggestedAccount label={'following accounts'} />
      </aside>
   );
}

export default Sidebar;
