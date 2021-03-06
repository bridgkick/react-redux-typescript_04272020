import { Action } from 'redux';

export const ADD_ACTION = 'ADD';
export const SUBTRACT_ACTION = 'SUBTRACT';
export const MULTIPLY_ACTION = 'MULTIPLY';
export const DIVIDE_ACTION = 'DIVIDE';
export const CLEAR_ACTION = 'CLEAR';
export const DELETE_HISTORY_ENTRY_ACTION = 'DELETE_HISTORY_ENTRY';
export const VALIDATION_ACTION = 'VALIDATION';

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

export const createMultiplyAction: CalcOpActionCreator = (num) => ({
  type: MULTIPLY_ACTION, payload: { num }
});

export const createDivideAction: CalcOpActionCreator = (num) => ({
  type: DIVIDE_ACTION, payload: { num }
});

export const createClearAction: () => CalcOpAction = () => ({
  type: CLEAR_ACTION, payload: { num: NaN }
});

export interface CalcHistoryEntryAction extends Action {
  payload: {
    historyEntryIndex: number,
  },
}

export const createDeleteHistoryEntryAction: (historyEntryIndex: number) => CalcHistoryEntryAction =
  (historyEntryIndex) => ({ type: DELETE_HISTORY_ENTRY_ACTION, payload: { historyEntryIndex } });

export interface CalcValidationAction extends Action {
  payload: {
    message: string,
  },
}

export const createValidationAction: (message: string) => CalcValidationAction =
  (message) => ({ type: VALIDATION_ACTION, payload: { message } });
