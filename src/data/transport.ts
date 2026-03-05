export type TransportType = 'bodaboda' | '4x4_car' | 'boat';

export interface TransportService {
  id: string;
  slug: string;
  name: string;
  type: TransportType;
  icon: string;
  description: string;
  longDescription: string;
  heroImage: string;
  pricingModel: string;
  priceFrom: string;
  priceNote: string;
  fuelIncluded: boolean;
  englishDriver: boolean;
  driverIncluded: boolean;
  crossBorder: boolean;
  airportPickup: string[];
  features: string[];
  bestFor: string[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface AirportTransfer {
  id: string;
  location: string;
  destination: string;
  estimatedDuration: string;
  estimatedPrice: string;
  description: string;
}

export const transportServices: TransportService[] = [
  {
    id: 'bodaboda',
    slug: 'bodaboda-motorcycle-transport',
    name: 'Boda-Boda Motorcycle Transport',
    type: 'bodaboda',
    icon: 'motorcycle',
    description:
      'Fast and affordable motorcycle transport for short trips around Kisoro and to nearby attractions. The most popular local transport option for quick, flexible travel.',
    longDescription: `Boda-boda motorcycles are the heartbeat of transport in Kisoro and across rural Uganda. These motorcycle taxis are the fastest and most affordable way to travel short to medium distances, navigating narrow roads and hillside paths that larger vehicles cannot reach.

Our boda-boda drivers are experienced, English-speaking locals who know every road, trail, and shortcut in the Kisoro area. Whether you need a ride to a trailhead, a national park gate, or Lake Mutanda, our drivers will get you there safely and efficiently.

Boda-boda transport is ideal for solo travellers or pairs who want a quick, authentic, and budget-friendly way to get around. Helmets are provided for passenger safety, and all fuel costs are included in the fare.

**Popular boda-boda routes:**
- Kisoro Town to Mgahinga National Park gate: $30
- Kisoro to Lake Mutanda: $25
- Kisoro to Bwindi trailhead: $30
- Short trips within Kisoro Town: $2-5

Note: Boda-boda transport is not available for cross-border travel to Rwanda.`,
    heroImage: '/images/bodaboda-transport.jpg',
    pricingModel: 'Per trip / Per day',
    priceFrom: '$2',
    priceNote: 'Short trips from $2. Day hire available. All fares include fuel and driver.',
    fuelIncluded: true,
    englishDriver: true,
    driverIncluded: true,
    crossBorder: false,
    airportPickup: [],
    features: [
      'Fast and flexible local travel',
      'English-speaking drivers',
      'Fuel included in all fares',
      'Helmets provided',
      'Reaches remote trailheads and villages',
      'Most affordable transport option',
    ],
    bestFor: [
      'Short trips around Kisoro',
      'Solo travellers and couples',
      'Budget-conscious adventurers',
      'Getting to park gates and trailheads',
      'Authentic local travel experience',
    ],
    seo: {
      title: 'Boda-Boda Transport in Kisoro | Local Motorcycle Taxis | Virunga Adventure Tours',
      description:
        'Affordable boda-boda motorcycle transport in Kisoro, Uganda. Fast, flexible local travel with English-speaking drivers. Book through Virunga Adventure Tours.',
      keywords: [
        'Kisoro transport',
        'boda-boda Uganda',
        'motorcycle taxi Kisoro',
        'transport to Mgahinga',
        'local transport Kisoro',
        'budget transport Uganda',
      ],
    },
  },
  {
    id: '4x4-car',
    slug: '4x4-safari-car-with-driver',
    name: '4x4 Safari Car with Driver',
    type: '4x4_car',
    icon: 'car',
    description:
      'Comfortable, reliable 4x4 safari vehicles with experienced English-speaking drivers. Perfect for airport transfers, multi-day tours, and cross-border travel between Uganda and Rwanda.',
    longDescription: `Our 4x4 safari vehicles are the premium transport choice for travellers who want comfort, reliability, and flexibility. Each vehicle comes with an experienced, English-speaking driver who doubles as a knowledgeable local guide.

These rugged yet comfortable Toyota Land Cruisers and similar 4x4 vehicles are built for the terrain of southwestern Uganda — from paved highways to unpaved mountain roads leading to national park gates and remote lodges.

**Airport Transfers:**
Our 4x4 vehicles handle long-distance transfers from all major arrival points:
- Entebbe International Airport to Kisoro (8-10 hours scenic drive)
- Kampala to Kisoro (7-9 hours)
- Kigali, Rwanda to Kisoro (3-4 hours, cross-border)

**Cross-Border Capability:**
Unlike other transport options, our 4x4 vehicles are fully documented for cross-border travel between Uganda and Rwanda. This makes them ideal for travellers combining gorilla trekking in Bwindi with a Kigali city tour or connecting through Kigali International Airport.

**Multi-Day Hire:**
For multi-day safaris, the vehicle and driver stay with you throughout your trip, providing door-to-door service between activities, accommodations, and attractions.

All prices include fuel, driver accommodation and meals, and vehicle insurance. Our drivers are professional, punctual, and committed to making your journey as comfortable as possible.`,
    heroImage: '/images/4x4-safari-car.jpg',
    pricingModel: 'Per day',
    priceFrom: '$150',
    priceNote:
      'Per day including driver, fuel, and insurance. Multi-day discounts available. Airport transfers priced per route.',
    fuelIncluded: true,
    englishDriver: true,
    driverIncluded: true,
    crossBorder: true,
    airportPickup: ['Entebbe International Airport', 'Kampala', 'Kigali'],
    features: [
      'Rugged 4x4 vehicles (Toyota Land Cruiser or similar)',
      'Experienced English-speaking driver-guide',
      'Fuel included in all prices',
      'Cross-border capability (Uganda-Rwanda)',
      'Airport transfers from Entebbe, Kampala, and Kigali',
      'Multi-day hire available',
      'Vehicle and driver fully insured',
      'Comfortable for up to 6 passengers',
    ],
    bestFor: [
      'Airport transfers and long-distance travel',
      'Multi-day safari itineraries',
      'Families and groups up to 6',
      'Cross-border Uganda-Rwanda travel',
      'Comfortable access to remote lodges and parks',
    ],
    seo: {
      title: '4x4 Safari Car Hire with Driver | Airport Transfers | Virunga Adventure Tours',
      description:
        'Hire a 4x4 safari car with driver in Uganda. Airport transfers from Entebbe, Kampala, and Kigali to Kisoro. Cross-border Uganda-Rwanda transport. Book now.',
      keywords: [
        'transport from Kigali to Kisoro',
        'transport from Entebbe to Bwindi',
        '4x4 car hire Uganda',
        'safari car with driver',
        'airport transfer Kisoro',
        'Uganda Rwanda transport',
        'Kampala to Kisoro transport',
      ],
    },
  },
  {
    id: 'boat',
    slug: 'boat-transport-lake-mutanda',
    name: 'Boat Transport on Lake Mutanda',
    type: 'boat',
    icon: 'ship',
    description:
      'Travel by boat across the beautiful waters of Lake Mutanda. Scenic water transport with experienced captains, perfect for reaching lakeside lodges and exploring the islands.',
    longDescription: `Lake Mutanda is one of Uganda's most beautiful lakes, and our boat transport service lets you experience it from the water. Whether you need practical transport to a lakeside lodge or want to combine travel with sightseeing, our boats offer a unique and memorable way to get around.

Our motorboats are operated by experienced local captains who know every island, inlet, and shoreline of the lake. Each boat comes equipped with essential safety equipment and can accommodate up to 10 passengers.

**Popular Boat Routes:**
- Lakeside lodge transfers
- Island hopping tours
- Scenic transport along the lake shore
- Connection to nature walk trailheads

Boat transport can be combined with our Canoeing & Boat Tour experience for a full day on the water. The views of the Virunga volcanoes reflected in the crystal-clear waters are among the most spectacular in all of East Africa.

All boat rides include fuel, captain, and basic safety equipment. We recommend combining boat transport with a nature walk or a stay at the Mutanda Eco Community Centre for the ultimate Lake Mutanda experience.`,
    heroImage: '/images/boat-transport.jpg',
    pricingModel: 'Per trip',
    priceFrom: '$50',
    priceNote:
      'Base rate of $50 per trip plus $35 per additional person. Fuel and captain included. Maximum 10 passengers.',
    fuelIncluded: true,
    englishDriver: true,
    driverIncluded: true,
    crossBorder: false,
    airportPickup: [],
    features: [
      'Motorboat with experienced captain',
      'Fuel and safety equipment included',
      'Accommodates up to 10 passengers',
      'Scenic lake transport with volcano views',
      'Lakeside lodge transfers',
      'Combinable with canoeing and nature walks',
    ],
    bestFor: [
      'Reaching lakeside accommodations',
      'Scenic travel on Lake Mutanda',
      'Groups and families',
      'Combining transport with sightseeing',
      'Photography enthusiasts',
    ],
    seo: {
      title: 'Boat Transport on Lake Mutanda | Scenic Lake Travel | Virunga Adventure Tours',
      description:
        'Boat transport on Lake Mutanda, Kisoro, Uganda. Scenic lake travel with experienced captains. Lodge transfers and island hopping. Book with Virunga Adventure Tours.',
      keywords: [
        'Lake Mutanda boat transport',
        'Lake Mutanda activities',
        'boat hire Kisoro',
        'lake transport Uganda',
        'Kisoro boat service',
        'Lake Mutanda lodge transfer',
      ],
    },
  },
];

export const airportTransfers: AirportTransfer[] = [
  {
    id: 'entebbe-kisoro',
    location: 'Entebbe International Airport',
    destination: 'Kisoro',
    estimatedDuration: '8-10 hours',
    estimatedPrice: '$350-450',
    description:
      'Scenic drive through western Uganda, passing through Queen Elizabeth National Park. Comfortable 4x4 with professional driver. Rest stops included.',
  },
  {
    id: 'kampala-kisoro',
    location: 'Kampala',
    destination: 'Kisoro',
    estimatedDuration: '7-9 hours',
    estimatedPrice: '$300-400',
    description:
      'Direct transfer from Kampala via the western highway. Pass through scenic countryside and rolling hills. Professional driver with 4x4 vehicle.',
  },
  {
    id: 'kigali-kisoro',
    location: 'Kigali, Rwanda',
    destination: 'Kisoro',
    estimatedDuration: '3-4 hours',
    estimatedPrice: '$150-200',
    description:
      'Cross-border transfer from Kigali via the Cyanika border crossing. The fastest route to Kisoro. Border crossing assistance included.',
  },
];

export const transportDescription = `Virunga Adventure Tours offers reliable transportation services across Uganda and Rwanda. Guests travel with professional English-speaking drivers in comfortable 4x4 safari vehicles. Local transport options include boda-boda motorcycles for quick trips and boats on Lake Mutanda. Airport transfers are available from Entebbe International Airport, Kampala, and Kigali. Cross-border transport between Rwanda and Uganda is seamlessly arranged for travellers visiting both countries.`;

export const getTransportBySlug = (slug: string): TransportService | undefined => {
  return transportServices.find((t) => t.slug === slug);
};
