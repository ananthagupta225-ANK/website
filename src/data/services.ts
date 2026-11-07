/* ===========================================================================
   SERVICE CONTENT
   ---------------------------------------------------------------------------
   Copy is taken from the approved ANK content brief. Scope-safe language
   ("support", "coordination", "as applicable", "where agreed") is deliberate
   and should be preserved — see section 11 of the strategy document.
   Adding a new service = adding one object here. The listing page, the detail
   page, the navigation, the form dropdown and the sitemap all update
   automatically.
   =========================================================================== */

export interface Service {
  slug: string;
  number: string;
  title: string;
  short: string;
  /** Photograph for the service card and page header. Drop the file at this
      path in public/ and it appears; until then a branded panel is shown. */
  image: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  lead: string;
  needs: string[];
  activities: string[];
  engagement: string[];
  scopeNote: string;
  faqs: { q: string; a: string }[];
  related: string[];
}

export const services: Service[] = [
  {
    slug: 'payroll-management',
    number: '01',
    title: 'Payroll Management',
    short: 'Payroll',
    image: '/images/services/payroll-management.jpg',
    metaTitle: 'Payroll Management Services | ANK HR Services',
    metaDescription:
      'Support for monthly payroll inputs, attendance data coordination, salary sheets, payroll reports and payroll record keeping. Scope agreed with each client.',
    summary:
      'Salary processing, payroll preparation, attendance integration, statutory deductions, paysheet preparation and payroll reporting.',
    lead: 'Keep payroll processes organised with support for monthly payroll inputs, attendance coordination, salary reports and related documentation. The exact scope is agreed based on your organisation’s payroll process and requirements.',
    needs: [
      'Payroll is handled manually across spreadsheets and needs a repeatable monthly process.',
      'Attendance, leave and salary inputs arrive from several people and need to be consolidated.',
      'Salary reports and payroll records need to be prepared in a consistent format each month.',
      'Payroll queries from employees need a structured route for response.',
    ],
    activities: [
      'Monthly payroll input and attendance data coordination',
      'Salary sheet and payroll report preparation support',
      'Coordination of salary components and approved salary changes',
      'Payslip and payroll record support, where included in the agreed scope',
      'Payroll reconciliation and employee query coordination',
      'Bonus, incentive, reimbursement and final-settlement coordination, where applicable',
    ],
    engagement: [
      'We review your current payroll cycle, inputs, approvers and reporting formats.',
      'We agree the monthly calendar, the data you provide and the outputs we return.',
      'You provide attendance, leave, salary structures and approved changes by the agreed cut-off.',
      'All payroll outputs are shared for your review and approval before release.',
    ],
    scopeNote:
      'Client-specific payroll inputs, approvals and statutory requirements are confirmed before processing. Payroll outputs remain subject to client review and approval.',
    faqs: [
      {
        q: 'Do you process payroll or support our existing process?',
        a: 'Both arrangements can be discussed. Some clients ask us to coordinate the full monthly cycle; others ask for support on specific steps such as input consolidation or report preparation. The responsibilities of each side are recorded in the engagement scope.',
      },
      {
        q: 'Can you work with our existing payroll software?',
        a: 'We can discuss working within your current system or on agreed formats. What is possible depends on the platform, the access provided and the capabilities of the software.',
      },
      {
        q: 'How is payroll data handled?',
        a: 'Payroll data is handled only for the agreed purpose and shared only with the people you authorise. Data handling arrangements are set out in the engagement terms.',
      },
    ],
    related: ['pf-esi-labour-law-compliance', 'hr-operations-consultancy'],
  },
  {
    slug: 'pf-esi-labour-law-compliance',
    number: '02',
    title: 'PF, ESI & Labour Law Compliances',
    short: 'PF, ESI & Labour Law',
    image: '/images/services/pf-esi-labour-law-compliance.jpg',
    metaTitle: 'PF, ESI & Labour Law Compliance Support | ANK HR Services',
    metaDescription:
      'Support with applicable provident fund, employee state insurance and labour law documentation, contribution data and record coordination.',
    summary:
      'Support for Provident Fund, Employee State Insurance and applicable labour law compliance, registrations, returns and documentation.',
    lead: 'Get support coordinating applicable statutory records, contribution data, documentation and compliance-related processes. Requirements and deliverables depend on the establishment, workforce, current law and agreed scope.',
    needs: [
      'Employee and employer records need to be organised against applicable statutory requirements.',
      'Contribution data needs checking and reconciling against payroll records.',
      'Notices, registers and supporting documents are spread across files and people.',
      'A compliance calendar is needed so recurring dates are not missed.',
    ],
    activities: [
      'PF and ESI record and registration coordination, as applicable',
      'Coordination of employee and employer records',
      'Support with contribution data and related reconciliations',
      'Documentation and return-related coordination, where agreed',
      'Support in organising notices, records and responses',
      'Labour law documentation and compliance-calendar coordination',
      'Coordination with the client and relevant professionals or authorities when authorised',
    ],
    engagement: [
      'We review the establishment, workforce and records currently maintained.',
      'We identify, with you, which requirements apply to your organisation.',
      'We agree what we coordinate, what you approve and what is handled by your other professional advisers.',
      'Documents and data are organised against an agreed checklist and calendar.',
    ],
    scopeNote:
      'All work depends on the applicable law, current requirements, client records, authorisation and the agreed scope. This service is documentation and process support — it is not a legal opinion, and no guarantee of compliance or of any outcome is offered.',
    faqs: [
      {
        q: 'Do you provide legal advice on labour law?',
        a: 'No. We support documentation, records and process coordination. Where a legal determination is needed, we coordinate with the client’s qualified legal or professional advisers.',
      },
      {
        q: 'Which requirements apply to our establishment?',
        a: 'That depends on your establishment type, location, workforce and the law in force at the time. We review this with you at the start of the engagement rather than applying a standard list.',
      },
      {
        q: 'Can you act on our behalf with authorities?',
        a: 'Only where that is agreed in writing and the necessary authorisation is in place. The engagement scope records exactly what is and is not included.',
      },
    ],
    related: ['payroll-management', 'pf-esi-scrutiny-cases'],
  },
  {
    slug: 'hr-operations-consultancy',
    number: '03',
    title: 'HR Operations & Consultancy',
    short: 'HR Operations',
    image: '/images/services/hr-operations-consultancy.jpg',
    metaTitle: 'HR Operations & Consultancy | ANK HR Services',
    metaDescription:
      'Practical support for HR administration, employee records, attendance and leave processes, HR reporting and employee lifecycle coordination.',
    summary:
      'Employee lifecycle management, HR administration, attendance, leave management, employee relations and HR process improvement.',
    lead: 'Build more organised HR processes with support for employee records, attendance and leave coordination, HR administration, reporting and employee lifecycle workflows.',
    needs: [
      'HR administration is handled alongside other roles and needs a clearer structure.',
      'Employee records and personnel files are incomplete or held in several places.',
      'Joining and exit processes differ each time they are run.',
      'Management needs regular, consistent HR reports.',
    ],
    activities: [
      'Day-to-day HR administration and process coordination',
      'Joining, onboarding and exit process coordination',
      'Employee master data and personnel file setup',
      'Attendance, leave and employee record support',
      'Employee query and grievance process coordination',
      'HR reporting, trackers and process documentation',
      'HR workflow review and improvement recommendations',
    ],
    engagement: [
      'We map how HR tasks run today and where coordination is breaking down.',
      'We agree which processes we support and the formats to be used.',
      'Checklists, trackers and record formats are set up and handed over.',
      'Reports and process documents are reviewed with you on an agreed cycle.',
    ],
    scopeNote:
      'Specific advisory deliverables are agreed with the client before work begins. Recommendations are for the client’s consideration and decision.',
    faqs: [
      {
        q: 'Do you replace our HR team?',
        a: 'No. We work alongside the people already responsible for HR, taking on the coordination and documentation tasks agreed in the scope.',
      },
      {
        q: 'We have no HR person at all. Can you still help?',
        a: 'Yes, that can be discussed. Smaller organisations often need a defined set of recurring HR tasks coordinated rather than a full in-house function.',
      },
    ],
    related: ['hr-policies-documentation', 'payroll-management'],
  },
  {
    slug: 'hr-policies-documentation',
    number: '04',
    title: 'HR Policies & Documentation',
    short: 'Policies & Documentation',
    image: '/images/services/hr-policies-documentation.jpg',
    metaTitle: 'HR Policies & Documentation Support | ANK HR Services',
    metaDescription:
      'Support drafting and organising HR policies, employee handbooks, standard letters, forms, checklists, SOPs and employee records.',
    summary:
      'Development and implementation of HR policies, employee handbooks, appointment letters, HR formats and employment documentation.',
    lead: 'Help your organisation work from clear, consistent HR documents — policies, letters, formats, checklists and process records that your team can actually use day to day.',
    needs: [
      'Policies exist informally and are not written down or applied consistently.',
      'Appointment, confirmation and separation letters are drafted from scratch each time.',
      'Employee documents and records need a structured filing and control system.',
      'Processes live in people’s heads rather than in documented SOPs.',
    ],
    activities: [
      'HR policy and employee handbook drafting support',
      'Leave, attendance, travel, reimbursement and conduct policy formats',
      'Appointment, confirmation, transfer and separation letter formats',
      'Standard HR forms, checklists and employee communication templates',
      'HR SOPs, checklists and process documents',
      'Document control and record organisation',
    ],
    engagement: [
      'We review the documents and practices already in place.',
      'We agree the list of documents to be drafted or restructured, and the order of work.',
      'Drafts are shared for your review, comment and approval.',
      'Final formats are handed over in editable files your team can maintain.',
    ],
    scopeNote:
      'Documents are drafts for the client’s consideration. They should be reviewed and approved by the client and, where appropriate, by qualified legal or HR professionals before being issued.',
    faqs: [
      {
        q: 'Are the policies legally vetted?',
        a: 'We provide drafting and formatting support. Legal review should be carried out by the client’s qualified legal adviser before the documents are issued to employees.',
      },
      {
        q: 'Can you adapt our existing handbook instead of starting over?',
        a: 'Yes. Working from your current documents is often faster and keeps language your team already recognises.',
      },
    ],
    related: ['hr-operations-consultancy', 'recruitment-staffing'],
  },
  {
    slug: 'recruitment-staffing',
    number: '05',
    title: 'Recruitment & Staffing',
    short: 'Recruitment',
    image: '/images/services/recruitment-staffing.jpg',
    metaTitle: 'Recruitment & Staffing Support | ANK HR Services',
    metaDescription:
      'Recruitment coordination support covering role definition, candidate screening coordination, interview scheduling and joining formalities.',
    summary:
      'Manpower planning, candidate sourcing, screening, interview coordination, recruitment and staffing support.',
    lead: 'Coordinate hiring requirements through role definition, candidate process coordination, interview scheduling and joining support, so open roles move forward in a structured way.',
    needs: [
      'Roles are open but the hiring process stalls between steps.',
      'Job descriptions and role requirements need to be defined before sourcing begins.',
      'Interview scheduling and candidate communication need a single owner.',
      'Joining formalities and documentation need coordinating once an offer is accepted.',
    ],
    activities: [
      'Recruitment planning and job-description support',
      'Understanding role requirements and defining the hiring process',
      'Candidate sourcing or screening coordination, as agreed',
      'Interview scheduling and candidate communication',
      'Selection and joining coordination',
      'Staffing requirement coordination',
    ],
    engagement: [
      'We define the role, the must-have requirements and the selection steps with you.',
      'We agree which parts of the process ANK coordinates and which stay with your team.',
      'Candidate progress is tracked and shared on an agreed basis.',
      'Joining documentation and onboarding handover are coordinated after selection.',
    ],
    scopeNote:
      'Whether an engagement includes sourcing, screening coordination, placement, staffing supply or background verification is confirmed in writing before work begins. Hiring decisions rest with the client, and no hiring outcome is guaranteed.',
    faqs: [
      {
        q: 'Is this recruitment coordination or a placement service?',
        a: 'That is agreed case by case and stated clearly in the engagement scope. Please raise it at the enquiry stage so expectations and commercials are aligned from the start.',
      },
      {
        q: 'Do you carry out background verification?',
        a: 'Background verification is not assumed to be included. If it is required, it is discussed and recorded in the scope before the engagement begins.',
      },
    ],
    related: ['hr-operations-consultancy', 'hr-policies-documentation'],
  },
  {
    slug: 'factory-establishment-compliance',
    number: '06',
    title: 'Factory & Establishment Compliance',
    short: 'Factory & Establishment',
    image: '/images/services/factory-establishment-compliance.jpg',
    metaTitle: 'Factory & Establishment Compliance Support | ANK HR Services',
    metaDescription:
      'Support organising registers, licences, renewal documentation and inspection records for factories and commercial establishments.',
    summary:
      'Support for applicable factory and establishment registrations, renewals, statutory records, licences and compliance documentation.',
    lead: 'Support with organising records and coordinating applicable compliance requirements for factories and commercial establishments, so documentation is ready when it is needed.',
    needs: [
      'Registers and statutory records need to be maintained in a consistent format.',
      'Licence and renewal dates need tracking against a calendar.',
      'Inspection or notice documentation needs to be assembled quickly.',
      'Several locations need the same documentation standard applied.',
    ],
    activities: [
      'Factory and establishment compliance documentation coordination',
      'Compliance calendar and documentation coordination',
      'Maintenance of relevant registers and employee records',
      'Licence, renewal and record checklist support, where applicable',
      'Inspection and notice document organisation',
      'Coordination with client teams and authorised professionals',
    ],
    engagement: [
      'We review the establishment type, locations and records currently held.',
      'An applicable-records checklist is prepared and agreed with you.',
      'Documents are organised against that checklist and a renewal calendar.',
      'Specialist matters are routed to your authorised professionals.',
    ],
    scopeNote:
      'Requirements vary by establishment, location, workforce and applicable law. Information provided is general process support and is not a legal determination.',
    faqs: [
      {
        q: 'Can you handle registrations and renewals for us?',
        a: 'We coordinate documentation and the process around them, as agreed. Filings or representations that require a qualified or authorised professional are routed accordingly.',
      },
      {
        q: 'Do you support multiple locations?',
        a: 'Multi-location coordination can be discussed. Scope, effort and the records involved are agreed per location.',
      },
    ],
    related: ['pf-esi-scrutiny-cases', 'contract-labour-management'],
  },
  {
    slug: 'contract-labour-management',
    number: '07',
    title: 'Contract Labour Management',
    short: 'Contract Labour',
    image: '/images/services/contract-labour-management.jpg',
    metaTitle: 'Contract Labour Management Support | ANK HR Services',
    metaDescription:
      'Support for contractor documentation, contract workforce records, attendance and wage data coordination and audit document preparation.',
    summary:
      'Contract workforce coordination, contractor documentation, labour compliance monitoring and workforce administration.',
    lead: 'Support for organised contract workforce records and compliance-related coordination between principal employer and contractor, based on the responsibilities agreed between the parties.',
    needs: [
      'Contractor documentation arrives in different formats and is hard to verify.',
      'Attendance and wage data for contract workforce needs consolidating.',
      'A checklist is needed to review what each contractor must submit.',
      'Audit or inspection documentation needs assembling across contractors.',
    ],
    activities: [
      'Contractor and contract workforce document coordination',
      'Attendance and wage data coordination',
      'Checklist-based review of required records',
      'Coordination of applicable PF, ESI and labour-related records',
      'Principal employer and contractor record coordination based on agreed responsibilities',
      'Support for inspection or audit document preparation',
    ],
    engagement: [
      'We review the contracting arrangements and the records each party holds.',
      'A submission checklist is agreed for contractors to work to.',
      'Submitted documents are reviewed against the checklist and gaps flagged to you.',
      'Records are organised so audit or inspection packs can be assembled.',
    ],
    scopeNote:
      'Responsibilities depend on applicable law, contractual arrangements and the respective roles of the principal employer and the contractor. Reviews are checklist-based document checks, not legal certification.',
    faqs: [
      {
        q: 'Do you supply contract labour?',
        a: 'This service covers documentation and records coordination. Whether any labour supply arrangement is offered is confirmed separately in writing before any engagement.',
      },
      {
        q: 'Who remains responsible for contractor compliance?',
        a: 'Responsibility is determined by law and by the contract between the parties. Our role is the coordination and documentation scope agreed with you, and it does not transfer any statutory responsibility.',
      },
    ],
    related: ['factory-establishment-compliance', 'pf-esi-labour-law-compliance'],
  },
  {
    slug: 'pf-esi-scrutiny-cases',
    number: '08',
    title: 'PF, ESI & Labour Law Scrutiny Cases',
    short: 'Scrutiny Cases',
    image: '/images/services/pf-esi-scrutiny-cases.jpg',
    metaTitle: 'PF, ESI & Labour Law Scrutiny Case Support | ANK HR Services',
    metaDescription:
      'Assistance with statutory inspections, scrutiny proceedings, documentation verification, notice responses and coordination with the relevant authorities.',
    summary:
      'Assistance with statutory inspections, scrutiny proceedings, documentation verification, notice responses and coordination with relevant authorities.',
    lead: 'When an inspection, scrutiny or notice arrives, the work is largely about producing the right records quickly and in order. We help assemble, verify and present the documentation, and coordinate the response alongside your authorised professionals.',
    needs: [
      'A notice, summons or scrutiny intimation has been received and needs a structured response.',
      'Records requested by an authority are spread across departments, contractors or periods.',
      'Contribution and wage data needs reconciling against the records already filed.',
      'An inspection is expected and the documentation should be ready in advance.',
    ],
    activities: [
      'Review of the notice or scrutiny requirement and the records it calls for',
      'Assembly and verification of the supporting documentation',
      'Reconciliation of contribution, wage and employee data against filed records',
      'Preparation of document sets, annexures and chronologies for submission',
      'Drafting support for responses and covering submissions, for client approval',
      'Coordination with the client’s authorised consultants, advocates and representatives',
      'Tracking of hearing dates, submissions and follow-up requirements',
    ],
    engagement: [
      'We review the notice, the period involved and the records currently available.',
      'A document checklist is agreed and gaps are identified early.',
      'Records are assembled, reconciled and organised into a submission-ready set.',
      'Responses and submissions are prepared for your review and approval before filing.',
      'Representation before any authority is handled by your authorised professionals.',
    ],
    scopeNote:
      'This service is documentation, reconciliation and coordination support. It is not legal representation and is not a legal opinion. Appearance before any authority, and any submission made on the organisation’s behalf, remains with the client and its authorised professionals. No particular outcome is promised.',
    faqs: [
      {
        q: 'Do you appear before the authorities on our behalf?',
        a: 'No. We prepare and organise the documentation and coordinate the response. Appearance and representation are handled by your authorised consultant or advocate, with whom we work directly.',
      },
      {
        q: 'We have received a notice with a short deadline. Can you help?',
        a: 'Please get in touch as early as possible with the notice and the period it covers. What can be done depends on the records available and the time remaining, and we will tell you honestly what is realistic.',
      },
      {
        q: 'Can you help prepare before an inspection rather than after a notice?',
        a: 'Yes. Reviewing and organising records against an agreed checklist in advance is usually far less disruptive than assembling them under a deadline.',
      },
    ],
    related: ['pf-esi-labour-law-compliance', 'factory-establishment-compliance'],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
