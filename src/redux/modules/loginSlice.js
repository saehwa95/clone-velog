import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../api/axios";

const initialState = {
  signup: [
    {
      email: "",
      userName: "",
      password: "",
      profileImage: "",
    },
  ],
  login: [
    {
      email: "",
      password: "",
    },
  ],
  detail: [{}],
  isLoading: false,
  error: null,
  dupCheck: false,
  userId: "",
  isLogin: false,
  isSignUp: false,
};

export const __signUpUser = createAsyncThunk(
  "SIGNUP_USER",
  async (payload, thunkAPI) => {
    try {
      const res = await instance.post(`/user/signup`, payload);
      return thunkAPI.fulfillWithValue(res.data.message);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const __dupEmail = createAsyncThunk(
  "DUB_EMAIL",
  async (payload, thunkAPI) => {
    try {
      const res = await instance.post(`/user/emailCheck`, payload);
      window.alert("사용 가능한 이메일입니다");
      return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
      window.alert("중복된 이메일이 있습니다");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const __loginUser = createAsyncThunk(
  "LOGIN_USER",
  async (payload, thunkAPI) => {
    try {
      const res = await instance.post(`/user/login/local`, payload);
      localStorage.clear();
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data.userId);
      return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const __editUserDetail = createAsyncThunk(
  "EDIT_USER_DETAIL",
  async (payload, thunkAPI) => {
    try {
      const res = await instance.post(`/user/detail/`);
      return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const loginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__signUpUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__signUpUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSignUp = true;
        alert("회원가입을 축하합니다!");
      })
      .addCase(__signUpUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(__dupEmail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__dupEmail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dupCheck = action.payload;
      })
      .addCase(__dupEmail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(__loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userId = action.payload.userId;
        state.isLogin = true;
      })
      .addCase(__loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        alert("로그인 정보가 일치하지 않습니다!");
      })

      .addCase(__editUserDetail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__editUserDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.detail = action.payload;
      })
      .addCase(__editUserDetail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default loginSlice.reducer;
