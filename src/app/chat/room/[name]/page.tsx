'use client';
import React from 'react';
import Room from '@/components/Chat/Room';
import { useParams } from 'next/navigation';

type Props = {};

export default function RoomPage({}: Props) {
  const params = useParams();

  if (params.name !== 'room1') {
    return (
      <div className="container mx-auto text-center">
        <div>Room not found.</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4">
      <Room name={params.name} />
    </div>
  );
}
