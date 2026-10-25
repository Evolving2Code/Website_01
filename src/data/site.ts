// Business details for the fictional restaurant. Everything a guest might
// need to contact or find the restaurant lives here, so it only changes once.

export const site = {
  name: 'Alder & Ash',
  tagline: 'Wood-fired steakhouse in Pioneer Square',
  description:
    'Alder & Ash is a wood-fired steakhouse in Seattle’s Pioneer Square. Washington beef, dry-aged in house and cooked over an open alder fire.',
  address: {
    street: '200 Occidental Ave S',
    city: 'Seattle',
    region: 'WA',
    postal: '98104',
    neighborhood: 'Pioneer Square',
  },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=200+Occidental+Ave+S+Seattle+WA+98104',
  geo: { lat: 47.6002, lng: -122.3335 },
  phone: '(206) 555-0142',
  phoneHref: 'tel:+12065550142',
  email: 'hello@alderandash.example',
  eventsEmail: 'events@alderandash.example',
  instagram: 'https://instagram.com/',
  hours: [
    { days: 'Monday', time: 'Closed' },
    { days: 'Tuesday – Thursday', time: '5 – 10 pm' },
    { days: 'Friday – Saturday', time: '5 – 11 pm' },
    { days: 'Sunday', time: '4 – 9 pm' },
  ],
  barNote: 'The bar opens an hour before the dining room and seats walk-ins all night.',
  parking:
    'Valet on Occidental Ave from 5 pm, $18. The Stadium Garage on 1st Ave S is a three-minute walk.',
  transit:
    'Pioneer Square Station (Link 1 Line) and the First Hill Streetcar stop at Occidental Mall are both within two blocks.',
};

export const nav = [
  { href: '/menu/', label: 'Menu' },
  { href: '/story/', label: 'Story' },
  { href: '/private-dining/', label: 'Private dining' },
  { href: '/gallery/', label: 'Gallery' },
  { href: '/visit/', label: 'Visit' },
];
