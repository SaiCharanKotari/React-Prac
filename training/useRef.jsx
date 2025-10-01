import React, {useState,useEffect,useRef} from 'react';

function  MyComponent(){

  // const [number,setNumber] =useState(0);
  const inputRef=useRef(null);
  
  useEffect(()=>{
    console.log("rendered");
  });

  function handleClick(){
    inputRef.current.focus();
    inputRef.current.style.backgroundColor="yellow";
  }
  function handleClickred(){
    inputRef.current.focus();
    inputRef.current.style.backgroundColor="red";
  }

  return(
    <div>
      <button onClick={handleClick}>
        Click me 1!
      </button>
      <button onClick={handleClickred}>
        Click me 2!
      </button>
      <input ref={inputRef} />
    </div>
  );
}

export default MyComponent;
