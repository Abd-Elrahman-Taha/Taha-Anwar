import type { Experience } from '../types/portfolio';

export const experiences: Experience[] = [
  {
    id: 'car-dealership-system',
    role: 'Freelance Back-end Developer',
    company: 'Car Dealership Operations & Financial System',
    type: 'Freelance Project',
    location: 'Remote',
    startDate: 'February 2026',
    endDate: 'Present',
    description:
      'Developed a dealership management system using ASP.NET Core MVC, EF Core, and SQL Server covering car inventory, sales processing, installments, and financial workflows.',
    features: [
      'Car inventory management with granular tracking',
      'Sales processing & complex installment calculation workflows',
      'Treasury & corporate bank accounts reconciliation',
      'Immutable transaction records & business validation rules',
      'Automated inventory reports & dynamic Profit & Loss statements',
      'Partner activity monitoring & comprehensive installment tracking',
    ],
    workflowNodes: ['Inventory', 'Sales', 'Finance', 'Reports'],
    technologies: [
      'ASP.NET Core MVC',
      'C#',
      'Entity Framework Core',
      'SQL Server',
      'Repository Pattern',
      'Financial Auditing',
    ],
    statusTag: 'SYSTEM_ACTIVE',
  },
  {
    id: 'clinic-management-system',
    role: 'Freelance Back-end Developer',
    company: 'Clinic Management System',
    type: 'Freelance Project',
    location: 'Remote',
    startDate: 'October 2025',
    endDate: 'December 2025',
    description:
      'Developed an online system with a team of 3 developers for a physical therapy clinic including booking, patient records, and session management.',
    features: [
      'Secure clinician & receptionist authentication',
      'Real-time administrative clinical dashboard',
      'Appointment scheduling & slot reservation system',
      'Comprehensive patient medical record management',
      'Physical therapy treatment session tracking & updates',
    ],
    workflowNodes: ['Patient', 'Appointment', 'Session', 'Database'],
    technologies: [
      'ASP.NET Core',
      'C#',
      'Entity Framework Core',
      'SQL Server',
      'REST APIs',
      'JWT Auth',
    ],
    statusTag: 'SERVICE_READY',
  },
];
