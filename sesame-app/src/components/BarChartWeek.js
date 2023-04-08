import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BarChartComponent = () => {
  //using the useState hook to initialize the data state as an empty array.
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(null);
  //in the useEffect hook, we are making an asynchronous call to fetch the data from the server using the fetch() method.
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/expenseOverviewBarChart');
        const responseData = await response.json();
        console.log(responseData);
        setData(responseData.expenditures); //Once data is retrieved, we update the state using the setData() method.
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } 

  return (
    <ResponsiveContainer width="100%" height={110}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="day"
          style={{
            fontSize: "10px",
            fill: "white",
          }}
        />
        <YAxis
          width={24}
          style={{
            fontSize: "10px",
            fill: "white",
          }}
        />
        <Tooltip />
        {/*<Legend /> */}
        <Bar dataKey="spending" fill="#3A3BFF" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
