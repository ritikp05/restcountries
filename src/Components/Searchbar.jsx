import { TextField } from '@mui/material'
import React from 'react'
const Searchbar = ({query,Setquery}) => {
    return (<>

            <TextField variant='outlined' size='small' className='lg:w-1/3  md:w-1/3 sm:w-1/3  w-11/12 font-serif ' label='Search for a country' value={query} onChange={(e)=>Setquery(e.target.value)}/>
      
    </>
    )
}

export default Searchbar