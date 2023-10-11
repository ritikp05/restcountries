import React from 'react'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
            <div className='w-full pb-2 flex justify-between fixed top-0 z-50 pt-4 bg-gray-400'>
<Link to='/' className='font-serif text-xl ml-4'>Where in the world?</Link>
<div className='flex mr-4'>

<DarkModeOutlinedIcon/>
<p>Dark mode</p>
</div>
            </div>
        </>
    )
}

export default Navbar