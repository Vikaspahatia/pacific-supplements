import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Products from "./components/Products";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard"

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/products" element={<Products />}></Route>
        </Routes>
        <Products />
        <div className="product-list">
          <ProductCard
            productName="Vitamin C Supplements"
            description="Boost your immune system with our high-quality Vitamin C supplements."
            price={19.99}
            imageUrl="vitamin_c.jpg"
          />
          <ProductCard
            productName="Protein Powder"
            description="Get your daily protein intake with our delicious protein powder."
            price={29.99}
            imageUrl="protein_powder.jpg"
          />
          {/* Add more ProductCard components for other products */}
        </div>
      </div>
    </Router>
  );
}

export default App;