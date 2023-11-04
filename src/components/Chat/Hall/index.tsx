import React from 'react';
import { AuthContext } from '@/context/AuthContext';
import { logout } from '@/modules/auth/logout';
import RoomCard from './RoomCard';
import NewRoom from './NewRoom';
import { getChatRooms } from '@/modules/chat/requests';

type Props = {};

/*
{
    "id": 1,
    "name": "gg",
    "slug": "ee",
    "user": {
        "id": 1,
        "first_name": "Jack",
        "last_name": "Li"
    },
    "is_private": false,
    "created_at": "2023-11-04T21:35:30.795825Z",
    "updated_at": "2023-11-04T21:35:30.795860Z"
}
*/

type User = {
  id: number;
  first_name: string;
  last_name: string;
};

type Room = {
  id: number;
  name: string;
  slug: string;
  user: User;
  is_private: boolean;
  created_at: string;
  updated_at: string;
};

export default function Hall({}: Props) {
  const { user, setUser } = React.useContext(AuthContext);
  const [rooms, setRooms] = React.useState<Room[]>([]);

  React.useEffect(() => {
    getChatRooms().then((res) => {
      setRooms(res.data.data);
    });
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h2>Hall</h2>
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
      <NewRoom />
      <div className="grid grid-cols-4 gap-4">
        {rooms.map((room) => (
          <RoomCard
            key={room.slug}
            name={room.name}
            host={room.user.first_name}
          />
        ))}
      </div>
    </div>
  );
}
