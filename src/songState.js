import { createSlice } from "@reduxjs/toolkit";
export const SongSlice = createSlice({
    name: 'songs',
    initialState: {
        songs: [],
        isLoading: false
    },
    reducers: {
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

export const { getSongsFailure, getSongsFetch, getSongsSuccess } = SongSlice.actions;

export default SongSlice.reducer;