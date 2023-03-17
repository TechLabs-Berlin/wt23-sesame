import React from 'react';
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
      <BarChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="spending" fill="#8884d8" />
      </BarChart>
    );
  
};

export default BarChartComponent;
