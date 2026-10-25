import type { PhotoName } from './photos';

export type MenuItem = { name: string; detail?: string; price: string };
export type MenuSection = { title: string; note?: string; items: MenuItem[] };
export type Menu = { id: string; label: string; intro: string; sections: MenuSection[] };

export type Cut = {
  name: string;
  weight: string;
  age: string;
  origin: string;
  price: string;
  note: string;
  photo: PhotoName;
};

// The cuts featured on the home page and at the top of the dinner menu.
export const cuts: Cut[] = [
  {
    name: 'Bone-in ribeye',
    weight: '22 oz',
    age: '45 days',
    origin: 'Kittitas Valley, WA',
    price: '$92',
    note: 'The cut the fire was built for. The cap renders down and crisps over the coals.',
    photo: 'cut-ribeye',
  },
  {
    name: 'New York strip',
    weight: '16 oz',
    age: '30 days',
    origin: 'Kittitas Valley, WA',
    price: '$74',
    note: 'Tight grain and a clean, beefy finish. Our cooks’ favorite.',
    photo: 'cut-strip',
  },
  {
    name: 'Filet mignon',
    weight: '8 oz',
    age: '21 days',
    origin: 'Palouse, WA',
    price: '$68',
    note: 'Wrapped in caul fat and basted with alder-smoked butter.',
    photo: 'cut-filet',
  },
  {
    name: 'Porterhouse for two',
    weight: '40 oz',
    age: '45 days',
    origin: 'Kittitas Valley, WA',
    price: '$185',
    note: 'Strip and tenderloin on one bone, carved at the table.',
    photo: 'cut-porterhouse',
  },
  {
    name: 'Washington wagyu zabuton',
    weight: '6 oz',
    age: '14 days',
    origin: 'Okanogan Highlands, WA',
    price: '$110',
    note: 'Seared hard and fast, sliced thin. Rich enough to share.',
    photo: 'cut-wagyu',
  },
];

export const menus: Menu[] = [
  {
    id: 'dinner',
    label: 'Dinner',
    intro:
      'Every steak is cooked over alder and rested before it reaches you. Ask your server what came out of the aging room this week.',
    sections: [
      {
        title: 'Raw bar',
        items: [
          { name: 'Puget Sound oysters', detail: 'Half dozen, mignonette, fresh horseradish', price: '$27' },
          { name: 'Geoduck crudo', detail: 'Yuzu kosho, cucumber, shiso', price: '$29' },
          { name: 'Dungeness crab cocktail', detail: 'Smoked tomato, celery leaf', price: '$34' },
          { name: 'Shellfish tower', detail: 'Oysters, crab, spot prawns, mussels, scallop', price: '$145' },
        ],
      },
      {
        title: 'To start',
        items: [
          { name: 'Beef tartare', detail: 'Cured yolk, capers, rye crisps', price: '$24' },
          { name: 'Ember-roasted bone marrow', detail: 'Parsley salad, grilled sourdough', price: '$22' },
          { name: 'Little gem Caesar', detail: 'White anchovy, smoked parmesan', price: '$18' },
          { name: 'Grilled octopus', detail: 'Romesco, charred lemon, olive', price: '$26' },
          { name: 'French onion soup', detail: 'Beef bone broth, Gruyère, alder-toasted bread', price: '$17' },
        ],
      },
      {
        title: 'From the fire',
        note: 'Served with alder-smoked butter and flaky salt. Add béarnaise, au poivre or chimichurri, $5.',
        items: [
          { name: 'Bone-in ribeye', detail: '22 oz, 45-day dry-aged, Kittitas Valley', price: '$92' },
          { name: 'New York strip', detail: '16 oz, 30-day dry-aged, Kittitas Valley', price: '$74' },
          { name: 'Filet mignon', detail: '8 oz, 21-day dry-aged, Palouse', price: '$68' },
          { name: 'Porterhouse for two', detail: '40 oz, 45-day dry-aged, carved tableside', price: '$185' },
          { name: 'Washington wagyu zabuton', detail: '6 oz, Okanogan Highlands', price: '$110' },
          { name: 'Butcher’s cut', detail: 'Changes nightly, ask your server', price: 'MP' },
        ],
      },
      {
        title: 'Not steak',
        items: [
          { name: 'Copper River king salmon', detail: 'In season. Cedar plank, sorrel, fennel', price: '$54' },
          { name: 'Half chicken', detail: 'Brined, fire-roasted, salsa verde', price: '$38' },
          { name: 'Lamb chops', detail: 'Ellensburg lamb, mint yogurt, pistachio', price: '$62' },
          { name: 'Smoked carrots', detail: 'Farro, labneh, hazelnut dukkah', price: '$32' },
        ],
      },
      {
        title: 'Sides',
        note: 'Sized to share between two or three.',
        items: [
          { name: 'Pommes purée', detail: 'Brown butter, chives', price: '$15' },
          { name: 'Ember-baked potato', detail: 'Crème fraîche, bacon, aged cheddar', price: '$16' },
          { name: 'Creamed greens', detail: 'Kale, chard, nutmeg', price: '$14' },
          { name: 'Wild mushrooms', detail: 'Chanterelles, garlic, thyme', price: '$19' },
          { name: 'Charred broccolini', detail: 'Chili, lemon, garlic crumbs', price: '$14' },
          { name: 'Beef-fat fries', detail: 'Aioli', price: '$12' },
        ],
      },
      {
        title: 'Dessert',
        items: [
          { name: 'Baked Alaska', detail: 'Huckleberry ice cream, torched meringue', price: '$18' },
          { name: 'Chocolate cake', detail: 'Six layers, salted caramel, crème fraîche', price: '$16' },
          { name: 'Burnt honey cheesecake', detail: 'Skagit Valley strawberries', price: '$15' },
          { name: 'Cheese', detail: 'Three Washington cheeses, honeycomb, walnut bread', price: '$22' },
        ],
      },
    ],
  },
  {
    id: 'drinks',
    label: 'Wine & cocktails',
    intro:
      'Six hundred bottles in the cellar, with Washington and Oregon reds at the center. Our sommelier will happily pour you a taste before you commit.',
    sections: [
      {
        title: 'Cocktails',
        items: [
          { name: 'Alder Old Fashioned', detail: 'Bourbon, alder-smoked demerara, orange', price: '$19' },
          { name: 'Pioneer Martini', detail: 'Local gin, dry vermouth, lemon oil', price: '$18' },
          { name: 'Rainier Cherry Manhattan', detail: 'Rye, sweet vermouth, house cherry', price: '$19' },
          { name: 'Sound Side Gimlet', detail: 'Gin, lime, douglas fir', price: '$17' },
          { name: 'Garden Spritz', detail: 'Zero proof. Verjus, rhubarb, soda', price: '$12' },
        ],
      },
      {
        title: 'Wine by the glass',
        items: [
          { name: 'Sparkling', detail: 'Blanc de blancs, Willamette Valley', price: '$18' },
          { name: 'White', detail: 'Chardonnay, Yakima Valley', price: '$17' },
          { name: 'Red', detail: 'Syrah, Walla Walla Valley', price: '$19' },
          { name: 'Red', detail: 'Cabernet sauvignon, Red Mountain', price: '$22' },
          { name: 'Red', detail: 'Pinot noir, Eola-Amity Hills', price: '$20' },
        ],
      },
      {
        title: 'From the cellar',
        note: 'A selection from the full list, which your server will bring to the table.',
        items: [
          { name: 'Red Mountain cabernet', detail: '2019', price: '$165' },
          { name: 'Walla Walla syrah', detail: '2020', price: '$140' },
          { name: 'Columbia Valley Bordeaux blend', detail: '2018', price: '$210' },
          { name: 'Napa Valley cabernet', detail: '2016', price: '$380' },
          { name: 'Barolo', detail: '2017', price: '$260' },
        ],
      },
      {
        title: 'Spirits',
        items: [
          { name: 'Washington whiskey flight', detail: 'Three pours, one ounce each', price: '$28' },
          { name: 'Single malt', detail: 'Ask for the list', price: 'From $16' },
          { name: 'Amaro', detail: 'Six on hand', price: 'From $12' },
        ],
      },
    ],
  },
];
