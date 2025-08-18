import React from 'react';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Phone', price: 699 },
  { id: 3, name: 'Headphones', price: 199 },
];

function ProductList() {
  return (
    <div>
      <h2>Products</h2>
      <div style={{ display: 'flex' }}>
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
