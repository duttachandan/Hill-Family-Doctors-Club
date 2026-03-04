import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
  error: null,
  state: "",
  data: [],
};

export const authLogin = createAsyncThunk('auth/login', fetchAuth);

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
