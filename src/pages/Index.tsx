import React from 'react';
import LoginCard from '../components/Login/LoginCard';

/**
 * LoginPage is the primary page for user authentication.
 * It sets up the full-screen, centered layout and renders the LoginCard component.
 * This component corresponds to the 'LoginPage' in the component hierarchy and
 * directly implements the 'LoginLayout' structural requirements for this specific view,
 * ensuring the LoginCard is centered on the page against the application background.
 */
const LoginPage: React.FC = () => {
  return (
    <main 
      className="flex items-center justify-center h-screen bg-background"
      role="main" // Enhances accessibility by defining the main content landmark
    >
      <LoginCard />
    </main>
  );
};

export default LoginPage;
