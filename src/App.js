import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import HotDeals from './Pages/Deals/HotDeals/HotDeals';
import TourGuides from './Pages/Home/Guides/TourGuides';
import Home from './Pages/Home/Home/Home';
import Places from './Pages/Home/Places/Places';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/places' element={<Places></Places>}></Route>
        <Route path='/hot' element={<HotDeals></HotDeals>}></Route>
        <Route path='guides' element={<TourGuides></TourGuides>}></Route>
        <Route path='/about' element={<About></About>}></Route>

      </Routes>
    </div>
  );
}

export default App;
