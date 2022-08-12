import './App.css';

import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';

import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">

      <h1>
        React com Context API
      </h1>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/about' element={<About />}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
