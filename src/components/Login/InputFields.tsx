import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface InputFieldsProps {
  username: string;
  onUsernameChange: (value: string) => void;
  password: string;
  onPasswordChange: (value: string) => void;
  className?: string;
}

const InputFields: React.FC<InputFieldsProps> = ({
  username,
  onUsernameChange,
  password,
  onPasswordChange,
  className,
}) => {
  const handleUsernameInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onUsernameChange(event.target.value);
  };

  const handlePasswordInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onPasswordChange(event.target.value);
  };

  return (
    <div className={cn("w-full space-y-4", className)}>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="username" className="text-card-foreground text-left text-sm font-medium">
          Username
        </Label>
        <Input
          type="text"
          id="username"
          placeholder="Enter your username"
          value={username}
          onChange={handleUsernameInputChange}
          className="bg-card border-border placeholder:text-muted-foreground text-card-foreground focus-visible:ring-ring"
          autoComplete="username"
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="password" className="text-card-foreground text-left text-sm font-medium">
          Password
        </Label>
        <Input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={handlePasswordInputChange}
          className="bg-card border-border placeholder:text-muted-foreground text-card-foreground focus-visible:ring-ring"
          autoComplete="current-password"
        />
      </div>
    </div>
  );
};

export default InputFields;
