import React from "react";

const ConditionalRendering = () => {
  const value = 10;
  const isTrue = false;
  const isFalse = true;

  return (
    <div>
      <h2>Trabalhando com condicionais</h2>
      <p>{value > 10 ? "Maior que 10" : "Menor que 10"}</p>
      <p>{isTrue && "Será exibido"}</p>
      <p>{isFalse ? "Será exibido" : "Não será exibido"}</p>
    </div>
  );
};

export default ConditionalRendering;
