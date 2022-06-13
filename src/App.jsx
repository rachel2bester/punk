
import './App.scss';
import NavBar from './containers/NavBar/NavBar';
import Main from './containers/Main/Main';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import BeerInfo from './containers/BeerInfo/BeerInfo';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/beer/:beerId" element={<BeerInfo/>}/>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
