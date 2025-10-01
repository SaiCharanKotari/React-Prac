import React, {useContext} from 'react';
import {UserContext} from './useComponentA.jsx';

function ComponentD(){
  const user=useContext(UserContext);
  return(
    <div>
      <h1>ComponentD</h1>
      <h2>{`Bye ${user}`}</h2>
    </div>
  );
}

export default ComponentD;