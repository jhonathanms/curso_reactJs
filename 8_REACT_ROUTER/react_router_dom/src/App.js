import './App.css';

// 1- Config React router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// components
import Navbar from './components/Navbar';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import SearchForm from './components/SearchForm';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>

      <BrowserRouter>
        <Navbar /> {/* Devido ter componentes Router, ele deve ficar dentro deste bloco do BrowerRoute */}

        <SearchForm />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />

          {/* Rota dinamica */}
          <Route path='/products/:id' element={<Product />}></Route>
          <Route path='/products/:id/info' element={<Info />}></Route>
          <Route path='/search' element={<Search />}></Route>

          {/* Redireciona a rota, usado quando uma rota fica obsoleta e para não desfazer do link, utiliza-se o roteamento. */}
          <Route path='/company' element={<Navigate to="/about" />}></Route>
          {/*  Notfound */}
          <Route path='*' element={<NotFound />}></Route>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
