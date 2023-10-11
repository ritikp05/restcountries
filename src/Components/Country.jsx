import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const Country = () => {
  const [singlecount, Setsinglecount] = useState('')
  const { id } = useParams()
  useEffect(() => {
    const uniqu = setTimeout(() => {
      async function Data() {

        const result = await axios.get(`https://restcountries.com/v3.1/name/${id}?fullText=true`);
       console.log(result.data[0]);
       
        Setsinglecount({
          cname: result?.data[0].name.common,
          capital: result?.data[0].capital[0],
          population: result?.data[0].population,
          region: result?.data[0].region,
          nativename: result?.data[0].name.nativeName.spa.common,
          subregion: result?.data[0].subregion,
          flags: result?.data[0].flags.png
        })
        //  Setcountrydata(result.data[0]);
      }
      Data();
    }, 2000)

    return (() => {
      clearTimeout(uniqu)
    })



  }, [])

  return (
    <div className='flex flex-col'>
    
<p>         {singlecount?.cname}  </p>
<p>         {singlecount?.capital}  </p>
<p>         {singlecount?.region}  </p>
<p>           {singlecount?.subregion}</p>
<p>         {singlecount?.population}  </p>
<img src={singlecount?.flag}  alt='flag' />
<p>       {singlecount?.nativename}
</p>
{console.log(singlecount)}






  
    </div>
  )
}

export default Country