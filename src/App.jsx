import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import data from './data';
import "./App.css";

function App() {
  return (
    <div>
    <div class="container">
      <div class="searchbox">
        <input type="text" className="searchbox-input" placeholder="Search..." />
        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
      </div>
    </div>
    <div className='container-list'>
      <ul className='list'>
          <li className='listItem'>{data[0].book}</li>
          <li className='listItem'>{data[1].book}</li>
          <li className='listItem'>{data[2].book}</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
