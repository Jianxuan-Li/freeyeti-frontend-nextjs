import React from 'react';
import RoomCard from './RoomCard';

type Props = {};

export default function Hall({}: Props) {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-4 gap-4">
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
      </div>
    </div>
  );
}
