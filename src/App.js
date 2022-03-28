import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import {  Navbar } from './components';
import {Home, Cryptocurrencies, Exchanges, CoinDetails, News} from './pages';
import { Footer } from './containers';


function App() {
  return (
    <div className="App">
      <Router>

        <Navbar/>
        
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/cryptocurrencies" element={<Cryptocurrencies/>}/>
          <Route exact path="/exchanges" element={<Exchanges/>} />
          <Route exact path="/cryptocurrencies/:id" element={<CoinDetails/>} />
          <Route exact path="/news" element={<News/>} />
        </Routes>
        
        <Footer/>

      </Router>
    </div>
  );
}

export default App;
