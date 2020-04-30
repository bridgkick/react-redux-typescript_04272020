import { Action } from 'redux';

import { Car } from '../models/Car';

export const APPEND_CAR_ACTION = 'APPEND_CAR';
export const REPLACE_CAR_ACTION = 'REPLACE_CAR';
export const DELETE_CAR_ACTION = 'DELETE_CAR';
export const EDIT_CAR_ACTION = 'EDIT_CAR';
export const CANCEL_CAR_ACTION = 'CANCEL_CAR';

export interface CarAction extends Action {
  payload: {
    car: Car,
  },
}

export interface CarIdAction extends Action {
  payload: {
    carId: number,
  },
}

type ActionCreator = () => Action;

type CarActionCreator = (car: Car) => CarAction;

type CarIdActionCreator = (carId: number) => CarIdAction;

export const createAppendCarAction: CarActionCreator = car => ({
   type: APPEND_CAR_ACTION, payload: { car },
});

export const createReplaceCarAction: CarActionCreator = car => ({
  type: REPLACE_CAR_ACTION, payload: { car },
});

export const createDeleteCarAction: CarIdActionCreator = carId => ({
  type: DELETE_CAR_ACTION, payload: { carId },
});

export const createEditCarAction: CarIdActionCreator = carId => ({
  type: EDIT_CAR_ACTION, payload: { carId },
});

export const createCancelCarAction: ActionCreator = () => ({
  type: CANCEL_CAR_ACTION,
});
