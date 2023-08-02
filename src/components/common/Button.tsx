import React from 'react';

type Props = {
  type?: 'primary' | 'danger' | 'success' | 'warning';
  children: React.ReactNode;
  onClick: () => void;
};

const classPrimary =
  'text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2';

const classDanger =
  'text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2';
export default function Button({ children, onClick, type }: Props) {
  let classType: string = classPrimary;
  switch (type) {
    case 'primary':
      classType = classPrimary;
      break;
    case 'danger':
      classType = classDanger;
      break;
    case 'success':
      break;
    case 'warning':
      break;
    default:
      classType = classPrimary;
      break;
  }

  return (
    <button type="button" className={classType} onClick={onClick}>
      {children}
    </button>
  );
}
