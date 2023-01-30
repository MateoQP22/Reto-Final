import { createSlice } from "@reduxjs/toolkit";
import { fetchReadHeroPokemons } from "../thunks/homeThunks";

const initialState = {
  loading: false,
  error: {},
  heroPokemons: [],
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchReadHeroPokemons.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchReadHeroPokemons.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.error = {};
      state.heroPokemons = payload;
    });
    builder.addCase(fetchReadHeroPokemons.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.heroPokemons = [];
    });
  }
}); 

export default homeSlice.reducer;