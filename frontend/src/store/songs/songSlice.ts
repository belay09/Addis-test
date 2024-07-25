
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Song } from "../../types/Song";

interface SongState {
  songs: Song[];
  loading: boolean;
  error: string | null;
  songAdded: boolean;
  songUpdated: boolean;


}

interface SongQuery {
  searchQuery?: string;
  page: number;
  pageSize: number;
}
const initialState: SongState = {
  songs: [],
  loading: false,
  error: null,
  songAdded: false,
  songUpdated: false,
};

const songSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    addSong: (state, action: PayloadAction<Song>) => {
      console.log("action", action)
      state.loading = true;
      state.songAdded = false; // Reset the flag
    },
    addSongSuccess: (state, action: PayloadAction<Song>) => {
      state.songs.unshift(action.payload);
      state.loading = false;
      state.songAdded = true; // Set the flag when a song is successfully added
    },
    addSongFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    resetSongAdded: (state) => {
      state.songAdded = false;
    },
    updateSongStart: (state, action: PayloadAction<Song>) => {
      console.log("this is action", action)
      state.loading = true;
      state.error = null;
    },
    updateSongSuccess: (state, action: PayloadAction<Song>) => {
      state.songs = state.songs.map((song) =>
        song._id === action.payload._id ? action.payload : song
      );
      state.loading = false;
      state.songUpdated = true;
    },
    updateSongFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    resetSongUpdated: (state) => {
      state.songUpdated = false;
    },

    removeSongStart: (state, _action: PayloadAction<string>) => {
      state.loading = true;
      state.error = null;
    },
    removeSongSuccess: (state, action: PayloadAction<string>) => {
      state.songs = state.songs.filter((song) => song._id !== action.payload);
      state.loading = false;
    },
    removeSongFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    fetchSongsStart: (state, _action: PayloadAction<SongQuery>) => {
      state.loading = true;
      state.error = null;
    },
    fetchSongs: (state, action: PayloadAction<Song[]>) => {
      state.songs = action.payload;
      state.loading = false;
    },
    fetchSongsFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});


export type { SongQuery };

export const {
    addSongSuccess,
    addSong,
    resetSongAdded,
    addSongFailure,
    updateSongStart,
    updateSongSuccess,
    updateSongFailure,
    resetSongUpdated,
    removeSongStart,
    removeSongSuccess,
    removeSongFailure,
    fetchSongsStart,
    fetchSongs,
    fetchSongsFailure,
  } = songSlice.actions;
  
  export default songSlice.reducer;
  



