import { Reducer } from 'redux';

import { HistoryEntry } from '../models/HistoryEntry';

import {
  CalcOpAction, CalcHistoryEntryAction,
  ADD_ACTION, SUBTRACT_ACTION,
  MULTIPLY_ACTION, DIVIDE_ACTION,
  CLEAR_ACTION, DELETE_HISTORY_ENTRY_ACTION,
} from '../actions/calcActions';

export type HistoryReducerAction = CalcOpAction | CalcHistoryEntryAction;

type HistoryReducer = Reducer<HistoryEntry[], HistoryReducerAction>;

export const historyReducer: HistoryReducer = (history = [], action) => {

  switch (action.type) {
    case ADD_ACTION:
      return history.concat({ opName: '+', opValue: (action as CalcOpAction).payload.num });
    case SUBTRACT_ACTION:
      return history.concat({ opName: '-', opValue: (action as CalcOpAction).payload.num });
    case MULTIPLY_ACTION:
      return history.concat({ opName: '*', opValue: (action as CalcOpAction).payload.num });
    case DIVIDE_ACTION:
      return history.concat({ opName: '/', opValue: (action as CalcOpAction).payload.num });
    case CLEAR_ACTION:
      return [];
    case DELETE_HISTORY_ENTRY_ACTION:
      return history.filter(
          (_, i) => i !== (action as CalcHistoryEntryAction).payload.historyEntryIndex);
    default:
      return history;
  }

};