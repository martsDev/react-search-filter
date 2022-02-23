import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import axios from "axios";
import Table from './Table';
// import data from './data';
import "./App.css";

function App() {

  const [item, setItem] = useState("");
  const [book, setBook] = useState([]);

  const keys = ["book", "author"];

  // const search = (data) => {
  //   return data.filter((titles) => 
  //     keys.some((key) => titles[key].toLowerCase().includes(item))
  //   );
  // };

  
  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get(`http://localhost:3001?q=${item}`)
      setBook(res.data);
    };
    if(item.length === 0 || item.length > 2) fetchBooks();
  }, [item]);

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

       {/* <Table data={search(data)} /> */}

       {/* FILTRO AVANÇADO COM API */}

       <Table data={book} />

      </div>
    </div>
  );
}

export default App;
