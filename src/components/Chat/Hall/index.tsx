import React from 'react';
import { AuthContext } from '@/context/AuthContext';
import { logout } from '@/modules/auth/logout';
import Contacts from './Contacts';

type Props = {};

export default function Hall({}: Props) {
  const { user, setUser } = React.useContext(AuthContext);

  const onRoomCreated = () => {
    getChatRooms().then((res) => {
      setRooms(res.data.data);
    });
  };

  return (
    <div className="container mx-auto px-4 flex flex-col gap-1">
      <h2>Yechat</h2>
      <div>
        {user?.name},
        <button
          onClick={async () => {
            logout();
            setUser(null);
          }}
        >
          Logout
        </button>
      </div>
      <NewRoom onCreated={onRoomCreated} />
      <div className="grid grid-cols-4 gap-4">
        {rooms.map((room) => (
          <RoomCard key={`room_${room.slug}`} room={room} />
        ))}
      </div>
    </div>
  );
}
