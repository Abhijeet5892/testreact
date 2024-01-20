// UseeffectCovidapi.js
import React, { useEffect, useState } from 'react';
import './UseeffectCovidapi.css'; // Import the external CSS file

const UseeffectCovidapi = () => {
    const [data, setData] = useState([]);

    const getCovidData = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise);
            setData(actualData.statewise)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        getCovidData();
    }, []);

    return (
        <div>
            <h1>
                <span>INDIA </span> COVID-19 DASHBOARD
            </h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>state</th>
                            <th>active</th>
                            <th>confirmed</th>
                            <th>Deaths</th>
                            <th>deltaconfirmed</th>
                            <th>deltadeaths</th>
                            <th>deltarecovered</th>
                            <th>lastupdatedtime</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((curElem, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{curElem.state}</td>
                                        <td>{curElem.active}</td>
                                        <td>{curElem.confirmed}</td>
                                        <td>{curElem.deaths}</td>
                                        <td>{curElem.deltaconfirmed}</td>
                                        <th>{curElem.deltadeaths}</th>
                                        <th>{curElem.deltarecovered}</th>
                                        <th>{curElem.lastupdatedtime}</th>

                                    </tr>
                                )
                            })
                        }

                    </tbody>
                    {/* Add your table data here */}
                </table>
            </div>
        </div>
    );
};

export default UseeffectCovidapi;
