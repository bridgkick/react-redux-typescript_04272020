import React, { FC, useState, ChangeEvent } from 'react';

import { HistoryEntry } from '../models/HistoryEntry';

export interface CalcToolProps {
  result: number;
  history: HistoryEntry[];
  validationMessage: string;
  addCount: number;
  subtractCount: number;
  multiplyCount: number;
  divideCount: number;
  onAdd: (num: number) => void;
  onSubtract: (num: number) => void;
  onMultiply: (num: number) => void;
  onDivide: (num: number) => void;
  onClear: () => void;
  onDeleteHistoryEntry: (historyEntryIndex: number) => void;
  onValidation: (message: string) => void;
}

export const CalcTool: FC<CalcToolProps> = (props) => {

  const {
    result, history, validationMessage,
    addCount, subtractCount, multiplyCount, divideCount,
    onAdd, onSubtract, onMultiply, onDivide,
    onClear, onDeleteHistoryEntry, onValidation,
  } = props;

  const [ num, setNum ] = useState(0);

  const validateAndDoOp = (opFunc: Function, num: number) => {

    if (num < 0 || num > 10) {
      onValidation('Number needs to be between 0 and 10 inclusive');
      return;
    }

    onValidation('');
    opFunc(num);
  };

  return (
    <form>
      {validationMessage && <p>{validationMessage}</p>}
      <div>Result: {result}</div>
      <div>
        Input:
        <input type="number" value={num}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setNum(Number(e.target.value))} />
      </div>
      <div>
        <button type="button" onClick={() => validateAndDoOp(onAdd, num)}>+</button>
        <button type="button" onClick={() => validateAndDoOp(onSubtract, num)}>-</button>
        <button type="button" onClick={() => validateAndDoOp(onMultiply, num)}>*</button>
        <button type="button" onClick={() => validateAndDoOp(onDivide, num)}>/</button>
        <button type="button" onClick={() => { onClear(); setNum(0); }}>Clear</button>
      </div>
      <ul>
        {history.map((historyEntry, i) => {
          return <li key={i}>
            {historyEntry.opName} {historyEntry.opValue}
            <button type="button" onClick={() => onDeleteHistoryEntry(i)}>X</button>
          </li>;
        })}
      </ul>
      <table>
        <thead>
          <tr>
            <th>Add</th>
            <th>Subtract</th>
            <th>Multiply</th>
            <th>Divide</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{addCount}</td>
            <td>{subtractCount}</td>
            <td>{multiplyCount}</td>
            <td>{divideCount}</td>
          </tr>
        </tbody>
      </table>

    </form>
  );

};