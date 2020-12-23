import React from 'react';
import './global.css';

import SearchPage from './pages/SearchPage';
import BookPage from './pages/BookPage';

function App() {
  return (
    <div>
      <div className="topbar">
        <div className="left">Books</div>
        <div className="right">
          <a href="https://github.com/TaylorHo/book"><i className="fab fa-github"></i> GitHub</a>
        </div>
      </div>

      <div className="container">
        <SearchPage/>
        <BookPage/>
      </div>

      <div className="help"><i className="fas fa-question-circle"></i></div>
    </div>
  );
}

export default App;