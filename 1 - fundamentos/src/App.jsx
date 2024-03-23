import "./App.css";
import MeuComponente from "./components/MeuComponente";

function App() {
  const templateExpression = "Sou um template expression";
  const rendersomething = (value) => {
    if (value) return <p>{value}</p>;
    return <p> No value provided.</p>;
  };
  const handleEvent = () => {
    console.log("evento disparado");
  };
  return (
    <>
      <MeuComponente />

      <p>{templateExpression}</p>
      
      <button onClick={handleEvent}>Clique aqui</button>
      
      {rendersomething("Renderizando um valor")}
      
      {rendersomething()}
    
    </>
  );
}

export default App;
