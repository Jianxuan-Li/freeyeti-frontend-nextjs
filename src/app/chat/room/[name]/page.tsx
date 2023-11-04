'use client';
import React from 'react';
import Room from '@/components/Chat/Room';
import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';

type Props = {};

export default function RoomPage({}: Props) {
  const params = useParams();

  if (
    !params.name ||
    typeof params.name !== 'string' ||
    params.name.length === 0
  ) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-4">
      <Room name={params.name} />
    </div>
  );
}
