// components/StreamingList.tsx
import React, { useMemo } from 'react';
import Card from './Card';
import songsData from '../data/songs.json';

const StreamingList: React.FC = () => {
  const sortedSongs = useMemo(
    () => [...songsData].sort((a, b) => a.rank - b.rank),
    [],
  );

  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {sortedSongs.map((song) => (
        <Card
          key={song.id}
          title={song.title}
          artist={song.artist}
          albumArt={song.albumArt}
          rank={song.rank}
        />
      ))}
    </div>
  );
};

export default StreamingList;
