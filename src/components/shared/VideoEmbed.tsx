"use client";

import { useState } from "react";
import { Play } from "lucide-react";

interface VideoEmbedProps {
  videoId: string;
  title: string;
}

export function VideoEmbed({ videoId, title }: VideoEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-sage-100 shadow-md">
      {!isPlaying ? (
        <button
          onClick={() => setIsPlaying(true)}
          className="absolute inset-0 w-full h-full group"
          aria-label={`Play video: ${title}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={thumbnailUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-charcoal/20 flex items-center justify-center transition-colors group-hover:bg-charcoal/10">
            <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
              <Play className="w-6 h-6 text-charcoal ml-1" />
            </div>
          </div>
        </button>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full border-0"
        />
      )}
    </div>
  );
}
