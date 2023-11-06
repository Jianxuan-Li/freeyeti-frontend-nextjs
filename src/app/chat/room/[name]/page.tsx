'use client';
import React, { useEffect, useState } from 'react';
import RoomApp from '@/components/Chat/Room';
import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import { getChatRoom, askJoinChatRoom } from '@/modules/chat/requests';

type Props = {};

export default function RoomPage({}: Props) {
  const params = useParams();

  const [loading, setLoading] = useState(true);
  const [slug, setSlug] = useState('');
  const [needPasscode, setNeedPasscode] = useState(false);

  useEffect(() => {
    if (!params.name || typeof params.name !== 'string') {
      return notFound();
    }

    setSlug(params.name);
    getChatRoom(params.name).then((roomInfo) => {
      setNeedPasscode(roomInfo.is_private);
      setLoading(false);
    });
  }, [params.name]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleJoin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const passcode = e.currentTarget.passcode.value;
    const res = await askJoinChatRoom(slug, passcode);
    if (typeof res !== 'string') {
      setNeedPasscode(false);
    }
  };

  if (needPasscode) {
    return (
      <div className="container mx-auto px-4">
        <form onSubmit={handleJoin}>
          <input type="password" name="passcode" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4">
      <RoomApp slug={slug} />
    </div>
  );
}
