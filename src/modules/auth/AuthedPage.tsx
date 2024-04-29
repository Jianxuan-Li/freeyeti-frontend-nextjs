import React from 'react';
import AuthProvider, { AuthContext } from '@/context/AuthContext';
import LoginForm from '@/components/Login/LoginForm';

type Props = {
  children: React.ReactNode;
};

const AuthedPageNode = ({ children }: Props) => {
  const { user, authLoading } = React.useContext(AuthContext);

  if (authLoading) {
    return (
      <div className="container mx-auto text-center">
        <div>Loading...</div>
      </div>
    );
  }

  if (!user) {
    return <LoginForm />;
  }
  return <>{children}</>;
};

export default function AuthedPage({ children }: Props) {
  return (
    <AuthProvider>
      <AuthedPageNode>{children}</AuthedPageNode>
    </AuthProvider>
  );
}
