import React, { useState } from 'react'
import Searchbar from './Searchbar'
import Filter from './Filter'
import CountryContainer from './CountryContainer'

const Home = () => {
    const [query, Setquery] = useState("");
    const[filter,Setfilter]=useState("all");
    return (
        <div className='flex w-full h-screen flex-col gap-8 mt-12'>
            <div className='flex lg:justify-between md:justify-between gap-3 ml-2 sm:justify-between lg:flex-row md:flex-row sm:flex-row flex-col mt-8'>
                <Searchbar query={query} Setquery={Setquery} />
                <Filter 
                query={query} Setquery={Setquery} 
                filter={filter} Setfilter={Setfilter}/>

            </div>

            <CountryContainer query={query} filter={filter}/>


        </div>
    )
}

export default Home