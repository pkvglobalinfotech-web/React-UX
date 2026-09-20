import { DashboardItem } from '../react-components/DashboardItem';
import { dashboardItems } from '../config/Dashboard.config';

export default function Dashboard() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '42px', flexWrap: 'wrap' }}>
        {dashboardItems.map((item) => (
          <DashboardItem
            key={item.header}
            icon={<img src={item.icon} alt="" width="30" height="30" style={{ display: 'block', filter: 'brightness(0)' }} />}
            header={item.header}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}