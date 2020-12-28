import React, {useState} from 'react';

import './styles.css';

function SearchPage(){
  const [search, setSearch] = useState('');
  const [searchA, setSearchA] = useState('');
  const [btnSearch, setBtnSearch] = useState('d-hidden');

  function searchActive(a: string){
    setSearch(a);
    a !== '' ? setSearchA('active') : setSearchA('');
    a !== '' ? setBtnSearch('btn-search') : setBtnSearch('d-hidden');
  }

  function searchBook(){
    
  }

  return (
    <div id="SearchPage">
      <div className="src-cont">
        <div className="cntr">
          <div className="cntr-innr">
            <label className={`search ${searchA}`}>
              <input 
                id="inpt_search"
                type="text"
                value={search}
                onChange={(e) => {searchActive(e.target.value)}}
              />
            </label>
          </div>
        </div>
        <a className={btnSearch} onClick={searchBook}><i className="far fa-arrow-alt-circle-right"></i></a>
      </div>
    </div>
  );
}

export default SearchPage;