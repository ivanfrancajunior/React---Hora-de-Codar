import React from "react";

const Button = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="text-base focus:text-base px-6 py-2 rounded-lg bg-gradient-to-br from-orange-300 to-orange-600 hover:from-orange-500 hover:to-orange-800 border-2 border-black/90 border-b-4 shadow-md  transition duration-200  cursor-pointer active:translate-y-1"
    >
      {children}
    </button>
  );
};

export default Button;
/*
class="text-base focus:text-base px-6 py-2 rounded-lg bg-gradient-to-br from-purple-200 to-purple-500 border-2 border-gray-800 border-b-4 shadow-md transform -translate-y-3 transition duration-200 ease-linear cursor-pointer hover:translate-y-0 hover:border-b-2 active:translate-y-0"
*/
