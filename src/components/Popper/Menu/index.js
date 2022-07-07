import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import classNames from 'classnames/bind';
import style from './Menu.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(style);
function Menu({ children, items = [] }) {
   const renderItem = () => {
      return items.map((item, index) => <MenuItem key={index} data={item} />);
   };
   return (
      <Tippy
         delay={[0, 700]}
         interactive
         arrow="true"
         placement="bottom-end"
         render={(attrs) => (
            <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
               <PopperWrapper className={cx('menu-popper')}>{renderItem()}</PopperWrapper>
            </div>
         )}
      >
         {children}
      </Tippy>
   );
}

export default Menu;
