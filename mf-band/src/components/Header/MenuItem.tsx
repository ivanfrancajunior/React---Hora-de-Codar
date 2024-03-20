import React from "react";
type MenuItemProps = {
  label: string;
  children?: React.ReactNode;
};

const MenuItem = ({ label, children }: MenuItemProps) => {
  return (
    <li className=" menu-item group">
      <span>{label}</span>
      {children}
    </li>
  );
};

export default MenuItem;
