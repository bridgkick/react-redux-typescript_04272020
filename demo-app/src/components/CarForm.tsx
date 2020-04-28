import React, { FC, useState, ChangeEvent } from 'react';

import { Car } from '../models/Car';

export interface CarFormProps {
  buttonText?: string;
  onSubmitCar: (color: Car) => void;
}

interface CarFormState {
  make: string;
  model: string;
  year: number;
  color: string;
  price: number;
}

type HTMLFormControls = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

const nanToBlank = (x: number) => {

  if (isNaN(x)) {
    return '';
  } else {
    return x;
  }

};

const blankToNaN = (x: string) => {
  if (x.length === 0) {
    return NaN;
  } else {
    return Number(x);
  }
}

export const CarForm: FC<CarFormProps> = ({ buttonText, onSubmitCar }) => {

  const [ carForm, setCarForm ] = useState<CarFormState>({
    make: '',
    model: '',
    year: NaN,
    color: '',
    price: NaN,
  });

  const change = (e: ChangeEvent<HTMLFormControls>) => {

    setCarForm({
      ...carForm,
      [ e.target.name ]: e.target.type === 'number'
        ? blankToNaN(e.target.value)
        : e.target.value,
    });

  };

  const submitCar = () => {

    onSubmitCar({
      ...carForm,
    });

    setCarForm({
      make: '',
      model: '',
      year: NaN,
      color: '',
      price: NaN,
    });
  };

  return (
    <form>
      <div>
        <label htmlFor="make-input">Make:</label>
        <input type="text" id="make-input" name="make"
          value={carForm.make} onChange={change} />
      </div>
      <div>
        <label htmlFor="model-input">Model:</label>
        <input type="text" id="model-input" name="model"
          value={carForm.model} onChange={change} />
      </div>
      <div>
        <label htmlFor="year-input">Year:</label>
        <input type="number" id="year-input" name="year"
          value={nanToBlank(carForm.year)} onChange={change} />
      </div>
      <div>
        <label htmlFor="color-input">Color:</label>
        <input type="text" id="color-input" name="color"
          value={carForm.color} onChange={change} />
      </div>
      <div>
        <label htmlFor="price-input">Price:</label>
        <input type="number" id="price-input" name="price"
          value={nanToBlank(carForm.price)} onChange={change} />
      </div>
      <button type="button" onClick={submitCar}>{buttonText}</button>
    </form>
  );

};

CarForm.defaultProps = {
  buttonText: 'Submit Car',
};