import React, { useState } from 'react';
import AddProductForm from './AddProductForm';
import ProductList from './ProductList';
import SearchBar from './SearchBar';

function Home() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddProduct = (newProduct) => {
    const productExists = products.some(
      product => product.name.toLowerCase() === newProduct.name.toLowerCase()
    );
    
    if (!productExists) {
      setProducts([...products, newProduct]);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="home-container">
      <button onClick={handleLogout} className="logout-btn">Logout</button>
      <h1>Product Management</h1>
      
      <div className="product-management">
        <AddProductForm onAddProduct={handleAddProduct} />
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
}

export default Home;
