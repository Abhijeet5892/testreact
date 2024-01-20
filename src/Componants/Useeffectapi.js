import React, { useEffect, useState } from 'react'

const Useeffectapi = () => {
    const [data, setData] = useState([]);

    const didplaydata = async () => {
        try {
            const response = await fetch('https://restcountries.com/v3.1/name/india');
            //console.log(response);
            const actualData = await response.json();
            console.log(actualData[1]);
            setData(actualData[1]);
        } catch (err) {
            console.log(err);
        }


    }

    useEffect(() => {
        didplaydata();
    }, [])
    return (
        <div>
            <h1>INDIA Information</h1>
            <p>Capital: {data.capital}</p>
            <p>Population: {data.population}</p>
            <p>These are 6 border of Delhi {data.borders}</p>

        </div>
    )
}

export default Useeffectapi;
