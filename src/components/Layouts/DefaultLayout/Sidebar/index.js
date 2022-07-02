import style from './Sidebar.module.scss';
import classnames from 'classnames/bind';
function Sidebar() {
  const cx = classnames.bind(style);
  return (
    <aside className={cx('wrapper')}>
      <h1>Thuanhoang</h1>
    </aside>
  );
}

export default Sidebar;
