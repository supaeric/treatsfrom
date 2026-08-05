# Media

Drop your assets here. Nothing in this folder is required for the site to
build — the app falls back to designed placeholders.

## Hero video

Export three files:

| File            | Spec                                                    |
|-----------------|---------------------------------------------------------|
| `hero.mp4`      | H.264, 1080x1920 portrait, 6-10s silent loop, under 3MB |
| `hero.webm`     | VP9, same source (served first where supported)         |
| `hero-poster.jpg` | First frame, ~120KB, same dimensions                  |

Then open `src/components/Hero.tsx` and set `HERO_VIDEO = true`.

Encoding commands (requires ffmpeg):

```bash
ffmpeg -i source.mov -vf "scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920" \
  -c:v libx264 -crf 26 -preset slow -an -movflags +faststart hero.mp4

ffmpeg -i source.mov -vf "scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920" \
  -c:v libvpx-vp9 -crf 34 -b:v 0 -an hero.webm

ffmpeg -i hero.mp4 -vframes 1 -q:v 4 hero-poster.jpg
```

## Product photography

Shoot square or 4:5 portrait, at least 1200px on the short edge. Save as
`.jpg` here, then set `image` and `imageAlt` on the product in
`src/content/countries/<country>.ts`. Next.js converts to AVIF/WebP and
resizes automatically — do not pre-optimise beyond reasonable JPEG quality.
