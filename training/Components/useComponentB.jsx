import ComponentC from './useComponentC';
import React, {useContext} from 'react';
import {UserContext} from './useComponentA.jsx';

function ComponentB(){
  return(
    <div>
      <h1>ComponentB</h1>
      <ComponentC />
    </div>
  );
}

export default ComponentB;