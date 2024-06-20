//import React from "react";
//import Card from "../Components/Card";

import Card from "../Components/Card";
import { useDentistStates } from "../Context/Context";

const Favs = () => {
  const { state, dispatch } = useDentistStates();
  return (
    <div>
      <h1>Dentistas Favs</h1>
      <div className="card-grid">
        {state.fav.map((fav) => (
          <Card key={fav.id} item={fav} />
        ))}
      </div>
      <button
        onClick={() => dispatch({ type: "RESET_FAV" })}
        className="resetButton"
      >
        RESET FAVS
      </button>
    </div>
  );
};

export default Favs;
