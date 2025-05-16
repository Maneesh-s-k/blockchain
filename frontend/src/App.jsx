import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import DashboardPage from "./pages/DashboardPage";
import MarketplacePage from "./pages/MarketplacePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/marketplace" element={<MarketplacePage />} />
        <Route path="*" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
