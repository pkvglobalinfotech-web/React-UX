import type { CSSProperties, ReactNode } from 'react';
import { colors, typography } from '../components/ui/tokens';

export interface DashboardItemProps {
  icon: ReactNode;
  header: string;
  description: string;
  onClick?: () => void;
  width?: CSSProperties['width'];
  className?: string;
  style?: CSSProperties;
}

export const DashboardItem = ({
  icon,
  header,
  description,
  onClick,
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
      cursor: onClick ? 'pointer' : 'default',
      ...style,
    }}
    onClick={onClick}
    role={onClick ? 'button' : undefined}
    tabIndex={onClick ? 0 : undefined}
    onKeyDown={(event) => {
      if (onClick && (event.key === 'Enter' || event.key === ' ')) onClick();
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
