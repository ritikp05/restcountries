import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Loader from "./Loader"
import "./loader.css";
const Country = () => {
  const navigate = useNavigate();
  const [singlecount, Setsinglecount] = useState('')
  const[loading,setloading]=useState(true);
  const { id } = useParams()
  useEffect(() => {
    async function Data() {

      const result = await axios.get(`https://restcountries.com/v3.1/name/${id}?fullText=true`);
      setloading(false);
      console.log(result.data[0]);
      console.log(result.data[0].name.common)
      Setsinglecount({
        cname: result.data[0].name.common,
        capital: result.data[0].capital[0],
        population: result.data[0].population,
        region: result.data[0].region,
        subregion: result.data[0].subregion,
        flags: result?.data[0].flags.png,
        area:result.data[0].area
      })
    }
    Data();

  }, [])

  return (
    <><button className='bg-slate-400 px-4 py-1 text-white rounded-md relative lg:top-24 md:top-20 sm:top-20 top-16 left-2' onClick={() => { navigate('/') }}>Back<ArrowBackIcon /></button>
     {loading?<div className='mt-36'><Loader/></div>:
      
      <div className='flex flex-col justify-center items-center gap-2 mt-24'>
      <p className='lg:text-3xl sm:text-3xl md:text-3xl text-2xl font-bold '>           {singlecount?.cname}  </p>

        <img src={singlecount?.flags} alt='flag' className='lg:h-56 md:h-52 sm:h-48 h-32 shadow-lg  hover:scale-105 duration-700' />

        <p>    <span className='font-bold text-lg'> Capital - </span>       {singlecount?.capital}  </p>
        <p>     <span className='font-bold text-lg'> Region - </span>      {singlecount?.region}  </p>
        <p>     <span className='font-bold text-lg'> Subregion - </span>    {singlecount?.subregion}</p>
        <p>      <span className='text-lg font-bold'> Population - </span>    {singlecount?.population}  </p>
        <p>    <span className='text-lg font-bold'>Area</span>   {singlecount.area}</p>

      </div>}
    </>
  )
}

export default Country