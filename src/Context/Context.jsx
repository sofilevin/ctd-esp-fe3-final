import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";

const DentistStates = createContext();

const lsFav = localStorage.getItem("fav")
  ? JSON.parse(localStorage.getItem("fav"))
  : [];

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    case "GET_DENTISTS":
      return {
        ...state,
        dentists: action.payload,
      };
    case "ADD_FAV":
      return {
        ...state,
        fav: [...state.fav, action.payload],
      };
    case "DELETE_FAV": {
      const filteredFavs = state.fav.filter(
        (item) => item.id != action.payload
      );
      return {
        ...state,
        fav: filteredFavs,
      };
    }
    case "RESET_FAV":
      return {
        ...state,
        fav: [],
      };
    default:
      throw new Error("Error al modificar el estado");
  }
};

const initialState = {
  theme: "light",
  fav: lsFav,
  dentists: [],
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios(url)
      .then((res) => dispatch({ type: "GET_DENTISTS", payload: res.data }))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    localStorage.setItem("fav", JSON.stringify(state.fav));
  }, [state.fav]);

  return (
    <DentistStates.Provider value={{ state, dispatch }}>
      {children}
    </DentistStates.Provider>
  );
};

export default Context;

export const useDentistStates = () => useContext(DentistStates);
