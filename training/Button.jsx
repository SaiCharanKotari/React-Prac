

function Button(){
  let count=0;
  const handleClick=(e)=>{
    e.target.textContent="OUCh";
  };
  return(
    <>
      <button onClick={(e)=>handleClick(e)}>clickme</button>
    </>
  );
}

export default Button