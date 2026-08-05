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
    "Ouma rusks, Peppermint Crisp, Simba, Jelly Tots. The tuck shop shelf, boxed and sent from within the US.",
  story:
    "Everything here is the version sold in South Africa, not a recipe changed for the American market. It arrives with months of shelf life left, and nothing to declare.",
  intro: [
    "If you have moved to the United States from South Africa, you already know the problem. The chocolate tastes different, nobody stocks rusks, and the closest thing to a Simba chip is a bag of something with the wrong flavour on the front. Ordering from home means five weeks of waiting and a shipping bill that costs more than the snacks.",
    "Our South African snack boxes fix that. Ouma rusks for dunking, Peppermint Crisp, Romany Creams, Jelly Tots, Simba in Mrs Ball's Chutney, and a bottle of the chutney itself. It is the tuck shop shelf and the biscuit tin, packed into one box, and it reaches most US addresses in seven to ten business days.",
    "Everything we stock is genuine South African retail product, bought on the domestic market there rather than made for export. That matters more than it sounds. Export recipes are often reformulated for local rules, so a bar made for the American market is not the bar you remember. Ours is the one sold in a Pick n Pay.",
    "Our South African snack boxes work as a gift as much as a personal order. A lot of what we ship goes to homesick students, to parents sending a care package, and to partners who have heard about Peppermint Crisp tart for years and want to try making one. Add a handwritten note at checkout and we will include it, with no receipt in the box.",
  ],
  brands: [
    { name: "Ouma Rusks", note: "Buttermilk rusks for dunking, the ones most people ask for first." },
    { name: "Peppermint Crisp", note: "The mint-filled chocolate bar, and the base of the tart." },
    { name: "Simba", note: "Chips in Mrs Ball's Chutney and Salt & Vinegar." },
    { name: "Jelly Tots", note: "Soft fruit sweets, a lunchbox staple." },
    { name: "Romany Creams", note: "Coconut and chocolate biscuits from Bakers." },
    { name: "Mrs Ball's Chutney", note: "The original recipe, in a 470g bottle." },
    { name: "Biltong", note: "Air-dried beef, sliced. US addresses only." },
    { name: "Five Roses", note: "The everyday black tea, plus Rooibos." },
  ],
  seoTitle: "South African Snacks Online in the USA | Snack Boxes Shipped in 2-4 Days",
  seoDescription:
    "Buy South African snacks online in the USA. Ouma Rusks, Peppermint Crisp, Simba and biltong, shipped from within the US in 7-10 days. Free US shipping over $30.",
  heroPoster: "/media/south-africa-poster.jpg",
  products: [
    {
      slug: "lekker-box",
      name: "The Lekker Box",
      tagline: "24 treats, mostly the ones people ask for.",
      description:
        "Our most popular box. Twenty-four full-size South African favourites, weighted toward the things people miss most: rusks, Peppermint Crisp, Jelly Tots, Romany Creams. Big enough to share and still finish in a week.",
      detail:
        "This is the box we send when somebody says they want South African snacks and nothing more specific. It leans sweet, covers the biscuit tin and the tuck shop in roughly equal measure, and includes a bottle of Mrs Ball's so the savoury side is not ignored. If you are buying for someone who left South Africa a long time ago, this is the safe choice.",
      bestFor: [
        "A first order, if you are not sure what to pick",
        "Gifting to a South African expat in the USA or Canada",
        "Students and anyone living away from home",
      ],
      itemCount: 24,
      weightGrams: 1900,
      priceCents: 3900,
      featured: true,
      highlights: [
        "24 full-size items, no sachets or filler",
        "About two-thirds sweet, one-third savoury",
        "Ships in a rigid gift box",
        "Free handwritten note at checkout",
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
      tagline: "42 treats, sized for a household.",
      description:
        "Our largest box, and the one that shows up at braais and rugby watch parties. Everything from the Lekker Box plus the less obvious stuff: Ghost Pops, Chomp, Creme Soda, and a full tin of Bakers biscuits.",
      detail:
        "Buy this one if the box is for a household rather than a person. Forty-two items is enough to leave out at a braai, split between a family, or work through over a month without rationing. The per-item cost is the lowest we offer, and it clears the free US shipping threshold on its own.",
      bestFor: [
        "Families and shared households",
        "Braais, rugby and cricket watch parties",
        "Office gifts and group care packages",
      ],
      itemCount: 42,
      weightGrams: 3400,
      priceCents: 5900,
      compareAtCents: 6800,
      highlights: [
        "42 full-size items, sweet and savoury",
        "Our lowest cost per item",
        "Ships free anywhere in the US",
        "Common choice for care packages and office gifts",
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
      tagline: "Savoury only, no confectionery.",
      description:
        "For people who skip the chocolate aisle and go straight to the biltong. Chips, dried meat, spice rubs, and a bottle of Mrs Ball's to go with all of it.",
      detail:
        "Biltong is the reason most people order this box, and we ship it sliced in 200g at a time. Around it sits the rest of a South African braai table: chutney-flavoured chips, spice rubs from Robertsons and Ina Paarman, Provita, and a bottle of Mrs Ball's. There is no chocolate in here at all, which is the point.",
      bestFor: [
        "Anyone who orders biltong online and wants the rest of the table too",
        "Braai and grilling season",
        "People who would rather have savoury than sweet",
      ],
      itemCount: 18,
      weightGrams: 2100,
      priceCents: 4400,
      shipsTo: ["US"],
      highlights: [
        "18 savoury items, no sweets",
        "Includes 200g sliced beef biltong",
        "Robertsons and Ina Paarman spice rubs",
        "US addresses only, due to meat import rules",
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
      a: "No. We hold stock in the United States, so your box ships domestically and arrives in 7-10 business days. There's no duty to pay and no customs form to fill in.",
    },
    {
      q: "How fresh are the snacks?",
      a: "We restock every six weeks and won't ship anything with less than four months of shelf life left. Most items arrive with eight months or more.",
    },
    {
      q: "Can I send this as a gift?",
      a: "Yes. Add a handwritten note at checkout at no cost, and we'll ship to any US or Canadian address without a receipt in the box.",
    },
    {
      q: "Do you ship to Canada?",
      a: "Yes. Canadian orders are $14.95 flat, free over $75, and usually arrive in 10-14 business days. Biltong and droewors can't cross the border, so the Braai Box is US only.",
    },
  ],
};
