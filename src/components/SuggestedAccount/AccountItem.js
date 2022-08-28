import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './SuggestedAccount.module.scss';
import { Wrapper as PopperWrapper } from '../Popper';
import Tippy from '@tippyjs/react/headless';
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles);
const renderReview = (props) => {
   return (
      <div tabIndex="-1" {...props}>
         <PopperWrapper>
            <div className={cx('preview')}>
               <AccountPreview> </AccountPreview>
            </div>
         </PopperWrapper>
      </div>
   );
};
function AccountItem() {
   return (
      <div>
         <Tippy
            content="name"
            interactive
            delay={[600, 0]}
            placement="bottom-end"
            offset={[-30, 0]}
            render={renderReview}
         >
            <div className={cx('account-item')}>
               <img
                  className={cx('avatar')}
                  alt=""
                  src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t31.18172-8/13072829_1765962146969616_5810442901404310819_o.jpg?stp=dst-jpg_s851x315&_nc_cat=101&ccb=1-7&_nc_sid=da31f3&_nc_ohc=ihmO0jKvvVsAX8schw-&_nc_ht=scontent.fsgn5-14.fna&oh=00_AT-DdM4-dfWrlh6aeOni9B-ApAkKXQ6cK_oWO-xtZo3cqQ&oe=63255F8F"
               />
               <div className={cx('item-info')}>
                  <p className={cx('nickname')}>
                     <strong>TrangTruong</strong>
                     <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                  </p>
                  <p className={cx('name')}>Trương Hồng Ngọc Trang</p>
               </div>
            </div>
         </Tippy>
      </div>
   );
}

AccountItem.propTypes = {};
export default AccountItem;
