import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [review, setReview] = useState("");
  const [target, setTarget] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log(
      `Nome: ${name} | Email: ${email} | Product: ${target} | Review: ${review} `
    );
    setName("");
    setEmail("");
    setReview("");
    setTarget("");
  }
  return (
    <main>
      <h2>Usando Formularios em React</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "start",
          gap: "1rem",
          height: "100vh",
          margin: "10 auto",
        }}
      >
        <label
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          {" "}
          <span>Nome:</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          {" "}
          <span>Email:</span>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <span>Products</span>
          <select name="product" onChange={(e) => setTarget(e.target.value)}>
            <option value="product 1">Product 1</option>
            <option value="product 2">Product 2</option>
            <option value="product 3">Product 3</option>
            <option value="product 4">Product 4</option>
          </select>
        </label>
        <label
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <span>Review</span>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
        </label>
        <button>enviar</button>
      </form>
    </main>
  );
}

export default App;
