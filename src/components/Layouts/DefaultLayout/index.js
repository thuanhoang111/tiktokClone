import Header from './Header';
import Sidebar from './Sidebar';
import classnames from 'classnames/bind';
import styte from './DefaultLayout.module.scss';

function DefaultLayout({ children }) {
  const cx = classnames.bind(styte);
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

export default DefaultLayout;
