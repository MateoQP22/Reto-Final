import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../configs/axiosInstance";

export const fetchReadHeroProducts = createAsyncThunk(
  'products/fetchReadHeroProducts',
  async (_, { rejectWithValue }) => {
    try {
      const options = {
        method: 'GET',
        url: `/Products`
      };
      const { data } = await axiosInstance(options);
      return data ?? [];
    } catch (error) {s
      console.log(error);
      return rejectWithValue(error);
    }
  }
);