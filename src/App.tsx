import { Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import SaaSVslPage from './pages/SaaSVslPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/saas/rca/vsl" element={<SaaSVslPage />} />
    </Routes>
  );
}

export default App;