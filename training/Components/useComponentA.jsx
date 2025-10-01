import React,{useState,createContext} from 'react';
import ComponentB from './useComponentB';

export const UserContext=createContext();

function ComponentA(){

  const [user,setUser] =useState("Sai");

  return(
    <div>

      <h1>ComponentA</h1>
      <h2>{`hello ${user}`}</h2>
      <UserContext.Provider value={user}>
        <ComponentB user={user}/>
      </UserContext.Provider>
    </div>
  );
}

export default ComponentA;