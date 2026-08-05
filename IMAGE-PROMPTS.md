# Image prompts for Gemini (Nano Banana)

## Read this first

**Nano Banana ignores pixel dimensions.** Asking for "1200x1500px" does nothing.
It generates roughly 1024px on the long edge. Specify the **aspect ratio** in
words, generate, then resize.

**Aspect ratios you need:**

| Use | Ratio | Final size | Where it goes |
|---|---|---|---|
| Product boxes | 4:5 portrait | 1200x1500 | `public/media/` |
| Hero poster | 9:16 portrait | 1080x1920 | `public/media/hero-poster.jpg` |
| Country banners | 16:9 landscape | 1600x900 | `public/media/` |

**After generating, every file must be:**
1. Resized to the size above
2. Saved as JPEG at quality 82
3. Under 300KB for products, under 200KB for the hero poster

Use [squoosh.app](https://squoosh.app) if you don't have image tools. Next.js
converts to AVIF/WebP automatically, so don't optimise further than that.

**Two things that will wreck these images:**

- **Don't name real brands in the prompt.** Asking for "Ouma Rusks" or
  "Cadbury" produces mangled fake logos that look counterfeit and create
  trademark exposure. Every prompt below says *unbranded*. When you have real
  stock, photograph it. Generated images are a stopgap.
- **Generate 3-4 variations of each and pick.** First outputs are usually the
  most generic.

**Keep the look consistent.** Every prompt shares the same lighting and surface
description on purpose. If you change one, change all of them, or the grid will
look like it came from four different shops.

**Appetite first.** These images do the job the copy used to do badly. The site
no longer explains freight and warehousing, so the pictures have to carry
"this looks delicious and there's a lot of it." Favour abundance and warm
colour over tidy minimalism. A box that looks half full will cost you sales.

---

## 1. Hero poster (highest priority)

This is the first thing anyone sees and the frame that shows before your video
loads. It should read as **a sweet shop, not a shipping depot** — the site copy
no longer talks about logistics, so the image shouldn't either. Lead with the
food.

> Overhead photograph of an abundant spread of colourful unbranded wrapped
> sweets, chocolate bars, biscuits and snack packets covering most of a warm
> off-white paper surface. Bright golds, deep reds, oranges and cream
> wrappers, densely arranged with small gaps of the surface showing through.
> A few chocolate bars partly unwrapped, a scattering of small round sweets,
> and a stack of round biscuits toward one edge. Soft directional daylight
> from the upper left, gentle natural shadows, no harsh highlights. Warm
> appetising colour grade, rich but not oversaturated, film-like. Shot on a
> 50mm lens, everything in focus. Tall vertical composition with the spread
> filling the lower two thirds and generous clean empty space across the top
> third. Editorial food photography, natural and unstyled, not glossy
> advertising. No text or logos anywhere.

Ratio: **9:16 vertical.** Save as `hero-poster.jpg`, resize to 1080x1920.

The empty upper third is not optional. That's where the headline sits, and if
the sweets run to the top edge the text becomes unreadable on a phone.

---

## 2. The Lekker Box (24 treats, South Africa)

> Overhead photograph of an open rigid gift box packed neatly with an
> assortment of unbranded wrapped sweets, chocolate bars, biscuits and a
> cylindrical packet of dry rusks, in warm gold, amber and deep red wrappers.
> Contents packed tightly so the box looks generously full. A few loose sweets
> resting on the surface beside it. Warm off-white paper surface beneath. Soft
> directional daylight from upper left, gentle natural shadows. Warm appetising
> colour grade, rich but not oversaturated, film-like. Shot on a 50mm lens,
> everything in focus. Vertical composition, box filling most of the frame with
> a small margin. Editorial food photography, natural and unstyled, no text or
> logos anywhere.

Ratio: **4:5 portrait.** Save as `lekker-box.jpg`.

---

## 3. The Big Lekker (42 treats, South Africa)

Same treatment, visibly more abundant. The size difference has to read at a
glance in the grid.

> Overhead photograph of a large open rigid gift box generously
> overflowing with a dense assortment of unbranded wrapped sweets, chocolate
> bars, biscuit packets, a tin of assorted biscuits and two glass bottles of
> orange-coloured soda, in warm gold, amber and deep red wrappers. Warm
> off-white paper surface. Soft directional daylight from upper left, gentle
> natural shadows. Warm neutral colour grade, slightly desaturated, film-like.
> Shot on a 50mm lens, everything in focus. Vertical composition, box filling
> the frame. Editorial food photography, natural and unstyled, no text or
> logos anywhere.

Ratio: **4:5 portrait.** Save as `big-lekker.jpg`.

---

## 4. The Braai Box (savoury, South Africa)

Deliberately different palette. Darker, more savoury, no confectionery.

> Overhead photograph of an open rigid gift box containing savoury
> snacks: a stack of dark dried beef strips, coiled dried sausage, unbranded
> foil packets of crisps in muted red and green, a glass bottle of dark brown
> chutney with a plain label, small jars of ground spice rub, and a packet of
> plain crackers. Warm off-white paper surface. Soft directional daylight from
> upper left, gentle natural shadows. Warm neutral colour grade with earthier
> browns and deep reds, slightly desaturated, film-like. Shot on a 50mm lens,
> everything in focus. Vertical composition. Editorial food photography,
> natural and unstyled, no text or logos anywhere.

Ratio: **4:5 portrait.** Save as `braai-box.jpg`.

---

## 5. South Africa country banner

For the top of the South Africa page. Evokes origin without flag clichés.

> Wide overhead photograph of an assortment of unbranded South African style
> snacks arranged loosely across a warm off-white paper surface: dry rusks,
> wrapped chocolate bars in gold and deep red, colourful wrapped boiled
> sweets, a packet of crisps, and a small pile of jelly sweets. Arranged in a
> relaxed scattered layout with visible space between items. Soft directional
> daylight from upper left. Warm neutral colour grade with amber and gold
> dominant, slightly desaturated, film-like. Wide horizontal composition with
> empty space across the left third. Editorial food photography, natural and
> unstyled, no text or logos anywhere.

Ratio: **16:9 landscape.** Save as `south-africa-poster.jpg`, resize to 1600x900.

---

## 6. UK country banner (coming soon page)

> Wide overhead photograph of an assortment of unbranded British style snacks
> arranged loosely across a warm off-white paper surface: round oat biscuits,
> a stack of chocolate-covered digestive biscuits, wrapped chocolate bars in
> deep purple and red foil, a packet of crisps in muted blue, and a few
> wrapped toffees. Relaxed scattered layout with visible space between items.
> Soft directional daylight from upper left. Warm neutral colour grade with
> deep reds and purples, slightly desaturated, film-like. Wide horizontal
> composition with empty space across the left third. Editorial food
> photography, natural and unstyled, no text or logos anywhere.

Ratio: **16:9 landscape.** Save as `united-kingdom-poster.jpg`.

---

## 7. Japan country banner (coming soon page)

> Wide overhead photograph of an assortment of unbranded Japanese style snacks
> arranged loosely across a warm off-white paper surface: thin biscuit sticks
> in slim boxes, small individually wrapped rice crackers, pastel green and
> pink wrapped chocolate bars, a packet of savoury crisps, and small wrapped
> chewy sweets. Relaxed scattered layout with visible space between items.
> Soft directional daylight from upper left. Warm neutral colour grade with
> soft pinks, matcha green and cream, slightly desaturated, film-like. Wide
> horizontal composition with empty space across the left third. Editorial
> food photography, natural and unstyled, no text or logos anywhere.

Ratio: **16:9 landscape.** Save as `japan-poster.jpg`.

---

## Wiring the product images in

Upload the three product JPEGs to `public/media/`, then open
`src/content/countries/south-africa.ts` and add two lines to each product,
just under `weightGrams`:

```ts
{
  slug: "lekker-box",
  name: "The Lekker Box",
  // ...
  weightGrams: 1900,
  image: "/media/lekker-box.jpg",
  imageAlt: "An open kraft gift box packed with 24 South African snacks",
  // ...
}
```

Match each file to its product:

| Product slug | image | 
|---|---|
| `lekker-box` | `/media/lekker-box.jpg` |
| `big-lekker` | `/media/big-lekker.jpg` |
| `braai-box` | `/media/braai-box.jpg` |

Write the `imageAlt` yourself and describe what's actually in the picture.
It's read aloud by screen readers and it's real SEO weight, so
"An open kraft gift box packed with 24 South African snacks" beats
"snack box product image".

The moment `image` is set, the placeholder panel disappears and the photo
takes over. Nothing else changes.
