import React from 'react';
import './styles.css';

function SearchPage(){
  return (
    <div id="SearchPage">
      <h1>Página de busca</h1>
      <div className="cntr">
        <div className="cntr-innr">
          <label className="search" htmlFor="inpt_search">
            <input id="inpt_search" type="text" />
          </label>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;