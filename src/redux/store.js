import { configureStore } from '@reduxjs/toolkit';
import homeReducer from "./slices/homeSlice";
import productsReducer from "./slices/productsSlice";

export const store = configureStore( {
    reducer: {
        home: homeReducer,
        products: productsReducer
    }
});
