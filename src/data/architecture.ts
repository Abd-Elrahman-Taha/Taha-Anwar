import type { ArchitectureLayer } from '../types/portfolio';

export const architectureLayers: ArchitectureLayer[] = [
  {
    number: '01',
    name: 'Presentation Layer',
    tagline: 'Controllers / Web API / Middleware / Filters',
    details:
      'The entry frontier handling incoming HTTP requests, model validation, route dispatching, and JWT authorization headers. Decoupled from core business rules.',
    technologies: ['ASP.NET Core Web API', 'Swagger / OpenAPI', 'Middleware Filters', 'DTO Validation'],
    orbitLabel: 'CLIENT_INGRESS',
  },
  {
    number: '02',
    name: 'Application Layer',
    tagline: 'Business Logic / MediatR / CQRS Commands & Queries',
    details:
      'Coordinates application workflows, orchestrating CQRS handlers, transaction pipelines, mappings, and domain interfaces without direct infrastructure dependencies.',
    technologies: ['MediatR', 'CQRS', 'FluentValidation', 'Application DTOs'],
    orbitLabel: 'LOGIC_CORE',
  },
  {
    number: '03',
    name: 'Domain Layer',
    tagline: 'Entities / Core Business Rules / Value Objects',
    details:
      'The gravitational center of Clean Architecture. Contains pure enterprise entities, business invariants, enums, and domain events with zero external framework dependencies.',
    technologies: ['Pure C# Entities', 'Value Objects', 'Domain Rules', 'Domain Events'],
    orbitLabel: 'GRAVITATIONAL_CORE',
  },
  {
    number: '04',
    name: 'Infrastructure Layer',
    tagline: 'EF Core / Repositories / External Services & Gateways',
    details:
      'Implements domain interfaces for persistence, payment gateway integrations (Paymob, Stripe), background job dispatchers, and caching systems.',
    technologies: ['EF Core DbContext', 'Repository Pattern', 'Paymob / Stripe SDK', 'Hangfire Jobs'],
    orbitLabel: 'IO_ORBIT',
  },
  {
    number: '05',
    name: 'Database & State Layer',
    tagline: 'SQL Server / PostgreSQL / Redis In-Memory',
    details:
      'The persistent state repository and high-throughput memory buffers guaranteeing relational integrity, transaction atomicity, and query optimization.',
    technologies: ['SQL Server', 'PostgreSQL', 'Redis Cache', 'Relational Schemas'],
    orbitLabel: 'STATE_CORE',
  },
];
