import React from 'react';
import BarChartComponent from './BarChartMonth';
import TopFiveSpendings from './TopFiveSpendings';


function MonthlySpendings() {

  const boxStyles = {
    background: 'linear-gradient(269.39deg, #57AEFE 49.47%, #6B71FF 95.75%)',
    padding: '16px 24px',
    borderRadius: '16px',
    color: '#fff',
  };


  return (
    <div style={boxStyles}>
      <p style={{ opacity: 0.6, padding: '8px 0px' }}>Your Total Spending 2022</p>
      <p className='display'>24423.14€</p>
      <p style={{ opacity: 0.6 }}>Ø2035,26 € per month </p>
      <div style={{ padding: '24px 0px 0px' }}>
        <BarChartComponent/>
      </div>
      <div>
        <TopFiveSpendings/>
      </div>
    </div>
  );

};

export default MonthlySpendings;

