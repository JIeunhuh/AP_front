// components/Card.tsx
import React from 'react';

const Card: React.FC<{ title: string; artist: string; albumArt: string }> = ({ title, artist, albumArt }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img src={albumArt} alt={title} className="w-full h-48 object-cover rounded" />
      <h3 className="text-lg font-semibold mt-2">{title}</h3>
      <p className="text-gray-600">{artist}</p>
    </div>
  );
};

export default Card;