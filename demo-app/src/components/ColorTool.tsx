import React, { FC, useState } from 'react';

import { Color } from '../models/Color';

import { ToolHeader } from './ToolHeader';
import { ColorForm } from './ColorForm';

export interface ColorToolProps {
  colors: readonly Color[];
}

export const ColorTool: FC<ColorToolProps> = (props) => {

  const [ colors, setColors ] = useState<Color[]>([ ...props.colors ]);

  const addColor = (color: Color) => {

    setColors(colors.concat({
      ...color,
      id: Math.max(...colors.map(c => c.id) as [], 0) + 1
    }));

  };

  return (
    <>
      <ToolHeader headerText="Color Tool" />
      <ul>
        {colors.map((color) =>
          <li key={color.id}>{color.name}</li>)}
      </ul>
      <ColorForm onSubmitColor={addColor} />
    </>
  );
};