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
        <Route path="/" element={!user ? <Navigate to="/login" replace /> :<Home/>}/>
        <Route path="/products" element={!user ? <Navigate to="/login" replace /> :<ProductList/>}/>
        <Route path="/products/:category" element={!user ? <Navigate to="/login" replace /> :<ProductList/>}/>
        <Route path="/product/:id" element={!user ? <Navigate to="/login" replace /> :<Product/>}/>
        <Route path="/register" element={user?<Navigate to="/" replace /> :<Register/>}/>
        <Route path="/login" element={user ? <Navigate to="/" replace /> : <Login />} />
        <Route path="/cart" element={!user ? <Navigate to="/login" replace /> :<Cart/>}/>
        <Route path="/success" element={!user ? <Navigate to="/login" replace /> :<Success/>}/>
      </Routes>
    </Router>
  );
}

export default App;
