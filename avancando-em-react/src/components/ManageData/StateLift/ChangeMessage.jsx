import React from "react";

const ChangeMessage = ({ handleMessage }) => {
  const Messages = ["Oi", "Hello", "Hola"];
  return (
    <div>
      <button onClick={() => handleMessage(Messages[0])}>Mensagem 1</button>
      <button onClick={() => handleMessage(Messages[1])}>Mensagem 2</button>
      <button onClick={() => handleMessage(Messages[2])}>Mensagem 3</button>
    </div>
  );
};

export default ChangeMessage;
