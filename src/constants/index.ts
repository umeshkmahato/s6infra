/* Constants for theme colors */
export const COLORS = {
  PRIMARY: '#f59e0b',
  PRIMARY_DARK: '#d97706',
  DARK: '#0b1220',
  DARK_2: '#111827',
  TEXT: '#1f2937',
  MUTED: '#6b7280',
  LIGHT: '#f8fafc',
  WHITE: '#ffffff',
  BORDER: '#e5e7eb',
  SUCCESS: '#16a34a',
} as const;

/* Constants for layout */
export const LAYOUT = {
  MAX_WIDTH: '1180px',
  SECTION_PADDING: '90px 0',
  CONTAINER_WIDTH: 'min(92%, 1180px)',
} as const;

/* API endpoints */
export const API_ENDPOINTS = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'https://api.s6infra.com',
  CONTACT: '/contact',
  PROJECTS: '/projects',
  SERVICES: '/services',
  TEAM: '/team',
} as const;

export const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#capabilities', label: 'Capabilities' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact Us' },
] as const;

export const HERO_STATS = [
  { title: 'End-to-End', description: 'Project Execution' },
  { title: 'EPC & Turnkey', description: 'Project Solutions' },
  { title: 'Govt. & Private', description: 'Contracting' },
] as const;

export const ABOUT_HIGHLIGHTS = [
  {
    title: 'Complete Project Execution',
    description:
      'From site development and earthwork to construction, installation and finishing.',
  },
  {
    title: 'Public & Private Sector',
    description:
      'Capability to participate in government, PSU, institutional and private contracts.',
  },
  {
    title: 'Integrated Services',
    description:
      'Civil, mechanical, electrical, plumbing, fabrication, installation and allied works.',
  },
] as const;

export const SERVICES = [
  {
    icon: '🏗',
    title: 'Civil Construction',
    description:
      'Comprehensive civil and structural construction for residential, commercial, industrial and institutional projects.',
  },
  {
    icon: '🛣',
    title: 'Roads & Highways',
    description:
      'Road construction, highway development, earthwork, site preparation and associated infrastructure works.',
  },
  {
    icon: '🌉',
    title: 'Bridges & Structures',
    description:
      'Construction and allied works for bridges, structural infrastructure and supporting civil works.',
  },
  {
    icon: '💧',
    title: 'Water & Irrigation',
    description:
      'Water supply, irrigation, drainage, sewerage and related infrastructure development.',
  },
  {
    icon: '🏢',
    title: 'Building Construction',
    description:
      'Residential, commercial, industrial, institutional and utility buildings, complexes and structures.',
  },
  {
    icon: '⚙',
    title: 'EPC & Turnkey Projects',
    description:
      'End-to-end execution of EPC, turnkey, works contracts and project-specific subcontracting requirements.',
  },
] as const;

export const CAPABILITIES = [
  {
    number: '01',
    title: 'Contracting',
    description:
      'Government, semi-government, PSU and private construction and works contracts.',
  },
  {
    number: '02',
    title: 'Tenders & Bids',
    description: 'Participation in tenders, e-tenders, bids and procurement processes.',
  },
  {
    number: '03',
    title: 'Material Supply',
    description:
      'Construction materials, steel, cement, aggregates, pipes, hardware and related supplies.',
  },
  {
    number: '04',
    title: 'Equipment & Assets',
    description:
      'Procurement, leasing and deployment of machinery, equipment, vehicles and project assets.',
  },
  {
    number: '05',
    title: 'Subcontracting',
    description:
      'Specialist and allied construction works through direct execution and subcontracting.',
  },
  {
    number: '06',
    title: 'Maintenance',
    description:
      'Repair, renovation, alteration, maintenance and development of existing structures.',
  },
  {
    number: '07',
    title: 'Multi-Discipline Works',
    description:
      'Civil, mechanical, electrical, plumbing, fabrication, installation and finishing works.',
  },
  {
    number: '08',
    title: 'Project Delivery',
    description:
      'Coordinated execution focused on quality, timelines and project requirements.',
  },
] as const;

export const PROJECT_AREAS = [
  {
    tag: 'Infrastructure',
    title: 'Road Development',
    description: 'Roads, highways and associated civil works.',
  },
  {
    tag: 'Structures',
    title: 'Bridge Construction',
    description: 'Structural and allied infrastructure works.',
  },
  {
    tag: 'Buildings',
    title: 'Commercial & Institutional',
    description: 'Modern building and structural construction.',
  },
  {
    tag: 'Water',
    title: 'Water & Irrigation',
    description: 'Water supply, drainage and irrigation infrastructure.',
  },
  {
    tag: 'Industrial',
    title: 'Industrial Construction',
    description: 'Industrial structures, factories and facilities.',
  },
  {
    tag: 'EPC',
    title: 'Turnkey Projects',
    description: 'Integrated project execution and delivery.',
  },
] as const;

export const CONTACT_DETAILS = [
  { icon: '☎', title: 'Phone', detail: '+91 XXXXX XXXXX' },
  { icon: '✉', title: 'Email', detail: 'info@s6infra.com' },
  { icon: '⌖', title: 'Office', detail: 'India' },
  {
    icon: '◷',
    title: 'Business Enquiries',
    detail: 'Construction • Infrastructure • EPC • Supply',
  },
] as const;

export const CONTACT_SERVICE_OPTIONS = [
  'Road & Highway Construction',
  'Bridge Construction',
  'Building Construction',
  'Water & Irrigation',
  'EPC / Turnkey Project',
  'Material Supply',
  'Government Contract',
  'Other',
] as const;

export const FOOTER_QUICK_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#services', label: 'Services' },
  { href: '#capabilities', label: 'Capabilities' },
  { href: '#projects', label: 'Projects' },
] as const;

export const FOOTER_SERVICE_LINKS = [
  { href: '#services', label: 'Civil Construction' },
  { href: '#services', label: 'Roads & Highways' },
  { href: '#services', label: 'Bridge Construction' },
  { href: '#services', label: 'EPC & Turnkey' },
  { href: '#services', label: 'Water & Irrigation' },
] as const;
