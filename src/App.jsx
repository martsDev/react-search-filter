import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import data from './data';
import "./App.css";
import { useState } from 'react';

function App() {

  const [item, setItem] = useState("");


  return (
    <div>
      <div className="container">
        <div className="searchbox">
          <input 
            type="text" 
            className="searchbox-input" 
            placeholder="Search..."
            onChange={(e) => setItem(e.target.value)} 
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
        </div>
      </div>
      <div className='container-list'>
        <ul className='list'>
          {data.filter((title) => title.book.toLowerCase().includes(item)
          ).map((title) => <li>{title.book}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
