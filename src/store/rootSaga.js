/**
 * This import remove error
 * Uncaught ReferenceError: regeneratorRuntime is not defined
 * See https://github.com/redux-saga/redux-saga/issues/280 for details
 */
import 'regenerator-runtime/runtime';

import { all } from 'redux-saga/effects';
import saga from '../sagas';

export default function* rootSaga() {
  yield all([saga()]);
};
