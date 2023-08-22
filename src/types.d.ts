/* eslint-disable @typescript-eslint/no-unused-vars */

type Song = {
  name: string;
  cover: string;
  artist: string;
  audio: string;
  color: string[];
  id: string;
  active: boolean;
};

type State = {
  songs: Song[];
  selected?: Song;
};

type Action = {
  type: string;
  payload?: [];
};
