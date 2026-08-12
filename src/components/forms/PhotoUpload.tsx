"use client";

import { useId, useRef, useState } from "react";
import { CameraIcon, XIcon } from "@/components/ui/Icons";

export const MAX_FILES = 8;
export const MAX_FILE_SIZE_MB = 10;
const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/heic", "image/heif"];

/**
 * Multi-photo upload with client-side previews and validation
 * (file type + size + count). The underlying <input type="file">
 * keeps the `name="photos"` and `multiple` attributes Netlify Forms
 * needs to capture attachments — this component only adds a nicer
 * picking/preview experience on top of it.
 *
 * Server-side, Netlify enforces its own plan-level attachment size
 * limits; this client check exists to give the visitor immediate,
 * friendly feedback rather than a failed submission.
 */
export default function PhotoUpload({ error }: { error?: string }) {
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [localError, setLocalError] = useState<string | null>(null);

  function applyFiles(fileList: FileList | null) {
    if (!fileList) return;
    const incoming = Array.from(fileList);
    const combined = [...files, ...incoming];

    const tooMany = combined.length > MAX_FILES;
    const invalidType = incoming.find((f) => !ACCEPTED_TYPES.includes(f.type));
    const tooLarge = incoming.find((f) => f.size > MAX_FILE_SIZE_MB * 1024 * 1024);

    if (invalidType) {
      setLocalError("Please upload photos only (JPG, PNG, WEBP or HEIC).");
      return;
    }
    if (tooLarge) {
      setLocalError(`Each photo must be smaller than ${MAX_FILE_SIZE_MB}MB.`);
      return;
    }
    const finalFiles = tooMany ? combined.slice(0, MAX_FILES) : combined;
    if (tooMany) {
      setLocalError(`You can upload up to ${MAX_FILES} photos — the first ${MAX_FILES} were kept.`);
    } else {
      setLocalError(null);
    }
    setFiles(finalFiles);
    syncInputFiles(finalFiles);
  }

  function syncInputFiles(next: File[]) {
    if (!inputRef.current) return;
    const dt = new DataTransfer();
    next.forEach((f) => dt.items.add(f));
    inputRef.current.files = dt.files;
  }

  function removeFile(index: number) {
    const next = files.filter((_, i) => i !== index);
    setFiles(next);
    syncInputFiles(next);
    setLocalError(null);
  }

  return (
    <div>
      <label htmlFor={inputId} className="mb-1.5 block text-sm font-semibold text-charcoal">
        Photos <span className="font-normal text-ink-muted">(optional, but recommended)</span>
      </label>
      <p className="mb-2 text-xs text-ink-muted">
        Photos help us understand the condition and provide a more useful preliminary
        estimate. Up to {MAX_FILES} photos, {MAX_FILE_SIZE_MB}MB each.
      </p>

      <div
        className="flex flex-col items-center justify-center gap-2 rounded-md border-2 border-dashed border-tan-dark/50 bg-cream-dark/40 px-4 py-8 text-center"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          applyFiles(e.dataTransfer.files);
        }}
      >
        <CameraIcon className="text-2xl text-brown" aria-hidden />
        <p className="text-sm text-charcoal-soft">Drag photos here, or</p>
        <label
          htmlFor={inputId}
          className="inline-flex min-h-11 cursor-pointer items-center rounded-sm border border-brown bg-paper px-4 py-2 text-sm font-semibold text-brown hover:bg-brown hover:text-cream"
        >
          Choose Photos
        </label>
        <input
          ref={inputRef}
          id={inputId}
          name="photos"
          type="file"
          multiple
          accept="image/*"
          className="sr-only"
          aria-describedby={localError || error ? `${inputId}-error` : undefined}
          onChange={(e) => applyFiles(e.target.files)}
        />
      </div>

      {(localError || error) ? (
        <p id={`${inputId}-error`} role="alert" className="mt-1.5 text-sm font-medium text-error">
          {localError || error}
        </p>
      ) : null}

      {files.length > 0 ? (
        <ul className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4">
          {files.map((file, i) => (
            <li key={`${file.name}-${i}`} className="relative">
              <div className="flex aspect-square flex-col items-center justify-center rounded-sm border border-tan-light bg-paper p-2 text-center">
                <CameraIcon className="text-brown/60" aria-hidden />
                <span className="mt-1 line-clamp-2 break-all text-[10px] text-ink-muted">
                  {file.name}
                </span>
              </div>
              <button
                type="button"
                onClick={() => removeFile(i)}
                aria-label={`Remove ${file.name}`}
                className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-brown text-xs text-cream"
              >
                <XIcon />
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
