import { DashboardItem } from '../react-components/DashboardItem';
import { dashboardItems } from '../config/Dashboard.config';
import { useNavigate } from 'react-router-dom';

export default function Dashboard({ searchTerm = '' }: { searchTerm?: string }) {
  const navigate = useNavigate();
  const normalizedSearchTerm = searchTerm.trim().toLowerCase();
  const visibleItems = dashboardItems.filter((item) => item.header.toLowerCase().includes(normalizedSearchTerm));

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '42px', flexWrap: 'wrap' }}>
        {visibleItems.map((item) => (
          <DashboardItem
            key={item.header}
            icon={<img src={item.icon} alt="" width="30" height="30" style={{ display: 'block', filter: 'brightness(0)' }} />}
            header={item.header}
            description={item.description}
            onClick={() => navigate(item.route)}
          />
        ))}
        {visibleItems.length === 0 && <p style={{ color: '#60798C' }}>No dashboard items found</p>}
      </div>
    </div>
  );
}