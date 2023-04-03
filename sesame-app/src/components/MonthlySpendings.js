import React from 'react';
import BarChartComponent from './BarChart';
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
      <p style={{ opacity: 0.6, padding: '8px 0px' }}>Your Total Spending (January 2022)</p>
      <p style={{ fontSize: '36px', lineHeight: '44px' }}>1823.14€</p>
      <p style={{ opacity: 0.6 }}>Ø117,59 € per week </p>
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
