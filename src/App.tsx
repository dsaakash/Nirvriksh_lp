import { Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import RCAGamePage from './pages/RCAGamePage';
import AdminDashboard from './pages/AdminDashboard';
import SaaSVslPage from './pages/SaaSVslPage';
import CityLandingPage from './pages/CityLandingPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/vsl" element={<SaaSVslPage />} />
      <Route path="/saas" element={<SaaSVslPage />} />
      <Route path="/rca" element={<RCAGamePage />} />
      <Route path="/vsl/saas/rca" element={<SaaSVslPage />} />
      <Route path="/admin" element={<AdminDashboard />} />

      {/* City Landing Pages - Dynamic Route */}
      <Route path="/garment-store-software-:city" element={<CityLandingPage />} />
    </Routes>
  );
}

export default App;