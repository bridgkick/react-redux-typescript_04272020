import { Reducer } from 'redux';

import { HistoryEntry } from '../models/HistoryEntry';

import {
  CalcOpAction, CalcHistoryEntryAction,
  ADD_ACTION, SUBTRACT_ACTION,
  MULTIPLY_ACTION, DIVIDE_ACTION,
  CLEAR_ACTION, DELETE_HISTORY_ENTRY_ACTION,
  VALIDATION_ACTION,
  CalcValidationAction,
} from '../actions/calcActions';

export interface CalcState {
  result: number;
  history: HistoryEntry[],
  validationMessage: string;
}

type CalcReducerAction = CalcOpAction | CalcHistoryEntryAction | CalcValidationAction;

type CalcReducer = Reducer<CalcState, CalcReducerAction>;

const initialCalcReducerState = { result: 0, history: [], validationMessage: '', };

export const calcReducer: CalcReducer = (state = initialCalcReducerState, action) => {

  switch (action.type) {
    case ADD_ACTION:
      return {
        ...state,
        // result: state.result + (('num' in action.payload) ? action.payload.num : 0),
        result: state.result + (action as CalcOpAction).payload.num,
        history: state.history.concat({ opName: '+', opValue: (action as CalcOpAction).payload.num }),
      };
    case SUBTRACT_ACTION:
      return {
        ...state,
        result: state.result - (action as CalcOpAction).payload.num,
        history: state.history.concat({ opName: '-', opValue: (action as CalcOpAction).payload.num }),
      };
    case MULTIPLY_ACTION:
      return {
        ...state,
        result: state.result * (action as CalcOpAction).payload.num,
        history: state.history.concat({ opName: '*', opValue: (action as CalcOpAction).payload.num }),
      };
    case DIVIDE_ACTION:
      return {
        ...state,
        result: state.result / (action as CalcOpAction).payload.num,
        history: state.history.concat({ opName: '/', opValue: (action as CalcOpAction).payload.num }),
      };
    case CLEAR_ACTION:
      return {
        ...state,
        result: 0,
        history: [],
      };
    case DELETE_HISTORY_ENTRY_ACTION:
      return {
        ...state,
        history: state.history.filter(
          (_, i) => i !== (action as CalcHistoryEntryAction).payload.historyEntryIndex),
      }
    case VALIDATION_ACTION:
      return {
        ...state,
        validationMessage: (action as CalcValidationAction).payload.message,
      }
    default:
      return state;
  }

};