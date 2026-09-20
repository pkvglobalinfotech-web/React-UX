import { useEffect, useState } from 'react';
import { colors, radii, shadows, spacing, typography, transitions, zIndex } from '../components/ui/tokens';

export interface SidebarItem {
  icon: string;
  header: string;
  route: string;
}

export interface SidebarProps {
  items: readonly SidebarItem[];
  searchValue: string;
  onSearchChange: (value: string) => void;
  onClose: () => void;
  isOpen: boolean;
  onClosed: () => void;
  onItemClick: (route: string) => void;
}

export const Sidebar = ({ items, searchValue, onSearchChange, onClose, isOpen, onClosed, onItemClick }: SidebarProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const normalizedSearchValue = searchValue.trim().toLowerCase();
  const visibleItems = items.filter((item) => item.header.toLowerCase().includes(normalizedSearchValue));

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsVisible(isOpen));
    return () => cancelAnimationFrame(frame);
  }, [isOpen]);

  return (
  <>
    <div
      onClick={onClose}
      aria-hidden="true"
      style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(15, 23, 42, 0.35)', opacity: isVisible ? 1 : 0, transition: transitions.base, zIndex: zIndex.overlay }}
    />
    <aside
      aria-label="Dashboard navigation"
      onTransitionEnd={(event) => {
        if (event.propertyName === 'transform' && !isVisible) onClosed();
      }}
      style={{
        position: 'fixed', top: 0, bottom: 0, left: 0, width: '280px', maxWidth: '85vw',
        padding: `${spacing.xl} ${spacing.md}`, backgroundColor: colors.surface,
        boxShadow: shadows.xl, zIndex: zIndex.drawer, overflow: 'hidden',
        boxSizing: 'border-box', display: 'flex', flexDirection: 'column',
        transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',
        transition: transitions.base,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: spacing.lg }}>
        <h2 style={{ margin: 0, color: colors.textMain, fontFamily: typography.fontFamily, fontSize: '18px' }}>
          Dashboard
        </h2>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          style={{ border: 'none', background: 'transparent', color: colors.textMuted, cursor: 'pointer', fontSize: '18px' }}
        >
          <i className="fa-solid fa-xmark" aria-hidden="true" />
        </button>
      </div>

      <div style={{ position: 'relative', marginBottom: spacing.lg }}>
        <i className="fa-solid fa-magnifying-glass" aria-hidden="true" style={{ position: 'absolute', left: spacing.sm, top: '11px', color: colors.textSubtle, fontSize: '13px' }} />
        <input
          type="search"
          value={searchValue}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search dashboard items"
          aria-label="Search dashboard items"
          style={{
            width: '100%', boxSizing: 'border-box', padding: `${spacing.sm} ${spacing.sm} ${spacing.sm} 30px`,
            border: `1px solid ${colors.border}`, borderRadius: radii.md, outline: 'none',
            color: colors.textMain, fontFamily: typography.fontFamily, fontSize: '13px',
          }}
        />
      </div>

      <nav className="dashboard-sidebar-items" style={{ display: 'flex', flexDirection: 'column', gap: spacing.xs, flex: 1, minHeight: 0, overflowY: 'auto', paddingRight: spacing.xs }}>
        {visibleItems.length > 0 ? visibleItems.map((item) => (
          <button key={item.header} type="button" onClick={() => onItemClick(item.route)} style={{ display: 'flex', alignItems: 'center', gap: spacing.sm, width: '100%', padding: `${spacing.sm} ${spacing.xs}`, border: 'none', background: 'transparent', borderRadius: radii.md, color: colors.textBody, fontFamily: typography.fontFamily, fontSize: '13px', textAlign: 'left', cursor: 'pointer' }}>
            <img src={item.icon} alt="" width="22" height="22" style={{ objectFit: 'contain', filter: 'brightness(0)' }} />
            <span>{item.header}</span>
          </button>
        )) : (
          <span style={{ padding: spacing.sm, color: colors.textSubtle, fontFamily: typography.fontFamily, fontSize: '13px' }}>
            No dashboard items found
          </span>
        )}
      </nav>
    </aside>
  </>
  );
};
