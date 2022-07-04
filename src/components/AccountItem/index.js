import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
const cx = classNames.bind(styles);
function AccountItem() {
   return (
      <div className={cx('wrapper')}>
         <img
            className={cx('avatar')}
            src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tiktok-obj/1690490892490753.jpeg?x-expires=1657126800&x-signature=KPM%2BYIl6sh99hH8R%2B%2B4BTSVL848%3D"
            alt=""
         />
         <div className={cx('info')}>
            <p className={cx('name')}>
               <span>Hoang Hoa Thuan</span>
               <FontAwesomeIcon className={cx('checkIcon')} icon={faCheckCircle} />
            </p>
            <span className={cx('username')}>Thuấn Hoàng </span>
         </div>
      </div>
   );
}

export default AccountItem;
