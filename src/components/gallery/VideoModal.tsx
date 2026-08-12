"use client";

import { useEffect, useRef } from "react";
import { XIcon } from "@/components/ui/Icons";
import type { VideoItem } from "@/lib/gallery-data";

/**
 * Accessible modal video player. Mounted only while a video is
 * selected (see VideoGallery.tsx), so the ~2-12MB clip is never
 * fetched until the visitor actually opens it.
 */
export default function VideoModal({
  video,
  onClose,
}: {
  video: VideoItem;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<Element | null>(null);

  useEffect(() => {
    triggerRef.current = document.activeElement;
    closeButtonRef.current?.focus();
    document.body.style.overflow = "hidden";

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") return;

      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        'button, [href], video, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      if (triggerRef.current instanceof HTMLElement) {
        triggerRef.current.focus();
      }
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/80 p-4"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="video-modal-title"
        className="w-full max-w-2xl rounded-md border border-tan-light bg-paper p-4 shadow-xl"
      >
        <div className="mb-3 flex items-start justify-between gap-4">
          <div>
            <h2 id="video-modal-title" className="text-lg font-semibold text-charcoal">
              {video.title}
            </h2>
            <p className="text-sm text-ink-muted">{video.caption}</p>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close video"
            className="flex h-10 w-10 flex-none items-center justify-center rounded-full border border-tan-light text-lg text-brown hover:bg-tan-light"
          >
            <XIcon />
          </button>
        </div>
        <video
          key={video.src}
          src={video.src}
          controls
          autoPlay
          playsInline
          preload="metadata"
          className="w-full rounded-sm bg-charcoal"
        >
          Your browser doesn&apos;t support embedded video. You can{" "}
          <a href={video.src} className="underline">
            download the clip
          </a>{" "}
          instead.
        </video>
      </div>
    </div>
  );
}
