import { call, put, takeLatest } from 'redux-saga/effects';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { AxiosResponse } from 'axios';
import { axiosClient } from '../../../src/react-components/api/axiosClient';
import { API_ENDPOINTS } from '../../../src/react-components/api/endpoints';
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  type LoginPayload,
  type LoginSuccessPayload,
} from './authSlice';

// API call helper function
const loginApi = (data: LoginPayload): Promise<AxiosResponse<LoginSuccessPayload>> => {
  console.log('========== LOGIN API CALL ==========');

  console.log('[1] Login API payload:', data);

  console.log(
    '[2] Login API endpoint:',
    API_ENDPOINTS.AUTH.LOGIN
  );

  console.log('[3] axiosClient:', axiosClient);
  return axiosClient.post(API_ENDPOINTS.AUTH.LOGIN, data);
};

// Worker Saga: executed when loginRequest action is captured
function* handleLogin(action: PayloadAction<LoginPayload>): Generator<any, void, AxiosResponse<LoginSuccessPayload>> {
  try {
    // ----------------------------------------------------------
    // 1. LOGIN REQUEST ACTION
    // ----------------------------------------------------------

    console.log('[4] loginRequest action received');

    console.log('[5] Action:', action);

    console.log('[6] Action payload:', action.payload);
    const response: AxiosResponse<LoginSuccessPayload> = yield call(loginApi, action.payload);
    const { token, user } = response.data;

    // Persist token if requested
    if (token) {
      localStorage.setItem('token', token);
    }

    // Dispatch success to Redux state
    yield put(loginSuccess({ user, token }));
  } catch (error: any) {
    const errorMessage =
      error.response?.data?.message || error.message || 'Login failed. Please try again.';
    
    yield put(loginFailure(errorMessage));
  }
}

// Watcher Saga: listens for loginRequest actions
export function* watchAuthSaga() {
  yield takeLatest(loginRequest.type, handleLogin);
}