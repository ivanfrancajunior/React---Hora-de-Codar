import { products } from "../data/products";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <h1>Courses in Store</h1>
      <>
        {products.map((product) => (
          <li key={product.id} style={{ listStyle: "none" }}>
            <div>
              <h2>{product.name}</h2>
              <p>US ${product.price}</p>
              <Link to={`/products/${product.id}`}>More Details</Link>
            </div>
          </li>
        ))}
      </>
    </div>
  );
};

export default Products;
