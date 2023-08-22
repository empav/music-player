import { getAllSongs } from "../api/songs";

const initialState: State = { songs: [] };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "INIT": {
      return {
        songs: getAllSongs(),
      };
    }
    default:
      throw Error("Unknown action: " + action.type);
  }
};

export { initialState, reducer };
