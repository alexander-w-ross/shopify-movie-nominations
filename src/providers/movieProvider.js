import React, { createContext, useReducer } from "react";
import { initialState, movieReducer, actions } from "../reducers/movieReducer";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(movieReducer, initialState);

  const value = {
    nominations: state.nominations,
    addMovie: (value) => {
      dispatch({ type: actions.ADD_MOVIE, value });
    },
    deleteMovie: (value) => {
      dispatch({ type: actions.DELETE_MOVIE, value });
    },
    reset: () => {
      dispatch({ type: actions.RESET });
    },
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
