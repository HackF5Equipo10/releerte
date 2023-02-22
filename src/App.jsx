import { Routes, Route, createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home/Home'
import DetailBook from './Pages/DetailBook/DetailBook'
import AboutUs from './Pages/AboutUs/AboutUs'
import Layout from './Components/Layout'
import { LoaderFunction } from 'react-router-dom';
import { getBookById } from './services/functions';
import functions from './services/functions'


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
      </Route>
    </Routes>
    </div>
  );
}

export default App;
