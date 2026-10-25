# Photo shot list

Save each photo in `src/assets/photos/`, named after its slot: for example `hero.jpg` or `cut-ribeye.webp`. JPG, PNG, WebP and AVIF all work, and the name is not case-sensitive. The build crops each photo to its slot and serves it as AVIF/WebP in several sizes, so you can drop in full-size camera exports. Until a slot has a photo, the site shows a dark placeholder labeled with the slot name.

**Size:** at least 2000px on the long edge for `hero` and `hearth-wide`, and 1600px for everything else.
**Style:** low-key and warm, lit by fire or candlelight, with deep shadows. Avoid flash and bright white backgrounds, which will clash with the dark site.
**Crop:** photos are center-cropped to the ratio below. Keep the subject near the middle. Arch frames also round off the top corners.

| Slot | Ratio | Where it appears | What to shoot |
|---|---|---|---|
| `hero` | 4:5 portrait | Home, hero arch | A steak on the grate over glowing alder coals, flames licking up. Tight, moody, lit by the fire. |
| `hearth-wide` | 16:9 landscape | Home, full-width band behind the chef quote | The open kitchen from the dining room: the hearth, cooks working, warm light, dark surroundings. |
| `dry-age` | 3:2 landscape | Story, “The beef” (cropped 21:9) | Inside the dry-aging room: rows of bone-in loins on racks, cool light. |
| `chef` | 4:5 portrait | Story, “The chef” arch | The chef finishing a plate at the pass with tweezers, the hearth glowing behind her. |
| `building` | 3:2 landscape | Story timeline; Visit map cover (cropped 4:3) | The 1890s brick building from the street at dusk, windows lit. |
| `cut-ribeye` | 4:5 portrait | Home cuts showcase (arch) | Bone-in ribeye, sliced, on a dark plate. Overhead or 45°. |
| `cut-strip` | 4:5 portrait | Home cuts showcase (arch) | New York strip, sliced to show the crust and a medium-rare center. |
| `cut-filet` | 4:5 portrait | Home cuts showcase (arch) | Filet mignon, whole, with a glossy pan sauce. |
| `cut-porterhouse` | 4:5 portrait | Home cuts showcase (arch) | Porterhouse for two on a carving board, carved off the bone. |
| `cut-wagyu` | 4:5 portrait | Home cuts showcase (arch) | Washington wagyu, thin slices fanned out, heavy marbling visible. |
| `private-library` | 4:5 portrait | Home teaser; Private dining | The Library private room: one long table set for dinner, bookshelves, low light. |
| `private-cellar` | 4:5 portrait | Private dining | The Cellar room: a table among the wine racks, set for 8. |
| `private-buyout` | 3:2 landscape | Private dining | The full dining room set for an event: long tables, flowers, candles. |
| `gallery-01` | 4:5 portrait | Gallery | Bartender pouring a stirred drink. |
| `gallery-02` | 3:2 landscape | Gallery | Shellfish tower on ice. |
| `gallery-03` | 4:5 portrait | Gallery | Hands carving a steak tableside. |
| `gallery-04` | 1:1 square | Gallery | Detail: alder logs stacked by the hearth. |
| `gallery-05` | 3:2 landscape | Gallery | The bar from the end, bottles backlit. |
| `gallery-06` | 4:5 portrait | Gallery | Sides on the table: potatoes, creamed greens, mushrooms. |
| `gallery-07` | 4:5 portrait | Gallery | Wine being decanted by candlelight. |
| `gallery-08` | 3:2 landscape | Gallery | A table of friends mid-laugh, shot from a distance. |
| `gallery-09` | 1:1 square | Gallery | Detail: the brass door handle or house sign. |
| `gallery-10` | 4:5 portrait | Gallery | Dessert: baked Alaska being torched. |
| `gallery-11` | 3:2 landscape | Gallery | Pioneer Square street at night, the restaurant’s windows glowing. |
| `gallery-12` | 4:5 portrait | Gallery | Embers close up. |

To change alt text, edit the page that uses the slot. Alt text lives next to each `<Photo>` tag.
