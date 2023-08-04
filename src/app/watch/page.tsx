'use client';
import React from 'react';
import AuthProvider, { AuthContext } from '@/context/AuthContext';
import WatchPage from '@/components/Watch';
import LoginForm from '@/components/Login/LoginForm';

type Props = {};

function Page({}: Props) {
  const { user, authLoading } = React.useContext(AuthContext);

  if (authLoading) {
    return <div className="container mx-auto text-center"><div>Loading...</div></div>;
  }

  if (!user) {
    return <LoginForm />;
  }

  return <WatchPage />;
}

export default function AuthedPage({}: Props) {
  return (
    <AuthProvider>
      <Page />
    </AuthProvider>
  );
}
