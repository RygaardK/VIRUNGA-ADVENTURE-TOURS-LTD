export interface TourPackage {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  duration: string;
  description: string;
  longDescription: string;
  heroImage: string;
  priceFrom: string;
  priceNote: string;
  experienceIds: string[];
  accommodationId: string;
  transportId: string;
  itinerary: {
    day: number;
    title: string;
    description: string;
    activities: string[];
  }[];
  included: string[];
  notIncluded: string[];
  highlights: string[];
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  groupSize: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const tourPackages: TourPackage[] = [
  {
    id: '3-day-gorilla-trekking',
    slug: '3-day-gorilla-trekking-package',
    name: '3-Day Gorilla Trekking Package',
    subtitle: 'The Ultimate Mountain Gorilla Experience in Bwindi',
    duration: '3 days / 2 nights',
    description:
      'A complete gorilla trekking package including accommodation at a luxury lodge near Bwindi, 4x4 transport, and guided gorilla trekking with permits. The easiest way to experience Uganda\'s mountain gorillas.',
    longDescription: `Our signature 3-Day Gorilla Trekking Package is the most popular and comprehensive way to experience mountain gorillas in Bwindi Impenetrable National Park.

This all-inclusive package eliminates the stress of planning and logistics. From the moment you arrive in Kisoro, everything is taken care of — comfortable 4x4 transport, luxury accommodation at Ichumbi Gorilla Lodge, and a full-day gorilla trekking experience with permits, ranger guide, and local support.

Designed for international travellers who want a seamless, premium gorilla safari, this package lets you focus entirely on the experience while we handle the details.

The package can be extended or customized. Add volcano hiking, golden monkey tracking, or a cultural experience to create a longer multi-day adventure.`,
    heroImage: '/images/gorilla-package.jpg',
    priceFrom: '$1,200',
    priceNote:
      'Per person, based on double occupancy. Single supplement available. Includes gorilla permit ($700), accommodation, and 4x4 transport. 10% bundle discount applied.',
    experienceIds: ['gorilla-trekking'],
    accommodationId: 'ichumbi-gorilla-lodge',
    transportId: '4x4-car',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kisoro',
        description:
          'Arrive in Kisoro and transfer to Ichumbi Gorilla Lodge near Bwindi by private 4x4 vehicle. Settle in, enjoy dinner at the lodge, and receive a briefing about the next day\'s gorilla trek.',
        activities: [
          'Airport or hotel pickup in Kisoro',
          '4x4 transfer to Ichumbi Gorilla Lodge',
          'Check-in and lodge orientation',
          'Welcome dinner',
          'Gorilla trekking briefing',
        ],
      },
      {
        day: 2,
        title: 'Gorilla Trekking Day',
        description:
          'Early morning departure to Bwindi park headquarters for the ranger briefing. Trek into the rainforest with your UWA ranger guide to find a habituated gorilla family. Spend one magical hour with the gorillas. Return to the lodge for a celebratory dinner.',
        activities: [
          'Early breakfast at the lodge',
          'Transfer to Bwindi park headquarters',
          'Ranger briefing and group assignment',
          'Gorilla trekking (2-6 hours)',
          'One hour with mountain gorillas',
          'Return to lodge',
          'Celebration dinner',
        ],
      },
      {
        day: 3,
        title: 'Departure',
        description:
          'Enjoy a relaxed breakfast with forest views. Check out and transfer back to Kisoro or onward to your next destination. Optional add-ons: community walk, coffee experience, or nature trail.',
        activities: [
          'Breakfast at the lodge',
          'Optional morning nature walk',
          'Check-out',
          '4x4 transfer to Kisoro or onward destination',
        ],
      },
    ],
    included: [
      'Gorilla trekking permit (UWA)',
      '2 nights at Ichumbi Gorilla Lodge',
      '4x4 private transport throughout',
      'Professional English-speaking driver-guide',
      'All meals (2 breakfasts, 2 lunches, 2 dinners)',
      'Park entrance fees',
      'Ranger guide for gorilla trekking',
      'Drinking water during activities',
      '10% bundle discount applied',
    ],
    notIncluded: [
      'International flights',
      'Uganda visa fees',
      'Travel insurance',
      'Tips and gratuities',
      'Porter services ($15 recommended)',
      'Alcoholic beverages',
      'Personal expenses',
      'Airport transfers to/from Kisoro (can be arranged)',
    ],
    highlights: [
      'Spend one hour face-to-face with mountain gorillas',
      'Stay at a luxury lodge overlooking Bwindi forest',
      'Private 4x4 transport with driver-guide',
      'All permits, meals, and logistics included',
      'Customizable — add activities or extend your stay',
    ],
    difficulty: 'Moderate',
    groupSize: '2-6 people',
    seo: {
      title: '3-Day Gorilla Trekking Package | Bwindi All-Inclusive | Virunga Adventure Tours',
      description:
        'All-inclusive 3-day gorilla trekking package in Bwindi, Uganda. Includes permit, luxury lodge, 4x4 transport, meals, and guide. Book your gorilla safari today.',
      keywords: [
        'gorilla trekking package Uganda',
        'Bwindi gorilla trekking',
        'Uganda gorilla safari package',
        'gorilla trekking all inclusive',
        '3 day gorilla trek',
        'Bwindi gorilla tour',
      ],
    },
  },
  {
    id: 'lake-mutanda-adventure',
    slug: 'lake-mutanda-adventure-package',
    name: 'Lake Mutanda Adventure Package',
    subtitle: 'Two Days of Nature, Water, and Culture on Lake Mutanda',
    duration: '2 days / 1 night',
    description:
      'Explore the beauty of Lake Mutanda with canoeing, nature walks, and a stay at an eco-friendly lakeside lodge. A peaceful escape that combines water activities, scenic hikes, and community tourism.',
    longDescription: `The Lake Mutanda Adventure Package is perfect for travellers who want to experience the quieter, more serene side of the Kisoro region. Lake Mutanda is widely regarded as one of the most beautiful lakes in Uganda, and this package gives you time to truly appreciate its magic.

Stay at the community-run Mutanda Eco Community Centre, right on the lake shore. Paddle a traditional dugout canoe across crystal-clear waters, walk scenic trails through volcanic hills, and connect with local communities.

This package is ideal as a standalone retreat or as a complement to gorilla trekking. Many guests add the Lake Mutanda package before or after their gorilla trek for a well-rounded Kisoro experience.

Transport to and from the lake is included, along with meals, guided activities, and all accommodation.`,
    heroImage: '/images/lake-mutanda-package.jpg',
    priceFrom: '$250',
    priceNote:
      'Per person. Includes accommodation, transport, guided canoeing, nature walk, and meals. Twin-share basis. 10% bundle discount applied.',
    experienceIds: ['canoeing-boat-tour', 'nature-walk'],
    accommodationId: 'mutanda-eco-community',
    transportId: 'bodaboda',
    itinerary: [
      {
        day: 1,
        title: 'Lake Mutanda Arrival & Canoeing',
        description:
          'Transfer from Kisoro to Lake Mutanda. Settle into your eco-banda at the Mutanda Eco Community Centre. After lunch, head out for a guided canoeing experience on the lake.',
        activities: [
          'Transfer from Kisoro to Lake Mutanda',
          'Check-in at Mutanda Eco Community Centre',
          'Lakeside lunch',
          'Guided canoeing on Lake Mutanda (2 hours)',
          'Sunset views from the lodge',
          'Dinner at the eco centre',
        ],
      },
      {
        day: 2,
        title: 'Nature Walk & Departure',
        description:
          'Wake up to sunrise over the lake. After breakfast, enjoy a guided nature walk along the lake shore and through surrounding hills. Return for lunch before transferring back to Kisoro.',
        activities: [
          'Sunrise breakfast by the lake',
          'Guided nature walk (2 hours)',
          'Birdwatching and photo opportunities',
          'Lunch at the eco centre',
          'Transfer back to Kisoro',
        ],
      },
    ],
    included: [
      '1 night at Mutanda Eco Community Centre',
      'Return transport from Kisoro to Lake Mutanda',
      'Guided canoeing on Lake Mutanda',
      'Guided nature walk',
      'All meals (1 breakfast, 2 lunches, 1 dinner)',
      'Experienced local guide',
      'Safety equipment for water activities',
      '10% bundle discount applied',
    ],
    notIncluded: [
      'Travel insurance',
      'Tips and gratuities',
      'Alcoholic beverages',
      'Personal expenses',
      'Additional activities (boat tour upgrade available)',
    ],
    highlights: [
      'Canoe across crystal-clear Lake Mutanda',
      'Stay at a community-run eco lodge',
      'Stunning views of the Virunga volcanoes',
      'Guided nature walk with birdwatching',
      'Supports local community livelihoods',
    ],
    difficulty: 'Easy',
    groupSize: '2-8 people',
    seo: {
      title: 'Lake Mutanda Adventure Package | Canoeing & Nature | Virunga Adventure Tours',
      description:
        'Explore Lake Mutanda with our 2-day adventure package. Canoeing, nature walks, eco-lodge stay, and volcano views near Kisoro, Uganda. Book your lake adventure.',
      keywords: [
        'Lake Mutanda package',
        'Lake Mutanda activities',
        'Kisoro lake tour',
        'canoeing Lake Mutanda',
        'eco lodge Lake Mutanda',
        'Uganda lake adventure',
      ],
    },
  },
  {
    id: 'mgahinga-volcano-hiking',
    slug: 'mgahinga-volcano-hiking-package',
    name: 'Mgahinga Volcano Hiking Package',
    subtitle: 'Summit the Virunga Volcanoes with Golden Monkey Tracking',
    duration: '3 days / 2 nights',
    description:
      'An action-packed adventure combining volcano hiking and golden monkey tracking in Mgahinga Gorilla National Park. Summit a Virunga volcano, track rare golden monkeys, and explore the beauty of the Albertine Rift.',
    longDescription: `The Mgahinga Volcano Hiking Package brings together two of the most exciting wildlife and adventure experiences available in southwestern Uganda — summiting a Virunga volcano and tracking endangered golden monkeys.

Spread across three days, this package gives you time to fully experience the diverse landscapes and wildlife of Mgahinga Gorilla National Park, from dense bamboo forests at lower elevations to dramatic Afro-alpine moorlands near the summit.

Choose your summit: the towering Mt Muhabura (4,127 m) for the most challenging climb, Mt Sabyinyo (3,669 m) to stand in three countries, or Mt Mgahinga (3,474 m) for a moderate but stunning hike.

On day two, track a troop of golden monkeys through the bamboo forest — a gentler but equally rewarding experience. Accommodation at Golden Monkey Guesthouse in Kisoro keeps costs manageable while putting you close to all departure points.

This package is ideal for active travellers, hikers, and wildlife enthusiasts seeking adventure beyond gorilla trekking.`,
    heroImage: '/images/volcano-package.jpg',
    priceFrom: '$450',
    priceNote:
      'Per person. Includes accommodation, permits, transport to/from Mgahinga, guide, and meals. Twin-share basis. 10% bundle discount applied.',
    experienceIds: ['volcano-hiking', 'golden-monkeys'],
    accommodationId: 'golden-monkey-guesthouse',
    transportId: '4x4-car',
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Volcano Hike',
        description:
          'Early morning briefing at Mgahinga park headquarters. Attempt your chosen volcano summit with a UWA ranger guide. Return to Kisoro for dinner and rest at Golden Monkey Guesthouse.',
        activities: [
          'Early breakfast',
          '4x4 transfer to Mgahinga National Park',
          'Ranger briefing at Ntebeko Gate',
          'Volcano hike (6-10 hours depending on summit)',
          'Return transfer to Kisoro',
          'Dinner and rest at Golden Monkey Guesthouse',
        ],
      },
      {
        day: 2,
        title: 'Golden Monkey Tracking',
        description:
          'After a restful morning, transfer to Mgahinga for golden monkey tracking. Trek through bamboo forest to find the golden monkey troop. Spend one hour observing these rare primates.',
        activities: [
          'Breakfast at guesthouse',
          '4x4 transfer to Mgahinga National Park',
          'Golden monkey tracking briefing',
          'Trek through bamboo forest (2-4 hours)',
          'One hour with golden monkey troop',
          'Return to Kisoro',
          'Dinner at guesthouse',
        ],
      },
      {
        day: 3,
        title: 'Departure or Add-On Activity',
        description:
          'Enjoy breakfast before check-out. Option to add a bike tour, coffee experience, or cultural visit before departing Kisoro.',
        activities: [
          'Breakfast at guesthouse',
          'Optional morning activity (bike tour/coffee experience)',
          'Check-out',
          'Transfer to next destination or departure',
        ],
      },
    ],
    included: [
      'UWA volcano hiking permit',
      'UWA golden monkey tracking permit',
      '2 nights at Golden Monkey Guesthouse',
      '4x4 transport to/from Mgahinga (2 round trips)',
      'Certified UWA ranger guides',
      'Park entrance fees',
      'All meals (2 breakfasts, 3 lunches, 2 dinners)',
      '10% bundle discount applied',
    ],
    notIncluded: [
      'International flights',
      'Uganda visa fees',
      'Travel insurance',
      'Tips and gratuities',
      'Porter services for volcano hike ($15 recommended)',
      'Hiking gear and rain equipment',
      'Alcoholic beverages',
      'Personal expenses',
    ],
    highlights: [
      'Summit a Virunga volcano up to 4,127 m',
      'Track endangered golden monkeys',
      'Two full days in Mgahinga National Park',
      'Stand in three countries on Mt Sabyinyo',
      'Budget-friendly all-inclusive package',
    ],
    difficulty: 'Challenging',
    groupSize: '2-6 people',
    seo: {
      title: 'Mgahinga Volcano Hiking Package | Golden Monkey Tracking | Virunga Adventure Tours',
      description:
        'Hike the Virunga Volcanoes and track golden monkeys in Mgahinga National Park. 3-day all-inclusive package from Kisoro, Uganda. Permits, transport, and accommodation included.',
      keywords: [
        'Mgahinga hiking package',
        'volcano hiking Uganda',
        'golden monkey tracking',
        'Virunga volcanoes tour',
        'Mt Muhabura climb package',
        'Mgahinga Gorilla National Park',
        'adventure package Kisoro',
      ],
    },
  },
];

export const getPackageBySlug = (slug: string): TourPackage | undefined => {
  return tourPackages.find((p) => p.slug === slug);
};
