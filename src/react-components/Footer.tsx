import { colors, spacing, typography } from '../components/ui/tokens';

export interface FooterProps {
  email: string;
  phone: string;
  facilityName: string;
}

export const Footer = ({ email, phone, facilityName }: FooterProps) => (
  <footer
    style={{
      display: 'grid',
      gridTemplateColumns: '1fr auto 1fr',
      alignItems: 'center',
      gap: spacing.md,
      padding: `${spacing.md} ${spacing.lg}`,
      borderTop: `1px solid ${colors.border}`,
      backgroundColor: colors.surfaceMuted,
      color: colors.textMuted,
      fontFamily: typography.fontFamily,
      fontSize: '12px',
    }}
  >
    <a
      href={`mailto:${email}`}
      style={{ color: colors.primary, textDecoration: 'none', justifySelf: 'start' }}
    >
      <i className="fa-solid fa-envelope" aria-hidden="true" style={{ marginRight: spacing.xs }} />
      {email}
    </a>
    <span style={{ textAlign: 'center' }}>
      © {new Date().getFullYear()} {facilityName}. All rights reserved.
    </span>
    <a
      href={`tel:${phone}`}
      style={{ color: colors.primary, textDecoration: 'none', justifySelf: 'end' }}
    >
      <i className="fa-solid fa-phone" aria-hidden="true" style={{ marginRight: spacing.xs }} />
      {phone}
    </a>
  </footer>
);
