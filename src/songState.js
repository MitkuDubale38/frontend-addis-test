import { createSlice } from "@reduxjs/toolkit";
export const SongSlice = createSlice({
    name: 'songs',
    initialState: {
        songs: [],
        isLoading: false
    },
    reducers: {
        deleteSong: (state, action) => {
            const songId = action.payload;
            state.songs = state.songs.filter((song) => song._id !== songId);
        },
        addSong: (state, action) => {
            const newSong = action.payload;
            state.songs = state.songs.push(newSong);
        },
        getSongsFetch: (state) => {
            state.isLoading = true;
        },
        getSongsSuccess: (state, action) => {
            state.songs = action.payload;
            state.isLoading = false;
        },
        getSongsFailure: (state) => {
            state.isLoading = false;
        }

    }
});

export const { getSongsFailure, getSongsFetch, getSongsSuccess, deleteSong, addSong } = SongSlice.actions;

export default SongSlice.reducer;