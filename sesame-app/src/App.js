import './App.css';
import React from 'react';
import ImportBills from './pages/import-bills/ImportBills';
import YourBills from './pages/your-bills/YourBills';
import Account from './pages/account/Account';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';



function App() {
  const [value, setValue] = React.useState('import-bills');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/import-bills" element={<ImportBills value={value} handleChange={handleChange} />} />
          <Route path="/your-bills" element={<YourBills value={value} handleChange={handleChange} />} />
          <Route path="/account" element={<Account value={value} handleChange={handleChange} />} />
          <Route path="*" element={<Navigate to="/import-bills" />} />
        </Routes>
      </Router>
    
    </div>
  );
}


export default App;
