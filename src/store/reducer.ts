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
    case "NEXT_SONG": {
      let selected = state.songs[0];
      if (state.selected) {
        const currIdx = state.songs.findIndex(
          (song) => song.id === state.selected?.id
        );
        selected =
          currIdx === state.songs.length - 1
            ? state.songs[0]
            : state.songs[currIdx + 1];
      }
      return {
        ...state,
        selected,
      };
    }
    case "PREV_SONG": {
      let selected = state.songs[state.songs.length - 1];
      if (state.selected) {
        const currIdx = state.songs.findIndex(
          (song) => song.id === state.selected?.id
        );
        selected =
          currIdx === 0
            ? state.songs[state.songs.length - 1]
            : state.songs[currIdx - 1];
      }
      return {
        ...state,
        selected,
      };
    }
    default:
      throw Error("Unknown action: " + action.type);
  }
};

export { initialState, reducer };
