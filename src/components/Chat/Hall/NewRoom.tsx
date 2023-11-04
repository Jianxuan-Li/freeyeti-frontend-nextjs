import React from 'react';
import { createChatRoom } from '@/modules/chat/requests';

type FormItemProps = {
  label: string;
  name: string;
};

function FormItem({ label, name }: FormItemProps) {
  return (
    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/3">
        <label
          className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          htmlFor={`form_input_${name}`}
        >
          {label}
        </label>
      </div>
      <div className="md:w-2/3">
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
          type="text"
          name={name}
          id={`form_input_${name}`}
        />
      </div>
    </div>
  );
}

type Props = {};

export default function NewRoom({}: Props) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const slug = formData.get('slug') as string;
    const passcode = formData.get('passcode') as string;
    const is_private = formData.get('is_private') === 'true';
    createChatRoom({ name, slug, passcode, is_private });
  };

  return (
    <div>
      <h2>Create new room</h2>
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        <FormItem label="Room name" name="name" />
        <FormItem label="Slug" name="slug" />
        <FormItem label="Passcode" name="passcode" />
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="is_private"
              type="checkbox"
              name="is_private"
              value="true"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            />
          </div>
          <label
            htmlFor="is_private"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Private
          </label>
        </div>
        <div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
