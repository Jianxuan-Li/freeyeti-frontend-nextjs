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
  message: (e: Message) => void;
}

// Interface for when clients emit events to the server.
export interface ClientToServerEvents {
  message: (e: Message) => void;
}

type Props = {};

const socket: Socket<ServerToClientEvents, ClientToServerEvents> =
  io(CHAT_SERVER);

const ChatPage = (props: Props) => {
  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to server.');
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from server.');
      setIsConnected(false);
    });

    socket.on('message', (e: Message) => {
      console.log(e);
      const chatLog = document.getElementById('chat-log');
      if (chatLog) {
        chatLog.innerHTML += `${e.timeSent} ${e.message}\n`;
      }
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('message');
    };
  }, []);

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Sending message...');
    socket.emit('message', {
      timeSent: new Date(Date.now()).toLocaleString('en-US'),
      message: e.target[0].value
    });
    e.target[0].value = '';
  };

  return (
    <div>
      <textarea
        id="chat-log"
        cols={100}
        rows={20}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <form id="chat-form" onSubmit={sendMessage}>
        <div className="flex">
          <input
            id="chat-message-input"
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <input
            id="chat-message-submit"
            type="submit"
            value="Send"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          />
        </div>
      </form>
      <span>{isConnected ? 'Connected' : 'Not connected'}</span>
    </div>
  );
};

export default ChatPage;
