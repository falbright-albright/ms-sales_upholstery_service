"use client";

import { useState } from "react";
import { videoItems } from "@/lib/gallery-data";
import { PlayIcon } from "@/components/ui/Icons";
import VideoModal from "./VideoModal";

/**
 * Real project video clips. No poster/thumbnail frame is generated
 * (no video-processing tool available at build time) — each card is a
 * clearly-labelled "play" tile rather than a static preview frame, so
 * nothing implies a still image that isn't actually from the clip.
 */
export default function VideoGallery() {
  const [openId, setOpenId] = useState<string | null>(null);
  const activeVideo = videoItems.find((v) => v.id === openId) ?? null;

  return (
    <div>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {videoItems.map((video) => (
          <li key={video.id}>
            <button
              type="button"
              onClick={() => setOpenId(video.id)}
              className="group relative flex aspect-[4/3] w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-md border border-tan-light bg-gradient-to-br from-brown to-brown-dark texture-weave text-cream"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-cream/90 text-2xl text-brown transition-transform group-hover:scale-110">
                <PlayIcon />
              </span>
              <span className="px-4 text-center text-sm font-semibold">{video.title}</span>
              <span className="absolute left-2 top-2 rounded-sm bg-charcoal/70 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide">
                Video
              </span>
            </button>
          </li>
        ))}
      </ul>

      {activeVideo ? (
        <VideoModal video={activeVideo} onClose={() => setOpenId(null)} />
      ) : null}
    </div>
  );
}
