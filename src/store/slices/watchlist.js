import { createSlice } from "@reduxjs/toolkit";

export const watchlistSlice = createSlice({
    name: "watchlist",
    initialState: {
        watchlistItems: [],
    },
    reducers: {
        addTowatchlist: (state, action) => {
            const existingItem = state.watchlistItems.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.watchlistItems.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromwatchlist: (state, action) => {
            state.watchlistItems = state.watchlistItems.filter(item => item.id !== action.payload);
        },
        clearwatchlist: (state) => {
            state.watchlistItems = [];
        }
    }
});

export const { addTowatchlist, removeFromwatchlist, clearwatchlist } = watchlistSlice.actions;
export default watchlistSlice.reducer;
