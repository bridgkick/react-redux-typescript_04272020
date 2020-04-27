import React from 'react';

import { Color } from '../models/Color';

export const ColorTool = () => {

  const colors: Color[] = [
    { id: 1, name: 'red' },
    { id: 2, name: 'white' },
    { id: 3, name: 'orange' },
    { id: 4, name: 'brown' },
  ];

  const colorListItems = colors.map(color =>
    <li key={color.id}>{color.name}</li>)

  return (
    <>
      <header>
        <h1>Color Tool</h1>
      </header>
      <ul>
        {colorListItems}
      </ul>
    </>
  );
};