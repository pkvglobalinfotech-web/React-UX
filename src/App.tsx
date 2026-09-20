import { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import { Header } from "./react-components/Header";
import { Footer } from "./react-components/Footer.tsx";
import { Sidebar } from "./react-components/Sidebar";
import { dashboardItems } from "./config/Dashboard.config";
import { facilityConfig } from "./config/footerConfig.ts";
import ModulePage from "./Pages/ModulePage.tsx";

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const isLoginPage = location.pathname === '/';
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff', overflow: 'hidden' }}>
      {!isLoginPage && <Header facilityName={facilityConfig.name} onMenuClick={() => { setSidebarVisible(true); setSidebarOpen(true); }} />}
      {!isLoginPage && sidebarVisible && (
        <Sidebar
          items={dashboardItems}
          searchValue={searchTerm}
          onSearchChange={setSearchTerm}
          onClose={() => {
            setSearchTerm('');
            setSidebarOpen(false);
          }}
          isOpen={sidebarOpen}
          onClosed={() => setSidebarVisible(false)}
          onItemClick={(route) => {
            setSearchTerm('');
            setSidebarOpen(false);
            navigate(route);
          }}
        />
      )}
      <main style={{ flex: 1, minHeight: 0, overflowY: 'auto' }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard searchTerm={searchTerm} />} />
          {dashboardItems.map((item) => (
            <Route key={item.route} path={item.route} element={<ModulePage header={item.header} children={item.children} />} />
          ))}
          {dashboardItems.flatMap((item) => item.children || []).map((item) => (
            <Route key={item.route} path={item.route} element={<ModulePage header={item.header} />} />
          ))}
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