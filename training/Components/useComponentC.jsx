import ComponentD from './useComponentD';
import React, {useContext} from 'react';
import {UserContext} from './useComponentA.jsx';

function ComponentC(){
  const user=useContext(UserContext);
  return(
    <div>
      <h1>ComponentC</h1>
      <h2>{`Hello again ${user}`}</h2>
      <ComponentD />
    </div>
  );
}

export default ComponentC;