import { Reducer } from 'redux';

import { HistoryEntry } from '../models/HistoryEntry';

import { CalcOpAction,
  ADD_ACTION, SUBTRACT_ACTION,
  MULTIPLY_ACTION, DIVIDE_ACTION, CLEAR_ACTION,
} from '../actions/calcActions';

export interface CalcState {
  result: number;
  history: HistoryEntry[],
}

type CalcReducer = Reducer<CalcState, CalcOpAction>;

export const calcReducer: CalcReducer = (state = { result: 0, history: [] }, action) => {

  switch (action.type) {
    case ADD_ACTION:
      return {
        ...state,
        result: state.result + action.payload.num,
        history: state.history.concat({ opName: '+', opValue: action.payload.num }),
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