import './App.css';
import React from 'react';
import SignIn from './pages/SignIn/SignIn'
import ImportBills from './pages/import-bills/ImportBills';
import YourBills from './pages/your-bills/YourBills';
import Account from './pages/account/Account';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import WelcomeSplash from './pages/welcome-splash/WelcomeSplash'


function App() {
  const [value, setValue] = React.useState('import-bills');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/WelcomeSplash" element={<WelcomeSplash value={value} handleChange={handleChange} />} />
          <Route path="/SignIn" element={<SignIn value={value} handleChange={handleChange} />} />
          <Route path="/import-bills" element={<ImportBills value={value} handleChange={handleChange} />} />
          <Route path="/your-bills" element={<YourBills value={value} handleChange={handleChange} />} />
          <Route path="/account" element={<Account value={value} handleChange={handleChange} />} />
          <Route path="*" element={<Navigate to="/WelcomeSplash" />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
