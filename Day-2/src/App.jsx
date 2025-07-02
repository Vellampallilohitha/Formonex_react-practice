import React from "react";
import { useState } from 'react';
import {ToastContainer, toast} from "react-toastify";


function App(){
  const [count,setCount] = useState(0);


  const submit = () => {
    setCount(0);
    toast.warn("Counter is Reset!");
  }

  const Add = () =>{
    setCount(count + 1);
    toast.warn("Count is Increased!");
  }

  const Subtract = () =>{
    setCount(count - 1);
    toast.warn("Count is Decreased!");
  }
    
  return(
    <>
      <div className = "max-w-sm mx-auto  mt-24 p-6 border rounded-lg shadow text-center bg-white">
        <h1 className = "text-5xl font-bold mb-4">Counter Application</h1>
        <h2 className = "text-2xl font-bold mb-2">{count}</h2>
      <div className = "flex justify-between gap-6">
        <button onClick = {Add} className = "bg-blue-500 text-white-500 py-2 px-4 rounded">Add</button>
        <br/>
        <button onClick = {Subtract} className = "bg-red-500 text-white-500 py-2 px-4 rounded">Subtract</button>
        <br/>
        <button onClick = {submit} className = "bg-green-500 text-white-500 py-2 px-4 rounded">Reset</button>
        <ToastContainer/>
      </div>

      </div>
    </>
  )
}

export default App