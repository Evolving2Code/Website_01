# Image prompts for Google Flow

One prompt per photo slot on the site. Save each result in `src/assets/photos/` under the slot name shown (for example `hero.png`). The site crops each image to its frame automatically, so generate at the ratio listed and keep the subject near the center.

## Ratios

| Site frame | Slots | Generate in Flow at | Notes |
|---|---|---|---|
| 4:5 portrait | `hero`, `chef`, `cut-*`, `private-library`, `private-cellar`, gallery portraits | **3:4 portrait**, or 9:16 if 3:4 isn't offered | 9:16 loses some top and bottom, so keep the subject in the middle third |
| 3:2 landscape | `dry-age`, `building`, `private-buyout`, gallery landscapes | **16:9 landscape** | A little gets cropped from the sides |
| 16:9 landscape | `hearth-wide` | **16:9 landscape** | Used full-width behind text, so leave darker space on the left |
| 1:1 square | `gallery-04`, `gallery-09` | **1:1 square** | |

The arched frames (`hero`, `chef`, the cuts and the private rooms) also round off the top corners, so keep the important parts of the image out of them.

If Flow offers an upscaled download (2K), use it. The site needs at least about 1600px on the long edge, and 2000px for `hero` and `hearth-wide`.

## Keeping the set consistent

Every prompt ends with the same style line, so the photos look like they came from one shoot:

> *Editorial restaurant photography, low-key lighting from firelight and candles only, warm amber highlights, deep near-black shadows, shallow depth of field, 50mm lens, subtle film grain, no text, no logos, no watermarks.*

For the chef, generate `chef` first. If Flow lets you use it as a reference image (ingredients), add it to `hearth-wide` and `gallery-03` so the same person appears in each.

---

## Home and story

### `hero` (3:4)
Close-up of a thick bone-in ribeye resting on a cast-iron grate over glowing orange alder wood coals, small flames licking up around the edges, a dark seared crust glistening with rendered fat, wisps of smoke rising, sparks drifting upward, everything beyond the grate falling into black. Steak centered in the frame. Editorial restaurant photography, low-key lighting from firelight and candles only, warm amber highlights, deep near-black shadows, shallow depth of field, 50mm lens, subtle film grain, no text, no logos, no watermarks.

### `hearth-wide` (16:9)
Wide view across a dimly lit restaurant dining room toward an open kitchen with a large brick wood-fired hearth, orange fire glowing inside it, two cooks in dark aprons working at the grill and seen in soft focus, exposed brick walls, the dining room in the foreground almost black with a few candlelit tables. Hearth on the right half of the frame, left third left dark. Editorial restaurant photography, low-key lighting from firelight and candles only, warm amber highlights, deep near-black shadows, shallow depth of field, 50mm lens, subtle film grain, no text, no logos, no watermarks.

### `dry-age` (16:9)
Inside a small dry-aging room: rows of whole bone-in beef loins on stainless steel racks, deep red meat with a dark, aged outer crust, a wall of pink Himalayan salt bricks glowing softly behind them, cool dim light mixed with warm salt-wall glow. The racks run horizontally through the middle of the frame. Editorial restaurant photography, low-key lighting, warm amber highlights, deep near-black shadows, shallow depth of field, 50mm lens, subtle film grain, no text, no logos, no watermarks.

### `chef` (3:4)
Portrait of a woman chef in her early forties standing beside a brick wood-fired hearth, dark canvas apron, sleeves rolled to the elbow, hair tied back, looking down into the fire rather than at the camera, her face and forearms lit warm orange by the flames, background falling to black. Calm, focused, confident. Editorial restaurant photography, low-key lighting from firelight only, warm amber highlights, deep near-black shadows, shallow depth of field, 50mm lens, subtle film grain, no text, no logos, no watermarks.

### `building` (16:9)
A three-story 1890s red brick and sandstone commercial building on a quiet brick-paved street in a historic Pacific Northwest downtown at blue hour, arched ground-floor windows glowing warm amber from a candlelit restaurant inside, iron street lamps, wet pavement reflecting the light, light mist. Building centered. Architectural photography, moody, low-key, warm window light against a deep blue dusk, subtle film grain, no readable signs, no text, no logos, no watermarks.

## The cuts (home page)

### `cut-ribeye` (3:4)
A bone-in ribeye sliced into thick strips beside the bone on a dark matte stoneware plate, a deep charred crust, a rosy medium-rare center, a pat of melting butter, a few flakes of salt, a dark walnut table. Overhead three-quarter angle, steak centered. Editorial food photography, low-key lighting from firelight and candles only, warm amber highlights, deep near-black shadows, shallow depth of field, 50mm lens, subtle film grain, no text, no logos, no watermarks.

### `cut-strip` (3:4)
A New York strip steak sliced on the bias on a dark wooden board, slices fanned to show a crisp dark crust and an even pink medium-rare center, glistening juices, a sprig of thyme, a dark background. 45-degree angle, steak centered. Editorial food photography, low-key lighting from firelight and candles only, warm amber highlights, deep near-black shadows, shallow depth of field, 50mm lens, subtle film grain, no text, no logos, no watermarks.

### `cut-filet` (3:4)
A tall, round filet mignon on a dark plate, glossy dark red-wine pan sauce pooled around it, a seared crust with a sheen of butter, one roasted garlic clove, candlelight reflecting on the sauce. Low side angle, steak centered. Editorial food photography, low-key lighting from firelight and candles only, warm amber highlights, deep near-black shadows, shallow depth of field, 50mm lens, subtle film grain, no text, no logos, no watermarks.

### `cut-porterhouse` (3:4)
A large porterhouse steak for two on a wooden carving board, the strip and tenderloin carved off the T-bone and sliced, the bone still in place, a carving knife and fork resting beside it, charred crust, pink centers. Overhead angle, board centered. Editorial food photography, low-key lighting from firelight and candles only, warm amber highlights, deep near-black shadows, shallow depth of field, 50mm lens, subtle film grain, no text, no logos, no watermarks.

### `cut-wagyu` (3:4)
Thin slices of heavily marbled wagyu beef, seared only on the outside, fanned out on a small black slate plate, intricate white marbling visible, a few flakes of salt and a dab of fresh wasabi. Close-up, 45-degree angle, plate centered. Editorial food photography, low-key lighting from firelight and candles only, warm amber highlights, deep near-black shadows, shallow depth of field, 50mm lens, subtle film grain, no text, no logos, no watermarks.

## Private dining

### `private-library` (3:4)
An intimate private dining room with one long walnut table set for a formal dinner, white napkins, crystal glasses, brass candlesticks with lit tapers, walls of dark wooden bookshelves filled with old books, an interior window looking out onto a glowing kitchen fire, no people. Shot down the length of the table, centered. Interior photography, low-key lighting from candles only, warm amber highlights, deep near-black shadows, subtle film grain, no text, no logos, no watermarks.

### `private-cellar` (3:4)
A single round table set for eight in a brick-vaulted wine cellar, surrounded floor to ceiling by wooden wine racks full of bottles, candles on the table, glasses ready for a tasting, a decanter at the center, no people. Table centered. Interior photography, low-key lighting from candles only, warm amber highlights, deep near-black shadows, subtle film grain, no text, no logos, no watermarks.

### `private-buyout` (16:9)
A whole restaurant dining room set for a private evening event: long banquet tables in rows, low arrangements of dark red and white flowers, dozens of candles, exposed brick walls and timber beams, a glowing wood-fired hearth at the far end, no guests yet. Wide shot, centered. Interior photography, low-key lighting from candles and firelight only, warm amber highlights, deep near-black shadows, subtle film grain, no text, no logos, no watermarks.

## Gallery

### `gallery-01` (3:4)
A bartender in a dark vest pouring a stirred amber cocktail from a mixing glass through a strainer into a chilled coupe on a dark wood bar, focused on the hands and the stream of liquid, backlit bottles blurred behind. Editorial restaurant photography, low-key lighting from candles and warm bar light only, warm amber highlights, deep near-black shadows, shallow depth of field, 50mm lens, subtle film grain, no readable labels, no text, no logos, no watermarks.

### `gallery-02` (16:9)
A tall two-tier shellfish tower on crushed ice: Pacific oysters on the half shell, Dungeness crab legs, spot prawns, mussels and lemon wedges, mignonette in a small bowl, on a dark table with candlelight glinting off the ice. Centered. Editorial food photography, low-key lighting from candles only, warm amber highlights, cool ice tones, deep near-black shadows, shallow depth of field, subtle film grain, no text, no logos, no watermarks.

### `gallery-03` (3:4)
Close-up of a chef's hands in a dark apron carving a large steak off the bone at the table with a long carving knife, the crust breaking, juices on the board, a guest's wine glass blurred in the foreground. Editorial restaurant photography, low-key lighting from firelight and candles only, warm amber highlights, deep near-black shadows, shallow depth of field, 50mm lens, subtle film grain, no text, no logos, no watermarks.

### `gallery-04` (1:1)
Detail of split alder logs stacked neatly beside a brick hearth, pale wood with gray-green bark, edges lit orange by a fire just out of frame, a few glowing embers on the brick floor. Still-life photography, low-key lighting from firelight only, warm amber highlights, deep near-black shadows, shallow depth of field, subtle film grain, no text, no logos, no watermarks.

### `gallery-05` (16:9)
A long, moody cocktail bar seen from one end: a dark wood and brass bar top, leather stools, backlit shelves of bottles glowing amber, a few candles on the bar, empty, receding into darkness. Interior photography, low-key lighting, warm amber highlights, deep near-black shadows, shallow depth of field, subtle film grain, no readable labels, no text, no logos, no watermarks.

### `gallery-06` (3:4)
Shared steakhouse sides on a dark table seen from above: creamy pommes purée with brown butter, a baked potato with crème fraîche and chives, creamed greens in a small cast-iron pan, golden chanterelle mushrooms, a bowl of fries, serving spoons. Overhead angle. Editorial food photography, low-key lighting from candles only, warm amber highlights, deep near-black shadows, subtle film grain, no text, no logos, no watermarks.

### `gallery-07` (3:4)
A sommelier's hands decanting red wine from a bottle into a crystal decanter over a lit candle, the deep ruby wine catching the flame, a dark background. Close-up. Editorial restaurant photography, low-key lighting from a single candle, warm amber highlights, deep near-black shadows, shallow depth of field, 50mm lens, subtle film grain, no readable labels, no text, no logos, no watermarks.

### `gallery-08` (16:9)
A table of four friends mid-laugh over dinner in a candlelit brick-walled restaurant, shot from across the room through softly blurred foreground glasses, faces turned to each other and not to the camera, steaks and wine on the table. Candid editorial photography, low-key lighting from candles only, warm amber highlights, deep near-black shadows, shallow depth of field, subtle film grain, no text, no logos, no watermarks.

### `gallery-09` (1:1)
Detail of a heavy aged-brass door handle on a dark green wooden door set in old red brick, warm light spilling from the door's small window, at night. Still-life photography, low-key lighting, warm amber highlights, deep near-black shadows, shallow depth of field, subtle film grain, no text, no logos, no watermarks.

### `gallery-10` (3:4)
A baked Alaska on a dark plate being torched, the meringue peaks caramelizing golden brown, the blue-orange torch flame visible, a slice cut away to show purple huckleberry ice cream inside. Editorial food photography, low-key lighting from the torch flame and candles, warm amber highlights, deep near-black shadows, shallow depth of field, subtle film grain, no text, no logos, no watermarks.

### `gallery-11` (16:9)
A historic brick-paved street in a Pacific Northwest old town at night after rain, old brick buildings, a restaurant's tall arched windows glowing warm amber on one side, reflections on the wet cobbles, a few pedestrians blurred in motion, iron lamp posts. Cinematic street photography, low-key, warm window light against a deep blue night, subtle film grain, no readable signs, no text, no logos, no watermarks.

### `gallery-12` (3:4)
Extreme close-up of glowing alder embers and coals in a hearth, deep orange and red, fine white ash on the edges, tiny sparks lifting off, abstract and textural. Macro photography, low-key, lit only by the embers, deep black surroundings, subtle film grain, no text, no logos, no watermarks.
