import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import "./App.css";

function App() {
  return (
    <div class="container">
      <div class="searchbox">
        <input type="text" className="searchbox-input" placeholder="Search..." />
        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
      </div>
    </div>
  );
}

export default App;
