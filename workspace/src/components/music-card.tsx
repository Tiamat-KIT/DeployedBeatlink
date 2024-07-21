"use client";

import React from "react";
interface MusicCardProps {
  id: string,
  isLoading: boolean
}

const MusicCard: React.FC<MusicCardProps> = ({id,isLoading}) => {

  return (
    <div className="flex justify-center items-center mb-4">

      {!isLoading ? <iframe
        className="rounded-lg"
        style={{ borderRadius: '12px' }}
        src={`https://open.spotify.com/embed/track/${id}?utm_source=generator`}
        width="90%"
        height="170"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        // loading="lazy"
        title="Spotify Embed"
      ></iframe> : "Loading..."}
    </div>
  );
}

export default MusicCard;
