export const actions = {
  ADD_MOVIE: "ADD_MOVIE",
  DELETE_MOVIE: "DELETE_MOVIE",
  RESET: "RESET",
};

export const initialState = { nominations: [] };

export const movieReducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_MOVIE:
      return { ...state, nominations: [...state.nominations, action.value] };
    case actions.DELETE_MOVIE:
      //make copy of array
      const copiedNoms = [...state.nominations];
      // remove id and save to new array
      let updatedNoms = copiedNoms.filter((el) => el.id !== action.value);

      return { ...state, nominations: updatedNoms };
    case actions.RESET:
      return { ...state, ...initialState };
    default:
      return state;
  }
};
