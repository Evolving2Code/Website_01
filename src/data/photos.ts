// Every photo slot on the site. To fill a slot, save an image in
// src/assets/photos/ named after its key (e.g. hero.jpg or hero.webp).
// Until then the slot renders a sized placeholder. PHOTOS.md is the same
// list written up as a shot list.

export type PhotoSlot = {
  /** Width / height. Used for the placeholder and to crop real photos. */
  ratio: number;
  shot: string;
};

export const photoSlots = {
  hero: { ratio: 4 / 5, shot: 'A steak on the grate over glowing alder coals, flames licking up. Tight, moody, lit by the fire.' },
  'hearth-wide': { ratio: 16 / 9, shot: 'The open kitchen from the dining room: the hearth, cooks working, warm light, dark surroundings.' },
  'dry-age': { ratio: 3 / 2, shot: 'Inside the dry-aging room: rows of bone-in loins on racks, cool light.' },
  chef: { ratio: 4 / 5, shot: 'Portrait of the chef at the hearth, sleeves rolled, looking at the fire rather than the camera.' },
  building: { ratio: 3 / 2, shot: 'The 1890s brick building from the street at dusk, windows lit.' },

  'cut-ribeye': { ratio: 4 / 5, shot: 'Bone-in ribeye, sliced, on a dark plate. Overhead or 45°.' },
  'cut-strip': { ratio: 4 / 5, shot: 'New York strip, sliced to show the crust and a medium-rare center.' },
  'cut-filet': { ratio: 4 / 5, shot: 'Filet mignon, whole, with a glossy pan sauce.' },
  'cut-porterhouse': { ratio: 4 / 5, shot: 'Porterhouse for two on a carving board, carved off the bone.' },
  'cut-wagyu': { ratio: 4 / 5, shot: 'Washington wagyu, thin slices fanned out, heavy marbling visible.' },

  'private-library': { ratio: 4 / 5, shot: 'The Library private room: one long table set for dinner, bookshelves, low light.' },
  'private-cellar': { ratio: 4 / 5, shot: 'The Cellar room: a table among the wine racks, set for 8.' },
  'private-buyout': { ratio: 3 / 2, shot: 'The full dining room set for an event: long tables, flowers, candles.' },

  'gallery-01': { ratio: 4 / 5, shot: 'Bartender pouring a stirred drink.' },
  'gallery-02': { ratio: 3 / 2, shot: 'Shellfish tower on ice.' },
  'gallery-03': { ratio: 4 / 5, shot: 'Hands carving a steak tableside.' },
  'gallery-04': { ratio: 1, shot: 'Detail: alder logs stacked by the hearth.' },
  'gallery-05': { ratio: 3 / 2, shot: 'The bar from the end, bottles backlit.' },
  'gallery-06': { ratio: 4 / 5, shot: 'Sides on the table: potatoes, creamed greens, mushrooms.' },
  'gallery-07': { ratio: 4 / 5, shot: 'Wine being decanted by candlelight.' },
  'gallery-08': { ratio: 3 / 2, shot: 'A table of friends mid-laugh, shot from a distance.' },
  'gallery-09': { ratio: 1, shot: 'Detail: the brass door handle or house sign.' },
  'gallery-10': { ratio: 4 / 5, shot: 'Dessert: baked Alaska being torched.' },
  'gallery-11': { ratio: 3 / 2, shot: 'Pioneer Square street at night, the restaurant’s windows glowing.' },
  'gallery-12': { ratio: 4 / 5, shot: 'Embers close up.' },
} satisfies Record<string, PhotoSlot>;

export type PhotoName = keyof typeof photoSlots;
