import AccountItem from '~/components/AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import HeaderlessTippy from '@tippyjs/react/headless';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faL } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import * as searchService from '~/services/searchService';
import style from './Search.module.scss';
import { SearchIcon } from '~/components/Icons';
import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDebounce } from '~/Hooks';
const cx = classNames.bind(style);
function Search() {
   const [searchValue, setSearchValue] = useState('');
   const [searchResult, setSearchResult] = useState([]);
   const [showResult, setShowResult] = useState(true);
   const [loading, setLoading] = useState(false);

   const searchRef = useRef();
   const debounce = useDebounce(searchValue, 500);

   useEffect(() => {
      if (!debounce.trim()) {
         setSearchResult('');
         return;
      }

      const fetchApi = async () => {
         setLoading(true);
         const result = await searchService.search(debounce);
         setSearchResult(result);
         setLoading(false);
      };
      fetchApi();
   }, [debounce]);

   const HandleClear = () => {
      setSearchValue('');

      searchRef.current.focus();
      setSearchResult('');
   };
   const handleHideResult = () => {
      setShowResult(false);
   };
   // ko cho dấu cách ở đầu ô input
   const handleChange = (e) => {
      const searchValue = e.target.value;
      if (!searchValue.startsWith(' ') || searchValue.trim()) {
         setSearchValue(searchValue);
      }
   };

   const handleSubmit = (e) => {
      e.preventDefault();
   };
   return (
      // Using a wrapper <div>tag around the reference element solves this by creating a new parentNode context.
      <div>
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
                  onChange={(e) => handleChange(e)}
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
               <button className={cx('search-btn')} onMouseDown={(e) => handleSubmit(e)}>
                  <SearchIcon />
               </button>
            </div>
         </HeaderlessTippy>
      </div>
   );
}

export default Search;
