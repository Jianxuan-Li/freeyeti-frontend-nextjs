import React from 'react';
import { AuthContext } from '@/context/AuthContext';
import { logout } from '@/modules/auth/logout';
import Contacts from './Contacts';

type Props = {};

export default function Hall({}: Props) {
  const { user, setUser } = React.useContext(AuthContext);

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

      <div className="flex flex-row gap-1">
        {/* left contacts menu */}
        <div className="basis-3/12">
          <Contacts />
        </div>

        {/* right chat room */}
        <div className="basis-9/12">
          <div>Chat room</div>
        </div>
      </div>
    </div>
  );
}
