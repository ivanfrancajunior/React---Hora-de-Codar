import React from 'react';
import './Message.css';

const Message = ({ message, type }) => {
  return (
    <div className={`message ${type}`}>
      <p>{message}</p>
    </div>
  );
};

export { Message };
