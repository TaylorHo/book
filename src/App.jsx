import React from 'react';
import './styles/global.css';

function App() {
  return (
    <div>
      <div className="topbar">
        <div className="left">Books</div>
        <div className="right">
          <a href="#"><i className="fab fa-github"></i> GitHub</a>
        </div>
      </div>

      <div id="container"></div>

      <div className="help"><i className="fas fa-question-circle"></i></div>
    </div>
  );
}

export default App;