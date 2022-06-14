
import './App.scss';
import NavBar from './containers/NavBar/NavBar';
import Main from './containers/Main/Main';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import BeerInfo from './containers/BeerInfo/BeerInfo';

function App() {
  const url = "https://api.punkapi.com/v2/beers"
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={<Main baseURL={url}/>}/>
          <Route path="/beer/:beerId" element={<BeerInfo baseURL={url}/>}/>
          {/* <Route path="/all-beers" element={<BeerList /> }/> */}
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
