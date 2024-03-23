import React from "react";

const MyLabel = ({ children }) => {
  return (
    <label
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "8px",
      }}
    >
      {children}
    </label>
  );
};

export default MyLabel;