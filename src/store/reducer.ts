import { getAllSongs } from "../api/songs";

const initialState: State = { songs: [] };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "LOAD_SONGS": {
      const songs = getAllSongs();
      return {
        songs,
        selected: songs[0],
      };
    }
    case "SELECT_SONG": {
      return {
        ...state,
        selected: action.payload,
      };
    }
    default:
      throw Error("Unknown action: " + action.type);
  }
};

export { initialState, reducer };
