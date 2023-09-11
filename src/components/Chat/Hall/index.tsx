import React from 'react';
import RoomCard from './RoomCard';

type Props = {};

const rooms = [
  { name: 'room1', host: 'host1' },
  { name: 'room1', host: 'host1' },
  { name: 'room1', host: 'host1' },
  { name: 'room1', host: 'host1' },
  { name: 'room1', host: 'host1' },
  { name: 'room1', host: 'host1' },
];

export default function Hall({}: Props) {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-4 gap-4">
        {rooms.map((room) => (
          <RoomCard key={room.name} name={room.name} host={room.host} />
        ))}
      </div>
    </div>
  );
}
