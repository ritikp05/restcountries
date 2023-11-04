import React, { useEffect, useState } from 'react'
import axios from "axios"
import Countrycard from './CountryCard';
import Loader from './Loader';
import { toast } from 'react-toastify';

const CountryContainer = ({query,filter}) => {

  const [countrydata, Setcountrydata] = useState([]);
   const[loading,setloading]=useState(true);
  useEffect(() => {
  async function getData() {
try{
   const result = await axios.get(`https://restcountries.com/v3.1/${filter}`);
    Setcountrydata(result.data);
    setloading(false);
  console.log(countrydata);
}catch(error){
  toast.error(error);
}
  }
   getData();
  },[filter])

  return (
   <>

    {loading?<Loader/>:
    <div className='flex flex-row flex-wrap gap-8 justify-evenly'>
     {countrydata.length > 0 &&
        countrydata.filter((item)=> item.name?.common.toLowerCase().includes(query.toLowerCase())).map((alldata) => {
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
      }
   </>
  )
}

export default CountryContainer