'use client';

import React from 'react';
import Hall from '@/components/Chat/Hall';
import AuthedPage from '@/modules/auth/AuthedPage';

type Props = {};

const ChatPage = (props: Props) => {
  return (
    <div className="container mx-auto px-4">
      <Hall />
    </div>
  );
};

export default function AuthedChatPage({}: Props) {
  return (
    <AuthedPage>
      <ChatPage />
    </AuthedPage>
  );
}
