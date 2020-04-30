import { takeLatest, takeEvery, call, put } from 'redux-saga/effects';

import {
  REFRESH_CARS_REQUEST_ACTION,
  APPEND_CAR_REQUEST_ACTION,
  createRefreshCarsRequestAction,
  createRefreshCarsDoneAction,
  CarAction, CarIdAction
} from '../actions/carActions';

export function* refreshCars() {

  const response = yield  call(fetch, 'http://localhost:3060/cars');
  const cars = yield call(response.json.bind(response));

  
}

export function* carsSaga() {

  yield takeLatest(REFRESH_CARS_REQUEST_ACTION, refreshCars);

}