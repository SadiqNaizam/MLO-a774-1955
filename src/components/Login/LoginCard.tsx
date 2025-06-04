import React, { useState, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import InputFields from './InputFields';
import PrimaryButton from './PrimaryButton';
import FooterText from './FooterText';

interface LoginCardProps {
  className?: string;
}

const LoginCard: React.FC<LoginCardProps> = ({ className }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (username === 'admin' && password === 'password') {
      console.log('Login successful for:', username);
      // In a real app, you would redirect or update auth state here
    } else {
      setError('Invalid username or password. Please try again.');
      console.error('Login failed');
    }
    setIsLoading(false);
  }, [username, password]);

  return (
    <Card className={cn(
      "w-[300px] bg-card text-card-foreground rounded-lg shadow-xl",
      className
    )}>
      <CardHeader className="p-6 text-left">
        <CardTitle className="text-3xl font-bold text-card-foreground">Log in</CardTitle>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <form 
          onSubmit={(e) => { 
            e.preventDefault(); 
            handleLogin(); 
          }} 
          className="flex flex-col gap-6"
        >
          <InputFields
            username={username}
            onUsernameChange={setUsername}
            password={password}
            onPasswordChange={setPassword}
            className="w-full"
          />
          {error && (
            <p className="text-sm text-destructive text-center">{error}</p>
          )}
          <PrimaryButton
            type="submit"
            isLoading={isLoading}
            className="w-full"
          >
            Log in
          </PrimaryButton>
          <FooterText />
        </form>
      </CardContent>
    </Card>
  );
};

export default LoginCard;
