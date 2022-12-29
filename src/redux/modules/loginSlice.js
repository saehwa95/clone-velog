import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../api/axios";

const initialState = {
  signup: {
    email: "",
    userName: "",
    password: "",
    profileImage: "",
  },
  login: {
    email: "",
    password: "",
  },
  detail: {
    email: "",
    userId: "",
    userName: "",
    profileImage: "",
  },

  isLoading: false,
  error: null,
  dupCheck: false,
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
      const loginError = error.response.data.errorMessage;
      if (loginError === "중복된 이메일") alert("중복된 이메일입니다.");
      else if (loginError === "요구사항에 맞지 않는 입력값")
        alert("요구사항에 맞지 않는 입력값입니다.");
      else if (loginError === "로그인 정보가 이미 있음")
        alert("로그인 상태입니다.");
      else alert("알 수 없는 오류입니다.");

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
      localStorage.setItem("profileImage", res.data.profileImage);
      return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
      const loginError = error.response.data.errorMessage;
      if (loginError === "요구사항에 맞지 않는 입력값")
        alert("요구사항에 맞지 않는 입력값입니다.");
      else if (loginError === "이메일 또는 비밀번호 불일치")
        alert("이메일 또는 비밀번호를 다시 확인해주세요.");
      else if (loginError === "로그인 정보가 이미 있음")
        alert("로그인 상태입니다.");
      else alert("알 수 없는 오류입니다.");

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const __editUserDetail = createAsyncThunk(
  "EDIT_USER_DETAIL",
  async (payload, thunkAPI) => {
    try {
      const res = await instance.post(`/user/detail/`, { userId: payload });
      return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const __updateUserName = createAsyncThunk(
  "UPDATE_USERNAME",
  async (payload, thunkAPI) => {
    try {
      const res = await instance.patch(`/user/detail/userName`, {
        userName: payload.userName,
        userId: payload.userId,
      });
      return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const __updateUserImg = createAsyncThunk(
  "UPDATE_USER_IMG",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const res = await instance.patch(
        `/user/detail/profileImage`,
        payload
        // {
        //   userId: Number(payload.userId),
        //   imageUrl: payload.profileImage,
        //   profileImage: payload.editProfileImg,
        // }
      );

      return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
const loginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    __logout(state, action) {
      state.isLogin = false;
    },
  },
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
        state.dupCheck = true;
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
      })

      .addCase(__updateUserName.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__updateUserName.fulfilled, (state, action) => {
        state.isLoading = false;
        state.detail.userName = action.payload.userName;
      })
      .addCase(__updateUserName.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(__updateUserImg.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__updateUserImg.fulfilled, (state, action) => {
        state.isLoading = false;
        state.detail = action.payload;
      })
      .addCase(__updateUserImg.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { __logout } = loginSlice.actions;
export default loginSlice.reducer;
