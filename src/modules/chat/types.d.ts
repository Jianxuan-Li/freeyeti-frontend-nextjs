export type ChatRoomUser = {
  id: number;
  first_name: string;
  last_name: string;
};

export type Room = {
  id: number;
  name: string;
  slug: string;
  user: ChatRoomUser;
  is_private: boolean;
  created_at: string;
  updated_at: string;
};
