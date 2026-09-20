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


export const navigation = [
    {
        title: 'System Setting',
        icon: 'settings',
        subNav: [
            {
                title: 'Organizations',
                route: '/dashboard/system/orgs'
            },
            {
                title: 'Hospitals',
                route: '/dashboard/system/facilitys'
            },
            {
                title: 'Departments',
                route: '/dashboard/system/deperment'
            },
            {
                title: 'Roles',
                route: '/dashboard/system/roles'
            },
            {
                title: 'Documents',
                route: '/dashboard/system/dashboard'
            },
            {
                title: 'Groups',
                route: '/dashboard/system/groups'
            },
            {
                title: 'Refferal Doctor Update',
                route: '/dashboard/system/encdocupdate'
            },
            {
                title: 'Reference Number',
                route: '/dashboard/system/sequencemasters'
            },
            {
                title: 'SMS Templates',
                route: '/dashboard/system/sms'
            },
            {
                title: 'Doctor Payment Update',
                route: '/dashboard/system/docpayment'
            },
        ]
    },
    {
        title: 'User Settings',
        icon: 'supervised_user_circle',
        subNav: [
            {
                title: 'Users',
                route: '/dashboard/users'
            },
            {
                title: 'Users Info',
                route: '/dashboard/roles'
            }
        ]
    },
    {
        title: 'Front Office',
        icon: 'person_add_alt_1',
        subNav: [
            {
                title: 'OP VisitBill Link',
                route: '/dashboard/op-vist-link'
            },
            {
                title: 'Registration',
                route: '/dashboard/register'
            },
            {
                title: 'Simple Registration',
                route: '/dashboard/quickregistration'
            },
            {
                title: 'Bulk Checkout',
                route: '/dashboard/BulkCheckOut'
            },
            {
                title: 'Full Registration',
                route: '/dashboard/full-reg'
            },
            {
                title: 'Front Office Dashboard',
                route: '/dashboard'
            },
            {
                title: 'Patient Registered',
                route: '/dashboard/PatientRegistered'
            },
            {
                title: 'IVF Registration',
                route: '/dashboard/preferences'
            },
        ]
    },
    {
        title: 'Billing',
        icon: 'calendar_month',
        subNav: [
            {
                title: 'OP Billing',
                route: '/dashboard'
            },
            {
                title: 'Treatment Plan Billing',
                route: '/dashboard'
            },
            {
                title: 'Daily Collection Report',
                route: '/dashboard'
            },
            {
                title: 'Inpatient Billing',
                route: '/dashboard'
            },
            {
                title: 'Discount Approval',
                route: '/dashboard'
            },
            {
                title: 'Discharge Billing',
                route: '/dashboard'
            },
            {
                title: 'Recepits',
                route: '/dashboard'
            },
            {
                title: 'Paymode Change',
                route: '/dashboard'
            },
            {
                title: 'General Expenses',
                route: '/dashboard'
            },
            {
                title: 'Billing Dashboard',
                route: '/dashboard'
            },
            {
                title: 'Consolidated Bills',
                route: '/dashboard'
            },
            {
                title: 'Patient Account Management',
                route: '/dashboard'
            },
            {
                title: 'OP Estimation',
                route: '/dashboard'
            },
            {
                title: 'Billing Workbench',
                route: '/dashboard'
            },
            {
                title: 'IP Refund Approval',
                route: '/dashboard'
            },
            {
                title: 'Inpatient Billing',
                route: '/dashboard'
            },
            {
                title: 'Insurance Update',
                route: '/dashboard'
            },
            {
                title: 'OP Billing Approval Request',
                route: '/dashboard'
            },
            {
                title: 'IP Billing Approval Request',
                route: '/dashboard'
            },
        ]
    },
    {
        title: 'Appointment',
        icon: 'receipt',
        subNav: [
            {
                title: 'Appointment Sessions',
                route: '/dashboard'
            },
            {
                title: 'Appointments',
                route: '/dashboard'
            },
            {
                title: 'Appointments From App',
                route: '/dashboard'
            },
            {
                title: 'Future Appointments',
                route: '/dashboard'
            },
            {
                title: 'Consultion Bills',
                route: '/dashboard'
            },
            {
                title: 'Admin Appointment Dashboard',
                route: '/dashboard'
            },
        ]
    },
    {
        title: 'Billing Master',
        icon: 'receipt_long',
        subNav: [
            {
                title: 'Billing Group',
                route: '/dashboard'
            },
            {
                title: 'Rate Type',
                route: '/dashboard'
            },
            {
                title: 'Insurances Details',
                route: '/dashboard'
            },
            {
                title: 'Billing Service',
                route: '/dashboard'
            },
            {
                title: 'Packages',
                route: '/dashboard'
            },
            {
                title: 'Surgery OrderSet',
                route: '/dashboard'
            },
            {
                title: 'Insurance Packages',
                route: '/dashboard'
            },
        ]
    },
    {
        title: 'LIS',
        icon: 'linked_camera',
        subNav: [
            {
                title: 'Order Acceptance',
                route: '/dashboard'
            },
            {
                title: 'Sample Collections',
                route: '/dashboard'
            },
            {
                title: 'Result Entry',
                route: '/dashboard'
            },
            {
                title: 'Result Approvals',
                route: '/dashboard'
            },
            {
                title: 'Result Dispatches',
                route: '/dashboard'
            },
            {
                title: 'Lab Dashboard',
                route: '/dashboard'
            },
            {
                title: 'LIS Interface',
                route: '/dashboard'
            },
            {
                title: 'Result Amendment',
                route: '/dashboard'
            },
            {
                title: 'External Provider Master',
                route: '/dashboard'
            },
            {
                title: 'External Lab Orders',
                route: '/dashboard'
            },
            {
                title: 'Order Status Change',
                route: '/dashboard'
            },
        ]
    },
    {
        title: 'RIS',
        icon: 'child_friendly',
        subNav: [
            {
                title: 'Order Acceptance',
                route: '/dashboard'
            },
            {
                title: 'Result Entry',
                route: '/dashboard'
            },
            {
                title: 'Result Approvals',
                route: '/dashboard'
            },
            {
                title: 'Result Dispatches',
                route: '/dashboard'
            },
            {
                title: 'Ris Dashboard',
                route: '/dashboard'
            },
            {
                title: 'Result Amendmant',
                route: '/dashboard'
            },
        ]
    },
    {
        title: 'Ambulatory',
        icon: 'child_friendly',
        subNav: [
            {
                title: 'Order Acceptance',
                route: '/dashboard'
            },
            {
                title: 'Result Entry',
                route: '/dashboard'
            },
            {
                title: 'Result Approvals',
                route: '/dashboard'
            },
            {
                title: 'Result Dispatches',
                route: '/dashboard'
            },
        ]
    },
    {
        title: 'IP Management',
        icon: 'settings',
        subNav: [
            {
                title: 'Admissions',
                route: '/dashboard'
            },
            {
                title: 'Bed Transfer',
                route: '/dashboard'
            },
            {
                title: 'Current IN-Patients',
                route: '/dashboard'
            },
            {
                title: 'Send To MRD',
                route: '/dashboard'
            },
            {
                title: 'IP File Request',
                route: '/dashboard'
            },
            {
                title: 'IP File Request Approve',
                route: '/dashboard'
            },
            {
                title: 'Reports',
                route: '/dashboard'
            },
            {
                title: 'Transferred File Returns',
                route: '/dashboard'
            },
            {
                title: 'IP Clearence',
                route: '/dashboard'
            },
            {
                title: 'IP File Transfer Receive',
                route: '/dashboard'
            },
            {
                title: 'Bed Receive',
                route: '/dashboard'
            },
            {
                title: 'Bed Management',
                route: '/dashboard'
            },
        ]
    },
    {
        title: 'EMR',
        icon: 'settings',
        subNav: [
            {
                title: 'Doctor Dashboard',
                route: '/dashboard'
            },
            {
                title: 'Nursing Dashboard',
                route: '/dashboard'
            },
            {
                title: 'Patient followup Tracker',
                route: '/dashboard'
            },
            {
                title: 'TratmentPlan followup',
                route: '/dashboard'
            },
            {
                title: 'Admission Request Slip',
                route: '/dashboard'
            },
        ]
    },
    {
        title: 'Discharge Summary',
        icon: 'settings',
        subNav: [
            {
                title: 'Discharge Summary',
                route: '/dashboard'
            },
            {
                title: 'Discharge Notes',
                route: '/dashboard'
            },
        ]
    },
    {
        title: 'Surgery Management',
        icon: 'settings',
        subNav: [
            {
                title: 'Surgery Schedule',
                route: '/dashboard'
            },
            {
                title: 'Bed Receive',
                route: '/dashboard'
            },
            {
                title: 'Surgery Confirmations',
                route: '/dashboard'
            },
            {
                title: 'Surgery Entries',
                route: '/dashboard'
            },
            {
                title: 'Surgery Dashboard',
                route: '/dashboard'
            },
            {
                title: 'Surgery Room Master',
                route: '/dashboard'
            },
        ]
    },
    {
        title: 'Accident Emergency',
        icon: 'settings',
        subNav: [
            {
                title: 'Registration & Admission',
                route: '/dashboard'
            },
            {
                title: 'Dashboard',
                route: '/dashboard'
            },
            {
                title: 'Billing',
                route: '/dashboard'
            },
            {
                title: 'Medicine Issues',
                route: '/dashboard'
            },
            {
                title: 'A&E Discharges',
                route: '/dashboard'
            },
            {
                title: 'A&E Billing',
                route: '/dashboard'
            },
        ]
    },
    {
        title: 'Pharmacy',
        icon: 'settings',
        subNav: [
            {
                title: 'Pharmacy Sales',
                route: '/dashboard'
            },
            {
                title: 'Medicine Returns',
                route: '/dashboard'
            },
            {
                title: 'Demographic Update',
                route: '/dashboard'
            },
            {
                title: 'Pharmacy Dashboard',
                route: '/dashboard'
            },
            {
                title: 'Pharmacy Admin Dashboard',
                route: '/dashboard'
            },
            {
                title: 'Medicine Credit Bills',
                route: '/dashboard'
            },
            {
                title: 'Medicine Credit Returns',
                route: '/dashboard'
            },
            {
                title: 'Return Worklists',
                route: '/dashboard'
            },
            {
                title: 'Dispense Worklists',
                route: '/dashboard'
            },
            {
                title: 'Return Worklists',
                route: '/dashboard'
            },
            {
                title: 'Pharmacy Advances',
                route: '/dashboard'
            },
            {
                title: 'Discount approval',
                route: '/dashboard'
            },
            {
                title: 'Consolidated Bills',
                route: '/dashboard'
            },
            {
                title: 'Pharmacy Clearance',
                route: '/dashboard'
            },
            {
                title: 'Pending Prescription',
                route: '/dashboard'
            },
            {
                title: 'Direct Patient Pharmacy Sales',
                route: '/dashboard'
            },
        ]
    },
    {
        title: 'Inventory Management',
        icon: 'settings',
        subNav: [
            {
                title: 'Store Dashboard',
                route: '/dashboard'
            },
            {
                title: 'Purchase Approval',
                route: '/dashboard'
            },
            {
                title: 'Purchase Order',
                route: '/dashboard'
            },
            {
                title: 'Invoice Entry(GRN)',
                route: '/dashboard'
            },
            {
                title: 'Purchase Return',
                route: '/dashboard'
            },
            {
                title: 'Invoice Entry(GRN)By PO',
                route: '/dashboard'
            },
            {
                title: 'Stock Entries',
                route: '/dashboard'
            },
            {
                title: 'Stock Status',
                route: '/dashboard'
            },
            {
                title: 'Stock Movement Ledger',
                route: '/dashboard'
            },
            {
                title: 'Stock Indents',
                route: '/dashboard'
            },
            {
                title: 'Stock Issue Voucher',
                route: '/dashboard'
            },
            {
                title: 'Stock Receive',
                route: '/dashboard'
            },
            {
                title: 'Internal Consumption',
                route: '/dashboard'
            },
            {
                title: 'Stock Audits',
                route: '/dashboard'
            },
            {
                title: 'Indent Worklists',
                route: '/dashboard'
            },
            {
                title: 'Manage Expiry/Non-Movement',
                route: '/dashboard'
            },
            {
                title: 'Update Expiry/Price',
                route: '/dashboard'
            },
            {
                title: 'Supplier Payments',
                route: '/dashboard'
            }, {
                title: 'Generic Wise Stock Status',
                route: '/dashboard'
            },
            {
                title: 'Re-Order Management',
                route: '/dashboard'
            },
            {
                title: 'Stock Indent To Other Branch',
                route: '/dashboard'
            },
            {
                title: 'Indents List For Other Branch',
                route: '/dashboard'
            },
            {
                title: 'Stock Acceptance For Other Branch',
                route: '/dashboard'
            },
            {
                title: 'Stock Status For All Stores',
                route: '/dashboard'
            }, {
                title: 'Invoice submission',
                route: '/dashboard'
            },
            {
                title: 'Invoice Receipt',
                route: '/dashboard'
            },
            {
                title: 'Stock Status For All Items',
                route: '/dashboard'
            },
            {
                title: 'Work Order',
                route: '/dashboard'
            },
        ]
    },
    {
        title: 'Inventory Masters',
        icon: 'settings',
        subNav: [
            {
                title: 'Supplier Masters',
                route: '/dashboard'
            },
            {
                title: 'Store Masters',
                route: '/dashboard'
            },
            {
                title: 'Inventory Items',
                route: '/dashboard'
            },
            {
                title: 'Inventory Masters Dashboard',
                route: '/dashboard'
            },
            {
                title: 'Division',
                route: '/dashboard'
            },
        ]
    },
    {
        title: 'Reports',
        icon: 'settings',
        subNav: [
            {
                title: 'Mis Reports',
                route: '/dashboard'
            },
            {
                title: 'finance Reports',
                route: '/dashboard'
            },
        ]
    },
    {
        title: 'Dashboard',
        icon: 'settings',
        subNav: [
            {
                title: 'CRM Dashboard',
                route: '/dashboard'
            },
            {
                title: 'Admin Dashboard',
                route: '/dashboard'
            },
            {
                title: 'Lab Analytical Dashboard',
                route: '/dashboard'
            },
            {
                title: 'Facility Pharmacy Admin Dashboard',
                route: '/dashboard'
            },
            {
                title: 'facility Store dashboard',
                route: '/dashboard'
            },
            {
                title: 'Clinical Dashboard',
                route: '/dashboard'
            },
            {
                title: 'Finance Dashboard',
                route: '/dashboard'
            },
        ]
    },
    {
        title: 'QMS',
        icon: 'settings',
        subNav: [
            {
                title: 'Doctor QMS Display',
                route: '/dashboard'
            },
            {
                title: 'Ward board',
                route: '/dashboard'
            },
        ]
    },
    {
        title: 'Task Management',
        icon: 'settings',
        subNav: [
            {
                title: 'Task Management',
                route: '/dashboard'
            },
            {
                title: 'My Task',
                route: '/dashboard'
            },
        ]
    },
    {
        title: 'Messages',
        icon: 'settings',
        subNav: [
            {
                title: 'Messages',
                route: '/dashboard'
            },
        ]
    },
    {
        title: 'Virtual Management',
        icon: 'settings',
        subNav: [
            {
                title: 'Manage Orders',
                route: '/dashboard'
            },
            {
                title: 'Order Tracking',
                route: '/dashboard'
            },
            {
                title: 'Virtual Health SubCategory',
                route: '/dashboard'
            },
        ]
    },
    {
        title: 'Diet And Kitchen',
        icon: 'settings',
        subNav: [
            {
                title: 'Kitchen Worklist',
                route: '/dashboard'
            },
            {
                title: 'Diet Items',
                route: '/dashboard'
            },
            {
                title: 'Diet Dashboard',
                route: '/dashboard'
            },
            {
                title: 'Diet Report',
                route: '/dashboard'
            },
            {
                title: 'Diet Billing',
                route: '/dashboard'
            },
        ]
    },
    {
        title: 'Claim Management',
        icon: 'settings',
        subNav: [
            {
                title: 'Claim Receipts',
                route: '/dashboard'
            },
            {
                title: 'Claim Check-List',
                route: '/dashboard'
            },
            {
                title: 'Claim Submission',
                route: '/dashboard'
            },
            {
                title: 'Claim Process',
                route: '/dashboard'
            },
        ]
    },
    {
        title: 'Incident Management',
        icon: 'settings',
        subNav: [
            {
                title: 'Incident Management',
                route: '/dashboard'
            },
            {
                title: 'My Incidents',
                route: '/dashboard'
            },
        ]
    },
    {
        title: 'Docter Invoice & Payments',
        icon: 'settings',
        subNav: [
            {
                title: 'Doctor Invoice & Payments',
                route: '/dashboard'
            },
            {
                title: 'Doctor Payment',
                route: '/dashboard'
            },
            {
                title: 'Doctor Payout for OP',
                route: '/dashboard'
            },
            {
                title: 'Doctor Payout Approval For Ip',
                route: '/dashboard'
            },
            {
                title: 'Doctor Payout For Ip',
                route: '/dashboard'
            },
            {
                title: 'Doctor Payout Approval For IP',
                route: '/dashboard'
            },
        ]
    },
    {
        title: 'Medical Master',
        icon: 'settings',
        subNav: [
            {
                title: 'Medical Masters Dashboard',
                route: '/dashboard'
            },
        ]
    },
    {
        title: 'General Master',
        icon: 'settings',
        subNav: [
            {
                title: 'Refferals',
                route: '/dashboard'
            },
            {
                title: 'Ward Master',
                route: '/dashboard'
            }, {
                title: 'Common Masters',
                route: '/dashboard'
            }, {
                title: 'Occupation Masters',
                route: '/dashboard'
            },
        ]
    },
    {
        title: 'MRD',
        icon: 'settings',
        subNav: [
            {
                title: 'Diagnosis Coding ',
                route: '/dashboard'
            },
            {
                title: 'MRD FileUpload',
                route: '/dashboard'
            },
            {
                title: 'MRD Reports',
                route: '/dashboard'
            },
            {
                title: 'MRD File Receive',
                route: '/dashboard'
            },
            {
                title: 'IP File Transfer',
                route: '/dashboard'
            }
        ]
    },
    {
        title: 'Asset Management',
        icon: 'settings',
        subNav: [
            {
                title: 'Manage Assets',
                route: '/dashboard'
            },
            {
                title: 'Asset Transfer',
                route: '/dashboard'
            },
            {
                title: 'Asset Register',
                route: '/dashboard'
            },
            {
                title: 'Complaint Management',
                route: '/dashboard'
            },
            {
                title: 'Assingments',
                route: '/dashboard'
            },
            {
                title: 'Work Order Process',
                route: '/dashboard'
            },
            {
                title: 'Asset Audit',
                route: '/dashboard'
            },
            {
                title: 'Asset Reconcile',
                route: '/dashboard'
            },
            {
                title: 'New Asset Requests',
                route: '/dashboard'
            },
            {
                title: 'New Asset Aproved',
                route: '/dashboard'
            },
            {
                title: 'Asset Dispose',
                route: '/dashboard'
            },
            {
                title: 'Asset Reports',
                route: '/dashboard'
            },
            {
                title: 'Gate Pass',
                route: '/dashboard'
            }
        ]
    },
    {
        title: 'CathLab Management',
        icon: 'settings',
        subNav: [
            {
                title: 'CathLab Schedule',
                route: '/dashboard'
            },
            {
                title: 'CathLab Entry',
                route: '/dashboard'
            },
            {
                title: 'CathLab Dashboard',
                route: '/dashboard'
            },
        ]
    },
    {
        title: 'Quality Management',
        icon: 'settings',
        subNav: [
            {
                title: 'Quality Management',
                route: '/dashboard'
            },
        ]
    },
    {
        title: 'Bi Analytcal Report',
        icon: 'settings',
        subNav: [
            {
                title: 'BI Reports',
                route: '/dashboard'
            },
        ]
    },
    {
        title: 'House Keeping',
        icon: 'settings',
        subNav: [
            {
                title: 'House Keeping Request',
                route: '/dashboard'
            },
        ]
    },
    {
        title: 'Patient Feedback',
        icon: 'settings',
        subNav: [
            {
                title: 'FeedBack Master',
                route: '/dashboard'
            },
            {
                title: 'Dashboard',
                route: '/dashboard'
            },
            {
                title: 'OP Patient Feedback',
                route: '/dashboard'
            },
            {
                title: 'Patient feedBack Analyzer',
                route: '/dashboard'
            },
            {
                title: 'IP Patient FeedBack',
                route: '/dashboard'
            },
            {
                title: 'FeedBack Reports',
                route: '/dashboard'
            },
        ]
    },
    {
        title: 'HRMS(Back Office)',
        icon: 'settings',
        subNav: [
            {
                title: 'HRMS(Back Office)',
                route: '/dashboard'
            }
        ]
    },
    {
        title: 'Transport Management',
        icon: 'settings',
        subNav: [
            {
                title: 'Transport Request',
                route: '/dashboard'
            },
        ]
    },
    {
        title: 'Consignment',
        icon: 'settings',
        subNav: [
            {
                title: 'Consignment Items',
                route: '/dashboard'
            },
            {
                title: 'Consignment DC',
                route: '/dashboard'
            },
            {
                title: 'Consignment Billing',
                route: '/dashboard'
            },
            {
                title: 'Consignment Stock Status',
                route: '/dashboard'
            },
            {
                title: 'Consignment PO',
                route: '/dashboard'
            },
            {
                title: 'Consignment GRN',
                route: '/dashboard'
            },
        ]
    },
    {
        title: 'Physio Billing',
        icon: 'settings',
        subNav: [
            {
                title: 'Physio REgistration',
                route: '/dashboard'
            },
            {
                title: 'Physio Billing',
                route: '/dashboard'
            },
            {
                title: 'Physio Treatment Plan',
                route: '/dashboard'
            },
        ]
    },
    {
        title: 'Optical Management',
        icon: 'settings',
        subNav: [
            {
                title: 'Optical Items',
                route: '/dashboard'
            },
            {
                title: 'Optical Invoice(GRN)',
                route: '/dashboard'
            },
            {
                title: 'Optical Sales',
                route: '/dashboard'
            },
            {
                title: 'Optical Stock Status',
                route: '/dashboard'
            },
            {
                title: 'Optical Reports',
                route: '/dashboard'
            },{
                title: 'Optical Dashboard',
                route: '/dashboard'
            },
            {
                title: 'Optical Entry Form',
                route: '/dashboard'
            },
        ]
    },
    {
        title: 'Patient Management',
        icon: 'settings',
        subNav: [
            {
                title: 'Patient Dashboard',
                route: '/dashboard'
            },
        ]
    },
    {
        title: 'Promotional Schemes Management',
        icon: 'settings',
        subNav: [
            {
                title: 'Promotional Schemes',
                route: '/dashboard'
            },
            {
                title: 'Privillage Card Registered List',
                route: '/dashboard'
            },
        ]
    },
    {
        title: 'Accounts & Cash Submission',
        icon: 'settings',
        subNav: [
            {
                title: 'Cash Counter',
                route: '/dashboard'
            },
            {
                title: 'Bank Statement',
                route: '/dashboard'
            },
            {
                title: 'Cash Submissions',
                route: '/dashboard'
            }
        ]
    }
    
]

