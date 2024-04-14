import './Navbar.css';
import {
  BsSearch,
  BsHouseDoorFill,
  BsFillPersonFill,
  BsFillCameraFill,
} from 'react-icons/bs';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
const Navbar = () => {
  const { auth } = useAuth();
  const { user } = useSelector((state) => state.auth);

  return (
    <nav id="nav">
      <Link to="/">ReactGram</Link>
      <form id="search-form">
        <BsSearch />
        <input type="text" placeholder="Pesquisar..." />
      </form>
      <ul id="nav-links">
        {auth ? (
          <>
            {user && (
              <li>
                <li>
                  <NavLink to={`/user/${user._id}`}>
                    <BsFillCameraFill />
                  </NavLink>
                </li>
              </li>
            )}
            <li>
              <NavLink to="/">
                <BsHouseDoorFill />
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile">
                <BsFillPersonFill />
              </NavLink>
            </li>
            <li>sair</li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/register">Cadastrar</NavLink>
            </li>
            <li>
              <NavLink to="/login">Entrar</NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
