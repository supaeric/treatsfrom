import type { Country } from "../types";

export const southAfrica: Country = {
  slug: "south-africa",
  name: "South Africa",
  demonym: "South African",
  code: "ZA",
  status: "live",
  accent: "#F2A900",
  accentInk: "#17150F",
  blurb:
    "Ouma rusks, Peppermint Crisp, Simba, Jelly Tots. The tuck shop shelf, boxed and sent from our Ohio warehouse.",
  story:
    "We buy direct from South African wholesalers, air-freight in bulk, and pack every box in Ohio. That means a Peppermint Crisp with eight months on the clock instead of eight weeks, and you never see a customs form.",
  seoTitle: "South African Snack Boxes Delivered in the USA & Canada",
  seoDescription:
    "Ouma Rusks, Peppermint Crisp, Simba chips and more. Authentic South African snack boxes shipped from Ohio in 2-4 days. Free US shipping over $30.",
  heroPoster: "/media/south-africa-poster.jpg",
  products: [
    {
      slug: "lekker-box",
      name: "The Lekker Box",
      tagline: "24 treats. The greatest hits.",
      description:
        "If you only order one box, order this one. Twenty-four full-size South African favourites, weighted toward the things people actually miss: the rusks, the Peppermint Crisp, the Jelly Tots, the Romany Creams. Enough to share, small enough to finish.",
      itemCount: 24,
      weightGrams: 1900,
      priceCents: 3900,
      featured: true,
      highlights: [
        "24 full-size items, no fillers or sachets",
        "Roughly two-thirds sweet, one-third savoury",
        "Ships in a rigid gift box",
        "Add a handwritten note free at checkout",
      ],
      contents: [
        "Ouma Buttermilk Rusks (500g)",
        "Peppermint Crisp x2",
        "Bar One x2",
        "Romany Creams",
        "Tennis Biscuits",
        "Eet-Sum-Mor",
        "Simba Mrs Ball's Chutney chips",
        "NikNaks Fruit Chutney",
        "Jelly Tots x2",
        "Sparkles x2",
        "Wilson's Toffees",
        "Beacon Fizzers x4",
        "Cadbury Lunch Bar x2",
        "Five Roses tea (26 bags)",
        "Mrs Ball's Original Chutney (470g)",
      ],
      allergens:
        "Contains milk, wheat and soy. May contain traces of peanuts and tree nuts. Packed in a facility that handles nuts.",
    },
    {
      slug: "big-lekker",
      name: "The Big Lekker",
      tagline: "42 treats. For a whole household.",
      description:
        "Our largest box, and the one that turns up at braais and rugby watch parties. Everything in the Lekker Box plus the deeper cuts: Ghost Pops, Chomp, Creme Soda, and a full tin of Bakers biscuits.",
      itemCount: 42,
      weightGrams: 3400,
      priceCents: 5900,
      compareAtCents: 6800,
      highlights: [
        "42 full-size items across sweet and savoury",
        "Best value per item of any box we sell",
        "Ships free anywhere in the US",
        "Popular for care packages and office gifts",
      ],
      contents: [
        "Everything in The Lekker Box, plus:",
        "Bakers Choice Assorted tin",
        "Ghost Pops x3",
        "Fritos Chutney x2",
        "Chomp x3",
        "Sparletta Creme Soda (330ml) x2",
        "Marie Biscuits",
        "Zoo Biscuits",
        "Speckled Eggs",
        "Wine Gums",
        "Rooibos tea (40 bags)",
      ],
      allergens:
        "Contains milk, wheat and soy. May contain traces of peanuts and tree nuts. Packed in a facility that handles nuts.",
    },
    {
      slug: "braai-box",
      name: "The Braai Box",
      tagline: "Savoury only. No sweets, no apologies.",
      description:
        "For the people who skip the chocolate and go straight for the biltong. Chips, dried meat, spice rubs and the chutney that makes it all work, plus a bottle of Mrs Ball's, because it is not optional.",
      itemCount: 18,
      weightGrams: 2100,
      priceCents: 4400,
      shipsTo: ["US"],
      highlights: [
        "18 savoury items, zero confectionery",
        "Includes 200g sliced beef biltong",
        "Robertsons and Ina Paarman spice rubs",
        "US addresses only (meat import rules)",
      ],
      contents: [
        "Sliced beef biltong (200g)",
        "Droewors (100g)",
        "Simba Mrs Ball's Chutney x2",
        "Simba Salt & Vinegar x2",
        "NikNaks Fruit Chutney x2",
        "Ghost Pops x2",
        "Fritos Chutney",
        "Mrs Ball's Original Chutney (470g)",
        "Robertsons Braai & Grill Spice",
        "Ina Paarman Steak & Chops",
        "Aromat (75g)",
        "Provita crackers",
        "Melrose cheese wedges",
      ],
      allergens:
        "Contains milk, wheat, soy, mustard and celery. May contain traces of peanuts and tree nuts.",
    },
  ],
  faqs: [
    {
      q: "Is this shipped from South Africa?",
      a: "No, and that is the point. We import in bulk and warehouse everything in Ohio, so your box ships domestically and arrives in 2-4 business days. You never pay duties or fill in a customs form.",
    },
    {
      q: "How fresh are the snacks?",
      a: "We restock every six weeks and never ship anything with less than four months of shelf life remaining. Most items land with eight months or more.",
    },
    {
      q: "Can I send this as a gift?",
      a: "Yes. Add a handwritten note at checkout at no cost, and we ship to any US or Canadian address without a receipt in the box.",
    },
    {
      q: "Do you ship to Canada?",
      a: "We do. Canadian orders are $14.95 flat and free over $75, typically arriving in 4-8 business days. Biltong and droewors cannot cross the border, so the Braai Box ships to US addresses only.",
    },
  ],
};
