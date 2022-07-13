import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faEllipsisVertical,
   faEarthAsia,
   faCircleQuestion,
   faKeyboard,
   faUser,
   faCoins,
   faGear,
   faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import AvatarUser from '~/assets/image/MyGirlFriend.jpg';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import style from './Header.module.scss';
import images from '~/assets/image';

import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../../Search';
const cx = classNames.bind(style);
const MENU_ITEMS = [
   {
      icon: <FontAwesomeIcon icon={faEarthAsia} />,
      title: 'English',
      children: {
         title: 'Language',
         data: [
            {
               type: 'Language',
               code: 'en',
               title: 'English',
            },
            {
               type: 'Language',
               code: 'vi',
               title: 'Tiếng Việt',
            },
         ],
      },
   },
   {
      icon: <FontAwesomeIcon icon={faCircleQuestion} />,
      title: 'Feedback and help',
      to: '/feedback',
   },
   {
      icon: <FontAwesomeIcon icon={faKeyboard} />,
      title: 'keyboard shortcuts',
   },
];
function Header() {
   const currentUser = true;

   const handleMenuChange = (MenuItem) => {
      switch (MenuItem.value) {
         case 'Language':
            // Handle change menu
            break;

         default:
            break;
      }
   };
   const userMenu = [
      {
         icon: <FontAwesomeIcon icon={faUser} />,
         title: 'View profile',
         to: '/@Trang',
      },
      {
         icon: <FontAwesomeIcon icon={faCoins} />,
         title: 'Get coin',
         to: '/coin',
      },
      {
         icon: <FontAwesomeIcon icon={faGear} />,
         title: 'Settings',
         to: '/settings',
      },
      ...MENU_ITEMS,
      {
         icon: <FontAwesomeIcon icon={faSignOut} />,
         title: 'Log out',
         to: '/logout',
         separate: true,
      },
   ];
   return (
      <header className={cx('wrapper')}>
         <div className={cx('inner')}>
            <div className={cx('logo')}>
               <img src={images.logo} alt="ko có hình " />
            </div>
            {/* search */}
            <Search />
            <div className={cx('actions')}>
               {currentUser ? (
                  <>
                     <Tippy delay={(0, 200)} content="upload video">
                        <button className={cx('action-btn')}>
                           <UploadIcon />
                        </button>
                     </Tippy>
                     <Tippy content="messenger">
                        <button className={cx('action-btn')}>
                           <MessageIcon />
                        </button>
                     </Tippy>
                     <Tippy content="inbox">
                        <button className={cx('action-btn')}>
                           <InboxIcon />
                           <span className={cx('badge')}>12</span>
                        </button>
                     </Tippy>
                  </>
               ) : (
                  <>
                     <Button>Upload</Button>
                     <Button primary>Log in</Button>
                  </>
               )}
               <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                  {currentUser ? (
                     <Image
                        className={cx('user-avatar')}
                        alt="Trương Hồng Ngọc Trang"
                        src={AvatarUser}
                        // đoạn dưới dùng để lấy icon user Fallback(ko có sẽ lấy mặc định)
                        fallback={
                           'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/46b7a83ce9b1a2be879654e46d46cdec~c5_100x100.jpeg?x-expires=1657818000&x-signature=5hUcLp6sjdV7prNaNjqQkeUyE%2BM%3D'
                        }
                     />
                  ) : (
                     <button className={cx('more-btn')}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                     </button>
                  )}
               </Menu>
            </div>
         </div>
      </header>
   );
}

export default Header;
