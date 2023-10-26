interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Business Owner', 'HR Manager', 'Payroll Administrator', 'Employee', 'Accountant'],
  tenantName: 'Company',
  applicationName: 'HR Information System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View company information',
    'View employee profiles',
    'View payroll information',
    'View vacation schedules',
  ],
  ownerAbilities: [
    'Manage user information',
    'Manage company information',
    'Manage employee information',
    'Manage payroll information',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/a4af31dc-e05d-4f21-920b-39a0902b9602',
};
