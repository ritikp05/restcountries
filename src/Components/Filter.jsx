import React from 'react'

import { MenuItem, TextField } from '@mui/material'
const Filter = ({ Setquery}) => {
  return (<>

<div className='mr-4'><TextField select label="Filter by Region" className='w-60'  onChange={(e)=>Setquery(e.target.value.toLowerCase())}>

            <MenuItem value="Africa">Africa</MenuItem>
            <MenuItem value='America'>America</MenuItem>
            <MenuItem value='Asia'>Asia</MenuItem>
            <MenuItem value='Europe'>Europe</MenuItem>
            <MenuItem value='Oceania'>Oceania</MenuItem>
        
        </TextField></div>
  </>
  )
}

export default Filter