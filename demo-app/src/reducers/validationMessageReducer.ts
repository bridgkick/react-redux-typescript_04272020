import { Reducer } from 'redux';

import {
  CLEAR_ACTION, VALIDATION_ACTION,
  CalcOpAction, CalcValidationAction,
} from '../actions/calcActions';

export type ValidationMessageReducerAction = CalcOpAction | CalcValidationAction;

type ValidationMessageReducer = Reducer<string, ValidationMessageReducerAction>;

export const validationMessageReducer:  ValidationMessageReducer =
  (validationMessage = '', action) => {

    if (action.type === CLEAR_ACTION) {
      return '';
    }

    if (action.type === VALIDATION_ACTION) {
      return (action as CalcValidationAction).payload.message;
    }

    return validationMessage;

  };