import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home'
import DetailBook from './Pages/DetailBook/DetailBook'
import AboutUs from './Pages/AboutUs/AboutUs'
import Layout from './Components/Layout'


function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/book-detail" element={<DetailBook />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;
