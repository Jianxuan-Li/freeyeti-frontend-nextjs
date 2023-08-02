'use client';

import React, { useState, useEffect } from 'react';
import { io, Socket } from 'socket.io-client';

export interface User {
  userId: string;
  userName: string;
}

export interface Message {
  timeSent: string;
  message: string;
}

// Interface for when server emits events to clients.
export interface ServerToClientEvents {
  chat: (e: Message) => void;
}

// Interface for when clients emit events to the server.
export interface ClientToServerEvents {
  chat: (e: Message) => void;
}

type Props = {};

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io('http://localhost:3000');

const ChatPage = (props: Props) => {
  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('chat');
    };
  }, []);

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    socket.emit('chat', {
      timeSent: new Date(Date.now()).toLocaleString('en-US'),
      message: e.target[0].value
    });
  };

  return <div>chat</div>;
};

export default ChatPage;
