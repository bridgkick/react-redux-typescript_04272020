import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import { CalcState } from '../reducers/calcReducer';
import { CalcTool } from '../components/CalcTool';
import { createAddAction, createSubtractAction } from '../actions/calcActions';

export const CalcToolContainer = () => {

  const result = useSelector<CalcState, number>(state => state.result);

  // const dispatch = useDispatch();
  // const onAdd = (num: number) => dispatch(createAddAction(num));
  // const onSubtract = (num: number) => dispatch(createSubtractAction(num));

  const boundActionsMap = bindActionCreators({
    onAdd: createAddAction,
    onSubtract: createSubtractAction,
  }, useDispatch());

  // return <CalcTool result={result} onAdd={onAdd} onSubtract={onSubtract} />;
  return <CalcTool result={result} {...boundActionsMap} />;

};