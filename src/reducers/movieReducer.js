export const actions = {
  ADD_MOVIE: "ADD_MOVIE",
  DELETE_MOVIE: "DELETE_MOVIE",
  RESET: "RESET",
};

const getLocalNoms = () => JSON.parse(localStorage.getItem("nominations"));
const setLocalNoms = (nomination) =>
  localStorage.setItem("nominations", JSON.stringify(nomination));
export const initialState = {
  nominations: !!getLocalNoms() ? getLocalNoms() : [],
};

export const movieReducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_MOVIE:
      let currNoms = getLocalNoms();
      currNoms = [...currNoms, action.value];
      //   localStorage.setItem("nominations", JSON.stringify(currNoms));
      setLocalNoms(currNoms);
      return { ...state, nominations: [...state.nominations, action.value] };
    case actions.DELETE_MOVIE:
      let localNoms = getLocalNoms();
      let localUpdated = localNoms.filter((el) => el.id !== action.value);
      //   localStorage.setItem("nominations", JSON.stringify(localUpdated));
      setLocalNoms(localUpdated);
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
