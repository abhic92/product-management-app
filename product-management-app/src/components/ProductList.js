import React from 'react';

function ProductList({ products }) {
  return (
    <div className="product-list">
      <h3>Product List</h3>
      {products.length === 0 ? (
        <p>No Products Found</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.name}</td>
                <td>${product.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ProductList;
