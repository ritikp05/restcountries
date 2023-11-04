import React, { useEffect } from 'react'

const Filter = ({ filter, Setfilter }) => {
  useEffect(()=>{
if(filter===""){
  Setfilter("all");

}

  },[])
  return (<>

    <div className='mr-4'>
    <select className='outline-dotted w-auto h-auto p-2' value={filter}  onChange={(e) => Setfilter((e.target.value))} defaultValue="all">
      <option value={"all"} >All</option> 
      <option value={"region/africa"}>Africa</option>
      <option value={"region/america"}>Americas</option>
      <option value={"region/asia"}>Asia</option>
      <option value={"region/europe"}>Europe</option>
      <option value={"region/oceania"}>Oceania</option>

    </select></div>
  </>
  )
}

export default Filter