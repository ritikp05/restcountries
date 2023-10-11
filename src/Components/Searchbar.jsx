import { TextField } from '@mui/material'
import React from 'react'
const Searchbar = ({query,Setquery}) => {
    return (<>

        <div className='ml-4'>
            <TextField variant='outlined' placeholder='Search for a country' value={query} onChange={(e)=>Setquery(e.target.value)}/>
      {query}
        </div>
    </>
    )
}

export default Searchbar