import {createSlice, createAsyncThunk, createAction} from '@reduxjs/toolkit';
import {API, base_url} from '../Api';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ScreenNameEnum from '../../routes/screenName.enum';

import axios from 'axios';
import { errorToast, successToast } from '../../config/customToast';

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  User: null,
  isLogin: false,
  isLogOut: false,
};

export const login = createAsyncThunk('login', async (params, thunkApi) => {
  try {
    // Create form data with identity and otp
    const formData = new FormData();
    formData.append('email', params.data.email);
    formData.append('password', params.data.password);

    // Configure request headers
    const myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');

    // Create request options
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formData,
      redirect: 'follow',
    };

    // Make POST request to verify OTP
    const response = await fetch(
      'https://server-php-8-3.technorizen.com/igniteat/api/user/auth/login',
      requestOptions,
    );

    // Parse response as JSON
    const responseData = await response.json();

    console.log('Response login :', responseData.data.email);

    // Handle successful response
    if (responseData.status == '1') {
      successToast(responseData.message);
      thunkApi.dispatch(loginSuccess(responseData.data));
      params.navigation.navigate(ScreenNameEnum.MainDrawer);
    } else {
      errorToast(responseData.message);
    }

    // Return response data
    
    return { ...responseData.data,token:responseData.token}
  } catch (error) {
    console.error('Error:', error);
    errorToast('Network error');
    // Reject with error
    throw error;
  }
});

export const register = createAsyncThunk(
  'register',
  async (params, thunkApi) => {
    console.log('Register =>>>>>>>>>>', params);
    try {
      const myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");

      const formdata = new FormData();
      formdata.append('email', params.data.email);
      formdata.append('password', params.data.password);
      formdata.append('confirm_password', params.data.confirm_password);
      formdata.append('first_name', params.data.first_name);
      formdata.append('last_name', params.data.last_name);
      
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow"
      };

      const response = fetch(base_url.url + "/user/auth/register", requestOptions)
        .then((response) => response.text())
        .then((res) => {
          const response = JSON.parse(res)
          console.log(response);
          if (response.status == '1') {
            params.navigation.navigate(ScreenNameEnum.LOGIN_SCREEN);
            successToast(
              'User Registered Successfully'

            );
            
            return response
          } else {

            errorToast(response.message,

            );
            return response
          }
        })
        .catch((error) => console.error(error));

      return response;


    } catch (error) {
      console.log('🚀 ~ file: RegisterSlice.js:16 ~ register ~ error:', error);
      errorToast(
        'Network error',

      );

      return thunkApi.rejectWithValue(error);
    }
  },
);
export const send_password = createAsyncThunk(
  'auth/sendOtpRestPass',
  async (params, thunkApi) => {
    try {
      console.log('==================params ==================');
      console.log(params.data);
      console.log('====================================');

      const formData = new FormData();
      formData.append('email', params.data.email);

      console.log('FormData:', formData);

      const response = await API.post(
        'user/auth/forgot-password',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Accept: 'application/json', // Add Accept header for JSON
          },
        },
      );

      console.log('Response:', response);

      if (response.data.status == '1') {
        successToast(response.data.message);
        params.navigation.navigate(ScreenNameEnum.LOGIN_SCREEN,);
      } else {
        errorToast(response.data.message);
      }

      return response.data;
    } catch (error) {
      console.log('Error:', error);
      if (error.response) {
        console.log('Error Response:', error.response);
        errorToast(error.response.data.message || 'Network Error');
      } else if (error.request) {
        console.log('Error Request:', error.request);
        errorToast('Network Error');
      } else {
        console.log('General Error:', error.message);
        errorToast(error.message);
      }
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const change_password = createAsyncThunk(
  'change-password',
  async (params, thunkApi) => {
    const {identity, password, otp} = params.data;
   
    try {
      const myHeaders = new Headers();
      myHeaders.append('Accept', 'application/json');

      const formdata = new FormData();
      formdata.append('email',params.email);
      formdata.append('old_password', params.old_password);
      formdata.append('password', params.password);
      formdata.append('confirm_password', params.confirm_password);

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow',
      };

      const response = fetch(
        base_url+`user/auth/change-password`,
        requestOptions,
      )
        .then(response => response.text())
        .then(result => {
          const response = JSON.parse(result);
      
          if (response.success) {
       
            successToast('Password updated successfully');
            return response;
          } else {
            errorToast(response.message);
       
            return response;
          }
        })
        .catch(error => console.error(error));

      return response;
    } catch (error) {
      console.log('Error:', error);

      errorToast('Network Error');

      return thunkApi.rejectWithValue(error);
    }
  },
);


export const logout = createAsyncThunk('logout', async (params, thunkApi) => {
  try {
    const response = await API.post('/user/auth/logout', null, {
      headers: {
        Authorization: `Bearer ${params.token}`,
      },
    });

    console.log(
      '🚀 ~ file: AuthSlice.js:29 ~ logout ~ response:',
      response.data,
    );

    if (response.data.status == '1') {
      successToast('User LogOut Successfuly');
      AsyncStorage.clear()
      params.navigation.navigate(ScreenNameEnum.LOGIN_SCREEN)
    } else {
      errorToast('User LogOut Faild');
    }

   
  } catch (error) {
    errorToast('Network error');
    console.log('🚀 ~ file: AuthSlice.js:32 ~ logout ~ error:', error);
    return thunkApi.rejectWithValue(error);
  }
});

const AuthSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.isLogin = true;
      state.isLogOut = false;
      state.User = action.payload;
    },
  },
  extraReducers: builder => {
    // login cases
    builder.addCase(register.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
    });
    builder.addCase(login.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.isLogOut = false;
      state.userData = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
      state.isLogin = false;
    });
    builder.addCase(logout.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.isLogin = false;
      state.isLogOut = true;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
      state.isLogin = true;
    });
    builder.addCase(send_password.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(send_password.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(send_password.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
   
    builder.addCase(change_password.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(change_password.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(change_password.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const {loginSuccess} = AuthSlice.actions;

export default AuthSlice.reducer;
