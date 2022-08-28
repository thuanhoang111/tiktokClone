import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountPreview() {
   return (
      <div className={cx('wrapper')}>
         <div className={cx('header')}>
            <img
               className={cx('avatar')}
               src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t31.18172-8/13072829_1765962146969616_5810442901404310819_o.jpg?stp=dst-jpg_s851x315&_nc_cat=101&ccb=1-7&_nc_sid=da31f3&_nc_ohc=ihmO0jKvvVsAX8schw-&_nc_ht=scontent.fsgn5-14.fna&oh=00_AT-DdM4-dfWrlh6aeOni9B-ApAkKXQ6cK_oWO-xtZo3cqQ&oe=63255F8F"
               alt=""
            />
            <Button primary>Following</Button>
         </div>
         <div className={cx('body')}>
            <p className={cx('nickname')}>
               <strong>TrangTruong</strong>
               <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </p>
            <p className={cx('name')}>Trương Hồng Ngọc Trang</p>
            <p className={cx('analytics')}>
               <strong className={cx('value')}>10.9k</strong>
               <span className={cx('label')}>Followers</span>
               <strong className={cx('value')}>10.9k</strong>
               <span className={cx('label')}>like</span>
            </p>
         </div>
      </div>
   );
}

export default AccountPreview;
