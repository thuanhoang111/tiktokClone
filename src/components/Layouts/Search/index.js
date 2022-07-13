import AccountItem from '~/components/AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import HeaderlessTippy from '@tippyjs/react/headless';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import style from './Search.module.scss';
import { SearchIcon } from '~/components/Icons';
import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const cx = classNames.bind(style);
function Search() {
   const [searchValue, setSearchValue] = useState('');
   const [searchResult, setSearchResult] = useState([]);
   const [showResult, setShowResult] = useState(true);

   const searchRef = useRef();

   useEffect(() => {
      setTimeout(() => {
         setSearchResult([1]);
      }, 0);
   }, []);
   const HandleClear = () => {
      setSearchValue('');

      searchRef.current.focus();
      setSearchResult('');
   };
   const handleHideResult = () => {
      setShowResult(false);
   };
   return (
      <HeaderlessTippy
         interactive
         visible={showResult && searchResult.length > 0}
         render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
               <PopperWrapper>
                  <h4 className={cx('search-title')}>Accounts</h4>
                  <AccountItem />
                  <AccountItem />
                  <AccountItem />
                  <AccountItem />
               </PopperWrapper>
            </div>
         )}
         onClickOutside={handleHideResult}
      >
         <div className={cx('search')}>
            <input
               ref={searchRef}
               value={searchValue}
               placeholder="search accounts and video"
               spellCheck={false}
               onChange={(e) => setSearchValue(e.target.value)}
               onFocus={() => {
                  setShowResult(true);
               }}
            />
            {!!searchValue && (
               <button className={cx('clear')}>
                  <FontAwesomeIcon icon={faCircleXmark} onClick={HandleClear} />
               </button>
            )}
            {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
            <button className={cx('search-btn')}>
               <SearchIcon />
            </button>
         </div>
      </HeaderlessTippy>
   );
}

export default Search;
