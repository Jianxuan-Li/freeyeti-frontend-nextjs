'use client';

import React, { useState, useEffect, useRef } from 'react';

type Props = {
  slug: string;
};

const Room = ({ slug }: Props) => {
  const [isConnected, setIsConnected] = useState(false);
  const [clientId, setClientId] = useState('');
  const ws = useRef<WebSocket | null>();

  useEffect(() => {
    try {
      const chatSocket: WebSocket = new WebSocket(
        CHAT_SERVER.replace('http', 'ws') + CHAT_SERVER_PATH
      );

      if (!chatSocket) return;

      chatSocket.onopen = () => {
        console.log('Connected to server.');
        setIsConnected(true);
      };

      chatSocket.onclose = () => {
        console.log('Disconnected from server.');
        setIsConnected(false);
      };

      chatSocket.onmessage = (e: MessageEvent) => {
        if (!e.data) return;
        const c = JSON.parse(e.data);
        console.log('Received message from server: ', c);

        if (c.event === 'message') {
          if (!c.data || !c.data.timeSent || !c.data.message) return;
          const chatLog = document.getElementById('chat-log');
          if (!chatLog) return;
          chatLog.innerHTML += `${c.data.clientId} ${c.data.timeSent} ${c.data.message}\n`;
        } else if (c.event === 'connection') {
          if (!c.data || !c.data.id) return;
          setClientId(c.data.id);
        }
      };

      ws.current = chatSocket;

      return () => {
        chatSocket.close();
      };
    } catch (e) {
      console.log(e);
    }
  }, []);

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Sending message...');
    ws &&
      ws.current &&
      ws.current.send(
        JSON.stringify({
          event: 'message',
          data: {
            timeSent: new Date(Date.now()).toLocaleString('en-US'),
            message: e.target[0].value,
            clientId: clientId
          }
        })
      );
    e.target[0].value = '';
  };

  return (
    <div>
      {slug}
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

export default Room;
