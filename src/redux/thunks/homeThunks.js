import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../configs/axiosInstance";

export const fetchReadHeroPokemons = createAsyncThunk(
  'home/fetchReadHeroPokemons',
  async (_, { rejectWithValue }) => {
    try {
      const options = {
        method: 'GET',
        url: `/Personal`
      };
      const { data } = await axiosInstance(options);
      return data ?? [];
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);
