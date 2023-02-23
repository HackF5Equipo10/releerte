import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home'
import DetailBook from './Pages/DetailBook/DetailBook'
import AboutUs from './Pages/AboutUs/AboutUs'
import Layout from './Components/Layout'
import UserProfile from './Pages/User/UserProfile';
import Login from './Components/Login/Login';
import Cart from './Components/Basket/Cart'
import './GlobalStyles.css'


function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/book-detail/:id" element={<DetailBook />}/>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/user" element={<UserProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;
