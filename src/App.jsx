
import './App.scss';
import NavBar from './containers/NavBar/NavBar';
import AllBeers from './containers/Main/Main';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import BeerInfo from './containers/BeerInfo/BeerInfo';

function App() {
  const url = "https://api.punkapi.com/v2/beers"
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/beers" element={<AllBeers title="All Beers" baseURL={url}/>}/>
          <Route path="/beers/high-alcohol" element={<AllBeers title="High Alcohol Beers" baseURL={url + "?abv_gt=6"}/>}/>
          <Route path="/beers/classic" element={<AllBeers title="Classic Beers" baseURL={url + "?brewed_before=01-2010"}/>}/>
          <Route path="/beers/:beerId" element={<BeerInfo baseURL={url}/>}/>
          {/* <Route path="/all-beers" element={<BeerList /> }/> */}
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
