// components/Card.tsx
import React from 'react';
import Image from 'next/image';

interface CardProps {
  title: string;
  artist: string;
  albumArt: string;
  rank: number;
}

const Card: React.FC<CardProps> = ({ title, artist, albumArt, rank }) => {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/10 p-5 shadow-md transition-transform duration-200 hover:-translate-y-1 hover:border-pastelPink/60 hover:shadow-xl">
      <div className="relative h-44 w-full overflow-hidden rounded-xl">
        <Image
          src={albumArt}
          alt={`${title} 앨범 아트워크`}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
          sizes="(min-width: 1024px) 280px, (min-width: 768px) 45vw, 90vw"
          priority={rank <= 3}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-black/50 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          #{rank}
        </span>
      </div>
      <div className="mt-4 flex flex-col gap-1">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-slate-300">{artist}</p>
      </div>
      <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
        <span>스트리밍 집중</span>
        <span className="rounded-full bg-pastelPurple/30 px-2 py-1 text-[10px] uppercase tracking-wide text-white">Hot</span>
      </div>
    </article>
  );
};

export default Card;
