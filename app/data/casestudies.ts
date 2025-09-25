// app/data/casestudies.ts
export type CaseStudy = {
  slug: string;
  title: string;
  description: string;

  imageUrl: string;
  content: string;
};

export const caseStudies: CaseStudy[] = [
  {
  slug: "heavy-equipment-management",
  title: "Heavy Equipment Management",
 description: "Automated invoice, PO, and compliance management for a leading heavy equipment supplier, reducing errors and improving efficiency across multiple regions.",
    imageUrl: "/case1.png",
  content: `
  
## Client Background
Our client is a leading heavy equipment supplier specializing in forklifts,
construction machinery, and industrial vehicles. They serve multiple industries
including logistics, manufacturing, and warehousing, with a growing fleet of
equipment and a wide supplier/vendor base.

With operations spread across multiple regions, the company faced challenges in
managing purchase orders, invoices, and equipment maintenance
documentation efficiently.

## Challenges
The client’s existing manual process led to:

- **Document Overload**: Large volumes of invoices, POs, service reports, and
compliance documents for forklifts and machinery.
- **Delayed Approvals**: Manual verification and approvals caused delays in
equipment delivery and payments.
- **Data Inaccuracy**: Errors in invoice matching and duplicate entries increased
reconciliation effort.
- **Compliance Risk**: Safety certificates, insurance papers, and maintenance
logs were often misplaced.
- **Limited Visibility**: Management lacked real-time insights into equipment
costs, supplier performance, and outstanding payments.

## Solution – APPortalUploads Implementation
We implemented APPortalUploads, our intelligent document management and
accounts payable automation solution, tailored for the heavy equipment industry.

### Key Features Deployed
1. **Automated Invoice Processing**
   - Extracted invoice data from suppliers (Heavy equipment like forklifts,
     spare parts, rentals).
   - Auto-matched invoices with purchase orders and delivery notes.

2. **Purchase Order Digitization**
   - Enabled centralized upload of service POs, rental contracts, and
     maintenance orders.
   - Automated approval workflows for faster processing.

3. **Compliance Document Management**
   - Centralized repository for safety certificates, insurance papers, AMC
     contracts for forklifts & heavy machines.
   - Automatic alerts for renewal deadlines.

4. **Analytics & Reporting**
   - Real-time dashboards on equipment costs, supplier payments, and
     outstanding invoices.
   - Vendor performance monitoring (on-time delivery, dispute ratio).

5. **Integration**
   - Seamless integration with the client’s ERP system (SAP/Oracle/Other).
   - Ensured financial and inventory data was always in sync.

## Business Impact
- **70% Faster Invoice Cycle**: Reduced invoice approval and payment
  processing time from weeks to days.
- **Error Reduction**: Minimized human errors in invoice-to-PO matching,
  improving vendor trust.
- **Compliance Made Easy**: No missed renewals of safety/insurance certificates
  for forklifts & equipment.
- **Cost Savings**: Lowered operational costs by reducing manual effort and
  avoiding late payment penalties.
- **Improved Visibility**: Real-time reporting allowed management to optimize
  equipment procurement and vendor negotiations.

## Outcome
Within 6 weeks of APPortalUploads implementation, the client achieved:

- Improved cash flow management.
- Streamlined document handling across procurement, finance, and operations.
- Stronger vendor relationships due to timely payments.
- A scalable solution capable of supporting future equipment expansions.

## Conclusion
APPortalUploads transformed the client’s heavy equipment and forklift operations
by automating accounts payable and compliance workflows. The solution not only
reduced operational bottlenecks but also provided data-driven insights that
empowered management to make strategic decisions.
    `,
},

   {
  slug: "global-manufacturer-ap-optimization",
  title: "Global Manufacturer Eliminates AP Errors and Boosts Scalability with APPortaluploads",
  description: "Discover how a global manufacturer solved AP issues like file mismatches, duplicates, and PO errors using APPortaluploads’ automated solution.",
  
  imageUrl: "/case2.png",
  content: `
## Scaling Smarter: How a Global Manufacturer Optimized AP and Strengthened Vendor Trust
### Globoal Manufacturer Streamlines Accounts Payable and Strengthens Vendor Confidence Using APPortaluploads

## Client Overview
The client is one of the world’s largest manufacturers of electric lift trucks. The company, headquartered in New Bremen, Ohio, employs over 20,000 people and generated $5.29 billion in revenue in fiscal year 2024. Operations span the globe, but back-office systems, especially Accounts Payable (AP), faced challenges many large manufacturers can relate to. As the business grew, so did the number of invoices, but the existing process couldn’t keep up.

## Business Challenges
The manufacturer’s AP team processes thousands of invoices every month. It only takes a few broken links in that chain to cause costly delays. Unfortunately, that’s precisely what was happening.

### File Format and Template Error
- Vendors often submitted invoices in Excel, but not all followed the expected format.
- Some critical fields, like the PO number, were left out.
- Out of 1,200 invoices in a given month, roughly 150 failed to upload due to mismatches in file structure.

### Duplicate Invoice Numbers
- Another persistent issue was duplicate submissions from different vendors using the same number or someone uploading the same invoice twice.
- 3–5% of invoices were rejected each week due to duplication.
- These errors triggered payment holds and vendor escalations.

### Invalid Vendor Codes or PO Mismatches
- Sometimes, the vendor code listed on the invoice did not exist in the ERP system or couldn’t be matched.
- Nearly 20% of uploads were flagged in one quarter due to invalid or missing POs, forcing the finance team into manual reconciliations, invoice by invoice.

### Large File Failures and System Crashes
- The manufacturer’s ERP system couldn’t handle bulk uploads.
- The system crashed mid-process when the team tried to upload 10,000 invoices or more.
- Each retry cost the team an extra 4–6 hours.
- Sometimes, deadlines for payment runs were missed entirely, with late fees following.

### Human Errors in Upload Preparation
- Human errors, such as misplaced decimals, could transform a $1,200 payment into $120,000.
- These errors led to at least two or three primary correction cycles per month.
- Reversals, reconciliation, and audit reviews became routine.

 The cost of doing nothing wasn’t just operational. It affected several other aspects of the business:
- Cash flow disruption delayed vendor payments by 2–3 days, straining supplier relationships.
- Extra time spent on manual rework by finance and AP resources added to overall operational cost.
- There is a high risk of vendors losing confidence in the company’s reliability.
- As invoice volume grows, errors will likely get compounded, impacting the client’sability to scale.

## Our Solution and Approach
The manufacturerneeded a system that could process high invoice volumes without hassle. One that eliminated format mismatches, caught duplicates, validated vendor data, and protected against human error. They chose APPU, an automation solution built for finance teams needing speed and precision. Designed to eliminate common invoice processing mistakes such as file format mismatches, duplicate invoice submissions, invalid vendor codes, and PO mismatches, APPU: 

### Focused on Accuracy First
- APPU was configured to reject any invoice with a missing PO, invalid vendor code, or duplicate number before it entered the ERP system.
- Intelligent validations created a clean data pipeline, reducing rework and helping the finance team trust the system.

### Scaled Without Breaking
- The platform was tested with large batch uploads from day one.
- APPU could handle over 1,000 invoice lines per batch, something their ERP system had consistently failed to do.
- Uploads that once took hours are now completed in minutes.

### Protected Vendor Relationships
- Preventable upload errors no longer delay payment runs.
- Vendors received their payments on time, without escalations or endless email threads, rebuilding trust and enabling the AP team to have better conversations with vendors.

### Strengthened Controls and Compliance
Duplicate invoices and decimal misplacements were automatically flagged by APPU. With a tighter audit trail and fewer errors slipping through, the finance team felt more confident during internal reviews and external audits.

### Improved Efficiency and Focus
- Manual reconciliation work was significantly reduced.
- Finance staff no longer had to chase formatting errors or look up missing codes.
- The team could finally shift focus toward higher-level analysis and decision-making.

## Business Benefits
The manufacturer’s transformation shows what happens when a company decides to streamline operational challenges. By replacing manual invoice handling with intelligent automation, they eliminated the root causes of delays, errors, and vendor dissatisfaction.
What used to be recurring bottlenecks, format mismatches, system crashes, and duplicate payments are now nonexistent. The AP team spends less time fixing problems and more time driving value. As invoice volumes grow, the system grows without added strain or cost.

The numbers are proof of this success story:
- 99.99% upload accuracy
- Duplicate errors dropped to near zero
- Seamless handling of invoice batches of 1000+ lines

However, the most significant benefit was the shift in mindset. Instead of working around system flaws, the client’sfinance team could now build around a trusted process. At the same time, while many automation tools feel like heavy lifts, APPU worked within the client’sexisting ERP setup. It didn’t require a complete overhaul or months of onboarding. The finance team had access to clear dashboards, useful alerts, and minimal training requirements.

## Follow the Model with APPortaluploads
What the clientfaced wasn’t unusual. But how they responded set them apart. Instead of adding more people to the problem, they addressed the root causes: errors, delays, and system fragility. They prioritized accuracy, speed, and vendor experience. And they chose a solution that not only fixed today’s problems but also prepared them for growth.

If your business is facing similar problems, we can help! At APPortaluploads, we understand that AP isn’t just a back-office function. It’s where relationships with suppliers are built and cash flow is managed. When done right, it can create a real competitive advantage.

Speak to our experts today to follow the model and run your AP function confidently!
`
},

  {
    slug: "digital-transformation-billing",
    title: "Digital Transformation in Billing",
    description:
      "Implemented digital invoice workflow to save time and enhance transparency.",
    
    imageUrl: "/digital.png",
    content: `
## About this project
We digitized the billing process.  

### Key Results:
- Reduced processing time by 40%  
- Better visibility & audit trails  
- Enhanced transparency  
    `,
  },
  {
    slug: "secure-data-integration",
    title: "Secure Data Integration",
    description:
      "Enhanced security protocols to protect sensitive financial data.",
    
    imageUrl: "/secure.png",
    content: `
## About this project
We implemented secure integration of financial data.  

### Key Results:
- Stronger encryption  
- Reduced data risks  
- Compliance with security standards  
    `,
  },
];
