import { Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import RCAGamePage from './pages/RCAGamePage';
import AdminDashboard from './pages/AdminDashboard';
import SaaSVslPage from './pages/SaaSVslPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/vsl/saas/rca" element={<SaaSVslPage />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  );
}

export default App;