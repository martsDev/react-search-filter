import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Table from './Table';
import "./App.css";

function App() {

  const [item, setItem] = useState("");

  const keys = ["book", "author"];

  const search = (data) => {
    return data.filter((titles) => 
      keys.some((key) => titles[key].toLowerCase().includes(item))
    );
  };

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

        {/* FILTRO BÁSICO */}

        {/* <ul className='list'>
          {data.filter((title) => title.book.toLowerCase().includes(item)
          ).map((title) => <li>{title.book}</li>)}
        </ul> */}

        {/* FILTRO INTERMEDIÁRIO */}

       <Table data={[]} />

      </div>
    </div>
  );
}

export default App;
