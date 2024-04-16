import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import photoService from '../services/photoService';

const initialState = {
  photos: [],
  photo: {},
  error: false,
  success: false,
  loading: false,
  message: null,
};

export const photoSlice = createSlice({
  name: 'photo',
  initialState,
  resetMessage: (state) => {
    state.message = null;
  },
});

const { resetMessage } = photoSlice.actions;
export default photoSlice.reducer;
