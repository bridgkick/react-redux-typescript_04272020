import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import { Car } from '../models/Car';
import { CarState } from '../reducers/carReducer';
import { CarTool } from '../components/CarTool';
import {
  createAppendCarAction, createReplaceCarAction, createDeleteCarAction,
  createEditCarAction, createCancelCarAction,
} from '../actions/carActions';

const useMapStateToProps = () => {
  return {
    cars: useSelector<CarState, Car[]>(state => state.cars),
    editCarId: useSelector<CarState, number>(state => state.editCarId),
  };
};

const useMapDispatchToProps = () => {
  return bindActionCreators({
    onAppendCar: createAppendCarAction,
    onReplaceCar: createReplaceCarAction,
    onDeleteCar: createDeleteCarAction,
    onEditCar: createEditCarAction,
    onCancelCar: createCancelCarAction,
  }, useDispatch());
};

export const CarToolContainer = () => {

  return <CarTool {...useMapStateToProps()} {...useMapDispatchToProps()} />;

};