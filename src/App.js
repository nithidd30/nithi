import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer';
import Book from './components/Booking';
import Login from './components/Login.jsx';
import Rating from './components/Rating';
import HomePage2 from './components/HomePage';
import About from './components/About.jsx';
import SignInNo from './components/Signin.jsx';




function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      
      <Route index element={<HomePage2 />} />
      <Route path='/Home' element={<HomePage2 />} />
      <Route path='/Rating' element={<Rating />} />
      <Route path='/Book' element={<Book/>} />
      <Route path='/About' element={<About />} />
      
      <Route path='/Login' element={<Login />} />
      <Route path='/SignInNo' element={<SignInNo />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
