import React, { useState } from "react";

const State = () => {
  const [value, setValue] = useState(10);

  return (
    <div>
      <h2>UseState na pratica</h2>
      <p style={{ margin: "20px", fontSize: "28px" }}>value: {value}</p>
      <button onClick={() => setValue(value + 1)}> up </button>
    </div>
  );
};

export default State;
