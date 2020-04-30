import { Reducer } from 'redux';

import { Car } from '../models/Car';
import {
  CarAction, CarIdAction, CarsAction,
  REFRESH_CARS_DONE_ACTION, REPLACE_CAR_ACTION,
  DELETE_CAR_ACTION,
} from '../actions/carActions';

export type CarsReducerAction = CarAction | CarIdAction | CarsAction;

type CarsReducer = Reducer<Car[], CarsReducerAction>;

// const carList: Car[] = [
//   { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2020, color: 'blue', price: 45000 },
//   { id: 2, make: 'Tesla', model: 'S', year: 2019, color: 'red', price: 120000 },
// ];

export const carsReducer: CarsReducer = (cars = [], action) => {

  switch (action.type) {
    case REFRESH_CARS_DONE_ACTION:
      return (action as CarsAction).payload.cars;
    case REPLACE_CAR_ACTION:
      const carIndex = cars.findIndex(c => c.id === (action as CarAction).payload.car.id);
      const newCars = cars.concat();
      newCars[carIndex] = (action as CarAction).payload.car;
      return newCars;
    case DELETE_CAR_ACTION:
      return cars.filter(c => c.id !== (action as CarIdAction).payload.carId);
    default:
      return cars;
  }

};