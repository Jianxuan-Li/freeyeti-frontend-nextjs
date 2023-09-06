'use client';

import React, { useState, useEffect } from 'react';
import Room from '@/components/Chat/Room';
import Hall from '@/components/Chat/Hall';
import Header from '@/components/Chat/Header';

type Props = {};

const ChatPage = (props: Props) => {
  return (
    <div>
      <Header />
      <div className="mt-6">
        <Hall />
      </div>
      <Room />
    </div>
  );
};

export default ChatPage;
