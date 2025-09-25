// app/Invoicetracking/layout.tsx
export const metadata = {
  title: "APPortal Uploads :: Reporting Suite",
  description:
    "Explore the Reporting Suite with interactive invoice, KPI, and payment reports for better business insights.",
};

export default function InvoicetrackingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>; // simply render the page inside
}
