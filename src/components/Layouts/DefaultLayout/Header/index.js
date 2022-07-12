import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faCircleXmark,
   faSpinner,
   faMagnifyingGlass,
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
import { useEffect, useState } from 'react';
import HeadelessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import style from './Header.module.scss';
import images from '~/assets/image';
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
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
   const [searchResult, setSearchResult] = useState([]);
   useEffect(() => {
      setTimeout(() => {
         setSearchResult([]);
      }, 0);
   }, []);
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
            <HeadelessTippy
               interactive
               visible={searchResult.length > 0}
               render={(attrs) => (
                  <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                     <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                     </PopperWrapper>
                  </div>
               )}
            >
               <div className={cx('search')}>
                  <input placeholder="search accounts and video" spellCheck={false} />
                  <button className={cx('clear')}>
                     <FontAwesomeIcon icon={faCircleXmark} />
                  </button>
                  <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                  <button className={cx('search-btn')}>
                     <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
               </div>
            </HeadelessTippy>
            <div className={cx('actions')}>
               {currentUser ? (
                  <>
                     <Tippy delay={(0, 200)} content="upload video" trigger="click">
                        <button className={cx('action-btn')}>
                           <UploadIcon />
                        </button>
                     </Tippy>
                     <Tippy content="messenger">
                        <button className={cx('action-btn')}>
                           <MessageIcon />
                        </button>
                     </Tippy>
                     <Tippy content="messenger">
                        <button className={cx('action-btn')}>
                           <InboxIcon />
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
