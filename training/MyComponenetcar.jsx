import React,{useState} from 'react';

function MyComponent(){

  const [cars,setCars]=useState([]);
  const [carsYear,setYear] =useState(new Date().getFullYear());
  const [carsMake,setMake] =useState("");
  const [carsModel,setModel]=useState("");

  function handleAddCar(){
    const newCar={year:carsYear,make:carsMake,model:carsModel};
    setCars(c=>[...c,newCar]);
    setYear("");
    setMake("");
    setModel("");

  }
  function handleRemoveCar(index){
    setCars(cars.filter((_,i)=>(i!==index )));
  }
  function handleAddYear(e){
    setYear(event.target.value);
  }
  function handleAddMake(e){
    setMake(event.target.value);
    
  }
  function handleAddModel(e){
    setModel(event.target.value);
    
  }
  return( 
    <div>
      <h2>List of Cars</h2>
      <ul>
        {cars.map((car,index)=>(
          <li key={index} onClick={()=>handleRemoveCar(index)}>{car.year} {car.make} {car.model} </li>
        ))}
      </ul>
      <input type="number" placeholder="Year" onChange={handleAddYear} value={carsYear}></input><br/>
      <input type="text"  placeholder="make" onChange={handleAddMake}  value={carsMake}></input><br/>
      <input type="text"  placeholder="model" onChange={handleAddModel}  value={carsModel}></input><br/>

      <button onClick={handleAddCar} >Add car</button>
      
    </div>
  );
}
export default MyComponent