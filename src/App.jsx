import { Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home'
import DetailBook from './Pages/DetailBook/DetailBook'
import AboutUs from './Pages/AboutUs/AboutUs'
import Layout from './Components/Layout'

import UserProfile from './Pages/User/UserProfile';
import Login from './Components/Login/Login';
import Cart from './Components/Basket/Cart'
import { LoaderFunction } from 'react-router-dom';
import { getBookById } from './services/functions';
import functions from './services/functions'
import './GlobalStyles.css'

function App() {
  async function fetchBook ({params}){
    const book = await getBookById(params.id);
    return {book};
  }
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
