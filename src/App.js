import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import HotDeals from './Pages/Deals/HotDeals/HotDeals';
import TourGuides from './Pages/Home/Guides/TourGuides';
import Home from './Pages/Home/Home/Home';
import Places from './Pages/Home/Places/Places';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import PlaceDetail from './Pages/PlaceDetail/PlaceDetail';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/places' element={<Places></Places>}></Route>
        <Route path='/place/:placeId' element={<RequireAuth>
          <PlaceDetail></PlaceDetail>
        </RequireAuth>}></Route>
        <Route path='/hot' element={<HotDeals></HotDeals>}></Route>
        <Route path='guides' element={<TourGuides></TourGuides>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
