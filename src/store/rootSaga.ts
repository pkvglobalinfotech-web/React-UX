import { all, fork } from 'redux-saga/effects';
import { watchAuthSaga } from './auth/authSaga';

export default function* rootSaga() {
  yield all([
    fork(watchAuthSaga),
  ]);
}