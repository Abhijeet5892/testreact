import React, { useEffect, useState } from 'react';
import Loader from './Loader';

const Useeffectapi = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const displaydata = async () => {
        try {
            const res = await fetch('https://restcountries.com/v3.1/name/');
            const alldata = await res.json();
            console.log(alldata[0]);
            setData(alldata);
            setTimeout(() => {
                setLoading(false);
            }, 500); // Wait for 2 seconds
        } catch (error) {
            console.log("my error is" + error);
        }
    }

    useEffect(() => {
        displaydata();
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <div>
            {
                data.map((currele) => {
                    return (
                        <div key={currele.id}>
                            <h1>INDIA Information</h1>
                            <p>Capital: {currele.capital}</p>
                            <p>Population: {currele.population}</p>
                            <p>These are 6 border of Delhi {currele.borders}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Useeffectapi;
