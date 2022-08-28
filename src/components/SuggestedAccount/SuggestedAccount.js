import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem.js';
const cx = classNames.bind(styles);
function SuggestedAccount({ label }) {
   return (
      <div className={cx('wrapper')}>
         <p className={cx('label')}>{label}</p>
         <AccountItem />
         <AccountItem />
         <AccountItem />
         <p className={cx('more-btn')}>see all</p>
      </div>
   );
}
SuggestedAccount.protoTypes = {
   label: PropTypes.string.isRequired,
};
export default SuggestedAccount;
