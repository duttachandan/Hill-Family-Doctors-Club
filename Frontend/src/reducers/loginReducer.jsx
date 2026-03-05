import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAuth } from "../api/authUser";

const initialState = {
  error: null,
  status: "",
  data: null,
};

export const authLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    return await fetchAuth({ email, password });
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authLogin.pending, (state, action) => {
        state.status = "Loading";
      })
      .addCase(authLogin.fulfilled, (state, action) => {
        state.status = "Succeded";
        state.data = action.payload;
      })
      .addCase(authLogin.rejected, (state, action) => {
        state.status = "rejected";
        state.data = null;
        state.error = action.error;
      });
  },
});

export const { login, signin, refreshToken } = authSlice.actions;

export default authSlice.reducer;
