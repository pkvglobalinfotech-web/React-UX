import type { CSSProperties, ReactNode } from 'react';
import { colors, typography } from '../components/ui/tokens';

export interface DashboardItemProps {
  icon: ReactNode;
  header: string;
  description: string;
  width?: CSSProperties['width'];
  className?: string;
  style?: CSSProperties;
}

export const DashboardItem = ({
  icon,
  header,
  description,
  width = '160px',
  className,
  style,
}: DashboardItemProps) => (
  <div
    className={className}
    style={{
      width,
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      ...style,
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '30px', marginBottom: '7px' }}>
      {icon}
    </div>
    <div style={{ color: colors.primary, ...typography.labelSm }}>
      {header}
    </div>
    <div style={{ color: colors.textMuted, ...typography.caption, marginTop: '4px' }}>
      {description}
    </div>
  </div>
);
