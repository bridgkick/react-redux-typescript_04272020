import React from 'react';

// named export
// arrow function
export const HelloWorld = () => {
  // return React.createElement('div', null,
  //   React.createElement('h1', null, 'Hello World!'),
  //   React.createElement('span', null, 'test'),
  // );
  return (
    <>
      <h1>Hello World!</h1>
      <span>test</span>
    </>
  );
};