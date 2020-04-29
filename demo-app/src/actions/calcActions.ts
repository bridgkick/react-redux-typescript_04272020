import { Action } from 'redux';

export const ADD_ACTION = 'ADD';
export const SUBTRACT_ACTION = 'SUBTRACT';

export interface CalcOpAction extends Action {
  payload: {
    num: number,
  },
}

type CalcOpActionCreator = (num: number) => CalcOpAction;

export const createAddAction: CalcOpActionCreator = (num) => ({
   type: ADD_ACTION, payload: { num }
});

export const createSubtractAction: CalcOpActionCreator = (num) => ({
  type: SUBTRACT_ACTION, payload: { num }
});