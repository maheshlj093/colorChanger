import React, { useState } from 'react'

function Change() {
 const [color,setColor]=useState("red");
 const [val,setVal]=useState(10);
  return (
    <>
    <h1 className='text-white text-center border-l py-5 font-bold' style={{backgroundColor:color}}>Value:{val}</h1>
    <div className='mt-5 flex justify-center'>
      
      <button className='h-10 px-6 mx-3 font-semibold rounded-md bg-black text-white' onClick={()=>setColor("yellow")}>yellow</button>
      <button className='h-10 px-6 mx-3 font-semibold rounded-md bg-black text-white' onClick={()=>setColor("red")}>red</button>
      <button className='h-10 px-6 mx-3 font-semibold rounded-md bg-black text-white' onClick={()=>setColor("orange")}>orange</button>
    <button className='h-10 px-6 mx-3 font-semibold rounded-md bg-black text-white' onClick={()=>{
        setVal((prev)=>prev+1)
    }}>increase</button>
        <button className='h-10 px-6 mx-3 font-semibold rounded-md bg-black text-white' onClick={()=>{
        setVal((prev)=>prev-1)
    }}>descrement</button>
    </div>
    </>

  )
}

export default Change
