import { Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home'
import DetailBook from './Pages/DetailBook/DetailBook'
import AboutUs from './Pages/AboutUs/AboutUs'
import Layout from './Components/Layout'
import BasketList1 from './Components/Basket/BasketList1';
import UserProfile from './Pages/User/UserProfile';
import Login from './Components/Login/Login';

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
        <Route path="/basket" element={<BasketList1 />} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;
