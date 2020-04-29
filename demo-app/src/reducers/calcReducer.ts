import { combineReducers, AnyAction } from 'redux';

import { HistoryEntry } from '../models/HistoryEntry';

import { CalcOpAction } from '../actions/calcActions';
import { resultReducer } from './resultReducer';
import { historyReducer, HistoryReducerAction } from './historyReducer';
import { validationMessageReducer, ValidationMessageReducerAction } from './validationMessageReducer';
import { Reducer } from 'react';

export interface CalcState {
  result: number;
  history: HistoryEntry[],
  validationMessage: string;
}

// this is the function produced by combine reducers
export const calcReducerExample: Reducer<CalcState, AnyAction> = (state, action) => {

  return {
    result: resultReducer(state.result, action as CalcOpAction),
    history: historyReducer(state.history, action as HistoryReducerAction),
    validationMessage: validationMessageReducer(state.validationMessage, action as ValidationMessageReducerAction),
  };
};


export const calcReducer = combineReducers<CalcState>({
  result: resultReducer,
  history: historyReducer,
  validationMessage: validationMessageReducer,
});