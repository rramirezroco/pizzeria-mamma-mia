
import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Footer from './components/Footer.jsx'
import Cart from './pages/Cart.jsx'
import Pizza from './pages/Pizza.jsx'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import NotFound from './pages/NotFound.jsx'
import Profile from './pages/Profile.jsx'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/pizza/p001" element={<Pizza />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/404" element={<NotFound />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App;
