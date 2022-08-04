import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import style from './Button.module.scss';
import { PropTypes } from 'prop-types';

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
   children: PropTypes.node.isRequired,
};
export default Button;
