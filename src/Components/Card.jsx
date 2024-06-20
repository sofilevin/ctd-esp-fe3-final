//import React from "react";

import { Link, useLocation } from "react-router-dom";
import { useDentistStates } from "../Context/Context";

const Card = ({ item }) => {
  const { dispatch } = useDentistStates();
  const location = useLocation();

  if (!item) {
    return null;
  }

  return (
    <div className="card">
      <Link to={"/dentist/" + item.id}>
        <img src="/images/doctor.jpg" alt={item.name} />
        <h3>{item.name}</h3>
        <h4>{item.username}</h4>
      </Link>
      {location.pathname == "/" ? (
        <button
          onClick={() => dispatch({ type: "ADD_FAV", payload: item })}
          className="favButton"
        >
          Add fav
        </button>
      ) : (
        <button
          className="favButton"
          onClick={() => dispatch({ type: "DELETE_FAV", payload: item.id })}
        >
          Eliminar de fav
        </button>
      )}
    </div>
  );
};

export default Card;
