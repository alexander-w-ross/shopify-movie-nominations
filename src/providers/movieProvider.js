import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
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

// export const GameProvider = ({ gameName, code, children }) => {
//   const [game, setGame] = useState(null);
//   const [gameId, setGameId] = useState(null);

//   useEffect(() => {
//     const firebase = firebaseClient();
//     const db = firebase.firestore();
//     const unsubscribe = db
//       .collection(gameName)
//       .where("code", "==", code)
//       .onSnapshot({
//         next: (snap) => {
//           const gameDoc = first(snap.docs);
//           setGame(gameDoc.data());
//           setGameId(gameDoc.id);
//         },
//         error: (error) => {
//           console.log({ error });
//         },
//       });

//     return unsubscribe;
//   }, [gameName, code]);

//   return (
//     <GameContext.Provider value={{ game, gameId }}>
//       {children}
//     </GameContext.Provider>
//   );
// };

// export const useGame = () => useContext(GameContext);
