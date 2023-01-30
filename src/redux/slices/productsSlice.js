import { createSlice } from "@reduxjs/toolkit";
import { fetchReadHeroProducts } from "../thunks/productsThunks";

const initialState = {
  loading: false,
  error: {},
  heroProducts: []
};

export const productsSlice = createSlice({
  name: 'productos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchReadHeroProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchReadHeroProducts.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.error = {};
      state.heroProducts = payload;
    });
    builder.addCase(fetchReadHeroProducts.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.heroProducts = [];
    });
  }
}); 

export default productsSlice.reducer;