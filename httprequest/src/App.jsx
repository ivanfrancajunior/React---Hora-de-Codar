import { useState } from "react";
import "./App.css";
import Brand from "./components/Brand";
import Wrapper from "./components/Wrapper";
import MyLabel from "./components/MyLabel";
import { UseFetch } from "./hooks/UseFetch";
function App() {
  const url = "http://localhost:3000/products";
  const [products, setProducts] = useState([]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const { data: items, error, isLoading } = UseFetch(url);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setIsLoading(true);
  //       const response = await fetch("http://localhost:3000/products");

  //       const json = await response.json();
  //       setIsLoading(false);
  //       setProducts(json);
  //     } catch (error) {
  //       setIsLoading(false);
  //       setError(error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newProduct = {
      id: Math.round(Math.random() * 10 ** 6),
      name,
      price: Number(price),
    };
    console.log(`product:  ${name}| price: ${price} |prod_id: ${newProduct.id}`);

    const response = await fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
    const addedProduct = await response.json();

    setProducts((prevProducts) => [...prevProducts, addedProduct]);
    setName("");
    setPrice("");
  };

  return (
    <Wrapper>
      <Brand />
      {error && <p>{error.message}</p>}
      {isLoading && <p>Loading...</p>}
      <form onSubmit={handleSubmit}>
        <div>
          {products && (
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
              }}
            >
              {items &&
                items.map((product) => (
                  <li
                    key={product.id}
                    style={{
                      margin: "8px",
                      border: "1px solid black",
                      padding: "8px",
                      borderRadius: "6px",
                      width: "300px",
                      backgroundColor: "white",
                      color: "lightcoral",
                    }}
                  >
                    {product.name} - {product.price}
                  </li>
                ))}
            </ul>
          )}
        </div>
        <MyLabel>
          <span>Product Name</span>
          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </MyLabel>

        <MyLabel>
          <span>Product Price</span>
          <input
            type="text"
            placeholder="Product Price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </MyLabel>
        <button type="submit">Add Product</button>
      </form>
    </Wrapper>
  );
}

export default App;
