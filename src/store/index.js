import { configureStore } from "@reduxjs/toolkit";
import watchlistReducer from "./slices/watchlist";

const store = configureStore({
  reducer: {
    watchlist: watchlistReducer,
  },
});

export default store; 
