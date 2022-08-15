import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './Menu.module.scss';
// link: dùng điều hường trong local ,Nav dùng để active khi sử dụng Link
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(style);
function MenuItem({ title, to, icon, activeIcon }) {
   return (
      <NavLink
         to={to}
         className={(nav) => {
            return cx('menu-item', { active: nav.isActive });
         }}
      >
         <span className={cx('icon')}>{icon}</span>
         <span className={cx('active-icon')}>{activeIcon}</span>
         <span className={cx('title')}>{title}</span>
      </NavLink>
   );
}
MenuItem.protoTypes = {
   title: PropTypes.string.isRequired,
   to: PropTypes.string.isRequired,
   icon: PropTypes.node.isRequired,
   activeIcon: PropTypes.node.isRequired,
};

export default MenuItem;
