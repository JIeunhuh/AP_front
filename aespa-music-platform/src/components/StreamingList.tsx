// components/StreamingList.tsx
import React from 'react';
import Card from './Card'; // 카드 컴포넌트 import
import songsData from '../data/songs.json'; // JSON 데이터 import

const StreamingList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {songsData.map((song) => (
        <Card key={song.id} title={song.title} artist={song.artist} albumArt={song.albumArt} />
      ))}
    </div>
  );
};

export default StreamingList;