import React,{useState} from 'react';

function MyComponent(){

  const [name,setName] =useState("guest");
  const [age,setAge]= useState(0);
  const [isEmployed,setIsEmployed]=useState(false);

  const updateName=()=>{
    setName("Spongebob");
  }
  const increamentAge=()=>{
    setAge(age+1);
  }
  const setStatus=()=>{
    setIsEmployed(!isEmployed);
  }
  return(
    <div>
      <p>Name:{name}</p>
      <button onClick={updateName}>set Name</button>

      <p>Age:{age}</p>
      <button onClick={increamentAge}>incr Age</button>

      <p>isEmployed:{isEmployed? "yes":"No"}</p>
      <button onClick={setStatus}>incr Age</button>
    </div>
  );

}
export default MyComponent