import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
  error: null,
  state: "",
  data: [],
};

const authLogin = createAsyncThunk('auth/login', );

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {},
    signin: (state, action) => {},
    refreshToken: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase()
  }
});

export const {login, signin, refreshToken} = authSlice.actions;

export default authSlice.reducer;
