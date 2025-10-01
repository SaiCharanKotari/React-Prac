import React, {useState} from 'react';

function Counter(){
  const [count,setCount]=useState(0);
  
  const increament=()=>{
    setCount(count+1);
  }
  const decreament=()=>{
    setCount(count-1);
  }
  const reset=()=>{
    setCount(0);
  }

  return(
    <div className="counter">
      <p className="count-display">{count}</p>
      <button className="cou" onClick={decreament}>decreament</button>
      <button className="cou" onClick={reset}> Reset</button>
      <button className="cou" onClick={increament}> Increament</button>

    </div>
  );
}
export default Counter