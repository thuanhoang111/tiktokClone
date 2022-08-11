import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import classNames from 'classnames/bind';

import style from './Menu.module.scss';
import Header from './Header';
import MenuItem from './MenuItem';
import { useState } from 'react';
import { PropTypes } from 'prop-types';

const cx = classNames.bind(style);
const defaultfn = () => {};
function Menu({ children, hideOnClick = 'false', items = [], onChange = defaultfn }) {
   const [history, setHistory] = useState([{ data: items }]);
   const current = history[history.length - 1];
   const renderItem = () => {
      return current.data.map((item, index) => {
         const isParent = !!item.children;
         return (
            <MenuItem
               key={index}
               data={item}
               onClick={() => {
                  if (isParent) {
                     setHistory((prev) => [...prev, item.children]);
                  } else {
                     onChange(item);
                  }
               }}
            />
         );
      });
   };
   const handleBack = () => {
      setHistory((prev) => prev.slice(0, prev.length - 1));
   };
   const renderResult = (attrs) => (
      <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
         <PopperWrapper className={cx('menu-popper')}>
            {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
            <div className={cx('menu-body')}>{renderItem()}</div>
         </PopperWrapper>
      </div>
   );
   // reset to first page
   const handleResetMenu = () => {
      setHistory((prev) => prev.slice(0, 1));
   };
   return (
      <Tippy
         delay={[0, 700]}
         interactive
         offset={[20, 10]}
         arrow="true"
         placement="bottom-end"
         hideOnClick={hideOnClick}
         render={renderResult}
         onHide={handleResetMenu}
      >
         {children}
      </Tippy>
   );
}
Menu.propTypes = {
   children: PropTypes.node.isRequired,
   hideOnClick: PropTypes.bool,
   items: PropTypes.array,
   onChange: PropTypes.func,
};
export default Menu;
