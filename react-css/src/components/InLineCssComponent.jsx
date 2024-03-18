import React, { useState } from "react";

const InLineCssComponent = () => {
  const [isActive, setIsActive] = useState(true);
  return (
    <>
      <h3
        style={{
          color: "white",
          padding: "8px",
          backgroundColor: "lightsalmon",
          borderRadius: "8px",
        }}
      >
        Este CSS foi estilizado de forma in-line
      </h3>

      <h3
        style={
          isActive
            ? {
                color: "lightcoral",
                padding: "8px",
                backgroundColor: "white",
                borderRadius: "8px",
              }
            : {
                color: "white",
                padding: "8px",
                backgroundColor: "lightcoral",
                borderRadius: "8px",
              }
        }
      >
        Este CSS foi estilizado de forma in-line dinamicamente
      </h3>
      <button onClick={() => setIsActive(!isActive)}>swap</button>
    </>
  );
};

export default InLineCssComponent;
