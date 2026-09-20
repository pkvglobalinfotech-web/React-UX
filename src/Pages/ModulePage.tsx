import { useNavigate } from 'react-router-dom';
import { colors, spacing, typography } from '../components/ui/tokens';
import { DashboardItem } from '../react-components/DashboardItem';
import type { DashboardConfigItem } from '../config/Dashboard.config';

interface ModulePageProps {
  header: string;
  children?: readonly DashboardConfigItem[];
}

export default function ModulePage({ header, children = [] }: ModulePageProps) {
  const navigate = useNavigate();

  return (
    <section style={{ padding: spacing.xxl, fontFamily: typography.fontFamily, color: colors.textMain }}>
      <h1 style={{ margin: 0, color: colors.primary, fontSize: '18px', fontWeight: 500, textAlign: 'center', textTransform: 'uppercase' }}>
        {header}
      </h1>
      {children.length > 0 && (
        <div style={{ paddingTop: spacing.xl, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: `${spacing.xxl} ${spacing.xl}`, marginTop: spacing.xl }}>
          {children.map((item) => (
            <DashboardItem
              key={item.route}
              icon={<img src={item.icon} alt="" width="34" height="34" style={{ filter: 'brightness(0)' }} />}
              header={item.header}
              description={item.description}
              onClick={() => navigate(item.route)}
            />
          ))}
        </div>
      )}
    </section>
  );
}