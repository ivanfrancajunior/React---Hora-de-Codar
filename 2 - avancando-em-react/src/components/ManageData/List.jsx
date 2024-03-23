import React, { useState } from "react";

const List = () => {
  const data = [
    {
      id: 1,
      name: "Notebook",
      price: 2499.99,
    },
    {
      id: 2,
      name: "Tablet",
      price: 999.99,
    },
    {
      id: 3,
      name: "Mouse",
      price: 99.99,
    },
    {
      id: 4,
      name: "Keyboard",
      price: 399.99,
    },
  ];
  const [products, setProducts] = useState(data);
  return (
    <div>
      <h2>Trabalhando com listas</h2>
      <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {products.map((product) => (
          <li
            key={product.id}
            style={{ listStyle: "none", padding: "4px", border: "1px solid #ccc" }}
          >
            {product.name} - R${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
