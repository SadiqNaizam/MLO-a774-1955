import React from 'react';
import { cn } from '@/lib/utils';

interface FooterTextProps {
  className?: string;
}

const FooterText: React.FC<FooterTextProps> = ({ className }) => {
  return (
    <p className={cn(
      "text-sm text-muted-foreground text-center",
      className
    )}>
      or,{' '}
      <a 
        href="#" 
        onClick={(e) => { e.preventDefault(); console.log('Navigate to sign up'); }}
        className="font-medium text-primary hover:underline focus:outline-none focus:ring-1 focus:ring-ring rounded-sm"
      >
        sign up
      </a>
    </p>
  );
};

export default FooterText;
