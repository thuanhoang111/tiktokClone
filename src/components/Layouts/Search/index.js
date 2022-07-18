import AccountItem from '~/components/AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import HeaderlessTippy from '@tippyjs/react/headless';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faL } from '@fortawesome/free-solid-svg-icons';
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
   const [loading, setLoading] = useState(false);

   const searchRef = useRef();

   useEffect(() => {
      if (!searchValue.trim()) {
         setSearchResult('');
         return;
      }
      setLoading(true);
      fetch('https://tiktok.fullstack.edu.vn/api/users/search?q=' + encodeURIComponent(searchValue) + '&type=less')
         .then((res) => res.json())
         .then((res) => {
            setSearchResult(res.data);
            setLoading(false);
         })
         .catch(() => {
            setLoading(false);
         });
   }, [searchValue]);
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
                  {searchResult.length > 0 &&
                     searchResult.map((value) => {
                        return <AccountItem key={value.id} data={value} />;
                     })}
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
               onChange={(e) => {
                  if (e.nativeEvent.data === ' ' && searchValue === '') {
                     return false;
                  }
                  setSearchValue(e.target.value);
               }}
               onFocus={() => {
                  setShowResult(true);
               }}
            />
            {!!searchValue && !loading && (
               <button className={cx('clear')}>
                  <FontAwesomeIcon icon={faCircleXmark} onClick={HandleClear} />
               </button>
            )}
            {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}{' '}
            <button className={cx('search-btn')}>
               <SearchIcon />
            </button>
         </div>
      </HeaderlessTippy>
   );
}

export default Search;
