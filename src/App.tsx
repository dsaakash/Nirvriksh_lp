import { Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import RCAGamePage from './pages/RCAGamePage';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/saas/rca/vsl" element={<RCAGamePage />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  );
}

export default App;