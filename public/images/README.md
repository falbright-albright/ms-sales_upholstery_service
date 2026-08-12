# Adding real photography

This site does not use stock photography. Image slots that don't yet have a
real photo render as a labelled placeholder panel instead (see
`src/components/ui/PlaceholderImage.tsx`), specifically so the site never
implies a stock photo is one of M.S.'s actual projects.

`gallery/` currently holds 13 real project photos supplied by the business
owner (restaurant/pub booth seating, a dining chair restoration, a
residential chaise, a workshop cushion detail, plus a couple of non-furniture
examples). Four short project video clips are in `/public/videos/` and play
through the modal on the Gallery page (`src/components/gallery/VideoModal.tsx`).
A few gallery categories (e.g. a standalone single dining chair, a sectional
sofa) still render as placeholders until a matching photo exists — see
`src/lib/gallery-data.ts`.

## Folder layout

```
public/images/
  gallery/    Project photography (see src/lib/gallery-data.ts)
public/videos/
  *.mp4       Project video clips (see src/lib/gallery-data.ts videoItems)
```

## Adding another real gallery photo

1. Add the file to `public/images/gallery/`, named descriptively in
   kebab-case (e.g. `sectional-sofa-fabric-reupholstery.jpg`).
2. Add or update the matching entry in `src/lib/gallery-data.ts`
   (`galleryItems`) with `image` and `alt` set. `categories` is an array —
   tag a photo with every category it genuinely fits (e.g. a fabric-backed
   restaurant booth can be both `"Restaurant Seating"` and `"Fabric"`).
3. That's it — `GalleryGrid.tsx` automatically renders a real
   `next/image` for any item with an `image` path, and falls back to
   `<PlaceholderImage />` for items without one.

True before/after pairs are rare in what's been supplied so far (most are
single completed-work shots) — the gallery intentionally does not force a
"before" pairing where one doesn't exist. If a genuine before/after pair
does exist for a project, show both as separate `galleryItems` entries
sharing a common naming prefix, or extend the data model to support a pair
explicitly.

## Adding another project video

1. Add the `.mp4` file to `public/videos/`.
2. Add an entry to `videoItems` in `src/lib/gallery-data.ts` with `src` and
   a caption. Keep captions honest and specific — don't describe content
   that hasn't actually been verified in the clip.

## Image guidelines

- Use real, unedited photography of actual completed work — never stock
  photography presented as a project.
- JPG or WEBP, ideally under 500KB after compression (Next.js Image
  optimization will further optimize at build/request time). A few of the
  supplied originals are close to 1MB — fine for now, worth compressing
  later if page-weight becomes a concern.
- Landscape or portrait is fine; `ProjectPhoto`/`PlaceholderImage` default
  to a 4:3 (or 3:4 for hero tiles, or square for material swatches) aspect
  ratio — pass a different `aspect` prop if a photo needs one.
- Get the customer's permission before publishing any project that could
  identify their home or business, especially for commercial clients —
  confirm this has happened for the restaurant/pub photos already in the
  gallery before the site goes live, since permission wasn't part of what
  was confirmed when they were supplied.
