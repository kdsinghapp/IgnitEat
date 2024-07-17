import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API, base_url } from '../Api';

import { Alert } from 'react-native';
import { SuccessToast } from 'react-native-toast-message';

import ScreenNameEnum from '../../routes/screenName.enum';
import { err } from 'react-native-svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { errorToast, successToast } from '../../config/customToast';
const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
 
  Priacypolicy: null,
  TermsCondition: null,
  getProfile: null,
  
};




export const update_profile = createAsyncThunk(
  'update_profile',
  async (params, thunkApi) => {
    try {
      console.log('==========update_profile==========================', params.data);



      // Configure request headers
      const myHeaders = new Headers();
      myHeaders.append('Accept', 'application/json');
      myHeaders.append('Authorization', `Bearer ${params.token}`);


      // Create request options
      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: params.data,
        redirect: 'follow',
      };

      // Make POST request to verify OTP
      const response = await fetch(
        `${base_url.url}/driver/auth/update-profile`,
        requestOptions,
      );

      // Parse response as JSON
      const responseData = await response.json();

      // console.log('Response update_profile=>>>>>>>>>>>>> :', responseData);

      // Handle successful response
      if (responseData.success) {
        if (!params.Notification) {

          successToast(responseData.message);
        }


      } else {
        errorToast(responseData.message);
        console.log('==============update_profile======================');
        console.log(responseData.message);
        console.log('====================================');
      }

      // Return response data
      return responseData.data;
    } catch (error) {
      console.error('Error:', error);
      errorToast('Network error');
      // Reject with error
      throw error;
    }
  },
);



export const get_terms_conditions = createAsyncThunk(
  'get_terms_conditions',
  async (params, thunkApi) => {
    try {
      const response = await API.get('/common/content/terms-and-conditions');


      if (response.data.status == '1') {
        console.log('User get_terms_conditions Succesfuly');
      }
      return response.data.data;
    } catch (error) {
      console.log('🚀 ~ : get_terms_conditions error:', error);

      return thunkApi.rejectWithValue(error);
    }
  },
);
export const get_Profile = createAsyncThunk(
  'get-profile',
  async (params, thunkApi) => {

    console.log(params);
    try {
      const response = await API.post('/common/content/terms-and-conditions', null, {
        headers: {
          Authorization: `Bearer ${params.token}`,
        }
      },);


      if (response.data.success) {
        console.log('User get-profile Succesfuly');
      }
      return response.data.data;
    } catch (error) {
      console.log('🚀 ~ :auth/get-profile error:', error);

      return thunkApi.rejectWithValue(error);
    }
  },
);



export const get_privacy_policy = createAsyncThunk(
  'get_privacy_policy',
  async (params, thunkApi) => {
    try {
      const response = await API.get('/common/content/privacy-policy',);



      if (response.data.status == '1') {
        console.log('User get_privacy_policy Succesfuly');
      }
      return response.data.data;
    } catch (error) {
      console.log('🚀 ~ : get_privacy_policy error:', error);

      return thunkApi.rejectWithValue(error);
    }
  },
);



const FeatureSlice = createSlice({
  name: 'featureSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    
   
   
   
    builder.addCase(update_profile.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(update_profile.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;

    });
    builder.addCase(update_profile.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
    });
 

    builder.addCase(get_privacy_policy.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(get_privacy_policy.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.Priacypolicy = action.payload;
    });
    builder.addCase(get_privacy_policy.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
    });
    builder.addCase(get_terms_conditions.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(get_terms_conditions.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.TermsCondition = action.payload;
    });
    builder.addCase(get_terms_conditions.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
    });
    builder.addCase(get_Profile.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(get_Profile.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.getProfile = action.payload;
    });
    builder.addCase(get_Profile.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
    });
   

  },
});

export default FeatureSlice.reducer;
