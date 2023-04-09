import React from "react";
import BarChartWeek from "./BarChartWeek";
import TopSpendingsWeek from "./TopSpendingsWeek";


function WeeklySpendings() {
  const boxStyles = {
    background: "linear-gradient(269.39deg, #57AEFE 49.47%, #6B71FF 95.75%)",
    padding: "24px 24px",
    borderRadius: "16px",
    color: "#fff",
  };

  const [totalSpending, setTotalSpending] = React.useState(0);
  const [dailyAverage, setDailyAverage] = React.useState(0);
  const [timePeriod, setTimePeriod] = React.useState(0);

  React.useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/expenseOverviewBarChart'); 
        const responseData = await response.json();
        console.log(responseData);
        setTotalSpending(responseData.totalSpending);
        setDailyAverage(responseData.dailyAverage);
        setTimePeriod(responseData.timePeriod);
      } 
      catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div style={boxStyles}>

      <p style={{ opacity: 0.6}}>Your Total Spending from {timePeriod}</p>
      <p className='display'>{totalSpending} €</p>
      <p style={{ opacity: 0.6 }}>Ø{dailyAverage} € per day </p>
      <div style={{ padding: "24px 0px 0px" }}>
        <BarChartWeek />
      </div>
      <div>
        <TopSpendingsWeek />
      </div>
    </div>
  );
}

export default WeeklySpendings;
