import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

interface PrimaryButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isLoading?: boolean;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  onClick,
  isLoading = false,
  children,
  className,
  type = "button",
}) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={isLoading}
      className={cn(
        "w-full font-semibold py-3 text-base", // Adjusted padding and text size for better feel
        // Shadcn Button variant="default" uses primary colors by default from Tailwind config
        className
      )}
      variant="default"
    >
      {isLoading ? (
        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
      ) : null}
      {children}
    </Button>
  );
};

export default PrimaryButton;
