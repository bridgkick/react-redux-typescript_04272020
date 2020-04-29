import { Reducer } from 'redux';

import { CalcOpAction, ADD_ACTION, SUBTRACT_ACTION } from '../actions/calcActions';

export interface CalcState {
  result: number;
}

type CalcReducer = Reducer<CalcState, CalcOpAction>;

export const calcReducer: CalcReducer = (state = { result: 0 }, action) => {

  switch (action.type) {
    case ADD_ACTION:
      return {
        ...state,
        result: state.result + action.payload.num,
      };
    case SUBTRACT_ACTION:
      return {
        ...state,
        result: state.result - action.payload.num,
      };
    default:
      return state;
  }

};