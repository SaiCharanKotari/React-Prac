import React, {useState} from 'react';  

function MyComponent(){

  const [name,setName]=useState("Guest");
  const [quantity,setQuantity] =useState(1);
  const [comment,setComment]=useState("");
  const [payment,setPayment]=useState("");

  function handleNameChange(e){
    setName(e.target.value);
  }
  function setQuan(){
    setQuantity(event.target.value);
  }
  function handle(){
    setComment(event.target.value);
  }
  function handelPayment(){
    setPayment(event.target.value);
  }
  return(
    <div>
      <input value={name} onChange={handleNameChange} ></input>
      <p>Name: {name}</p>

      <input value={quantity} onChange={setQuan} type="number" />
      <p>Quantity: {quantity}</p>

      <textarea value={comment} onChange={handle} placeholder="this is" />
      <p>text: {comment}</p>

      <select value={payment} onChange={handelPayment}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="Master Card">Master Card</option>
        <option value="UPI">Upi</option>
      </select>
      <p>Payment: {payment}</p>
    </div>
    
  );
}

export default MyComponent