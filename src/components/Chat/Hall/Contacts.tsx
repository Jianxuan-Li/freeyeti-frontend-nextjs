import React from 'react';
import { getContacts } from '@/modules/chat/requests';
import { ChatRoomUser } from '@/modules/chat/types';

type Props = {};

export default function Contacts({}: Props) {
  const [contacts, setContacts] = React.useState<ChatRoomUser[]>([]);
  React.useEffect(() => {
    getContacts().then((res) => {
      setContacts(res.data.data);
    });
  }, []);

  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>{contact.first_name}</li>
        ))}
      </ul>
    </div>
  );
}
