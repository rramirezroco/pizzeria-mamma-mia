
import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Footer from './components/Footer.jsx'
import Cart from './pages/Cart.jsx'
import Pizza from './pages/Pizza.jsx'
import { Navigate, Route, Routes } from 'react-router-dom'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import NotFound from './pages/NotFound.jsx'
import Profile from './pages/Profile.jsx'
import PizzaProvider from './context/PizzaContext.jsx'
import { UserContext } from './context/UserContext.jsx'
import { useContext } from 'react'


function App() {
  const { token } = useContext(UserContext);

  return (
    <>
      <PizzaProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={!token ? <Register /> : <Navigate to="/" />}></Route>
          <Route path="/login" element={!token ? <Login /> : <Navigate to="/" />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/pizza/:id" element={<Pizza />}></Route>
          <Route path="/profile" element={token ? <Profile /> : <Navigate to="/login" />} />
          <Route path="/404" element={<NotFound />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </PizzaProvider>
    </>
  )
}

export default App;
