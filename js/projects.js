/* ==========================================================================
   Project data + renderer for work.html
   work.html?p=<slug> shows one project. To add a project, add an object here
   and link a card to work.html?p=<its slug>.
   NOTE: client, year and story copy below are placeholders. Replace them
   with the real project details.
   ========================================================================== */
(function () {
  "use strict";

  const PROJECTS = [
    {
      slug: "summer-premiere",
      title: "Summer Premiere Poster",
      desc: "Key art for a streaming launch",
      summary: "Retro stripes and a bold portrait, made to stop the scroll on launch week.",
      image: { src: "assets/images/work-summer-premiere.jpg", width: 736, height: 1096,
               alt: "Retro-striped poster of a blindfolded woman with a stars-and-stripes headband" },
      imgClass: "project-card__img--summer",
      client: "Streaming launch (concept)",
      year: "2023",
      role: "Concept, illustration, layout",
      tools: ["Photoshop", "Illustrator"],
      overview: [
        "A summer premiere needs one image that works everywhere: a phone thumbnail, a billboard and a social post. The idea was to pair a mysterious portrait with loud retro stripes so the poster reads instantly at any size.",
        "The blindfold keeps the story a secret, and the warm, sun-faded palette sets the season before anyone reads a word."
      ],
      steps: [
        { title: "The Brief", text: "Create launch key art that feels nostalgic, hints at the plot and stays readable as a tiny thumbnail." },
        { title: "The Idea", text: "A blindfolded hero framed by 70s stripes. The mystery comes from what she can’t see, the energy from the pattern." },
        { title: "The Outcome", text: "A single master layout that adapts to portrait, square and landscape crops without losing the focal point." }
      ]
    },
    {
      slug: "life-on-mars",
      title: "My Life on Mars",
      desc: "Illustrated film poster",
      summary: "A lonely astronaut, a comfy armchair and a whole red planet to himself.",
      image: { src: "assets/images/work-life-on-mars.jpg", width: 736, height: 920,
               alt: "Poster of an astronaut sitting in an armchair in front of a red planet" },
      imgClass: "",
      client: "Indie film (concept)",
      year: "2023",
      role: "Illustration, poster design",
      tools: ["Illustrator", "Photoshop"],
      overview: [
        "This poster mixes sci-fi with something very ordinary: an armchair. That contrast tells you the film is about loneliness and home, not lasers and battles.",
        "Flat shapes, a limited red palette and grain texture give it a screen-printed feel that suits a small independent release."
      ],
      steps: [
        { title: "The Brief", text: "Sell a quiet, character-driven space film without making it look like a blockbuster." },
        { title: "The Idea", text: "Put a domestic object in the most alien place possible and let the empty space do the talking." },
        { title: "The Outcome", text: "A calm, memorable one-sheet with a strong silhouette that works in print and on streaming tiles." }
      ]
    },
    {
      slug: "dark-knight-tribute",
      title: "The Dark Knight Tribute",
      desc: "Fan poster, halftone style",
      summary: "A halftone homage built around one line: the night is darkest before dawn.",
      image: { src: "assets/images/work-dark-knight.jpg", width: 736, height: 1104,
               alt: "Halftone fan poster of Batman with the quote “The night is darkest before dawn”" },
      imgClass: "",
      client: "Self-initiated",
      year: "2022",
      role: "Illustration, typography",
      tools: ["Photoshop"],
      overview: [
        "A personal tribute to a favourite film. Instead of copying the original posters, I leaned on halftone dots and heavy contrast to get a comic-print look.",
        "The quote sits in the brightest part of the composition so the words feel like the light breaking through."
      ],
      steps: [
        { title: "The Brief", text: "A self-set challenge: make a fan poster that feels fresh but still respects the source." },
        { title: "The Idea", text: "Halftone dots and a two-tone palette, inspired by old newspaper and comic printing." },
        { title: "The Outcome", text: "A striking print-ready poster and one of my most shared pieces online." }
      ]
    },
    {
      slug: "character-collage",
      title: "Character Collage Series",
      desc: "Editorial poster design",
      summary: "Black-and-white collage with red-framed film stills that tell a story in fragments.",
      image: { src: "assets/images/work-character-collage.jpg", width: 736, height: 920,
               alt: "Black-and-white editorial collage of a character with red-framed film stills" },
      imgClass: "",
      client: "Editorial series (concept)",
      year: "2023",
      role: "Art direction, collage",
      tools: ["Photoshop", "Illustrator"],
      overview: [
        "An editorial series that profiles a character through cut-up film stills. Each frame is a small clue, and the red borders guide the eye from one to the next.",
        "Keeping everything black and white except the frames makes the layout feel like a scrapbook and a magazine spread at the same time."
      ],
      steps: [
        { title: "The Brief", text: "Design a poster format that can be repeated for different characters across a series." },
        { title: "The Idea", text: "One large portrait, small stills in red frames, and a strict grid that every poster follows." },
        { title: "The Outcome", text: "A flexible template that keeps the series consistent while each poster still feels unique." }
      ]
    },
    {
      slug: "retro-armchair",
      title: "Retro Armchair Campaign",
      desc: "Print ad for a furniture brand",
      summary: "A bold red print ad that makes a leather armchair the star of the room.",
      image: { src: "assets/images/work-retro-armchair.jpg", width: 1200, height: 1596,
               alt: "Red print ad with a tan leather armchair under the headline “Retro never felt so right!”" },
      imgClass: "project-card__img--armchair",
      client: "Furniture brand (concept)",
      year: "2023",
      role: "Layout, copy, retouching",
      tools: ["Photoshop", "Illustrator"],
      overview: [
        "A print ad for a mid-century style armchair. The product is warm tan leather, so a strong red background makes it pop without any extra props.",
        "The headline “Retro never felt so right!” sets a playful tone and connects the chair to the brand’s vintage collection."
      ],
      steps: [
        { title: "The Brief", text: "Launch a hero product in magazines with a clean, confident ad that feels retro but not dated." },
        { title: "The Idea", text: "One product, one colour, one line. Let the chair’s shape and texture carry the page." },
        { title: "The Outcome", text: "A simple ad system that extends to other pieces in the collection by swapping the product and colour." }
      ]
    },
    {
      slug: "retro-ride",
      title: "Retro Ride Poster",
      desc: "Typographic event poster",
      summary: "A red scooter rides through oversized lettering for a vintage ride meetup.",
      image: { src: "assets/images/work-retro-ride.jpg", width: 1200, height: 1608,
               alt: "Typographic poster of a red retro scooter in front of oversized red lettering" },
      imgClass: "project-card__img--ride",
      client: "Scooter club meetup (concept)",
      year: "2022",
      role: "Typography, poster design",
      tools: ["Illustrator", "Photoshop"],
      overview: [
        "An event poster where the type is the backdrop. The huge letters fill the frame and the scooter sits in front, so the poster reads as one image from across the street.",
        "Matching the scooter to the lettering in the same red keeps the palette tight and the message clear."
      ],
      steps: [
        { title: "The Brief", text: "Promote a vintage scooter ride with a poster that works on walls, shop windows and social." },
        { title: "The Idea", text: "Oversized type as scenery, with the scooter breaking the letters to create depth." },
        { title: "The Outcome", text: "A bold poster with a clear hierarchy: the ride first, then the date and place." }
      ]
    },
    {
      slug: "televisao",
      title: "Televisão",
      desc: "Bold type and product poster",
      summary: "A vintage TV set framed by repeating lettering in a loud orange.",
      image: { src: "assets/images/work-televisao.jpg", width: 564, height: 705,
               alt: "Orange poster of a vintage television set over repeated “televisão” lettering" },
      imgClass: "project-card__img--tv",
      client: "Self-initiated",
      year: "2022",
      role: "Typography, product poster",
      tools: ["Illustrator", "Photoshop"],
      overview: [
        "A type experiment built around a vintage television. The word “televisão” repeats behind the set like a broadcast signal, turning the text into texture.",
        "The single orange tone and the heavy type give the poster a confident, retro-modern look."
      ],
      steps: [
        { title: "The Brief", text: "Explore how repeated type can become a pattern without losing readability." },
        { title: "The Idea", text: "Stack the word in rows behind the product, like lines on an old TV screen." },
        { title: "The Outcome", text: "A playful poster that’s become a go-to reference for my type-led work." }
      ]
    },
    {
      slug: "trail-sneaker",
      title: "Trail Sneaker Editorial",
      desc: "Product ad layout",
      summary: "Collage-style hands present a green trail sneaker like a found treasure.",
      image: { src: "assets/images/work-trail-sneaker.jpg", width: 736, height: 920,
               alt: "Collage-style ad of hands holding a green trail sneaker" },
      imgClass: "project-card__img--sneaker",
      mediaClass: "project-card__media--zoom",
      client: "Outdoor footwear (concept)",
      year: "2023",
      role: "Art direction, collage, layout",
      tools: ["Photoshop"],
      overview: [
        "An editorial ad for a trail sneaker. Cut-out hands hold the shoe up like something precious, mixing a handmade collage feel with clean product photography.",
        "The green of the sneaker leads the palette, tying the product to the outdoors without showing a single tree."
      ],
      steps: [
        { title: "The Brief", text: "Present a technical shoe in a way that feels human and editorial, not like a catalogue." },
        { title: "The Idea", text: "A paper-collage look with hands offering the product straight to the reader." },
        { title: "The Outcome", text: "A layout that works as a full-page magazine ad and as a crop for social posts." }
      ]
    }
  ];

  const root = document.querySelector("[data-project]");
  if (!root) return;

  const slug = new URLSearchParams(window.location.search).get("p");
  const index = Math.max(0, PROJECTS.findIndex((p) => p.slug === slug));
  const project = PROJECTS[index];

  const $ = (sel) => root.querySelector(sel);
  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  };

  // Page meta
  document.title = project.title + " — Kazi Nazim, Visual Designer";
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", project.title + ": " + project.summary);

  // Header
  const title = $("[data-project-title]");
  title.textContent = project.title;
  title.setAttribute("data-text", project.title);
  $("[data-project-summary]").textContent = project.summary;

  // Image
  const img = $("[data-project-image]");
  img.src = project.image.src;
  img.alt = project.image.alt;
  img.width = project.image.width;
  img.height = project.image.height;

  // Overview
  $("[data-project-overview]").replaceChildren(...project.overview.map((text) => el("p", "", text)));

  // Facts
  $("[data-project-client]").textContent = project.client;
  $("[data-project-year]").textContent = project.year;
  $("[data-project-role]").textContent = project.role;
  $("[data-project-tools]").replaceChildren(...project.tools.map((tool) => el("li", "tag", tool)));

  // The Brief / The Idea / The Outcome (inside the overview card)
  $("[data-project-steps]").replaceChildren(
    ...project.steps.map((step) => {
      const block = el("div", "project-detail__block");
      block.append(
        el("h2", "project-detail__heading", step.title),
        el("p", "project-detail__text", step.text)
      );
      return block;
    })
  );
})();
