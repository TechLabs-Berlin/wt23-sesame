import { fontSize } from '@mui/system';
import React from 'react';

//install Recharts in your project, run "npm install recharts"
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
    { day: 'Mon', spending: 200 },
    { day: 'Tue', spending: 100 },
    { day: 'Wed', spending: 300 },
    { day: 'Thu', spending: 400 },
    { day: 'Fri', spending: 150 },
    { day: 'Sat', spending: 250 },
    { day: 'Sun', spending: 350 },
  ];
const BarChartComponent = () => {
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
