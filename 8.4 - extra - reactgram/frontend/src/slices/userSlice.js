import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userService from '../services/userService';

const initialState = {
  user: {},
  error: false,
  success: false,
  loading: false,
  message: null,
};

export const getUserProfile = createAsyncThunk(
  'user/profile',
  async (user, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;
    const data = await userService.getUserProfile(user, token);
    return data;
  },
);

export const updatUserProfile = createAsyncThunk(
  'user/update',
  async (user, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;
    const data = await userService.updateUserProfile(user, token);

    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetMessage: (state) => {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.user = action.payload;
      })
      .addCase(updatUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updatUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.user = action.payload;
        state.message = 'updated successfully';
      })
      .addCase(updatUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.user = null;
      });
  },
});

export const { resetMessage } = userSlice.actions;

export default userSlice.reducer;
