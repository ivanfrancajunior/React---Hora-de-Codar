import React, { useState } from "react";
import Message from "./Message.jsx";
import ChangeMessage from "./ChangeMessage.jsx";
/*
Elevação de state ou State lift é quando um valor é elevado do
componente filho para o componente pai.

Geralmente temos um componente que usa o state e outro que o
altera;

Então precisamos passar a alteração para o componente pai, e este
passa para o componente que usa o state;

*/
const StateLiftWrapper = () => {
  const [greeting, setGreeting] = useState("");

  function handleGreetingChange(message) {
    setGreeting(message);
  }
  return (
    <div>
      <Message message={greeting} />
      <ChangeMessage handleMessage={handleGreetingChange} />
    </div>
  );
};

export default StateLiftWrapper;
