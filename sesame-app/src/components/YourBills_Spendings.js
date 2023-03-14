import React from 'react';

function YourBillsSpendings() {
    
  const chartData = {
  //Define your chart data here
  };
  
  const boxStyles = {
  background: 'linear-gradient(269.39deg, #57AEFE 49.47%, #6B71FF 95.75%)',
  padding: '16px 24px',
  borderRadius: '16px',
  color: '#fff',
  };


  return (

    <div style={boxStyles}>
      <p style={{opacity: 0.6}}>Your Total Spending 01.–07. Jan. 2023</p>
      <p style={{fontSize: '36px', lineHeight: '44px'}}>1.234567,89€</p>
      <p style={{opacity: 0.6}}>Ø12345,67 € </p>
      <div style={{padding: '24px 0px'}}>Here comes the bar charts, please help!</div>
      <p className='label' style={{opacity: 0.6, padding: '16px 0px 8px', borderTop: '1px solid #E8DEF8'}}>Top 5 Spendings:</p>
    </div>
      
  );
    
};

export default YourBillsSpendings;