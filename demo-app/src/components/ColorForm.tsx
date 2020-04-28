import React, { FC, useState, ChangeEvent } from 'react';

import { Color } from '../models/Color';

export interface ColorFormProps {
  buttonText?: string;
  onSubmitColor: (color: Color) => void;
}

interface ColorFormState {
  colorName: string;
  colorHexcode: string;
}

type HTMLFormControls = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;


export const ColorForm: FC<ColorFormProps> = ({ buttonText, onSubmitColor }) => {

  const [ colorForm, setColorForm ] = useState<ColorFormState>(
    { colorName: '', colorHexcode: '', } /* initial value only used on initial render */);

  const change = (e: ChangeEvent<HTMLFormControls>) => {

    setColorForm({
      ...colorForm,
      [ e.target.name ]: e.target.type === 'number'
        ? Number(e.target.value)
        : e.target.value,
    });

  };

  const submitColor = () => {

    onSubmitColor({
      name: colorForm.colorName,
    });

    setColorForm({
      colorName: '',
      colorHexcode: '',
    });
  };

  return (
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
      <button type="button" onClick={submitColor}>{buttonText}</button>
    </form>
  );

};

ColorForm.defaultProps = {
  buttonText: 'Submit Color',
};