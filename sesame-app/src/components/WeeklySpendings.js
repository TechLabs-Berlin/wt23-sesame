import React from "react";
import { useEffect, useState } from "react";
import BarChartComponent from "./BarChart";
import TopFiveSpendings from "./TopFiveSpendings";

function WeeklySpendings() {
  const boxStyles = {
    background: "linear-gradient(269.39deg, #57AEFE 49.47%, #6B71FF 95.75%)",
    padding: "16px 24px",
    borderRadius: "16px",
    color: "#fff",
  };

  const [totalSpending, setTotalSpending] = useState(0);
  const [dailyAverage, setDailyAverage] = useState(0);

  useEffect(() => {


    const fetchSpendings = async () => {
      try {
        const response = await fetch('http://localhost:4000/expenseOverviewBarChart'); //need to replace url
        const responseData = await response.json();
        console.log(responseData);
        setTotalSpending(responseData.totalSpending);
        setDailyAverage(responseData.dailyAverage);
      } catch (error) {
        console.error(error);
    }
  }
    fetchSpendings();
  }, []);

  return (
    <div style={boxStyles}>

      <p style={{ opacity: 0.6, padding: '8px 0px' }}>Your Total Spending (01.–07. Jan. 2022)</p>
      <p className='display'>{totalSpending} €</p>
      <p style={{ opacity: 0.6 }}>Ø{dailyAverage} € per day </p>
      <div style={{ padding: "24px 0px 0px" }}>
        <BarChartComponent />
      </div>
      <div>
        <TopFiveSpendings />
      </div>
    </div>
  );
}

export default WeeklySpendings;
