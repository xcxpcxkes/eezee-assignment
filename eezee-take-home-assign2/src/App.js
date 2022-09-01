import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AllBrands, AllProducts, Cart, Error, Home, ProductPage } from './pages/index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/all-brands" element={<AllBrands />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:prod_id" element={<ProductPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
