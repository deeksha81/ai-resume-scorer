import { Routes, Route } from 'react-router-dom';
import SideBar from './components/SideBar/SideBar';
import Dashboard from './components/Dashboard/Dashboard';
import History from './components/History/History';
import Admin from './components/Admin/Admin';

function App() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      
      <SideBar />

      <div style={{ flex: 1, padding: '20px' }}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/history" element={<History />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
