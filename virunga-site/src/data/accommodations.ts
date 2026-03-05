export type AccommodationType = 'luxury_hotel' | 'eco_lodge' | 'hostel';

export interface Accommodation {
  id: string;
  slug: string;
  name: string;
  type: AccommodationType;
  typeLabel: string;
  location: string;
  description: string;
  longDescription: string;
  heroImage: string;
  amenities: string[];
  highlights: string[];
  partnerRates: boolean;
  seasonalPricing: boolean;
  lowSeasonDiscount: number;
  bundleDiscount: number;
  priceFrom: string;
  priceNote: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

const typeLabels: Record<AccommodationType, string> = {
  luxury_hotel: 'Luxury Lodge',
  eco_lodge: 'Eco Lodge',
  hostel: 'Budget Hostel',
};

export const accommodations: Accommodation[] = [
  {
    id: 'ichumbi-gorilla-lodge',
    slug: 'ichumbi-gorilla-lodge',
    name: 'Ichumbi Gorilla Lodge',
    type: 'luxury_hotel',
    typeLabel: typeLabels.luxury_hotel,
    location: 'Bwindi Impenetrable National Park',
    description:
      'A premium lodge nestled on the edge of Bwindi Impenetrable National Park, offering luxurious rooms with stunning forest views. The perfect base for gorilla trekking adventures.',
    longDescription: `Ichumbi Gorilla Lodge is a luxury accommodation set in the lush green hills overlooking Bwindi Impenetrable National Park — a UNESCO World Heritage site and home to nearly half the world's remaining mountain gorillas.

The lodge combines modern comfort with authentic African warmth. Guests enjoy spacious rooms with en-suite bathrooms, hot showers, and private balconies offering panoramic views of the ancient rainforest.

After a day of gorilla trekking, relax in the lodge's garden terrace, enjoy a locally inspired three-course dinner, and fall asleep to the sounds of the forest. The lodge's proximity to the park gate means shorter travel times on trekking morning — a significant advantage for early starts.

Ichumbi Gorilla Lodge is a trusted partner of Virunga Adventure Tours. Guests booking accommodation together with tours receive special partner rates and bundle discounts of up to 10%.

During the low season (March-May, October-November), rates are reduced by 30%, making luxury gorilla trekking more accessible than ever.`,
    heroImage: '/images/ichumbi-lodge.jpg',
    amenities: [
      'En-suite bathrooms with hot water',
      'Private balconies with forest views',
      'On-site restaurant and bar',
      'Wi-Fi available',
      'Garden terrace',
      'Secure parking',
      'Laundry service',
      'Airport transfer coordination',
    ],
    highlights: [
      'Steps from Bwindi gorilla trekking start point',
      'Panoramic views of the rainforest',
      'Locally sourced gourmet meals',
      'Ideal for gorilla trekking itineraries',
      'Eco-friendly construction and operations',
    ],
    partnerRates: true,
    seasonalPricing: true,
    lowSeasonDiscount: 30,
    bundleDiscount: 10,
    priceFrom: '$150',
    priceNote:
      'Per night, double occupancy. Partner rates available when booked through Virunga Adventure Tours. 30% low season discount applies.',
    seo: {
      title: 'Ichumbi Gorilla Lodge | Luxury Stay near Bwindi | Virunga Adventure Tours',
      description:
        'Stay at Ichumbi Gorilla Lodge near Bwindi Impenetrable National Park. Luxury rooms, forest views, and gorilla trekking packages. Book through Virunga Adventure Tours.',
      keywords: [
        'Bwindi gorilla trekking lodge',
        'Ichumbi Gorilla Lodge',
        'Bwindi accommodation',
        'luxury lodge Uganda',
        'gorilla safari lodge',
        'Kisoro accommodation',
      ],
    },
  },
  {
    id: 'mutanda-eco-community',
    slug: 'mutanda-eco-community-centre',
    name: 'Mutanda Eco Community Centre',
    type: 'eco_lodge',
    typeLabel: typeLabels.eco_lodge,
    location: 'Lake Mutanda',
    description:
      'A community-run eco lodge on the shores of Lake Mutanda, offering sustainable accommodation with spectacular views of the Virunga volcanoes reflected in crystal-clear waters.',
    longDescription: `Mutanda Eco Community Centre is a unique eco-friendly lodge perched on the shores of Lake Mutanda — one of Uganda's most beautiful and unspoiled lakes. Surrounded by emerald hills and framed by the dramatic silhouettes of the Virunga volcanoes, this lodge offers a truly immersive nature experience.

The centre is community-owned and operated, meaning that every stay directly supports local livelihoods, education, and conservation initiatives. Accommodation ranges from comfortable eco-bandas to camping sites, all designed to minimize environmental impact while maximizing guest comfort.

Wake up to stunning sunrises over the lake, enjoy fresh local meals prepared with ingredients from nearby farms, and spend your days canoeing, hiking, or simply soaking in the tranquility.

The eco lodge is the ideal base for Lake Mutanda activities including canoeing, nature walks, and cultural village visits. It pairs perfectly with gorilla trekking at nearby Bwindi or Mgahinga parks.

As a Virunga Adventure Tours partner, guests enjoy special operator rates. Bundle your stay with tours for an additional 10% discount. During low season, rates drop by 30%.`,
    heroImage: '/images/mutanda-eco-lodge.jpg',
    amenities: [
      'Eco-bandas with lake views',
      'Shared and private bathroom options',
      'On-site restaurant with local cuisine',
      'Campfire area',
      'Canoe and boat access',
      'Nature trails from the property',
      'Camping facilities',
      'Community guides available',
    ],
    highlights: [
      'Directly on the shores of Lake Mutanda',
      'Community-owned and operated',
      'Stunning volcano views across the lake',
      'Gateway to canoeing and nature walks',
      'Supports local conservation and education',
    ],
    partnerRates: true,
    seasonalPricing: true,
    lowSeasonDiscount: 30,
    bundleDiscount: 10,
    priceFrom: '$60',
    priceNote:
      'Per night. Options range from camping to private eco-bandas. Partner rates available. 30% low season discount.',
    seo: {
      title: 'Mutanda Eco Community Centre | Lake Mutanda Eco Lodge | Virunga Adventure Tours',
      description:
        'Stay at Mutanda Eco Community Centre on Lake Mutanda, Kisoro. Community-run eco lodge with volcano views, canoeing, and nature walks. Book with Virunga Adventure Tours.',
      keywords: [
        'Lake Mutanda hotels',
        'Lake Mutanda eco lodge',
        'Kisoro accommodation',
        'community lodge Uganda',
        'eco lodge Kisoro',
        'Lake Mutanda activities',
      ],
    },
  },
  {
    id: 'golden-monkey-guesthouse',
    slug: 'golden-monkey-guesthouse',
    name: 'Golden Monkey Guesthouse',
    type: 'hostel',
    typeLabel: typeLabels.hostel,
    location: 'Kisoro Town',
    description:
      'A friendly and affordable guesthouse in the heart of Kisoro Town, perfect for budget-conscious travellers looking for a clean, comfortable base for exploring the Virunga region.',
    longDescription: `Golden Monkey Guesthouse is a popular budget-friendly accommodation located in the centre of Kisoro Town, making it the most convenient base for travellers exploring southwestern Uganda on a budget.

The guesthouse offers clean, comfortable rooms with basic amenities — everything a traveller needs without the premium price tag. Options range from dormitory beds for backpackers to private rooms for couples and families.

Its central location means you're within walking distance of local restaurants, markets, shops, and transport hubs. It's the perfect starting point for day trips to Bwindi, Mgahinga, Lake Mutanda, and other nearby attractions.

The friendly staff can help arrange tours, transport, and provide local tips to make the most of your stay in Kisoro. Many of our budget-minded guests choose Golden Monkey Guesthouse as their home base while exploring the region with Virunga Adventure Tours.

As a partner accommodation, guests booking through Virunga Adventure Tours receive preferential rates. Bundle your stay with tours for an extra 10% discount. Low season visitors enjoy a 30% reduction on room rates.`,
    heroImage: '/images/golden-monkey-guesthouse.jpg',
    amenities: [
      'Private and dormitory rooms',
      'Shared hot-water bathrooms',
      'Central Kisoro location',
      'Walking distance to restaurants and shops',
      'Luggage storage',
      'Tour booking assistance',
      'Secure premises',
      'Mobile money accepted',
    ],
    highlights: [
      'Most affordable option in Kisoro',
      'Heart of Kisoro Town — walk to everything',
      'Ideal for backpackers and budget travellers',
      'Friendly, knowledgeable local staff',
      'Easy access to all tour departure points',
    ],
    partnerRates: true,
    seasonalPricing: true,
    lowSeasonDiscount: 30,
    bundleDiscount: 10,
    priceFrom: '$25',
    priceNote:
      'Per night. Dormitory beds from $15, private rooms from $25. Partner rates available. 30% low season discount.',
    seo: {
      title: 'Golden Monkey Guesthouse | Budget Stay in Kisoro | Virunga Adventure Tours',
      description:
        'Affordable accommodation in Kisoro Town, Uganda. Golden Monkey Guesthouse offers clean rooms in the town centre. Budget-friendly option for gorilla trekking trips.',
      keywords: [
        'Kisoro accommodation',
        'budget hotel Kisoro',
        'Kisoro guesthouse',
        'cheap stay Kisoro Uganda',
        'backpacker Kisoro',
        'hostel near Bwindi',
      ],
    },
  },
];

export const accommodationInfo = `Virunga Adventure Tours Ltd works with trusted local accommodation partners in Kisoro and around Bwindi and Lake Mutanda. Accommodation options include luxury lodge stays near Bwindi for gorilla trekking, eco-community lodges at Lake Mutanda, and budget-friendly guesthouses in Kisoro Town. Partner accommodations offer fixed tour operator rates. During the low season, prices are typically reduced by 30%. Guests booking accommodation together with tours receive bundle discounts of approximately 10%.`;

export const seasonalPricing = {
  highSeason: {
    months: 'June-September, December-February',
    priceModifier: 1,
    description: 'Standard rates apply during peak tourist season.',
  },
  lowSeason: {
    months: 'March-May, October-November',
    priceModifier: 0.7,
    description: '30% discount during low season — fewer crowds, same incredible experiences.',
  },
};

export const bundleDiscount = {
  percentage: 10,
  description:
    'Save 10% when you book accommodation and activities together through Virunga Adventure Tours.',
};

export const getAccommodationBySlug = (slug: string): Accommodation | undefined => {
  return accommodations.find((a) => a.slug === slug);
};
