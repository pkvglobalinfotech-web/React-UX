import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { colors, radii, shadows, spacing, typography, zIndex } from '../components/ui/tokens';
import pkvLogo from '../assets/PKV-logo.png';

export interface HeaderProps {
  onMenuClick?: () => void;
  facilityName?: string;
  userName?: string;
  notificationCount?: number;
}

export const Header = ({
  onMenuClick,
  facilityName = 'HIMS',
  userName = 'Admin',
  notificationCount = 0,
}: HeaderProps) => {
  const navigate = useNavigate();
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const handleLogout = () => {
    setProfileOpen(false);
    navigate('/');
  };

  return (
    <header
      style={{
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: `0 ${spacing.lg}`,
        backgroundColor: colors.primary,
        color: colors.textInverse,
        boxShadow: shadows.navbar,
        position: 'sticky',
        top: 0,
        zIndex: zIndex.sticky,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: spacing.md, minWidth: 0 }}>
        <button
          type="button"
          onClick={onMenuClick}
          aria-label="Open menu"
          style={{
            border: 'none', background: 'transparent', color: colors.textInverse,
            cursor: 'pointer', fontSize: '20px', padding: spacing.xs,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <i className="fa-solid fa-bars" aria-hidden="true" />
        </button>
        <img
          src={pkvLogo}
          alt="PKV Global Infotech"
          style={{ height: '48px', maxWidth: '180px', objectFit: 'contain' }}
        />
      </div>

      <div style={{
        position: 'absolute', left: '50%', transform: 'translateX(-50%)',
        maxWidth: '45%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
        color: colors.textInverse, fontFamily: typography.fontFamily,
        fontSize: '15px', fontWeight: 600, textAlign: 'center',
      }} title={facilityName}>
        {facilityName}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: spacing.md }}>
        <button
          type="button"
          aria-label={`Notifications${notificationCount ? ` (${notificationCount})` : ''}`}
          style={{
            position: 'relative', border: 'none', background: 'transparent',
            color: colors.textInverse, cursor: 'pointer', fontSize: '18px', padding: spacing.xs,
          }}
        >
          <i className="fa-solid fa-bell" aria-hidden="true" />
          {notificationCount > 0 && (
            <span style={{
              position: 'absolute', top: '-2px', right: '-4px', minWidth: '16px', height: '16px',
              padding: '0 3px', borderRadius: radii.full, backgroundColor: colors.danger,
              color: colors.textInverse, fontSize: '10px', lineHeight: '16px', fontWeight: 700,
            }}>
              {notificationCount}
            </span>
          )}
        </button>

        <div ref={profileRef} style={{ position: 'relative' }}>
          <button
            type="button"
            onClick={() => setProfileOpen((open) => !open)}
            aria-label="Open profile menu"
            aria-expanded={profileOpen}
            style={{
              width: '36px', height: '36px', border: `2px solid ${colors.textInverse}`,
              borderRadius: radii.full, backgroundColor: colors.surface, color: colors.primary,
              cursor: 'pointer', fontWeight: 700, fontSize: '14px',
            }}
          >
            {userName.charAt(0).toUpperCase()}
          </button>

          {profileOpen && (
            <div style={{
              position: 'absolute', top: 'calc(100% + 10px)', right: 0, minWidth: '180px',
              padding: `${spacing.sm} 0`, backgroundColor: colors.surface,
              border: `1px solid ${colors.border}`, borderRadius: radii.md,
              boxShadow: shadows.lg, zIndex: zIndex.dropdown,
            }}>
              <div style={{ padding: `${spacing.sm} ${spacing.md}`, color: colors.textMain, fontFamily: typography.fontFamily, fontSize: '13px', fontWeight: 600 }}>
                {userName}
              </div>
              <button
                type="button"
                onClick={handleLogout}
                style={{
                  width: '100%', border: 'none', background: 'transparent', textAlign: 'left',
                  padding: `${spacing.sm} ${spacing.md}`, color: colors.danger,
                  cursor: 'pointer', fontFamily: typography.fontFamily, fontSize: '13px',
                }}
              >
                <i className="fa-solid fa-right-from-bracket" aria-hidden="true" style={{ marginRight: spacing.sm }} />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
