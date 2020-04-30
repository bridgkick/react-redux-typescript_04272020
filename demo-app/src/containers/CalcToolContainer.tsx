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
  return history.reduce( (r: number, he: HistoryEntry) => { 
    switch(he.opName) {
      case '+':
        return r + he.opValue;
      case '-':
        return r - he.opValue;
      case '*':
        return r * he.opValue;
      case '/':
        return r / he.opValue;
      default:
        return r;
    }
  }, 0);
}

const countOps = (history: HistoryEntry[]) => {
  return history.reduce( (r: number[], he: HistoryEntry) => { 
    switch(he.opName) {
      case '+':
        r[0] = r[0] + 1;
        return r;
      case '-':
        r[1] = r[1] + 1;
        return r;
      case '*':
        r[2] = r[2] + 1;
        return r;
      case '/':
        r[3] = r[3] + 1;
        return r;
      default:
        return r;
    }
  }, [0,0,0,0]);
}


export const CalcToolContainer = () => {

  // const result = useSelector<CalcState, number>(state => state.result);
  const history = useSelector<CalcState, HistoryEntry[]>(state => state.history);
  const validationMessage = useSelector<CalcState, string>(state => state.validationMessage);

  const [ addCount, subtractCount, multiplyCount, divideCount ] = countOps(history);

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
    addCount={addCount} subtractCount={subtractCount}
    multiplyCount={multiplyCount} divideCount={divideCount}
    {...boundActionsMap} />;

};