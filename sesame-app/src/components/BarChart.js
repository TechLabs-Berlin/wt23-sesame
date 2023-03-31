import React from 'react';
import { useEffect, useState } from 'react';
//install Recharts in your project, run "npm install recharts"
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

//example data to feed the barchart without fetching from external sources:
/*const data = [
    { day: 'Mon', spending: 200 },
    { day: 'Tue', spending: 100 },
    { day: 'Wed', spending: 300 },
    { day: 'Thu', spending: 400 },
    { day: 'Fri', spending: 150 },
    { day: 'Sat', spending: 250 },
    { day: 'Sun', spending: 350 },
];*/

const BarChartComponent = () => {
    //using the useState hook to initialize the data state as an empty array.
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    //in the useEffect hook, we are making an asynchronous call to fetch the data from the server using the fetch() method.
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:4000/expenseOverviewBarChart');
                const responseData = await response.json();
                console.log(responseData);
                setData(responseData); //Once data is retrieved, we update the state using the setData() method.
            }   catch (error) {
                setError(error);
                }
        };
        fetchData();
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <ResponsiveContainer width='100%' height={110}>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis 
                    dataKey='day' 
                    style={{
                        fontSize: '12px', 
                        fill: 'white',
                    }}
                />
                <YAxis 
                    width={30}
                    style={{
                        fontSize: '12px', 
                        fill: 'white',
                    }} 
                />
                <Tooltip />
                {/*<Legend /> */}
                <Bar dataKey='spending' fill='#3A3BFF' />
            </BarChart>
        </ResponsiveContainer>
    );
  
};

export default BarChartComponent;
