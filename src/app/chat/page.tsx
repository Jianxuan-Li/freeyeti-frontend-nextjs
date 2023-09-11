'use client';

import React, { useState, useEffect } from 'react';
import Hall from '@/components/Chat/Hall';
import AuthProvider, { AuthContext } from '@/context/AuthContext';
import LoginForm from '@/components/Login/LoginForm';

type Props = {};

const ChatPage = (props: Props) => {
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

  return (
    <div className="container mx-auto px-4">
      <Hall />
    </div>
  );
};

export default function AuthedPage({}: Props) {
  return (
    <AuthProvider>
      <ChatPage />
    </AuthProvider>
  );
}
