import { Reducer } from 'redux';

import { HistoryEntry } from '../models/HistoryEntry';

import {
  CalcOpAction, CalcFakeAction,
  ADD_ACTION, SUBTRACT_ACTION,
  MULTIPLY_ACTION, DIVIDE_ACTION,
  CLEAR_ACTION,
} from '../actions/calcActions';

export interface CalcState {
  result: number;
  history: HistoryEntry[],
}

type CalcReducerAction = CalcOpAction | CalcFakeAction;

type CalcReducer = Reducer<CalcState, CalcReducerAction>;

export const calcReducer: CalcReducer = (state = { result: 0, history: [] }, action) => {

  switch (action.type) {
    case ADD_ACTION:
      return {
        ...state,
        result: state.result + (('num' in action.payload) ? action.payload.num : 0),
        // result: state.result + (action as CalcOpAction).payload.num,
        history: state.history.concat({ opName: '+', opValue: (action as CalcOpAction).payload.num }),
      };
    case SUBTRACT_ACTION:
      return {
        ...state,
        result: state.result - action.payload.num,
        history: state.history.concat({ opName: '-', opValue: action.payload.num }),
      };
    case MULTIPLY_ACTION:
      return {
        ...state,
        result: state.result * action.payload.num,
        history: state.history.concat({ opName: '*', opValue: action.payload.num }),
      };
    case DIVIDE_ACTION:
      return {
        ...state,
        result: state.result / action.payload.num,
        history: state.history.concat({ opName: '/', opValue: action.payload.num }),
      };
    case CLEAR_ACTION: {
      return {
        ...state,
        result: 0,
        history: [],
      };
    }
    default:
      return state;
  }

};