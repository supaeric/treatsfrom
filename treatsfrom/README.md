# treatsfrom.com

International snack boxes, imported in bulk and shipped domestically across
the US and Canada.

Next.js 15 (App Router) · TypeScript · Tailwind · Stripe Checkout · Vercel

---

## Quick start

```bash
npm install
cp .env.example .env.local   # then fill in your Stripe keys
npm run dev                  # http://localhost:3000
```

Before you push, confirm it compiles:

```bash
npm run typecheck
npm run build
```

---

## Adding a country

This is the whole job. Two steps, no code changes anywhere else.

**1.** Copy `src/content/countries/south-africa.ts` to a new file and edit it.

**2.** Register it in `src/content/countries/index.ts`:

```ts
import { japan } from "./japan";
export const countries: Country[] = [southAfrica, australia, unitedKingdom, japan];
```

That automatically generates: the `/treats-from/japan` page, a page for every
product under it, header and footer navigation, the homepage route map,
sitemap entries, and Product/Breadcrumb/FAQ structured data.

Set `status: "coming-soon"` with an empty `products: []` to list a country
before it is in stock — it renders a waitlist page instead of a shop.

### Adding products

Add objects to that country's `products` array. Prices are in **cents**
(`3900` = $39.00). Set `shipsTo: ["US"]` on anything that cannot cross into
Canada — meat, mostly. Checkout enforces this automatically and will refuse a
cart that cannot legally ship to one destination.

---

## Media

The site builds and looks finished with no images at all — `BoxImage` renders
a designed placeholder panel until you add real photography. See
`public/media/README.md` for hero video specs and ffmpeg commands.

**To turn on the hero video:** drop `hero.mp4`, `hero.webm` and
`hero-poster.jpg` into `public/media/`, then set `HERO_VIDEO = true` at the
top of `src/components/Hero.tsx`.

**To add product photos:** drop the file in `public/media/`, then set
`image` and `imageAlt` on that product in the content layer.

---

## Stripe setup

1. Create an account at [stripe.com](https://stripe.com) and complete
   business verification (needed before you can take live payments).
2. **Developers → API keys** → copy the secret key into `STRIPE_SECRET_KEY`.
   Use `sk_test_...` while building.
3. **Developers → Webhooks → Add endpoint**
   - URL: `https://treatsfrom.com/api/stripe-webhook`
   - Events: `checkout.session.completed`, `checkout.session.expired`
   - Copy the signing secret into `STRIPE_WEBHOOK_SECRET`.
4. **Settings → Tax** — enable Stripe Tax if you want automatic US sales tax,
   then set `automatic_tax: { enabled: true }` in
   `src/app/api/checkout/route.ts`. Talk to an accountant about nexus first.

Test cards: `4242 4242 4242 4242`, any future expiry, any CVC.

### How pricing is protected

The browser only ever sends product IDs and quantities. Prices, shipping
rates and destination restrictions are all resolved server-side from the
content layer in `src/app/api/checkout/route.ts`. A tampered cart cannot
change what anything costs.

### Fulfilment

`src/app/api/stripe-webhook/route.ts` has a marked `TODO` where paid orders
arrive. Wire that to however you pick and pack — email, Shippo, Airtable,
a spreadsheet. The Stripe session gives you the customer, the address, the
cart contents and the gift note.

---

## Deploying to Vercel

**1. Push to GitHub**

```bash
git init
git add .
git commit -m "Initial build"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/treatsfrom.git
git push -u origin main
```

**2. Import into Vercel**

- [vercel.com/new](https://vercel.com/new) → import the repo
- Framework preset: **Next.js** (auto-detected). Leave build settings alone.
- Add environment variables before the first deploy:

| Name | Value |
|---|---|
| `STRIPE_SECRET_KEY` | `sk_live_...` |
| `STRIPE_WEBHOOK_SECRET` | `whsec_...` |
| `NEXT_PUBLIC_SITE_URL` | `https://treatsfrom.com` |

`NEXT_PUBLIC_SITE_URL` **must have no trailing slash** — it builds every
canonical URL, sitemap entry and Stripe redirect.

**3. Point the domain**

In Vercel: **Project → Settings → Domains → Add** `treatsfrom.com`.
Vercel will show you which records to create. At your registrar:

| Type | Name | Value |
|---|---|---|
| `A` | `@` | `76.76.21.21` |
| `CNAME` | `www` | `cname.vercel-dns.com` |

Use whatever values Vercel displays — they are authoritative and can change.
Delete conflicting existing A/CNAME records on `@` and `www`. DNS usually
propagates in under an hour; TLS is issued automatically.

**4. After the domain is live**

- Update the Stripe webhook URL to the real domain.
- Submit `https://treatsfrom.com/sitemap.xml` in Google Search Console.
- Run Lighthouse on mobile and confirm you are still in the green.

---

## SEO

Already wired: per-page titles and descriptions generated from the content
layer, canonical URLs, Open Graph and Twitter cards, an auto-generated OG
image, `sitemap.xml`, `robots.txt`, and JSON-LD for Organization, WebSite,
Product, BreadcrumbList and FAQPage.

URLs are `/treats-from/south-africa/lekker-box` — the path reads as the brand
sentence and targets the phrase people actually search.

The `/cart` and `/order-confirmed` routes are deliberately `noindex`.

**What still needs you:** real product photography with descriptive alt text,
and content. The single highest-return thing you can add is a blog targeting
nostalgia long-tail queries ("where to buy Ouma rusks in the US"). That is
how comparable sites earn most of their organic traffic.

---

## Accounts

There are none, deliberately. Guest checkout converts better for one-off gift
purchases, and forced signup at the payment step is where carts die.

Every checkout still creates a **Stripe Customer** keyed to the buyer's
email, so order history accumulates server-side from day one. When you launch
subscriptions — which is when accounts genuinely become necessary, because
people need to pause and skip — add an auth layer plus Stripe's Customer
Portal and every historical order is already attached. No migration.

---

## Legal before launch

Not included, and you should not launch without them:

- Privacy policy and terms of service
- Cookie/analytics notice if you add analytics
- FDA prior notice for imported food shipments
- State sales tax registration where you have nexus
- Confirmation that any meat product you import is USDA-permitted

Get the food import and tax positions checked by someone qualified. Those are
the two that carry real penalties.
