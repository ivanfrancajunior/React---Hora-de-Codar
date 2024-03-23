import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";

const ProductsDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>
        {products[id - 1].name} - #ID: {id}
      </h1>
      <h2>Price: ${products[id - 1].price}</h2>

      <h2>{products[id - 1].details}</h2>
      <a href={products[id - 1].url}> Docs</a>
      <Link to="/products">
        <p>Back</p>
      </Link>
    </div>
  );
};

export default ProductsDetails;
