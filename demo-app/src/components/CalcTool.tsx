import React, { FC, useState, ChangeEvent } from 'react';

export interface CalcToolProps {
  result: number;
  onAdd: (num: number) => void;
  onSubtract: (num: number) => void;
  onMultiply: (num: number) => void;
  onDivide: (num: number) => void;
}

export const CalcTool: FC<CalcToolProps> = ({ result, onAdd, onSubtract, onMultiply, onDivide }) => {

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
      </div>
    </form>
  );

};