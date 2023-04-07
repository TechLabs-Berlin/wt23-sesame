import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

//example data to feed the barchart without fetching from external sources:
/*const data = [
    { month: 'Jan', spending: 1114.95 },
    { month: 'Feb', spending: 953.28 },
    { month: 'Mar', spending: 1326.15 },
    { month: 'Apr', spending: 565.19 },
    { month: 'May', spending: 2050.00 },
    { month: 'Jun', spending: 1833.44 },
    { month: 'Jul', spending: 1980.13 },
    { month: 'Aug', spending: 880.13 },
    { month: 'Sep', spending: 1350.13 },
    { month: 'Okt', spending: 1904.13 },
    { month: 'Nov', spending: 2080.13 },
    { month: 'Dec', spending: 2180.13 },
];*/

const BarChartMonth = () => {

    //using the useState hook to initialize the data state as an empty array.
    const [data, setData] = React.useState([]);
    const [error, setError] = React.useState(null);

    //in the useEffect hook, we are making an asynchronous call to fetch the data from the server using the fetch() method.
    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:4000//expenseOverviewBarChartMonth');
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
                    dataKey='month' 
                    style={{
                        fontSize: '10px', 
                        fill: 'white',
                    }}
                />
                <YAxis 
                    width={24}
                    style={{
                        fontSize: '10px', 
                        fill: 'white',
                    }} 
                />
                <Tooltip />
                <Bar dataKey='spending' fill='#3A3BFF' />
            </BarChart>
        </ResponsiveContainer>
    );
  
};

export default BarChartMonth;
