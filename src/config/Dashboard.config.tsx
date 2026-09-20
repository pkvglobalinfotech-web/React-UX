export interface DashboardConfigItem {
  icon: string;
  header: string;
  description: string;
  route: string;
  children?: readonly DashboardConfigItem[];
}

export const dashboardItems: readonly DashboardConfigItem[] = [
  {
    icon: '/assets/svg/clock.svg',
    header: 'Appointments',
    description: 'Appointments Management',
    route: '/appointments',
  },
  {
    icon: '/assets/svg/profileicon.svg',
    header: 'Front Desk',
    description: 'Registration With Patient Sidebar',
    route: '/front-desk',
    children: [
      { icon: '/assets/svg/profileicon.svg', header: 'Bulk Patient Registration', description: 'Bulk Patient Registration', route: '/front-desk/bulk-registration' },
      { icon: '/assets/svg/settings-user.svg', header: 'Detailed Visit Registration', description: 'Registration With Patient Sidebar', route: '/front-desk/detailed-registration' },
      { icon: '/assets/svg/summary.svg', header: 'Emirates Member & Eligibility Check', description: 'Check Member Insurance Eligibility', route: '/front-desk/emirates-eligibility' },
      { icon: '/assets/svg/summary.svg', header: 'Global View of Certificate', description: 'View & Manage Issued Certificates', route: '/front-desk/certificates' },
      { icon: '/assets/svg/summary.svg', header: 'Global View of Prior Authorization', description: 'View & Manage Pre-Approvals', route: '/front-desk/prior-authorization' },
      { icon: '/assets/svg/summary.svg', header: 'Global View of Registration', description: 'View & Manage Registrations', route: '/front-desk/registrations' },
      { icon: '/assets/svg/summary.svg', header: 'Insurance Pre Approvals', description: 'Insurance Pre Approvals', route: '/front-desk/insurance-approvals' },
      { icon: '/assets/svg/clipboard.svg', header: 'Patient Consent Form', description: 'Patient Consent Form', route: '/front-desk/patient-consent' },
      { icon: '/assets/svg/start.svg', header: 'Patient Documents', description: 'Manage Patients External Documents', route: '/front-desk/patient-documents' },
      { icon: '/assets/svg/add-item.svg', header: 'Simple Visit Registration', description: 'Brief Registration Form', route: '/front-desk/simple-registration' },
      { icon: '/assets/svg/summary.svg', header: 'VET Visit Update Master', description: 'VET Visit Update Master', route: '/front-desk/visit-update-master' },
      { icon: '/assets/svg/close.svg', header: 'Visit Cancellation', description: 'Description Of Visit Cancellation', route: '/front-desk/visit-cancellation' },
    ],
  },
  {
    icon: '/assets/svg/clipboard.svg',
    header: 'Consent Forms',
    description: 'Manage Medical Consents',
    route: '/consent-forms',
  },
  {
    icon: '/assets/svg/summary.svg',
    header: 'EMR',
    description: 'Medical Workbench',
    route: '/emr',
  },
  {
    icon: '/assets/svg/print-black.svg',
    header: 'Billing',
    description: 'Patient Billing & Refunds',
    route: '/billing',
  },
  {
    icon: '/assets/svg/close.svg',
    header: 'Emergency',
    description: 'Emergency',
    route: '/emergency',
  },
  {
    icon: '/assets/svg/transfer.svg',
    header: 'Operating Room',
    description: 'Operating Room',
    route: '/operating-room',
  },
  {
    icon: '/assets/svg/profileicon.svg',
    header: 'IP',
    description: 'In Patient',
    route: '/ip',
  },
  {
    icon: '/assets/svg/add-item.svg',
    header: 'Bed Management',
    description: 'Manage Admissions & Bed Status',
    route: '/bed-management',
  },
  {
    icon: '/assets/svg/settings-user.svg',
    header: 'BRMS',
    description: 'Business Rules Management System',
    route: '/brms',
  },
  {
    icon: '/assets/svg/profileicon.svg',
    header: 'LIS',
    description: 'View & Manage LIS Orders',
    route: '/lis',
  },
  {
    icon: '/assets/svg/profileicon.svg',
    header: 'RIS',
    description: 'View & Manage RIS Orders',
    route: '/ris',
  },
  {
    icon: '/assets/svg/start.svg',
    header: 'Dispatch Results',
    description: 'Investigation Result Dispatch',
    route: '/dispatch-results',
  },
  {
    icon: '/assets/svg/clipboard.svg',
    header: 'E-Claims',
    description: 'Insurance And Corporate Claim Management',
    route: '/e-claims',
  },
  {
    icon: '/assets/svg/transfer.svg',
    header: 'Procurement',
    description: 'Procurement Management',
    route: '/procurement',
  },
  {
    icon: '/assets/svg/summary.svg',
    header: 'Inventory',
    description: 'Inventory Management',
    route: '/inventory',
  },
  {
    icon: '/assets/svg/add-item.svg',
    header: 'Pharmacy',
    description: 'Pharmacy Management',
    route: '/pharmacy',
  },
  {
    icon: '/assets/svg/graph-line.svg',
    header: 'Reports',
    description: 'View & Extract Reports',
    route: '/reports',
  },
] as const;
