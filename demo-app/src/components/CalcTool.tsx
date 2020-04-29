import React, { FC, useState, ChangeEvent } from 'react';

import { HistoryEntry } from '../models/HistoryEntry';

export interface CalcToolProps {
  result: number;
  history: HistoryEntry[];
  onAdd: (num: number) => void;
  onSubtract: (num: number) => void;
  onMultiply: (num: number) => void;
  onDivide: (num: number) => void;
  onClear: () => void;
}

export const CalcTool: FC<CalcToolProps> = ({
  result, history,
  onAdd, onSubtract, onMultiply, onDivide,
  onClear,
}) => {

  const [ num, setNum ] = useState(0);

  return (
    <form>
      <div>Result: {result}</div>
      <div>
        Input:
        <input type="number" value={num}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setNum(Number(e.target.value))} />
      </div>
      <div>
        <button type="button" onClick={() => onAdd(num)}>+</button>
        <button type="button" onClick={() => onSubtract(num)}>-</button>
        <button type="button" onClick={() => onMultiply(num)}>*</button>
        <button type="button" onClick={() => onDivide(num)}>/</button>
        <button type="button" onClick={() => { onClear(); setNum(0); }}>Clear</button>
      </div>
      <ul>
        {history.map((historyEntry, i) => {
          return <li key={i}>{historyEntry.opName} {historyEntry.opValue}</li>;
        })}
      </ul>
    </form>
  );

};