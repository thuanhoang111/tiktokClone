import Header from '../Header';
import Sidebar from '../Sidebar';
import classnames from 'classnames/bind';
import style from './DefaultLayout.module.scss';
import PropTypes from 'prop-types';
function DefaultLayout({ children }) {
   const cx = classnames.bind(style);
   return (
      <div className={cx('wrapper')}>
         <Header />
         <div className={cx('container')}>
            <Sidebar />
            <div className={cx('content')}>{children}</div>
         </div>
      </div>
   );
}
DefaultLayout.propTypes = {
   children: PropTypes.node.isRequired,
};

export default DefaultLayout;
