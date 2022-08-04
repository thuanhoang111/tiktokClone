import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import style from './Button.module.scss';
import PropTypes from 'prop-types';
const cx = classNames.bind(style);

function Button({
   to,
   href,
   primary = false,
   outline = false,
   rounded = false,
   text = false,
   disable = false,
   small = false,
   large = false,
   children,
   leftIcon,
   rightIcon,
   className,
   onClick,
   ...passProp
}) {
   let Comp = 'button';
   const prop = {
      onClick,
      ...passProp,
   };
   //remove event listenner when btn is disabled
   if (disable) {
      Object.keys(prop).forEach((key) => {
         if (key.startsWith('on') && typeof prop[key] === 'function') {
            delete prop[key];
         }
      });
   }
   if (to) {
      prop.to = to;
      Comp = Link;
   } else if (href) {
      prop.href = href;
      Comp = 'a';
   }
   const classes = cx('wrapper', { primary, outline, small, large, disable, rounded, [className]: className });
   return (
      <Comp className={classes} {...prop}>
         {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
         <span className={cx('title')}>{children}</span>
         {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
      </Comp>
   );
}
// kiểm tra kiểu dữ liệu của children
Button.propTypes = {
   to: PropTypes.string,
   href: PropTypes.string,
   primary: PropTypes.bool,
   outline: PropTypes.bool,
   rounded: PropTypes.bool,
   text: PropTypes.bool,
   disable: PropTypes.bool,
   small: PropTypes.bool,
   large: PropTypes.bool,
   children: PropTypes.node.isRequired,
   leftIcon: PropTypes.node,
   rightIcon: PropTypes.node,
   className: PropTypes.string,
   onClick: PropTypes.func,
};
export default Button;
