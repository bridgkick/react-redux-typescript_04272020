import React, { FC, useState, ChangeEvent } from 'react';

import { Color } from '../models/Color';

import { ToolHeader } from './ToolHeader';

export interface ColorToolProps {
  colors: readonly Color[];
}

interface ColorFormState {
  colorName: string;
  colorHexcode: string;
}

type HTMLFormControls = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

export const ColorTool: FC<ColorToolProps> = (props) => {

  // const colorsStateArray = useState<Color[]>(props.colors.concat());
  // const colorsStateData = colorsStateArray[0];
  // const colorsStateUpdateFunction = colorsStateArray[1];

  // array destructuring
  // const [ /* 0 */ colorsStateData, /* 1 */ colorsStateUpdateFunction ] = useState<Color[]>(props.colors.concat());

  // const colorsStateObject = useState2({});
  // colorsStateObject.data;
  // colorsStateObject.updateAndRender(newData);
  // const { data: colorForm, updateAndRender: setColorForm } = useState2({});
  // const { data: colors, updateAndRender: setColors } = useState2([]);

  // const [ colors, setColors ] = useState<Color[]>(props.colors.concat());

  const [ colors, setColors ] = useState<Color[]>([ ...props.colors ]);

  // colorForm is the state data
  // setColorForm is the function to update the data and re-render the component
  const [ colorForm, setColorForm ] = useState<ColorFormState>(
      { colorName: '', colorHexcode: '', } /* initial value only used on initial render */);

  const change = (e: ChangeEvent<HTMLFormControls>) => {

    setColorForm({
      ...colorForm,
      // colorName: e.target.value,
      [ e.target.name ]: e.target.type === 'number'
        ? Number(e.target.value)
        : e.target.value,
    });

  };

  const addColor = () => {

    setColors(colors.concat({
      // ...colorForm,
      name: colorForm.colorName,
      id: Math.max(...colors.map(c => c.id) as [], 0) + 1
    }));

    setColorForm({
      colorName: '',
      colorHexcode: '',
    });

  };

  console.log(colorForm);

  return (
    <>
      <ToolHeader headerText="Color Tool" />
      <ul>
        {colors.map((color) =>
          <li key={color.id}>{color.name}</li>)}
      </ul>
      <form>
        <div>
          <label htmlFor="color-name-input">Color Name</label>
          <input type="text" id="color-name-input" name="colorName"
            value={colorForm.colorName} onChange={change} />
        </div>
        <div>
          <label htmlFor="color-hexcode-input">Color Hexcode</label>
          <input type="text" id="color-hexcode-input" name="colorHexcode"
            value={colorForm.colorHexcode} onChange={change} />
        </div>
        <button type="button" onClick={addColor}>Add Color</button>
      </form>
    </>
  );
};