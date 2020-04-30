import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import { HistoryEntry } from '../models/HistoryEntry';
import { CalcState } from '../reducers/calcReducer';
import { CalcTool } from '../components/CalcTool';
import {
  createAddAction, createSubtractAction,
  createMultiplyAction, createDivideAction,
  createClearAction, createDeleteHistoryEntryAction,
  createValidationAction,
} from '../actions/calcActions';

const calculateResult = (history: HistoryEntry[]) => {
  // do the calc
  return 0;
}

export const CalcToolContainer = () => {

  const result = useSelector<CalcState, number>(state => state.result);
  const history = useSelector<CalcState, HistoryEntry[]>(state => state.history);
  const validationMessage = useSelector<CalcState, string>(state => state.validationMessage);

  // const dispatch = useDispatch();
  // const onAdd = (num: number) => dispatch(createAddAction(num));
  // const onSubtract = (num: number) => dispatch(createSubtractAction(num));

  const boundActionsMap = bindActionCreators({
    onAdd: createAddAction,
    onSubtract: createSubtractAction,
    onMultiply: createMultiplyAction,
    onDivide: createDivideAction,
    onClear: createClearAction,
    onDeleteHistoryEntry:  createDeleteHistoryEntryAction,
    onValidation: createValidationAction,
  }, useDispatch());

  // return <CalcTool result={result} onAdd={onAdd} onSubtract={onSubtract} />;
  return <CalcTool
    result={calculateResult(history)} history={history} validationMessage={validationMessage}
    {...boundActionsMap} />;

};