
import './App.scss';
import NavBar from './containers/NavBar/NavBar';
import Main from './containers/Main/Main';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import BeerInfo from './containers/BeerInfo/BeerInfo';
import Home from './containers/Home/Home';

function App() {
  const url = "https://api.punkapi.com/v2/beers"
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home url={url}/>}/>
          <Route path="/beers" element={<Main title="All Beers" start="all" baseURL={url}/>}/>
          <Route path="/beers/high-alc" element={<Main title="All Beers" start="high-alc" baseURL={url}/>}/>
          <Route path="/beers/classic" element={<Main title="All Beers" start="classic" baseURL={url}/>}/>
          <Route path="/beers/:beerId" element={<BeerInfo baseURL={url}/>}/>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
