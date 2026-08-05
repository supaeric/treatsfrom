# SEO strategy and what is implemented

## The market

You're in the USA selling imported snacks to people in the USA and Canada.
That makes this a **domestic e-commerce site in a nostalgia niche**, not an
international shipping site, and the whole strategy follows from that.

Your buyers split into three groups, and they search very differently:

| Group | What they search | Where they land |
|---|---|---|
| Expats buying for themselves | "south african snacks usa", "buy ouma rusks in america" | Country page |
| Gift buyers | "south african gift box usa", "care package for expat" | Product page |
| Nostalgia browsers | "why does british chocolate taste different in america" | Blog (not built yet) |

## Keyword map

One page owns one intent. This is the thing that prevents you competing
against yourself.

| Page | Primary keyword | Supporting |
|---|---|---|
| `/` | south african snacks usa | buy south african snacks online, snack box usa |
| `/treats-from` | imported snack boxes | international snack box usa |
| `/treats-from/south-africa` | south african snacks online usa | ouma rusks usa, peppermint crisp usa, simba chips usa, biltong online usa |
| `/treats-from/south-africa/lekker-box` | south african snack box | south african gift box |
| `/treats-from/south-africa/braai-box` | biltong online usa | south african savoury snacks |
| `/treats-from/united-kingdom` | british snacks usa | british chocolate usa, cadbury british recipe |
| `/treats-from/japan` | japanese snack box usa | matcha kitkat usa |
| `/how-it-works` | imported snacks no customs | why imported snacks take weeks |
| `/shipping` | south african snacks free shipping usa | imported snacks canada delivery |
| `/faq` | buying imported snacks usa | do i pay duty on imported snacks |

**The angle worth defending:** almost every competitor ships from abroad. Your
differentiator is domestic fulfilment, so "no customs form", "no import duty"
and "2-4 days" appear on every commercial page. That is a real distinction, it
matches search intent ("how long does it take"), and it isn't a claim a
competitor can copy without changing their business.

## What is implemented

**Metadata.** Every indexable page has a unique title and description, written
for the keyword it owns. Titles use `Primary Keyword | Qualifier` rather than
brand-first, because brand-first wastes the highest-weighted position on a
term nobody searches yet.

**Canonicals.** Explicit `alternates.canonical` on every page including the
homepage. Nothing inherits, so no page can silently canonicalise to `/`.

**Duplicate content.** Country FAQs used to render on both `/faq` and the
country page, which meant identical Q&A text and identical `FAQPage` schema on
two URLs. `/faq` now carries a general set only and links out. No text block is
served from two addresses.

**Word count.** Every indexable page clears 250 words of unique body copy. Run
the audit any time with the script in the "Auditing" section below.

**Headings.** One `<h1>` per page containing the primary keyword. `<h2>`s
describe real sections rather than being chosen for size.

**Structured data.** This is what gets you cited by AI assistants as well as
Google:

- `OnlineStore` with `areaServed` for the US and Canada
- `WebSite`, linked to the organisation by `@id`
- `Product` on every product page with `offers`, `shippingDetails`,
  `deliveryTime` and `hasMerchantReturnPolicy`
- `ItemList` on the homepage, `/treats-from` and each country page
- `CollectionPage` on the two collection routes
- `BreadcrumbList` on every nested page
- `FAQPage` on the homepage, `/faq` and each country page, with no overlap

**Deliberately absent: `AggregateRating` and `Review`.** Emitting review markup
for reviews that don't exist is a manual-action risk in Google Search, and the
stars are not worth the penalty. Add it once you have real reviews collected
and displayed on the page. This is the single most common way small stores get
hit, so please don't add it early.

**Indexing.** `/cart` and `/order-confirmed` are `noindex` and disallowed in
robots.txt. Everything else is indexable and in the sitemap.

**Internal linking.** Product pages link to shipping. Country pages link to
shipping and how-it-works. FAQ links to every country page. Breadcrumbs run
home to collection to country to product on every product page.

## Setup you still have to do

1. **Google Search Console.** Add `treatsfrom.com`, verify by DNS, submit
   `https://treatsfrom.com/sitemap.xml`.
2. **Pick one hostname.** Right now `treatsfrom.com` 308-redirects to `www`.
   Choose one as primary, redirect the other to it, and set
   `NEXT_PUBLIC_SITE_URL` to match with no trailing slash. Serving both
   without a redirect splits your ranking signals in half.
3. **Bing Webmaster Tools.** Import from Search Console. It takes two minutes
   and Bing feeds several AI assistants.
4. **Google Merchant Center** if you want free product listings. Your `Product`
   schema already carries the required fields.

## The biggest lever, which is not built

**A blog.** Comparable sites earn most of their organic traffic from nostalgia
long-tail, not from category pages. The queries are low-competition and convert
well because they're asked by exactly your buyer:

- "where to buy ouma rusks in the usa"
- "why does british chocolate taste different in america"
- "what is peppermint crisp tart"
- "how to make peppermint crisp tart in america"
- "south african snacks every expat misses"
- "is biltong legal to import to the usa"

Each is a page with a real answer and a natural link to the relevant box. Ten
of these, written properly, will outperform anything else on this list. Ask me
when you want the blog route built.

## Auditing

Word count, H1 count and canonical coverage across all pages:

```bash
node -e "
const fs=require('fs'),p=require('path');
const walk=d=>fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(p.join(d,e.name)):p.join(d,e.name));
walk('src/app').filter(f=>f.endsWith('page.tsx')).forEach(f=>{
  const s=fs.readFileSync(f,'utf8');
  const words=s.replace(/<[^>]+>/g,' ').match(/[A-Za-z][A-Za-z']+/g)?.length||0;
  console.log((s.match(/<h1/g)||[]).length+' h1 | '+(s.includes('canonical')?'canon':'NO-CANON')+' | ~'+words+' | '+f);
});
"
```

After deploying, validate the structured data at
`https://search.google.com/test/rich-results` for one product page, one country
page and the homepage.
