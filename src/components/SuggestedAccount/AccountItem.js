import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './SuggestedAccount.module.scss';
import { Wrapper as PopperWrapper } from '../Popper';
import Tippy from '@tippyjs/react/headless';
import AccountPreview from './AccountPreview/AccountPreview';
import Image from '../Image';

const cx = classNames.bind(styles);
function AccountItem({ data }) {
   const renderReview = (props) => {
      return (
         <div tabIndex="-1" {...props}>
            <PopperWrapper>
               <div className={cx('preview')}>
                  <AccountPreview data={data}> </AccountPreview>
               </div>
            </PopperWrapper>
         </div>
      );
   };
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
               <Image className={cx('avatar')} alt={data.nickname} src={data.avatar} />
               <div className={cx('item-info')}>
                  <p className={cx('nickname')}>
                     <strong>{data.nickname}</strong>
                     {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                  </p>
                  <p className={cx('name')}>{data.first_name + ' ' + data.last_name}</p>
               </div>
            </div>
         </Tippy>
      </div>
   );
}

AccountItem.propTypes = {
   data: PropTypes.object.isRequired,
};
export default AccountItem;
