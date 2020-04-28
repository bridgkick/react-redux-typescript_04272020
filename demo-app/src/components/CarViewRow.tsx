import React, { FC } from 'react';

import { Car } from '../models/Car';

export interface CarViewRowProps { 
  car: Car;
  onDeleteCar: (carId: number) => void;
}

const validCarId: (carId: number | undefined) => boolean = (carId) => {

  if (typeof carId === "undefined") {
    return false;
  }

  if (carId < 1) {
    return false;
  }

  return true;

};

export const CarViewRow: FC<CarViewRowProps> = ({ car, onDeleteCar }) => {

  const deleteCar = () => {

    if (typeof car.id !== "undefined") {
      onDeleteCar(car.id);
    }
  };

  return (
    <tr>
      <td>{car.id}</td>
      <td>{car.make}</td>
      <td>{car.model}</td>
      <td>{car.year}</td>
      <td>{car.color}</td>
      <td>{car.price}</td>
      <td>
        {validCarId(car.id) && <button type="button" onClick={deleteCar}>
          Delete
        </button>}
      </td>
    </tr>
  );

}