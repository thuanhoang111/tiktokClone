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

import * as userService from '~/services/userService';
import { useEffect, useState } from 'react';

const cx = classnames.bind(style);
const INIT_PAGE = 1;
const PER_PAGE = 5;
function Sidebar() {
   const [page, setPage] = useState(INIT_PAGE);
   const [suggestedUser, setSuggestedUser] = useState([]);

   useEffect(() => {
      userService
         .getSuggested({ page, perPage: PER_PAGE })
         .then((data) => {
            setSuggestedUser((prevUser) => [...prevUser, ...data]);
         })
         .catch((error) => console.log(error));
   }, [page]);
   // console.log(suggestedUser);

   const handleSeeAll = () => {
      setPage(page + 1);
   };

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
         <SuggestedAccount label={'Suggested accounts'} data={suggestedUser} onSeeAll={handleSeeAll} />
         {/* <SuggestedAccount label={'following accounts'} /> */}
         <SuggestedAccount label={'Following accounts'} data={suggestedUser} onSeeAll={handleSeeAll} />
      </aside>
   );
}

export default Sidebar;
