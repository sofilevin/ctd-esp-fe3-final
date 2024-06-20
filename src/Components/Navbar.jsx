//import React from 'react'
import { Link } from "react-router-dom";
import { useDentistStates } from "../Context/Context";
import { routes } from "../utils/routes";

const Navbar = () => {
  const { state, dispatch } = useDentistStates();

  return (
    <nav className={state.theme === "dark" ? "dark" : ""}>
      <Link to={routes.home}>Home</Link>
      <Link to={routes.contacto}>Contacto</Link>
      <Link to={routes.favs}>Favoritos</Link>
      <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
        Change theme
      </button>
    </nav>
  );
};

export default Navbar;
