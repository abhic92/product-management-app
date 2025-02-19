import React, { useState } from 'react';

function AddProductForm({ onAddProduct }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price) {
      setError('Please fill in all fields');
      return;
    }
    if (isNaN(price)) {
      setError('Price must be a number');
      return;
    }
    onAddProduct({ name, price: parseFloat(price) });
    setName('');
    setPrice('');
    setError('');
  };

  return (
    <div className="add-product-form">
      <h3>Add Product</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProductForm;
