import React from 'react'
import { Link } from 'react-router-dom';

const Countrycard = ({ countryname, region, capital, flag, population}) => {
  return (<>

  <Link to={`/country/${countryname}`}>
  <div className='flex flex-col shadow-xl w-60 h-full gap-1 hover:scale-105 duration-1000 shadow-slate-400 rounded-md'>
      <img src={flag} alt='flagicon' className='w-60 h-60 rounded-t-md' />
      <h1 className='text-center text-xl font-bold font-sans pb-4'>{countryname}</h1>
      <p className=' px-3 '><span className='font-semibold'>Capital : </span>
        <span className='font-serif'>{capital}</span></p>
        <p className='px-3'><span className='font-semibold'>Population : </span>
        <span className='font-serif'>{population}</span></p>

      <p className='pb-2 px-3'><span className='font-semibold'>Region : </span>
        <span className='font-serif'>{region}</span>
      </p>
    </div>
    </Link> 
  </>
  )
}

export default Countrycard;