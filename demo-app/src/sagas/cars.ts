import { takeLatest, takeEvery, call, put } from 'redux-saga/effects';

import {
  REFRESH_CARS_REQUEST_ACTION,
  APPEND_CAR_REQUEST_ACTION,
  createRefreshCarsRequestAction,
  createRefreshCarsDoneAction,
  CarAction, CarIdAction
} from '../actions/carActions';

export function* refreshCars() {

  const response = yield call(fetch, 'http://localhost:3060/cars');
  const cars = yield call(response.json.bind(response));
  yield put(createRefreshCarsDoneAction(cars));
}

export function* appendCar(action: CarAction) {

  yield call(
    fetch,
    'http://localhost:3060/cars',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(action.payload.car),
    },
  );

  yield put(createRefreshCarsRequestAction());
}

export function* carsSaga() {

  yield takeLatest(REFRESH_CARS_REQUEST_ACTION, refreshCars);
  yield takeEvery(APPEND_CAR_REQUEST_ACTION, appendCar);

}