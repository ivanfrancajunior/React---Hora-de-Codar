import React from "react";

const UsingProps = ({ name, age }) => {
  return (
    <div>
      <h2>Trabalhando com props</h2>
      <div>
        <p>Nome: {name}</p>
        <p>Idade: {age}</p>
      </div>
    </div>
  );
};

export default UsingProps;
