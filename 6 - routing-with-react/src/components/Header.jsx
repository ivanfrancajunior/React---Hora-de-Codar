import { NavLink } from "react-router-dom";
import Logo from "/vite.svg";

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        gap: "1rem",
        height: "3rem",
        backgroundColor: "black",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          gap: "1rem",
        }}
      >
        <img src={Logo} alt="Logo da Hora do Código" />
        <span>Hora do Código</span>
      </div>

      <nav style={{ display: "flex", gap: "1rem" }}>
        <NavLink
          to="/products"
          style={({ isActive }) => {
            return { color: isActive ? "orange" : "white" };
          }}
        >
          Products
        </NavLink>
        <NavLink
          to="/"
          style={({ isActive }) => {
            return { color: isActive ? "orange" : "white" };
          }}
        >
          Home
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
