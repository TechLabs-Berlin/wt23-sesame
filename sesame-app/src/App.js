import './App.css';
import ImportBills from './pages/import-bills/ImportBills';
import YourBills from './pages/your-bills/YourBills';
import Account from './pages/account/Account';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<ImportBills />} />
          <Route path="/your-bills" element={<YourBills />} />
          <Route path="/account" element={<Account />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
