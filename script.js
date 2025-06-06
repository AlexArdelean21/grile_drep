// Comprehensive Business Law Question Database
const questionDatabase = [
  // Introduction to Business Law
  {
    category: "Introduction to Business Law",
    question: "What is the primary purpose of business law?",
    options: [
      "Regulate commerce",
      "To prevent all business competition and eliminate market forces",
      "To maximize government revenue through excessive taxation",
      "To eliminate private property rights completely"
    ],
    answer: "Regulate commerce",
    explanation: "Business law serves to provide a legal framework for commercial activities, ensuring fair practices and protecting the rights of all parties involved in business transactions."
  },
  {
    category: "Introduction to Business Law",
    question: "Which of the following is NOT a source of business law?",
    options: [
      "Constitutional law and all federal constitutional amendments",
      "Statutory law and legislative enactments at all levels",
      "Personal opinions",
      "Case law"
    ],
    answer: "Personal opinions",
    explanation: "Sources of business law include constitutional law, statutory law, administrative regulations, and case law. Personal opinions are not legally binding sources of law."
  },
  {
    category: "Introduction to Business Law",
    question: "What is the difference between civil law and criminal law in business context?",
    options: [
      "Civil law applies only to contractual disputes while criminal law encompasses all business regulatory violations",
      "No difference",
      "Civil law is federal jurisdiction, criminal law is exclusively state-based enforcement",
      "Civil: private disputes, Criminal: societal offenses"
    ],
    answer: "Civil: private disputes, Criminal: societal offenses",
    explanation: "Civil law governs disputes between private parties (like breach of contract), while criminal law addresses offenses against society (like fraud or embezzlement)."
  },

  // Legal Rules and System
  {
    category: "Legal Rules",
    question: "What are the essential characteristics of a legal rule?",
    options: [
      "Complex, ambiguous, and highly flexible in all circumstances",
      "Generality, normativity, and enforceability",
      "Locality, temporality, and subjectivity in every case",
      "Simple and clear"
    ],
    answer: "Generality, normativity, and enforceability",
    explanation: "Legal rules must be general (apply to all similar situations), normative (prescribe behavior), and enforceable (backed by state power)."
  },
  {
    category: "Legal Rules",
    question: "What is the hierarchy of laws in most legal systems?",
    options: [
      "Case law precedents, statutory enactments, constitutional provisions, administrative regulations",
      "Constitution first",
      "Regulations, constitution, statutes, case law",
      "Statutes, case law, constitution, regulations"
    ],
    answer: "Constitution first",
    explanation: "The legal hierarchy typically places constitutional law at the top, followed by statutory law, administrative regulations, and case law precedents."
  },
  {
    category: "Legal Rules",
    question: "What is the doctrine of precedent (stare decisis)?",
    options: [
      "All court decisions are temporary in nature and can be completely ignored by future courts",
      "Only constitutional courts and supreme judicial authorities can create legally binding precedents",
      "Follow higher court decisions",
      "Precedents apply exclusively to criminal cases and have no civil application"
    ],
    answer: "Follow higher court decisions",
    explanation: "Stare decisis means 'let the decision stand' - it requires lower courts to follow precedents set by higher courts in similar cases."
  },

  // Legal Relations
  {
    category: "Legal Relations",
    question: "What constitutes a legal relationship?",
    options: [
      "Any friendship or personal relationship that exists between business partners regardless of legal context",
      "Rights and duties connection",
      "A formal written agreement that has been notarized and filed with government authorities",
      "Government approved relationship"
    ],
    answer: "Rights and duties connection",
    explanation: "A legal relationship exists when there is a legally recognized connection between parties that creates rights for one party and corresponding obligations for another."
  },
  {
    category: "Legal Relations",
    question: "Who can be a legal subject in business law?",
    options: [
      "Only natural persons who have reached the age of majority and possess full legal capacity",
      "Only registered corporations that have been formally incorporated under state or federal law",
      "People and entities",
      "Only government entities and their authorized representatives"
    ],
    answer: "People and entities",
    explanation: "Legal subjects include natural persons (individuals) and legal persons (corporations, partnerships, etc.) who can hold rights and bear obligations."
  },
  {
    category: "Legal Relations",
    question: "What is legal capacity?",
    options: [
      "The ability to understand complex legal documents and their implications in various business contexts",
      "The ability to hire qualified legal representation and provide adequate compensation for services",
      "Hold rights and duties",
      "The ability to attend court proceedings and participate effectively in legal processes"
    ],
    answer: "Hold rights and duties",
    explanation: "Legal capacity refers to a legal subject's ability to possess legal rights and be bound by legal obligations under the law."
  },

  // Contracts and Legal Acts
  {
    category: "Contracts",
    question: "What are the essential elements of a valid contract?",
    options: [
      "Written documents with multiple witnesses and notarization",
      "Offer and acceptance only",
      "Offer, acceptance, consideration, and legal purpose",
      "Lawyer approval"
    ],
    answer: "Offer, acceptance, consideration, and legal purpose",
    explanation: "A valid contract requires: (1) offer, (2) acceptance, (3) consideration (something of value exchanged), and (4) legal purpose."
  },
  {
    category: "Contracts",
    question: "What is the legal effect of a valid contract?",
    options: [
      "It has the force of law between the parties",
      "It has no legal effect",
      "It is binding only if written",
      "It can be revoked at any time"
    ],
    answer: "It has the force of law between the parties",
    explanation: "A valid contract creates legally binding obligations between the parties, with the same force as law for those specific parties."
  },
  {
    category: "Contracts",
    question: "What makes a contract void?",
    options: [
      "Lack of written form and proper documentation according to statute of frauds requirements",
      "Absence of witnesses during the contract formation and execution process",
      "Illegal acts",
      "Failure to register with appropriate government authorities within specified time limits"
    ],
    answer: "Illegal acts",
    explanation: "Contracts are void when they involve illegal activities, when parties lack legal capacity, or when formed under duress or undue influence."
  },
  {
    category: "Contracts",
    question: "What is breach of contract?",
    options: [
      "Disagreement about specific contract terms and their interpretation in various business contexts",
      "Renegotiation of existing contract terms to reflect changing market conditions and business needs",
      "Non-performance",
      "Delay in contract performance due to unforeseen circumstances or logistical challenges"
    ],
    answer: "Non-performance",
    explanation: "Breach of contract occurs when a party fails to fulfill their contractual obligations without legal justification."
  },

  // Legal Professionals
  {
    category: "Legal Professionals",
    question: "What is the primary role of a lawyer in business transactions?",
    options: [
      "To make all important business decisions for clients and assume full responsibility for outcomes",
      "To guarantee business success and profitability through legal expertise and strategic planning",
      "Legal advice",
      "To eliminate all possible legal risks and provide absolute protection from any liability"
    ],
    answer: "Legal advice",
    explanation: "Lawyers advise clients on legal matters, help ensure compliance with applicable laws, and assist in structuring transactions to minimize legal risks."
  },
  {
    category: "Legal Professionals",
    question: "What is attorney-client privilege?",
    options: [
      "Confidential communications between lawyer and client are protected",
      "Lawyers can never be sued by clients",
      "Lawyers must always win their cases",
      "Lawyers can represent anyone without conflict"
    ],
    answer: "Confidential communications between lawyer and client are protected",
    explanation: "Attorney-client privilege protects confidential communications between lawyers and clients from being disclosed without the client's consent."
  },
  {
    category: "Legal Professionals",
    question: "When might a lawyer have a conflict of interest?",
    options: [
      "When representing clients with opposing interests",
      "When charging fees for services",
      "When working with other lawyers",
      "When appearing in court"
    ],
    answer: "When representing clients with opposing interests",
    explanation: "Conflicts of interest arise when a lawyer's representation of one client would be directly adverse to another client, or when personal interests might compromise professional judgment."
  },

  // Business Organizations
  {
    category: "Business Organizations",
    question: "What is the main advantage of incorporating a business?",
    options: [
      "Complete elimination of all federal, state, and local taxes on business income and profits",
      "Guaranteed business success and profitability through corporate structure and legal protections",
      "Limited liability",
      "Simplified business operations with reduced regulatory compliance and reporting requirements"
    ],
    answer: "Limited liability",
    explanation: "Incorporation creates a separate legal entity, protecting owners' personal assets from business debts and liabilities."
  },
  {
    category: "Business Organizations",
    question: "What is the difference between a partnership and a corporation?",
    options: [
      "Partnerships have unlimited liability, corporations have limited liability",
      "Partnerships are always larger than corporations",
      "Corporations cannot make profits",
      "Partnerships cannot enter contracts"
    ],
    answer: "Partnerships have unlimited liability, corporations have limited liability",
    explanation: "In partnerships, partners typically have unlimited personal liability for business debts, while corporate shareholders generally have limited liability."
  },
  {
    category: "Business Organizations",
    question: "What are shareholders' rights in a corporation?",
    options: [
      "Right to vote, receive dividends, and share in liquidation proceeds",
      "Right to manage daily operations",
      "Right to unlimited profits",
      "Right to personal use of corporate assets"
    ],
    answer: "Right to vote, receive dividends, and share in liquidation proceeds",
    explanation: "Shareholders typically have rights to vote on major corporate matters, receive dividends when declared, and share in assets upon liquidation."
  },

  // Commercial Transactions
  {
    category: "Commercial Transactions",
    question: "What is the Uniform Commercial Code (UCC)?",
    options: [
      "A set of laws governing commercial transactions in the US",
      "An international trade agreement",
      "A business ethics code",
      "A tax regulation system"
    ],
    answer: "A set of laws governing commercial transactions in the US",
    explanation: "The UCC is a comprehensive set of laws governing commercial transactions, including sales of goods, secured transactions, and negotiable instruments."
  },
  {
    category: "Commercial Transactions",
    question: "What is the difference between goods and services under commercial law?",
    options: [
      "Goods are tangible products, services are intangible activities",
      "Goods are always more expensive than services",
      "Services cannot be contracted for",
      "Goods and services are legally identical"
    ],
    answer: "Goods are tangible products, services are intangible activities",
    explanation: "Goods are tangible, movable items, while services are intangible activities or performance. Different legal rules may apply to each."
  },
  {
    category: "Commercial Transactions",
    question: "What is a warranty in commercial sales?",
    options: [
      "A guarantee about the quality or condition of goods",
      "A discount on future purchases",
      "A requirement to purchase insurance",
      "A penalty for late payment"
    ],
    answer: "A guarantee about the quality or condition of goods",
    explanation: "A warranty is a seller's assurance about the quality, condition, or performance of goods being sold."
  },

  // Employment Law
  {
    category: "Employment Law",
    question: "What is at-will employment?",
    options: [
      "Employment requiring union membership and collective bargaining",
      "Permanent employment that cannot be terminated under any circumstances",
      "Terminable by either party",
      "Project-based only"
    ],
    answer: "Terminable by either party",
    explanation: "At-will employment allows either the employer or employee to terminate the employment relationship at any time, for any reason (with some legal exceptions)."
  },
  {
    category: "Employment Law",
    question: "What constitutes workplace discrimination?",
    options: [
      "Adverse treatment based on protected characteristics",
      "Any negative feedback from supervisors",
      "Differences in work assignments",
      "Competitive promotion processes"
    ],
    answer: "Adverse treatment based on protected characteristics",
    explanation: "Workplace discrimination involves treating employees unfavorably because of protected characteristics like race, gender, age, religion, or disability."
  },
  {
    category: "Employment Law",
    question: "What is the purpose of minimum wage laws?",
    options: [
      "To ensure workers receive fair compensation for their labor",
      "To limit the number of hours worked",
      "To reduce business competition",
      "To increase government revenue"
    ],
    answer: "To ensure workers receive fair compensation for their labor",
    explanation: "Minimum wage laws establish the lowest hourly rate employers must pay workers, ensuring basic income standards."
  },

  // Intellectual Property
  {
    category: "Intellectual Property",
    question: "What is a trademark?",
    options: [
      "A secret business process that companies use to maintain competitive advantage",
      "A type of business loan provided by government institutions",
      "Brand identifier",
      "Government license"
    ],
    answer: "Brand identifier",
    explanation: "A trademark is a distinctive symbol, word, or phrase that identifies and distinguishes goods or services from those of competitors."
  },
  {
    category: "Intellectual Property",
    question: "How long does copyright protection typically last?",
    options: [
      "Life of the author plus 70 years",
      "10 years from creation",
      "Until the work is published",
      "Copyright protection is permanent"
    ],
    answer: "Life of the author plus 70 years",
    explanation: "For works created by individuals, copyright typically lasts for the life of the author plus 70 years."
  },
  {
    category: "Intellectual Property",
    question: "What can be patented?",
    options: [
      "Novel, useful, and non-obvious inventions",
      "Any business idea",
      "Mathematical formulas",
      "Natural phenomena"
    ],
    answer: "Novel, useful, and non-obvious inventions",
    explanation: "Patents protect inventions that are new (novel), have practical application (useful), and are not obvious to someone skilled in the field."
  },

  // Tort Law in Business
  {
    category: "Tort Law",
    question: "What is a tort?",
    options: [
      "A civil wrong causing harm to another person",
      "A type of business contract",
      "A criminal offense",
      "A government regulation"
    ],
    answer: "A civil wrong causing harm to another person",
    explanation: "A tort is a civil wrong (not criminal) where one party's action or inaction causes harm to another, creating liability for damages."
  },
  {
    category: "Tort Law",
    question: "What is negligence in business law?",
    options: [
      "Failure to exercise reasonable care, causing harm to others",
      "Intentional harm to competitors",
      "Breaking a contract",
      "Violating government regulations"
    ],
    answer: "Failure to exercise reasonable care, causing harm to others",
    explanation: "Negligence occurs when someone fails to exercise the level of care that a reasonable person would use in similar circumstances, resulting in harm."
  },
  {
    category: "Tort Law",
    question: "What is strict liability?",
    options: [
      "Liability without regard to fault or negligence",
      "Liability only for intentional acts",
      "Liability that applies only to corporations",
      "Liability that can never be proven"
    ],
    answer: "Liability without regard to fault or negligence",
    explanation: "Strict liability holds parties responsible for damages regardless of fault or negligence, commonly applied to inherently dangerous activities."
  },

  // Corporate Governance
  {
    category: "Corporate Governance",
    question: "What is the business judgment rule?",
    options: [
      "Directors are protected from liability for business decisions made in good faith",
      "Businesses can make any decision without legal consequences",
      "Courts will review all business decisions",
      "Directors must consult lawyers before every decision"
    ],
    answer: "Directors are protected from liability for business decisions made in good faith",
    explanation: "The business judgment rule protects directors from personal liability for business decisions made in good faith, with due care, and in the corporation's best interests."
  },
  {
    category: "Corporate Governance",
    question: "What are fiduciary duties?",
    options: [
      "Duties of loyalty and care owed by directors to the corporation",
      "Duties owed by customers to businesses",
      "Duties owed by employees to customers",
      "Duties owed by government to businesses"
    ],
    answer: "Duties of loyalty and care owed by directors to the corporation",
    explanation: "Fiduciary duties require directors and officers to act in the corporation's best interests with loyalty (avoiding conflicts) and care (making informed decisions)."
  },

  // Legal System and Jurisdiction
  {
    category: "Legal System",
    question: "What is the difference between substantive law and procedural law?",
    options: [
      "Substantive law defines rights and duties, procedural law defines how to enforce them",
      "Substantive law is federal, procedural law is state",
      "Substantive law applies to contracts, procedural law applies to torts",
      "There is no difference between them"
    ],
    answer: "Substantive law defines rights and duties, procedural law defines how to enforce them",
    explanation: "Substantive law establishes legal rights and obligations, while procedural law sets forth the methods and processes for enforcing those rights."
  },
  {
    category: "Legal System",
    question: "What is jurisdiction in legal terms?",
    options: [
      "The authority of a court to hear and decide a case",
      "The location where a crime was committed",
      "The type of lawyer needed for a case",
      "The amount of money involved in a lawsuit"
    ],
    answer: "The authority of a court to hear and decide a case",
    explanation: "Jurisdiction refers to a court's legal authority to hear and make decisions on particular types of cases or cases involving specific parties."
  },
  {
    category: "Legal System",
    question: "What is the statute of limitations?",
    options: [
      "A time limit for bringing legal action",
      "The maximum sentence for a crime",
      "The minimum age for legal capacity",
      "The duration of a contract"
    ],
    answer: "A time limit for bringing legal action",
    explanation: "A statute of limitations sets the maximum time after an event within which legal proceedings may be initiated."
  },

  // Contract Formation and Performance
  {
    category: "Contracts",
    question: "What is the mirror image rule in contract law?",
    options: [
      "Acceptance must exactly match the terms of the offer",
      "Contracts must be written identically by both parties",
      "Each party must provide identical consideration",
      "Offers must be made in person"
    ],
    answer: "Acceptance must exactly match the terms of the offer",
    explanation: "The mirror image rule requires that acceptance of an offer must be on exactly the same terms as the offer, without any modifications."
  },
  {
    category: "Contracts",
    question: "What is consideration in contract law?",
    options: [
      "Something of value exchanged between parties",
      "Careful thought before signing",
      "Legal advice from an attorney",
      "Time taken to review the contract"
    ],
    answer: "Something of value exchanged between parties",
    explanation: "Consideration is something of legal value (money, goods, services, or promises) that each party gives to the other as part of the contract."
  },
  {
    category: "Contracts",
    question: "When is a contract voidable?",
    options: [
      "When it can be canceled by one party due to legal defects",
      "When it contains complex terms",
      "When it involves large amounts of money",
      "When it requires government approval"
    ],
    answer: "When it can be canceled by one party due to legal defects",
    explanation: "A voidable contract is valid but can be canceled by one party due to circumstances like misrepresentation, duress, or lack of capacity."
  },
  {
    category: "Contracts",
    question: "What is the parol evidence rule?",
    options: [
      "Oral evidence cannot contradict a written contract",
      "All contracts must be written",
      "Witnesses are required for all contracts",
      "Contracts must be notarized"
    ],
    answer: "Oral evidence cannot contradict a written contract",
    explanation: "The parol evidence rule prevents parties from presenting oral or written evidence that contradicts the terms of a complete written contract."
  },
  {
    category: "Contracts",
    question: "What is specific performance?",
    options: [
      "A court order requiring exact fulfillment of contract terms",
      "A detailed contract specification",
      "High-quality work standards",
      "Fast completion of obligations"
    ],
    answer: "A court order requiring exact fulfillment of contract terms",
    explanation: "Specific performance is an equitable remedy where a court orders a party to perform exactly what was promised in the contract, usually for unique goods or services."
  },

  // Business Formation and Operations
  {
    category: "Business Organizations",
    question: "What is piercing the corporate veil?",
    options: [
      "Holding shareholders personally liable for corporate debts",
      "Removing a corporation's tax exemptions",
      "Dissolving a corporation",
      "Changing corporate bylaws"
    ],
    answer: "Holding shareholders personally liable for corporate debts",
    explanation: "Piercing the corporate veil occurs when courts disregard the corporate structure and hold shareholders personally responsible for corporate obligations, typically due to fraud or undercapitalization."
  },
  {
    category: "Business Organizations",
    question: "What is the difference between authorized and issued shares?",
    options: [
      "Authorized shares are maximum allowed, issued shares are actually sold",
      "Authorized shares are voting, issued shares are non-voting",
      "Authorized shares are preferred, issued shares are common",
      "There is no difference"
    ],
    answer: "Authorized shares are maximum allowed, issued shares are actually sold",
    explanation: "Authorized shares represent the maximum number of shares a corporation can issue as specified in its charter, while issued shares are those actually sold to shareholders."
  },
  {
    category: "Business Organizations",
    question: "What is a Limited Liability Company (LLC)?",
    options: [
      "A business structure combining corporate liability protection with partnership taxation",
      "A type of corporation with limited shareholders",
      "A partnership with written agreements",
      "A sole proprietorship with insurance"
    ],
    answer: "A business structure combining corporate liability protection with partnership taxation",
    explanation: "An LLC provides limited liability protection for its members while allowing flexible management structure and pass-through taxation like a partnership."
  },

  // Commercial Law and Sales
  {
    category: "Commercial Transactions",
    question: "What is the battle of the forms under the UCC?",
    options: [
      "When parties exchange different purchase orders and acknowledgments",
      "Competition between different contract formats",
      "Legal disputes over document authenticity",
      "Conflicts between state and federal forms"
    ],
    answer: "When parties exchange different purchase orders and acknowledgments",
    explanation: "The battle of the forms occurs when merchants exchange documents with conflicting terms, and the UCC provides rules for determining which terms control."
  },
  {
    category: "Commercial Transactions",
    question: "What is a bill of lading?",
    options: [
      "A document acknowledging receipt of goods for shipment",
      "An invoice for services rendered",
      "A warranty document",
      "A business license"
    ],
    answer: "A document acknowledging receipt of goods for shipment",
    explanation: "A bill of lading is a legal document between a shipper and carrier detailing the type, quantity, and destination of goods being carried."
  },
  {
    category: "Commercial Transactions",
    question: "What is the perfect tender rule?",
    options: [
      "Goods must conform exactly to contract specifications",
      "Payment must be made in exact change",
      "Delivery must be precisely on time",
      "All documents must be perfectly formatted"
    ],
    answer: "Goods must conform exactly to contract specifications",
    explanation: "Under the perfect tender rule, goods must conform exactly to the contract specifications, or the buyer may reject them entirely."
  },

  // Agency and Employment Relationships
  {
    category: "Employment Law",
    question: "What is the doctrine of respondeat superior?",
    options: [
      "Employers are liable for employees' acts within the scope of employment",
      "Employees must follow all employer orders",
      "Supervisors have unlimited authority",
      "Employers can terminate employees without cause"
    ],
    answer: "Employers are liable for employees' acts within the scope of employment",
    explanation: "Respondeat superior makes employers vicariously liable for tortious acts committed by employees while acting within the scope of their employment."
  },
  {
    category: "Employment Law",
    question: "What is the difference between an employee and an independent contractor?",
    options: [
      "Employees are under employer control, contractors work independently",
      "Employees are temporary, contractors are permanent",
      "Employees work full-time, contractors work part-time",
      "There is no legal difference"
    ],
    answer: "Employees are under employer control, contractors work independently",
    explanation: "The key distinction is the level of control: employees work under employer direction and control, while independent contractors maintain control over how they perform their work."
  },
  {
    category: "Employment Law",
    question: "What is wrongful termination?",
    options: [
      "Firing an employee in violation of law or public policy",
      "Any termination the employee disagrees with",
      "Termination without two weeks' notice",
      "Termination during probationary period"
    ],
    answer: "Firing an employee in violation of law or public policy",
    explanation: "Wrongful termination occurs when an employee is fired in violation of federal or state anti-discrimination laws, contractual agreements, or public policy."
  },

  // Property and Real Estate Law
  {
    category: "Property Law",
    question: "What is the difference between real property and personal property?",
    options: [
      "Real property is land and buildings, personal property is movable items",
      "Real property is expensive, personal property is cheap",
      "Real property is owned, personal property is rented",
      "Real property is taxed, personal property is not"
    ],
    answer: "Real property is land and buildings, personal property is movable items",
    explanation: "Real property (real estate) consists of land and anything permanently attached to it, while personal property consists of movable items not attached to land."
  },
  {
    category: "Property Law",
    question: "What is a lease in legal terms?",
    options: [
      "A contract granting temporary possession of property",
      "A permanent transfer of ownership",
      "A loan secured by property",
      "A property insurance policy"
    ],
    answer: "A contract granting temporary possession of property",
    explanation: "A lease is a contractual agreement where the owner (lessor) grants another party (lessee) the right to possess and use property for a specified period."
  },

  // Regulatory and Compliance Law
  {
    category: "Regulatory Compliance",
    question: "What is administrative law?",
    options: [
      "Law governing government agencies and their regulations",
      "Law governing office administration",
      "Law governing business management",
      "Law governing public administration degrees"
    ],
    answer: "Law governing government agencies and their regulations",
    explanation: "Administrative law governs the activities of government agencies, including rulemaking, adjudication, and enforcement of regulations."
  },
  {
    category: "Regulatory Compliance",
    question: "What is the purpose of environmental regulations in business?",
    options: [
      "To protect the environment and public health from business activities",
      "To increase business costs",
      "To eliminate manufacturing",
      "To promote only service businesses"
    ],
    answer: "To protect the environment and public health from business activities",
    explanation: "Environmental regulations ensure that business activities do not harm the environment or public health by setting standards for pollution, waste disposal, and resource use."
  },

  // International Business Law
  {
    category: "International Business Law",
    question: "What is a letter of credit in international trade?",
    options: [
      "A bank's promise to pay for goods on behalf of a buyer",
      "A recommendation letter for businesses",
      "A credit report for international companies",
      "A permit to conduct international business"
    ],
    answer: "A bank's promise to pay for goods on behalf of a buyer",
    explanation: "A letter of credit is a financial instrument where a bank promises to pay a seller on behalf of a buyer, provided the seller meets specified conditions."
  },
  {
    category: "International Business Law",
    question: "What are tariffs?",
    options: [
      "Taxes imposed on imported goods",
      "International shipping rates",
      "Currency exchange fees",
      "International business licenses"
    ],
    answer: "Taxes imposed on imported goods",
    explanation: "Tariffs are taxes imposed by governments on imported goods, typically to protect domestic industries or generate revenue."
  },

  // Dispute Resolution
  {
    category: "Dispute Resolution",
    question: "What is arbitration?",
    options: [
      "Private dispute resolution outside of court",
      "A type of court proceeding",
      "Government mediation service",
      "Legal research method"
    ],
    answer: "Private dispute resolution outside of court",
    explanation: "Arbitration is a private method of dispute resolution where parties agree to have their dispute decided by one or more neutral arbitrators instead of going to court."
  },
  {
    category: "Dispute Resolution",
    question: "What is the difference between mediation and arbitration?",
    options: [
      "Mediation facilitates agreement, arbitration makes binding decisions",
      "Mediation is public, arbitration is private",
      "Mediation is expensive, arbitration is free",
      "Mediation is for contracts, arbitration is for torts"
    ],
    answer: "Mediation facilitates agreement, arbitration makes binding decisions",
    explanation: "In mediation, a neutral mediator helps parties reach their own agreement. In arbitration, an arbitrator makes a binding decision for the parties."
  },

  // Technology and Cyber Law
  {
    category: "Technology Law",
    question: "What is data privacy law concerned with?",
    options: [
      "Protection of personal information collected by businesses",
      "Preventing all data collection",
      "Regulating internet speeds",
      "Controlling software prices"
    ],
    answer: "Protection of personal information collected by businesses",
    explanation: "Data privacy laws regulate how businesses collect, store, use, and share personal information to protect individuals' privacy rights."
  },
  {
    category: "Technology Law",
    question: "What is cybersecurity compliance?",
    options: [
      "Meeting legal requirements for protecting digital information",
      "Installing antivirus software",
      "Using complex passwords",
      "Avoiding social media"
    ],
    answer: "Meeting legal requirements for protecting digital information",
    explanation: "Cybersecurity compliance involves meeting legal and regulatory requirements for protecting digital information and systems from cyber threats."
  },

  // Ethics and Professional Responsibility
  {
    category: "Professional Ethics",
    question: "What is a conflict of interest in business?",
    options: [
      "When personal interests conflict with professional duties",
      "Any business disagreement",
      "Competition between companies",
      "Different opinions in meetings"
    ],
    answer: "When personal interests conflict with professional duties",
    explanation: "A conflict of interest occurs when an individual's personal interests could improperly influence their professional judgment or decision-making."
  },
  {
    category: "Professional Ethics",
    question: "What is insider trading?",
    options: [
      "Trading securities based on non-public material information",
      "Trading only within a company",
      "Any stock trading by company employees",
      "Trading during business hours"
    ],
    answer: "Trading securities based on non-public material information",
    explanation: "Insider trading is the illegal practice of trading securities based on material, non-public information obtained through one's position or relationship with a company."
  },

  // Financial and Securities Regulation
  {
    category: "Securities Law",
    question: "What is the primary purpose of the Securities and Exchange Commission (SEC)?",
    options: [
      "To regulate securities markets and protect investors",
      "To set interest rates",
      "To issue business licenses",
      "To collect business taxes"
    ],
    answer: "To regulate securities markets and protect investors",
    explanation: "The SEC enforces federal securities laws, regulates the securities industry, and protects investors by ensuring fair and efficient markets."
  },
  {
    category: "Securities Law",
    question: "What is a prospectus?",
    options: [
      "A document disclosing information about a securities offering",
      "A business plan",
      "A financial statement",
      "A stock certificate"
    ],
        answer: "A document disclosing information about a securities offering",
    explanation: "A prospectus is a formal document that provides details about an investment offering for sale to the public, required by securities law."
  },
  {
    category: "Securities Law",
    question: "What is a security under federal law?",
    options: [
      "An investment contract where profits depend on others' efforts",
      "Any business agreement",
      "A type of insurance policy",
      "A government bond only"
    ],
    answer: "An investment contract where profits depend on others' efforts",
    explanation: "Securities include stocks, bonds, and investment contracts where investors expect profits primarily from others' efforts rather than their own."
  },
  {
    category: "Securities Law",
    question: "What is the purpose of securities registration?",
    options: [
      "To provide investors with material information about investments",
      "To guarantee investment returns",
      "To eliminate all investment risks",
      "to restrict investment opportunities"
    ],
    answer: "To provide investors with material information about investments",
    explanation: "Securities registration requires disclosure of material information so investors can make informed decisions, but doesn't guarantee returns or eliminate risks."
  },

  // Banking and Finance Law
  {
    category: "Banking Law",
    question: "What is the purpose of banking regulations?",
    options: [
      "To ensure safety and soundness of the banking system",
      "To guarantee bank profits",
      "To eliminate all banking competition",
      "To control interest rates completely"
    ],
    answer: "To ensure safety and soundness of the banking system",
    explanation: "Banking regulations aim to protect depositors, maintain financial stability, and ensure banks operate safely and soundly."
  },
  {
    category: "Banking Law",
    question: "What is the FDIC?",
    options: [
      "Federal agency that insures bank deposits",
      "A type of banking license",
      "A method of calculating interest",
      "A bank lending program"
    ],
    answer: "Federal agency that insures bank deposits",
    explanation: "The Federal Deposit Insurance Corporation (FDIC) insures deposits at member banks up to statutory limits, protecting depositors if banks fail."
  },

  // Consumer Protection
  {
    category: "Consumer Protection",
    question: "What is the purpose of consumer protection laws?",
    options: [
      "To protect consumers from unfair or deceptive business practices",
      "To eliminate all business profits",
      "To make all products free",
      "To prevent consumer spending"
    ],
    answer: "To protect consumers from unfair or deceptive business practices",
    explanation: "Consumer protection laws aim to ensure fair dealing, prevent fraud and deception, and protect consumers' rights in marketplace transactions."
  },
  {
    category: "Consumer Protection",
    question: "What is truth in advertising?",
    options: [
      "Requirement that advertising be truthful and not misleading",
      "Requirement to advertise all products",
      "Requirement to use specific advertising formats",
      "Requirement to advertise only to adults"
    ],
    answer: "Requirement that advertising be truthful and not misleading",
    explanation: "Truth in advertising laws require that advertising claims be truthful, substantiated, and not misleading to reasonable consumers."
  },

  // Antitrust Law
  {
    category: "Antitrust Law",
    question: "What is the purpose of antitrust laws?",
    options: [
      "To promote competition and prevent monopolies",
      "To eliminate all business competition",
      "To set maximum prices for all products",
      "To require government approval for all business decisions"
    ],
    answer: "To promote competition and prevent monopolies",
    explanation: "Antitrust laws aim to promote competitive markets, prevent monopolistic practices, and protect consumers from anti-competitive behavior."
  },
  {
    category: "Antitrust Law",
    question: "What constitutes a monopoly?",
    options: [
      "Dominant market position with ability to control prices",
      "Any successful business",
      "A business with more than 100 employees",
      "A business that advertises extensively"
    ],
    answer: "Dominant market position with ability to control prices",
    explanation: "A monopoly exists when a business has sufficient market power to control prices and exclude competition in a relevant market."
  },

  // International Business Law
  {
    category: "International Business Law",
    question: "What governs international business transactions?",
    options: [
      "International treaties, conventions, and national laws",
      "Only US federal law",
      "Only local state laws",
      "No legal framework exists"
    ],
    answer: "International treaties, conventions, and national laws",
    explanation: "International business is governed by various sources including international treaties, trade conventions, and the domestic laws of involved countries."
  },
  {
    category: "International Business Law",
    question: "What is the Convention on Contracts for the International Sale of Goods (CISG)?",
    options: [
      "An international treaty governing international sales contracts",
      "A US federal law",
      "A European Union regulation",
      "A trade organization"
    ],
    answer: "An international treaty governing international sales contracts",
    explanation: "The CISG is an international treaty that provides uniform rules for contracts involving the sale of goods between parties from different countries."
  },

  // Ethics and Business Law
  {
    category: "Business Ethics",
    question: "What is the relationship between law and ethics in business?",
    options: [
      "Law sets minimum standards, ethics may require higher standards",
      "Law and ethics are always identical",
      "Ethics are irrelevant if actions are legal",
      "Law is less important than ethics"
    ],
    answer: "Law sets minimum standards, ethics may require higher standards",
    explanation: "While law establishes minimum acceptable behavior, ethical standards often require higher levels of conduct and consideration for all stakeholders."
  },
  {
    category: "Business Ethics",
    question: "What is corporate social responsibility?",
    options: [
      "Business obligation to consider impact on society and environment",
      "Requirement to donate to charity",
      "Obligation to hire only local workers",
      "Requirement to provide free products"
    ],
    answer: "Business obligation to consider impact on society and environment",
    explanation: "Corporate social responsibility involves businesses considering their broader impact on society, environment, and stakeholders beyond just profit maximization."
  },

  // Legal Rules - Romanian Civil Law
  {
    category: "Legal Rules",
    question: "The legal rule \"Marriage may be concluded if the future spouses have reached the age of 18 years.\" [Art. 272 paragraph 1 of the Civil Code] is:",
    options: [
      "suppletive (complementary)",
      "permissive",
      "operative (imposed)",
      "prohibitive"
    ],
    answer: "permissive",
    explanation: "This rule allows marriage if the condition is met, making it a permissive rule that grants permission rather than imposing an obligation."
  },
  {
    category: "Legal Rules",
    question: "The Emergency Ordinances are issued by:",
    options: [
      "the President",
      "the Parliament",
      "the Government",
      "the Constituent Assembly"
    ],
    answer: "the Government",
    explanation: "Emergency Ordinances are issued by the Government in exceptional situations when Parliament is not in session."
  },
  {
    category: "Legal Rules",
    question: "A law adopted by the Parliament comes into force:",
    options: [
      "at the publication date in the Official Gazette",
      "3 days after the publication in the Official Gazette, unless the very text mentions another subsequent date for entry into force",
      "30 days after the publication in the Official Gazette, unless the very text mentions another subsequent date for entry into force",
      "at its promulgation date by the President"
    ],
    answer: "3 days after the publication in the Official Gazette, unless the very text mentions another subsequent date for entry into force",
    explanation: "Romanian law enters into force 3 days after publication in the Official Gazette, unless the law specifies a different date."
  },
  {
    category: "Legal Rules",
    question: "The State must take measures to ensure economic growth and social development, the well-being of the citizens is protected, guaranteed to work [Art. 47 paragraph (1) of the Constitution] is:",
    options: [
      "suppletive (complementary)",
      "permissive",
      "operative (imposed)"
    ],
    answer: "operative (imposed)",
    explanation: "This constitutional provision imposes obligations on the State, making it an operative (imposed) rule."
  },
  {
    category: "Legal Rules",
    question: "The supreme legal norm (law) in the State is:",
    options: [
      "the Fiscal Code",
      "the Constitution",
      "the Criminal Code",
      "the Civil Code"
    ],
    answer: "the Constitution",
    explanation: "The Constitution is the supreme law of any state, taking precedence over all other legal norms."
  },
  {
    category: "Legal Rules",
    question: "The more favourable criminal law is an application of:",
    options: [
      "the principle of the immediate application of the new law",
      "the principle of non-retroactivity of the law",
      "exception of the principle of non-activity of the law"
    ],
    answer: "the principle of non-retroactivity of the law",
    explanation: "The application of more favorable criminal law is an exception to the general principle of non-retroactivity."
  },
  {
    category: "Legal Rules",
    question: "It comprises legal norms concerning the system of taxes due to the state:",
    options: [
      "constitutional law",
      "fiscal law",
      "family law",
      "administrative law"
    ],
    answer: "fiscal law",
    explanation: "Fiscal law specifically deals with the legal framework for taxation and tax obligations."
  },
  {
    category: "Legal Rules",
    question: "The supreme law of the Romanian state is:",
    options: [
      "Civil Code",
      "Constitution",
      "Criminal Code",
      "Fiscal Code"
    ],
    answer: "Constitution",
    explanation: "The Constitution is the fundamental law that establishes the basic principles and structure of the Romanian state."
  },
  {
    category: "Legal Rules",
    question: "The law enters in force:",
    options: [
      "at the publication in the Official Journal",
      "3 days after the publication in the Official Journal or at a later date stipulated in that law",
      "30 days after the publication in the Official Monitor"
    ],
    answer: "3 days after the publication in the Official Journal or at a later date stipulated in that law",
    explanation: "Romanian law becomes effective 3 days after official publication, unless the law itself specifies a different effective date."
  },
  {
    category: "Legal Rules",
    question: "The most favorable criminal law is an application of:",
    options: [
      "principle of non-retroactivity of the new law",
      "principle of immediate application of the law",
      "exception of retroactivity"
    ],
    answer: "exception of retroactivity",
    explanation: "When a new criminal law is more favorable to the defendant, it can be applied retroactively as an exception to the non-retroactivity principle."
  },
  {
    category: "Legal Rules",
    question: "The legal rule contains:",
    options: [
      "the provision",
      "the object",
      "the parties"
    ],
    answer: "the provision",
    explanation: "A legal rule contains a provision that establishes the legal norm or regulation."
  },
  {
    category: "Legal Rules",
    question: "The law applicable to an immovable is:",
    options: [
      "the law of the state where the immovable is located in",
      "the law chosen by the owner",
      "the law of the owner's citizenship"
    ],
    answer: "the law of the state where the immovable is located in",
    explanation: "Immovable property is governed by the law of the country where it is situated (lex rei sitae)."
  },

  // Legal Relations and Capacity
  {
    category: "Legal Relations",
    question: "Which of the below is not a constituent element of the legal entity:",
    options: [
      "the self-standing organization",
      "own patrimony",
      "share capital",
      "lawful and moral purpose"
    ],
    answer: "share capital",
    explanation: "Share capital is specific to corporations, not a general requirement for all legal entities."
  },
  {
    category: "Legal Relations",
    question: "The limited capacity of exercise starts:",
    options: [
      "at the age of 18",
      "at the age of 16",
      "at the age of 14",
      "at birth"
    ],
    answer: "at the age of 14",
    explanation: "Limited capacity of exercise begins at age 14, allowing minors to perform certain legal acts with restrictions."
  },
  {
    category: "Legal Relations",
    question: "The capacity of use starts:",
    options: [
      "at the age of 18",
      "at the age of 16",
      "at the age of 14",
      "at birth"
    ],
    answer: "at birth",
    explanation: "The capacity to have rights (capacity of use) begins at birth for natural persons."
  },
  {
    category: "Legal Relations",
    question: "The legal relationship is:",
    options: [
      "only patrimonial",
      "only non-patrimonial",
      "established by the will of parties"
    ],
    answer: "established by the will of parties",
    explanation: "Legal relationships can be established by the will of the parties, though they can also arise from law or other sources."
  },
  {
    category: "Legal Relations",
    question: "The full capacity to act is acquired:",
    options: [
      "only at 18 years",
      "also at 16 years by marriage",
      "by birth"
    ],
    answer: "also at 16 years by marriage",
    explanation: "Full legal capacity is normally acquired at 18, but can also be acquired at 16 through marriage."
  },
  {
    category: "Legal Relations",
    question: "The limited capacity to act starts at the age of:",
    options: [
      "14",
      "16",
      "18"
    ],
    answer: "14",
    explanation: "Limited capacity to act begins at 14, allowing minors to perform certain legal actions with parental consent or court approval."
  },

  // Property Law
  {
    category: "Property Law",
    question: "Which of the following is an immovable good:",
    options: [
      "Arcul de Triumf (the Triumphal Arch) located in Bucharest",
      "electromagnetic waves",
      "electric energy",
      "money"
    ],
    answer: "Arcul de Triumf (the Triumphal Arch) located in Bucharest",
    explanation: "Buildings and structures permanently attached to land are immovable property."
  },
  {
    category: "Property Law",
    question: "The rent is:",
    options: [
      "a natural fruit",
      "an industrial fruit",
      "civil fruit",
      "none of the above"
    ],
    answer: "civil fruit",
    explanation: "Rent is income derived from property without consuming the property itself, making it a civil fruit."
  },
  {
    category: "Property Law",
    question: "Which of the following is the immovable good:",
    options: [
      "the main building of ASE",
      "the electric energy",
      "a car"
    ],
    answer: "the main building of ASE",
    explanation: "Buildings are immovable property as they are permanently attached to land."
  },
  {
    category: "Property Law",
    question: "The interest is:",
    options: [
      "a natural fruit",
      "an industrial fruit",
      "a civil fruit"
    ],
    answer: "a civil fruit",
    explanation: "Interest earned on money or investments is considered a civil fruit as it represents income from capital."
  },

  // Rights Classification
  {
    category: "Rights Classification",
    question: "The right to have a name:",
    options: [
      "a non-patrimonial right",
      "a patrimonial right",
      "a debt right",
      "a real debt"
    ],
    answer: "a non-patrimonial right",
    explanation: "The right to a name is a personal right that cannot be valued in money terms, making it non-patrimonial."
  },
  {
    category: "Rights Classification",
    question: "The ownership right is:",
    options: [
      "a non-patrimonial right",
      "an ancillary right",
      "an absolute right",
      "a personal right"
    ],
    answer: "an absolute right",
    explanation: "Ownership is an absolute right that can be exercised against all other persons (erga omnes)."
  },
  {
    category: "Rights Classification",
    question: "The right to education is:",
    options: [
      "a patrimonial right",
      "a non-patrimonial right",
      "an ancillary right",
      "none of the above"
    ],
    answer: "a non-patrimonial right",
    explanation: "The right to education is a fundamental personal right that cannot be valued in monetary terms."
  },

  // Obligations
  {
    category: "Obligations",
    question: "Delivery of the good in a sale contract is:",
    options: [
      "an obligation of giving",
      "an obligation of doing",
      "an obligation of not doing",
      "is not an obligation"
    ],
    answer: "an obligation of doing",
    explanation: "Delivery involves performing an action (transferring possession), making it an obligation of doing."
  },
  {
    category: "Obligations",
    question: "Transferring the ownership right in favor of the creditor is:",
    options: [
      "an obligation of giving",
      "an obligation of doing",
      "an obligation of not doing",
      "is not an obligation"
    ],
    answer: "an obligation of giving",
    explanation: "Transferring ownership involves giving a legal right to another party, constituting an obligation of giving."
  },

  // Business Organizations and Professionals
  {
    category: "Business Organizations",
    question: "They are considered professionals:",
    options: [
      "all legal persons",
      "those which operate (exploit) an undertaking",
      "only authorized natural persons, individual undertakings and family undertakings"
    ],
    answer: "those which operate (exploit) an undertaking",
    explanation: "Professionals are defined as those who operate an undertaking or business activity in an organized manner."
  },
  {
    category: "Business Organizations",
    question: "It cannot hire personnel with individual employment contract:",
    options: [
      "the authorized natural person (P.F.A)",
      "the holder of an individual undertaking",
      "the representative of a family undertaking"
    ],
    answer: "the representative of a family undertaking",
    explanation: "Family undertakings can only use family members, not hired employees with individual employment contracts."
  },
  {
    category: "Business Organizations",
    question: "The authorized natural person (PFA) may:",
    options: [
      "hire up to 8 people",
      "hire up to 3 people",
      "perform up to 10 classes of activities",
      "has legal personality"
    ],
    answer: "hire up to 3 people",
    explanation: "An authorized natural person (PFA) is limited to hiring a maximum of 3 employees."
  },
  {
    category: "Business Organizations",
    question: "Which company has the minimum share capital of 90.000 lei:",
    options: [
      "general partnership",
      "limited partnership",
      "joint stock company",
      "limited liability company"
    ],
    answer: "joint stock company",
    explanation: "Joint stock companies (SA) require a minimum share capital of 90,000 RON under Romanian law."
  },
  {
    category: "Business Organizations",
    question: "It is a professional, as provided by the Civil Code:",
    options: [
      "Bucharest City Hall",
      "ASE",
      "Ilfov Country Court"
    ],
    answer: "ASE",
    explanation: "Universities like ASE (Academy of Economic Studies) operate undertakings and are considered professionals under the Civil Code."
  },
  {
    category: "Business Organizations",
    question: "The authorized natural person (P.F.A) may:",
    options: [
      "may collaborate with representatives of family undertakings",
      "has legal personality",
      "cannot be an employee in the same time",
      "has no obligation of registration at the Trade Registry"
    ],
    answer: "may collaborate with representatives of family undertakings",
    explanation: "Authorized natural persons can collaborate with family undertaking representatives in business activities."
  },
  {
    category: "Business Organizations",
    question: "The holder of an individual undertaking may:",
    options: [
      "hire up to 8 people",
      "perform up to 5 classes of activities",
      "hire up to 3 people",
      "not hire personnel"
    ],
    answer: "hire up to 8 people",
    explanation: "Individual undertaking holders can hire up to 8 employees under Romanian business law."
  },
  {
    category: "Business Organizations",
    question: "Affectio societatis is:",
    options: [
      "the intention of the shareholders to operate and participate in the performance of the company's economic activity",
      "the contribution of each shareholder to the share capital",
      "the dividend"
    ],
    answer: "the intention of the shareholders to operate and participate in the performance of the company's economic activity",
    explanation: "Affectio societatis refers to the shared intention of partners/shareholders to work together in a business venture."
  },
  {
    category: "Business Organizations",
    question: "They are professionals according to the provisions of the Civil Code, but they are not traders:",
    options: [
      "individuals who joined a liberal profession",
      "the companies regulated by Law no. 31/1990",
      "family undertakings",
      "associations regulated by G.O, no. 26/2000"
    ],
    answer: "individuals who joined a liberal profession",
    explanation: "Liberal professionals (lawyers, doctors, etc.) are considered professionals but not commercial traders."
  },
  {
    category: "Business Organizations",
    question: "They are professionals:",
    options: [
      "city hall",
      "hospitals",
      "universities",
      "courts of law"
    ],
    answer: "universities",
    explanation: "Universities operate economic activities and undertakings, making them professionals under civil law."
  },
  {
    category: "Business Organizations",
    question: "In accordance with E.G.O. no. 44/2008 an individual cannot be registered as:",
    options: [
      "authorized natural person (P.F.A) and representative of a family undertaking",
      "individual enterprise and authorized natural person (P.F.A.)",
      "individual enterprise and member of a family undertaking"
    ],
    answer: "individual enterprise and authorized natural person (P.F.A.)",
    explanation: "Romanian law prohibits simultaneous registration as both an individual enterprise and authorized natural person."
  },
  {
    category: "Business Organizations",
    question: "In case of a family undertaking:",
    options: [
      "the members have limited liability for the debts of the undertaking",
      "the members have joint liability with the undertaking (patrimony of appropriation) if formed, as well as with their entire patrimony if undertaking (the patrimony of appropriation) is not formed or it is not sufficient for the debts of the undertaking",
      "the representative is the only liable person for the debts of the undertaking"
    ],
    answer: "the members have joint liability with the undertaking (patrimony of appropriation) if formed, as well as with their entire patrimony if undertaking (the patrimony of appropriation) is not formed or it is not sufficient for the debts of the undertaking",
    explanation: "Family undertaking members have unlimited joint liability for business debts, both with the business assets and their personal assets."
  },

  // Contract Law
  {
    category: "Contracts",
    question: "The donation contract is:",
    options: [
      "consensual",
      "solemn",
      "innominate",
      "by onerous title"
    ],
    answer: "solemn",
    explanation: "Donation contracts require specific formal procedures to be valid, making them solemn contracts."
  },
  {
    category: "Contracts",
    question: "The lease contract is:",
    options: [
      "solemn",
      "aleatory",
      "patrimonial",
      "unilateral"
    ],
    answer: "patrimonial",
    explanation: "Lease contracts involve economic value and financial obligations, making them patrimonial contracts."
  },
  {
    category: "Contracts",
    question: "The sale contract of a house is:",
    options: [
      "ancillary",
      "aleatory",
      "by gratuitous title",
      "solemn"
    ],
    answer: "solemn",
    explanation: "Real estate sales require formal procedures and notarization, making them solemn contracts."
  },
  {
    category: "Contracts",
    question: "The validity requirements of a juridical act are:",
    options: [
      "capacity and consent",
      "object and cause",
      "capacity, consent, object, cause"
    ],
    answer: "capacity, consent, object, cause",
    explanation: "All four elements (capacity, consent, object, and cause) are required for a valid juridical act."
  },
  {
    category: "Contracts",
    question: "The contract has the force of law according to the principle of:",
    options: [
      "the binding force",
      "irrevocability",
      "the relativity of contracts"
    ],
    answer: "the binding force",
    explanation: "The binding force principle means contracts have the force of law between the contracting parties."
  },

  // Contract Formation Cases
  {
    category: "Contract Formation",
    question: "AB S.R.L. is a metal broker and it is in negotiations with three parties for the sale of copper. It wrote to DE S.R.L. offering the copper at $5,000 per tonne over 100 tonnes for delivery to be made before 1 April. DE S.R.L. wrote back ordering 80 tonnes for delivery on 30 March. AB S.R.L. wrote to GH S.A. offering 100 tonnes of copper at $5,500 per tonne for orders placed before 1 May. GH S.A. wrote back ordering 150 tonnes at the agreed price for delivery on 30 April. AB S.R.L. wrote to JK S.A. offering copper at $5,750 per tonne and JK S.A. wrote back ordering 150 tonnes for delivery on 1 May. The answer given by DE S.R.L. to AB S.R.L. is:",
    options: [
      "an invitation to negotiate",
      "an offer",
      "a counter-offer",
      "a withdrawal"
    ],
    answer: "a counter-offer",
    explanation: "DE S.R.L. changed the terms (80 tonnes instead of 100, specific delivery date), making it a counter-offer rather than acceptance."
  },
  {
    category: "Contract Formation",
    question: "AB S.R.L. is a metal broker and it is in negotiations with three parties for the sale of copper. It wrote to DE S.R.L. offering the copper at $5,000 per tonne over 100 tonnes for delivery to be made before 1 April. DE S.R.L. wrote back ordering 80 tonnes for delivery on 30 March. AB S.R.L. wrote to GH S.A. offering 100 tonnes of copper at $5,500 per tonne for orders placed before 1 May. GH S.A. wrote back ordering 150 tonnes at the agreed price for delivery on 30 April. AB S.R.L. wrote to JK S.A. offering copper at $5,750 per tonne and JK S.A. wrote back ordering 150 tonnes for delivery on 1 May. The answer given by GH S.A. to AB S.R.L. is:",
    options: [
      "an invitation to negotiate",
      "an offer",
      "a counter-offer",
      "a withdrawal"
    ],
    answer: "an offer",
    explanation: "GH S.A. responded to an invitation (no specific quantity mentioned in original) by making a definite offer for 150 tonnes."
  },
  {
    category: "Contract Formation",
    question: "AB S.R.L. is a metal broker and it is in negotiations with three parties for the sale of copper. It wrote to DE S.R.L. offering the copper at $5,000 per tonne over 100 tonnes for delivery to be made before 1 April. DE S.R.L. wrote back ordering 80 tonnes for delivery on 30 March. AB S.R.L. wrote to GH S.A. offering 100 tonnes of copper at $5,500 per tonne for orders placed before 1 May. GH S.A. wrote back ordering 150 tonnes at the agreed price for delivery on 30 April. AB S.R.L. wrote to JK S.A. offering copper at $5,750 per tonne and JK S.A. wrote back ordering 150 tonnes for delivery on 1 May. The letter sent by AB S.R.L. to JK S.A. is:",
    options: [
      "an invitation to negotiate",
      "an offer",
      "a counter-offer",
      "a withdrawal"
    ],
    answer: "an invitation to negotiate",
    explanation: "AB S.R.L.'s letter to JK S.A. lacked specific quantity terms, making it an invitation to negotiate rather than a definite offer."
  },
  {
    category: "Contract Formation",
    question: "AB S.R.L. is a metal broker and it is in negotiations with three parties for the sale of copper. It wrote to DE S.R.L. offering the copper at $5,000 per tonne over 100 tonnes for delivery to be made before 1 April. DE S.R.L. wrote back ordering 80 tonnes for delivery on 30 March. AB S.R.L. wrote to GH S.A. offering 100 tonnes of copper at $5,500 per tonne for orders placed before 1 May. GH S.A. wrote back ordering 150 tonnes at the agreed price for delivery on 30 April. AB S.R.L. wrote to JK S.A. offering copper at $5,750 per tonne and JK S.A. wrote back ordering 150 tonnes for delivery on 1 May. The answer given by JK S.A. to AB S.R.L. is:",
    options: [
      "an invitation to negotiate",
      "an offer",
      "a counter-offer",
      "a withdrawal"
    ],
    answer: "an offer",
    explanation: "JK S.A. responded to an invitation to negotiate by making a definite offer with specific terms (150 tonnes, delivery date)."
  }
];

// Quiz State Management
class QuizApp {
  constructor() {
    // Quiz state
    this.currentQuestions = [];
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.selectedAnswer = null;
    this.userAnswers = [];
    this.quizStarted = false;
    
    // DOM elements
    this.startScreen = document.getElementById('start-screen');
    this.quizScreen = document.getElementById('quiz-screen');
    this.resultScreen = document.getElementById('result-screen');
    
    this.startBtn = document.getElementById('start-quiz');
    this.submitBtn = document.getElementById('submit');
    this.nextBtn = document.getElementById('next');
    this.restartBtn = document.getElementById('restart-quiz');
    this.reviewBtn = document.getElementById('review-answers');
    
    this.questionEl = document.getElementById('question');
    this.optionsEl = document.getElementById('options');
    this.progressEl = document.getElementById('progress');
    this.questionCounterEl = document.getElementById('question-counter');
    this.scoreDisplayEl = document.getElementById('score-display');
    this.feedbackEl = document.getElementById('feedback');
    
    this.resultIconEl = document.getElementById('result-icon');
    this.resultTitleEl = document.getElementById('result-title');
    this.finalScoreEl = document.getElementById('final-score');
    this.scorePercentageEl = document.getElementById('score-percentage');
    this.performanceMessageEl = document.getElementById('performance-message');
    this.totalQuestionsEl = document.getElementById('total-questions');
    
    this.init();
  }
  
  init() {
    // Update total questions count
    this.totalQuestionsEl.textContent = questionDatabase.length;
    
    // Event listeners
    this.startBtn.addEventListener('click', () => this.startQuiz());
    this.submitBtn.addEventListener('click', () => this.submitAnswer());
    this.nextBtn.addEventListener('click', () => this.nextQuestion());
    this.restartBtn.addEventListener('click', () => this.restartQuiz());
    this.reviewBtn.addEventListener('click', () => this.reviewAnswers());
    
    // Option selection event delegation
    this.optionsEl.addEventListener('click', (e) => {
      if (e.target.closest('.option')) {
        this.selectOption(e.target.closest('.option'));
      }
    });
  }
  
  startQuiz() {
    // Reset quiz state
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.userAnswers = [];
    this.quizStarted = true;
    
    // Select 20 random questions
    this.currentQuestions = this.getRandomQuestions(20);
    
    // Show quiz screen
    this.showScreen('quiz');
    
    // Load first question
    this.loadQuestion();
  }
  
  getRandomQuestions(count) {
    const shuffled = [...questionDatabase].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  }
  
  showScreen(screenName) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
      screen.classList.remove('active');
    });
    
    // Show selected screen
    const targetScreen = document.getElementById(`${screenName}-screen`);
    if (targetScreen) {
      targetScreen.classList.add('active');
    }
  }
  
  loadQuestion() {
    const question = this.currentQuestions[this.currentQuestionIndex];
    
    // Update progress
    const progress = ((this.currentQuestionIndex + 1) / this.currentQuestions.length) * 100;
    this.progressEl.style.width = `${progress}%`;
    
    // Update question counter and score
    this.questionCounterEl.textContent = `Question ${this.currentQuestionIndex + 1} of ${this.currentQuestions.length}`;
    this.scoreDisplayEl.textContent = `Score: ${this.score}`;
    
    // Load question content
    this.questionEl.textContent = question.question;
    
    // Clear previous options
    this.optionsEl.innerHTML = '';
    
    // Shuffle options to randomize the order
    const shuffledOptions = [...question.options].sort(() => Math.random() - 0.5);
    
    // Create option elements
    shuffledOptions.forEach((option, index) => {
      const optionEl = document.createElement('div');
      optionEl.className = 'option';
      optionEl.innerHTML = `
        <label>
          <input type="radio" name="option" value="${option}" style="display: none;">
          ${option}
        </label>
      `;
      this.optionsEl.appendChild(optionEl);
    });
    
    // Reset UI state
    this.selectedAnswer = null;
    this.submitBtn.disabled = true;
    this.submitBtn.classList.remove('hidden'); // Make sure submit button is visible
    this.nextBtn.classList.add('hidden');
    this.feedbackEl.classList.add('hidden');
    this.feedbackEl.className = 'feedback hidden';
  }
  
  selectOption(optionEl) {
    // Remove previous selection
    document.querySelectorAll('.option').forEach(opt => {
      opt.classList.remove('selected');
    });
    
    // Mark as selected
    optionEl.classList.add('selected');
    this.selectedAnswer = optionEl.querySelector('input').value;
    this.submitBtn.disabled = false;
  }
  
  submitAnswer() {
    if (!this.selectedAnswer) return;
    
    const question = this.currentQuestions[this.currentQuestionIndex];
    const isCorrect = this.selectedAnswer === question.answer;
    
    // Store user answer
    this.userAnswers.push({
      question: question.question,
      userAnswer: this.selectedAnswer,
      correctAnswer: question.answer,
      isCorrect: isCorrect,
      explanation: question.explanation,
      category: question.category
    });
    
    // Update score
    if (isCorrect) {
      this.score++;
    }
    
    // Show visual feedback on options
    document.querySelectorAll('.option').forEach(optionEl => {
      const optionValue = optionEl.querySelector('input').value;
      if (optionValue === question.answer) {
        optionEl.classList.add('correct');
      } else if (optionValue === this.selectedAnswer && !isCorrect) {
        optionEl.classList.add('incorrect');
      }
    });
    
    // Show feedback
    this.showFeedback(isCorrect, question.explanation);
    
    // Update UI
    this.submitBtn.classList.add('hidden');
    this.nextBtn.classList.remove('hidden');
    
    // Auto advance after last question
    if (this.currentQuestionIndex === this.currentQuestions.length - 1) {
      this.nextBtn.textContent = 'Finish Quiz';
    }
  }
  
  showFeedback(isCorrect, explanation) {
    this.feedbackEl.classList.remove('hidden');
    this.feedbackEl.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
    
    const feedbackTitle = isCorrect ? '✅ Correct!' : '❌ Incorrect';
    this.feedbackEl.innerHTML = `
      <h3>${feedbackTitle}</h3>
      <p>${explanation}</p>
    `;
  }
  
  nextQuestion() {
    this.currentQuestionIndex++;
    
    if (this.currentQuestionIndex < this.currentQuestions.length) {
      this.loadQuestion();
    } else {
      this.showResults();
    }
  }
  
  showResults() {
    const percentage = Math.round((this.score / this.currentQuestions.length) * 100);
    
    // Update final score display
    this.finalScoreEl.textContent = `${this.score}/${this.currentQuestions.length}`;
    this.scorePercentageEl.textContent = `${percentage}%`;
    
    // Set result icon and title based on performance
    if (percentage >= 90) {
      this.resultIconEl.textContent = '🏆';
      this.resultTitleEl.textContent = 'Excellent!';
      this.performanceMessageEl.textContent = 'Outstanding performance! You have excellent knowledge of business law concepts.';
    } else if (percentage >= 80) {
      this.resultIconEl.textContent = '🎉';
      this.resultTitleEl.textContent = 'Great Job!';
      this.performanceMessageEl.textContent = 'Very good performance! You have solid understanding of business law principles.';
    } else if (percentage >= 70) {
      this.resultIconEl.textContent = '👍';
      this.resultTitleEl.textContent = 'Good Work!';
      this.performanceMessageEl.textContent = 'Good performance! You have decent knowledge with room for improvement.';
    } else if (percentage >= 60) {
      this.resultIconEl.textContent = '📚';
      this.resultTitleEl.textContent = 'Keep Learning!';
      this.performanceMessageEl.textContent = 'Fair performance. Consider reviewing the material and taking another quiz.';
    } else {
      this.resultIconEl.textContent = '💪';
      this.resultTitleEl.textContent = 'Keep Trying!';
      this.performanceMessageEl.textContent = 'You need more study time. Review the materials and practice more questions.';
    }
    
    // Show result screen
    this.showScreen('result');
  }
  
  restartQuiz() {
    // Reset button text
    this.nextBtn.textContent = 'Next Question';
    
    // Show start screen
    this.showScreen('start');
  }
  
  reviewAnswers() {
    // Create review screen dynamically
    const reviewHTML = `
      <div class="review-content">
        <h2>📋 Answer Review</h2>
        <div class="review-summary">
          <p>Final Score: <strong>${this.score}/${this.currentQuestions.length}</strong> (${Math.round((this.score / this.currentQuestions.length) * 100)}%)</p>
        </div>
        <div class="review-questions">
          ${this.userAnswers.map((answer, index) => `
            <div class="review-question ${answer.isCorrect ? 'correct' : 'incorrect'}">
              <h3>Question ${index + 1} <span class="category-tag">${answer.category}</span></h3>
              <p class="question-text">${answer.question}</p>
              <div class="answer-comparison">
                <div class="user-answer">
                  <strong>Your Answer:</strong> ${answer.userAnswer}
                  ${answer.isCorrect ? '✅' : '❌'}
                </div>
                ${!answer.isCorrect ? `<div class="correct-answer"><strong>Correct Answer:</strong> ${answer.correctAnswer}</div>` : ''}
              </div>
              <div class="explanation">
                <strong>Explanation:</strong> ${answer.explanation}
              </div>
            </div>
          `).join('')}
        </div>
        <div class="review-actions">
          <button id="back-to-results" class="btn btn-secondary">Back to Results</button>
          <button id="new-quiz-from-review" class="btn btn-primary">Take New Quiz</button>
        </div>
      </div>
    `;
    
    // Replace result screen content temporarily
    const originalContent = this.resultScreen.innerHTML;
    this.resultScreen.innerHTML = reviewHTML;
    
    // Add event listeners for review screen
    document.getElementById('back-to-results').addEventListener('click', () => {
      this.resultScreen.innerHTML = originalContent;
      // Re-add event listeners
      this.restartBtn = document.getElementById('restart-quiz');
      this.reviewBtn = document.getElementById('review-answers');
      this.restartBtn.addEventListener('click', () => this.restartQuiz());
      this.reviewBtn.addEventListener('click', () => this.reviewAnswers());
    });
    
    document.getElementById('new-quiz-from-review').addEventListener('click', () => {
      this.resultScreen.innerHTML = originalContent;
      // Re-add event listeners
      this.restartBtn = document.getElementById('restart-quiz');
      this.reviewBtn = document.getElementById('review-answers');
      this.restartBtn.addEventListener('click', () => this.restartQuiz());
      this.reviewBtn.addEventListener('click', () => this.reviewAnswers());
      this.startQuiz();
    });
    
    // Add review-specific styles
    const reviewStyles = `
      <style>
        .review-content { padding: 2rem; max-height: 70vh; overflow-y: auto; }
        .review-summary { background: #f8f9fa; padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem; text-align: center; }
        .review-question { margin-bottom: 2rem; padding: 1.5rem; border-radius: 12px; border-left: 5px solid #ddd; }
        .review-question.correct { border-left-color: #28a745; background: #f8fff9; }
        .review-question.incorrect { border-left-color: #dc3545; background: #fff8f8; }
        .category-tag { font-size: 0.8rem; background: #667eea; color: white; padding: 0.2rem 0.5rem; border-radius: 4px; }
        .question-text { font-weight: 600; margin: 1rem 0; }
        .answer-comparison { margin: 1rem 0; }
        .user-answer, .correct-answer { margin: 0.5rem 0; }
        .explanation { background: #f8f9fa; padding: 1rem; border-radius: 8px; margin-top: 1rem; }
        .review-actions { text-align: center; padding-top: 2rem; border-top: 1px solid #eee; margin-top: 2rem; }
      </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', reviewStyles);
  }
}

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZlimBOZ2yAtj9e_Ulm1I9McWz_8H2gWo",
  authDomain: "griledrept-acb34.firebaseapp.com",
  databaseURL: "https://griledrept-acb34-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "griledrept-acb34",
  storageBucket: "griledrept-acb34.firebasestorage.app",
  messagingSenderId: "637882042012",
  appId: "1:637882042012:web:eba724f584377c2bca4f59",
  measurementId: "G-5E47GKCJT2"
};

// Real-time Active Users Counter with Firebase + Fake Boost
class RealTimeUsersCounter {
  constructor() {
    this.countElement = document.getElementById('active-count');
    this.userRef = null;
    this.usersRef = null;
    this.database = null;
    this.userId = this.generateUserId();
    this.realUserCount = 1;
    this.fakeBoost = this.generateFakeBoost();
    this.lastBoostUpdate = Date.now();
    
    this.initFirebase();
    this.startFakeBoostUpdater();
  }
  
  generateUserId() {
    return 'user_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
  }
  
  generateFakeBoost() {
    // Generate fake boost between 3-10 users
    return Math.floor(Math.random() * 8) + 3; // 3 to 10
  }
  
  startFakeBoostUpdater() {
    // Update fake boost every 10 minutes (600,000 ms)
    setInterval(() => {
      this.updateFakeBoost();
    }, 600000); // 10 minutes
    
    // Also update occasionally for more realistic feel (every 2-5 minutes)
    setInterval(() => {
      if (Math.random() < 0.3) { // 30% chance
        this.updateFakeBoost();
      }
    }, Math.random() * 180000 + 120000); // 2-5 minutes
  }
  
  updateFakeBoost() {
    const oldBoost = this.fakeBoost;
    const newBoost = this.generateFakeBoost();
    
    // 20% chance for sudden drop (like users leaving quickly)
    if (Math.random() < 0.2 && newBoost < oldBoost) {
      this.fakeBoost = newBoost;
      this.updateDisplayedCount();
      console.log(`User count sudden drop: ${oldBoost} → ${newBoost} fake users`);
    } else {
      // Smooth transition
      this.smoothBoostTransition(oldBoost, newBoost);
    }
  }
  
  smoothBoostTransition(from, to) {
    const steps = 8;
    const stepValue = (to - from) / steps;
    let current = from;
    let step = 0;
    
    const transition = setInterval(() => {
      current += stepValue;
      this.fakeBoost = Math.round(current);
      this.updateDisplayedCount();
      step++;
      
      if (step >= steps) {
        this.fakeBoost = to;
        this.updateDisplayedCount();
        clearInterval(transition);
        console.log(`User count smooth transition complete: ${from} → ${to} fake users`);
      }
    }, 2000); // Change every 2 seconds for smooth effect
  }
  
  initFirebase() {
    try {
      // Initialize Firebase
      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }
      
      this.database = firebase.database();
      this.usersRef = this.database.ref('activeUsers');
      this.userRef = this.usersRef.child(this.userId);
      
      this.setupUserPresence();
      this.listenToUserCount();
      
    } catch (error) {
      console.log('Firebase not configured yet. Using fallback counter.');
      this.fallbackCounter();
    }
  }
  
  setupUserPresence() {
    // Set user as online
    this.userRef.set({
      online: true,
      timestamp: firebase.database.ServerValue.TIMESTAMP,
      userAgent: navigator.userAgent.substring(0, 100) // First 100 chars for privacy
    });
    
    // Remove user when they disconnect
    this.userRef.onDisconnect().remove();
    
    // Handle page visibility changes
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.userRef.set({
          online: false,
          timestamp: firebase.database.ServerValue.TIMESTAMP
        });
      } else {
        this.userRef.set({
          online: true,
          timestamp: firebase.database.ServerValue.TIMESTAMP,
          userAgent: navigator.userAgent.substring(0, 100)
        });
      }
    });
    
    // Clean up when page unloads
    window.addEventListener('beforeunload', () => {
      this.userRef.remove();
    });
  }
  
  listenToUserCount() {
    this.usersRef.on('value', (snapshot) => {
      let activeCount = 0;
      const currentTime = Date.now();
      
      snapshot.forEach((userSnapshot) => {
        const userData = userSnapshot.val();
        if (userData.online) {
          // Only count users active in the last 5 minutes
          const userTime = userData.timestamp || 0;
          if (currentTime - userTime < 300000) { // 5 minutes
            activeCount++;
          }
        }
      });
      
      // Ensure minimum of 1 user (the current user)
      this.realUserCount = Math.max(1, activeCount);
      this.updateDisplayedCount();
    });
    
    // Clean up old/inactive users every 2 minutes
    setInterval(() => {
      this.cleanupInactiveUsers();
    }, 120000);
  }
  
  cleanupInactiveUsers() {
    const currentTime = Date.now();
    this.usersRef.once('value', (snapshot) => {
      snapshot.forEach((userSnapshot) => {
        const userData = userSnapshot.val();
        const userTime = userData.timestamp || 0;
        
        // Remove users inactive for more than 10 minutes
        if (currentTime - userTime > 600000) {
          userSnapshot.ref.remove();
        }
      });
    });
  }
  
  updateDisplayedCount() {
    const totalCount = this.realUserCount + this.fakeBoost;
    const currentDisplayed = parseInt(this.countElement.textContent) || 0;
    
    if (currentDisplayed !== totalCount) {
      this.animateCountChange(currentDisplayed, totalCount);
    }
  }
  
  animateCountChange(from, to) {
    const steps = 10;
    const stepValue = (to - from) / steps;
    let current = from;
    let step = 0;
    
    const animation = setInterval(() => {
      current += stepValue;
      this.countElement.textContent = Math.round(current);
      step++;
      
      if (step >= steps) {
        this.countElement.textContent = to;
        clearInterval(animation);
      }
    }, 50);
  }
  
  // Fallback for when Firebase isn't configured
  fallbackCounter() {
    console.log('Using fallback counter - please configure Firebase for real-time users');
    this.realUserCount = 1;
    this.updateDisplayedCount();
    
    // Simulate real user changes occasionally
    setInterval(() => {
      const change = Math.random() > 0.7 ? (Math.random() > 0.5 ? 1 : -1) : 0;
      this.realUserCount = Math.max(1, Math.min(5, this.realUserCount + change));
      this.updateDisplayedCount();
    }, 15000);
  }
  
  // Public method to get current count
  getCurrentCount() {
    return parseInt(this.countElement.textContent) || 0;
  }
  
  // Debug method to see breakdown
  getCountBreakdown() {
    return {
      total: this.getCurrentCount(),
      real: this.realUserCount,
      fake: this.fakeBoost
    };
  }
}

// Initialize the quiz app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new QuizApp();
  new RealTimeUsersCounter();
});
