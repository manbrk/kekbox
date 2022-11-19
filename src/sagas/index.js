import { takeLatest } from 'redux-saga/effects';
import { COOL_ACTION } from '../actions/actionTypes';

function* coolSaga() {
  yield console.log('saga is OK --> super ok!!!!');
}

export default function* saga() {
  yield takeLatest(COOL_ACTION, coolSaga);
}
