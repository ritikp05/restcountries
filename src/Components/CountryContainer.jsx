import React, { useEffect, useState } from 'react'
import axios from "axios"
import Countrycard from './CountryCard';

const CountryContainer = ({query}) => {

  const [countrydata, Setcountrydata] = useState([]);
 
  useEffect(() => {
 const uniqueid=setTimeout(()=>{
  async function getData() {
    const result = await axios.get('https://restcountries.com/v3.1/all');
    Setcountrydata(result.data);
  console.log(countrydata);
  }
   getData();
 },2000)

 return(()=>{
  clearTimeout(uniqueid)
 })



  },[])

  return (
    <div className='flex flex-row flex-wrap gap-8 justify-evenly'>

     {countrydata.length > 0 &&
        countrydata.filter((item)=> item.name?.common.toLowerCase().includes(query.toLowerCase())
        || item.region.toLowerCase().includes(query)    ).map((alldata) => {
          return (

            <Countrycard
              key={alldata?.name?.common}
              population={alldata?.population}
              countryname={alldata?.name?.common}
              region={alldata?.region}
              capital={alldata?.capital?.[0]}
              flag={alldata?.flags?.png} />

          )
        })
      }
    </div>
  )
}

export default CountryContainer