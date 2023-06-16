import './App.css';
import Home from './pages/Home.jsx';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Success from './pages/Success';
import { useSelector } from 'react-redux';


function App() {
  const user=useSelector(state=>state.user.currentUser);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<ProductList/>}/>
        <Route path="/products/:category" element={<ProductList/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/register" element={user?<Navigate to="/" replace /> :<Register/>}/>
        <Route path="/login" element={user ? <Navigate to="/" replace /> : <Login />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/success" element={<Success/>}/>
      </Routes>
    </Router>
  );
}

export default App;
