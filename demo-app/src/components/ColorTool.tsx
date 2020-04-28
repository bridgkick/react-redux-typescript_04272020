import React, { FC, useState, ChangeEvent } from 'react';

import { Color } from '../models/Color';

export interface ColorToolProps {
  colors: readonly Color[];
}

interface ColorFormState {
  colorName: string;
  colorHexcode: string;
}

type HTMLFormControls = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

export const ColorTool: FC<ColorToolProps> = (props) => {

  // colorForm is the state data
  // setColorForm is the function to update the data and re-render the component
  const [ colorForm, setColorForm ] = useState<any>(
      { colorName: '', colorHexcode: '', } /* initial value only used on initial render */);

  const colorListItems = props.colors.map((color) =>
    <li key={color.id}>{color.name}</li>);

  const change = (e: ChangeEvent<HTMLFormControls>) => {

    setColorForm({
      ...colorForm,
      // colorName: e.target.value,
      [ e.target.name ]: e.target.type === 'number'
        ? Number(e.target.value)
        : e.target.value,
    });

  };

  console.log(colorForm);

  return (
    <>
      <header>
        <h1>Color Tool</h1>
      </header>
      <ul>
        {colorListItems}
      </ul>
      <form>
        <div>
          <label htmlFor="color-name-input">Color Name</label>
          <input type="text" id="color-name-input" name="colorName"
            value={colorForm.colorName} onChange={change} />
        </div>
        <div>
          <label htmlFor="color-hexcode-input">Color Hexcode</label>
          <input type="number" id="color-hexcode-input" name="colorHexcode"
            value={colorForm.colorHexcode} onChange={change} />
        </div>
      </form>
    </>
  );
};