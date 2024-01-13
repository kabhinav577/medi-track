'use client';

import React from 'react';

interface MenuItemProps {
  onClick: () => void;
  label: string;
  href?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label, href }) => {
  return (
    <div
      onClick={onClick}
      className={`p-2 rounded-md text-gray-700 hover:bg-neutral-50 transition font-semibold cursor-pointer`}
    >
      {label}
    </div>
  );
};

export default MenuItem;
