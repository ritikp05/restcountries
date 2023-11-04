import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
            <div className='w-full pb-3 flex justify-between fixed top-0 z-50 pt-4 bg-slate-100 shadow-lg'>
<Link to='/' className='font-serif lg:text-3xl md:text-2xl sm:text-xl text-xl tracking-widest font-bold  ml-4'>Where in the world?</Link>

            </div>
        </>
    )
}

export default Navbar