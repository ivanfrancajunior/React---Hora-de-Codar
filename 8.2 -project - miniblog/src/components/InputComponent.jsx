import React from "react";

const InputComponent = ({ type, name, placeholder, value, setValue }) => {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default InputComponent;
