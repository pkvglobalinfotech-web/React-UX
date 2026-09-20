import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import { Header } from "./react-components/Header";
import { Footer } from "./react-components/Footer.tsx";
import { facilityConfig } from "./config/footerConfig.ts";

function AppContent() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff' }}>
      {!isLoginPage && <Header facilityName={facilityConfig.name} />}
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
      {!isLoginPage && (
        <Footer
          email={facilityConfig.email}
          phone={facilityConfig.phone}
          facilityName={facilityConfig.name}
        />
      )}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;