
import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop.jsx';
import ShopCategory from './Pages/ShopCategory.jsx';
import Product from './Pages/Product.jsx';
import Cart from './Pages/Cart.jsx';
import Login from './Pages/Login.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/'element={<Shop/>}/>
        <Route path='/mens'element={<ShopCategory category="mens"/>}/>
        <Route path='/women'element={<ShopCategory category="wommen"/>}/>
        <Route path='/kids'element={<ShopCategory category="kids"/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path=':productId' element={<Product/>}/>
        
        <Route path='/cart'element={<Cart/>}/>
        <Route path='/login'element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
