import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

// import getSuggested from '~/services/UserService ';
import styles from './SuggestedAccount.module.scss';
import AccountItem from './AccountItem.js';
const cx = classNames.bind(styles);
function SuggestedAccount({ label, data = [], onSeeAll }) {
   return (
      <div className={cx('wrapper')}>
         <p className={cx('label')}>{label}</p>
         {data.map((dataUser) => {
            return <AccountItem key={dataUser.id} data={dataUser}></AccountItem>;
         })}
         <p className={cx('more-btn')} onClick={onSeeAll}>
            {/* {true ? 'see all' : 'see less'} */}
            see all
         </p>
      </div>
   );
}

SuggestedAccount.protoTypes = {
   label: PropTypes.string.isRequired,
   data: PropTypes.array,
   onSeeAll: PropTypes.node.isRequired,
};
export default SuggestedAccount;
