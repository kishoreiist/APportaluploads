// components/ui/cards.tsx
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string; // <-- add this
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`bg-white rounded-xl shadow-lg ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }: CardProps) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}
