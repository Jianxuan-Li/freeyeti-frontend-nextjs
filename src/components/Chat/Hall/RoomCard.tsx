import React from 'react';
import Link from 'next/link';
import { LockClosedIcon } from '@heroicons/react/24/outline';
import { Room } from '@/modules/chat/types';

type Props = {
  room: Room;
};

export default function RoomCard({ room }: Props) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white inline-flex items-center">
            #{room.name}
            {room.is_private && (
              <LockClosedIcon className="h-6 w-6 text-blue-500" />
            )}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Host:{' '}
          <span className="font-medium text-gray-900 dark:text-white">
            {room.user.first_name}
          </span>
        </p>
        <Link
          href={`/chat/room/${room.slug}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Join
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
