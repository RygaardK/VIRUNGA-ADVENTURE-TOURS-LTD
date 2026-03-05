export interface TransportOption {
  method: string;
  price: string;
  note?: string;
}

export interface Experience {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  duration: string;
  location: string;
  pickupFrom: string;
  priceFrom: string;
  priceNote?: string;
  heroImage: string;
  accommodation: string;
  meals: string;
  permit: string;
  guide: string;
  customizable: boolean;
  included: string[];
  notIncluded: string[];
  transportOptions: TransportOption[];
  highlights: string[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  category: 'wildlife' | 'adventure' | 'cultural' | 'nature' | 'city';
  featured: boolean;
}

export const experiences: Experience[] = [
  {
    id: 'gorilla-trekking',
    slug: 'gorilla-trekking-bwindi',
    title: 'Gorilla Trekking',
    subtitle: 'Encounter Mountain Gorillas in Their Natural Habitat',
    description:
      'Trek through the ancient rainforests of Bwindi Impenetrable National Park or Mgahinga Gorilla National Park to meet endangered mountain gorillas face to face. A once-in-a-lifetime wildlife experience guided by expert trackers.',
    longDescription: `Gorilla trekking in Uganda is one of the most extraordinary wildlife experiences on the planet. With Virunga Adventure Tours, you'll journey into the lush, mist-covered forests of Bwindi Impenetrable National Park — home to nearly half of the world's remaining mountain gorillas.

Your day begins with an early morning briefing at the park headquarters, where rangers share information about gorilla families and trekking guidelines. Accompanied by experienced guides and trackers, you'll hike through dense tropical rainforest, navigating winding trails rich with birdlife, butterflies, and rare flora.

When you finally encounter a gorilla family, you'll spend a magical hour observing silverbacks, mothers with infants, and playful juveniles in their natural environment. The proximity — sometimes just a few metres away — creates an emotional, unforgettable connection with these gentle giants.

We recommend Bwindi Impenetrable National Park for the widest selection of habituated gorilla families and a more immersive forest experience. However, Mgahinga Gorilla National Park is also available and offers stunning volcanic scenery combined with gorilla encounters.

Your gorilla permit, expert guide, and park fees are all included. Accommodation, meals, and transport can be customized to suit your budget and preferences.`,
    duration: 'Full day (6–9 hours)',
    location: 'Bwindi Impenetrable National Park / Mgahinga Gorilla National Park',
    pickupFrom: 'Kisoro Town',
    priceFrom: '$700',
    priceNote:
      'Price includes the gorilla permit ($700 for foreign non-residents). Transport, accommodation, and meals are additional and can be customized.',
    heroImage: '/images/gorilla-trekking.jpg',
    accommodation: 'Optional — can be arranged on request',
    meals: 'Optional — packed lunch and dining available',
    permit: 'Included (UWA gorilla permit)',
    guide: 'Included (certified UWA ranger + local guide)',
    customizable: true,
    included: [
      'Gorilla trekking permit',
      'Certified UWA ranger guide',
      'Local guide from Virunga Adventure Tours',
      'Park entrance fees',
      'Pre-trek briefing',
      'Gorilla trekking certificate',
    ],
    notIncluded: [
      'Accommodation',
      'Meals and drinks',
      'Transport to the national park',
      'Tips and gratuities',
      'Personal travel insurance',
      'Porter services ($15 recommended)',
    ],
    transportOptions: [
      { method: 'Boda-boda (motorcycle)', price: '$30', note: 'Budget-friendly option from Kisoro' },
      { method: '4x4 Vehicle', price: '$150', note: 'Comfortable private transfer from Kisoro' },
    ],
    highlights: [
      'Spend one hour with a habituated gorilla family',
      'Trek through UNESCO World Heritage rainforest',
      'Expert guides and trackers',
      'Suitable for ages 15 and above',
      'Small group sizes for an intimate experience',
    ],
    seo: {
      title: 'Gorilla Trekking in Bwindi & Mgahinga | Virunga Adventure Tours',
      description:
        'Book gorilla trekking in Bwindi Impenetrable National Park or Mgahinga, Uganda. Permits included. Expert guides. Unforgettable mountain gorilla encounters near Kisoro.',
      keywords: [
        'gorilla trekking Uganda',
        'Bwindi gorilla trekking',
        'mountain gorilla tour',
        'Uganda gorilla tours',
        'Mgahinga gorilla trekking',
        'Kisoro gorilla safari',
        'gorilla permit Uganda',
      ],
    },
    category: 'wildlife',
    featured: true,
  },
  {
    id: 'hiking-caldera',
    slug: 'hiking-caldera-kisoro',
    title: 'Hiking Caldera',
    subtitle: 'Explore the Stunning Kisoro Caldera Landscape',
    description:
      'Discover the dramatic volcanic caldera landscape around Kisoro on a scenic guided hike. Walk along crater rims and enjoy breathtaking panoramic views of the Virunga volcanoes and surrounding countryside.',
    longDescription: `The Kisoro Caldera hike offers a stunning introduction to the volcanic landscapes of southwestern Uganda. This short but rewarding trek takes you along the rim of an ancient volcanic caldera, providing panoramic views of the Virunga Mountains, Lake Mutanda, and the rolling hills of Kisoro District.

Your experienced local guide will share fascinating geological history, point out native plant and bird species, and lead you through scenic trails that wind through farmland and natural bush.

This hike is perfect for travellers looking for a gentle outdoor adventure that can be enjoyed in a morning or afternoon. No special permits are required, and the trail is suitable for most fitness levels.

The caldera hike pairs beautifully with other Kisoro activities — combine it with a visit to Lake Mutanda, a coffee experience, or a cultural village tour for a full day of exploration.`,
    duration: '2 hours',
    location: 'Kisoro Town surroundings',
    pickupFrom: 'Kisoro Town',
    priceFrom: '$25',
    priceNote: 'Per person. Group discounts available.',
    heroImage: '/images/hiking-caldera.jpg',
    accommodation: 'Can be arranged separately',
    meals: 'Not included',
    permit: 'Not required',
    guide: 'Included',
    customizable: true,
    included: [
      'Expert local guide',
      'Caldera rim trail access',
      'Scenic viewpoint stops',
      'Geological and cultural commentary',
    ],
    notIncluded: [
      'Meals and drinks',
      'Transport to trailhead',
      'Personal travel insurance',
      'Tips and gratuities',
    ],
    transportOptions: [
      { method: 'Walking from Kisoro Town', price: 'Free', note: 'Trailhead is close to town centre' },
      { method: 'Boda-boda (motorcycle)', price: '$5', note: 'Quick ride to trailhead' },
    ],
    highlights: [
      'Panoramic views of the Virunga volcanoes',
      'Views over Lake Mutanda and Kisoro town',
      'No permit required',
      'Suitable for all fitness levels',
      'Perfect half-day activity',
    ],
    seo: {
      title: 'Kisoro Caldera Hike | Scenic Volcano Views | Virunga Adventure Tours',
      description:
        'Hike the Kisoro Caldera for panoramic views of the Virunga volcanoes and Lake Mutanda. Easy 2-hour guided trek — no permit needed. Book with Virunga Adventure Tours.',
      keywords: [
        'Kisoro caldera hike',
        'things to do in Kisoro',
        'Kisoro hiking',
        'Virunga volcano views',
        'Kisoro tourism',
        'easy hike Uganda',
      ],
    },
    category: 'adventure',
    featured: false,
  },
  {
    id: 'volcano-hiking',
    slug: 'volcano-hiking-mgahinga',
    title: 'Volcano Hiking',
    subtitle: 'Summit the Virunga Volcanoes of East Africa',
    description:
      'Challenge yourself with a full-day guided climb up one of three majestic Virunga volcanoes — Mt Muhabura (4,127 m), Mt Mgahinga (3,474 m), or Mt Sabyinyo (3,669 m). Experience extraordinary views across three countries.',
    longDescription: `The Virunga Mountains straddle the borders of Uganda, Rwanda, and the Democratic Republic of Congo, forming one of the most spectacular volcanic landscapes in Africa. With Virunga Adventure Tours, you can summit one of three incredible volcanoes in Mgahinga Gorilla National Park.

**Mt Muhabura (4,127 m)** — The tallest of the three, offering a challenging full-day climb rewarded with a stunning crater lake at the summit and panoramic views across Uganda, Rwanda, and DRC.

**Mt Mgahinga (3,474 m)** — A moderate hike through bamboo forest and Afro-alpine moorland, ideal for those seeking adventure without extreme difficulty.

**Mt Sabyinyo (3,669 m)** — Known as the "Old Man's Teeth," this hike takes you along dramatic ridges where you can stand in three countries simultaneously — Uganda, Rwanda, and the DRC.

All hikes begin early in the morning from Ntebeko Gate in Mgahinga Gorilla National Park. Your UWA ranger guide will lead the way, sharing knowledge about the local ecology, birdlife, and volcanic geology.

These hikes require reasonable physical fitness and sturdy footwear. We recommend bringing rain gear, warm layers, and plenty of water.`,
    duration: '8–10 hours',
    location: 'Mgahinga Gorilla National Park',
    pickupFrom: 'Kisoro Town',
    priceFrom: '$75',
    priceNote:
      'Includes park entry and guide. UWA hiking permit fee applies. Transport to the park is additional.',
    heroImage: '/images/volcano-hiking.jpg',
    accommodation: 'Can be arranged separately',
    meals: 'Not included — bring packed lunch and water',
    permit: 'Required (UWA hiking permit)',
    guide: 'Included (certified UWA ranger)',
    customizable: false,
    included: [
      'UWA hiking permit',
      'Certified ranger guide',
      'Park entrance fees',
      'Pre-hike briefing',
    ],
    notIncluded: [
      'Meals, snacks, and water',
      'Transport to Mgahinga National Park',
      'Rain gear and hiking equipment',
      'Tips and gratuities',
      'Personal travel insurance',
      'Porter services ($15 recommended)',
    ],
    transportOptions: [
      { method: 'Boda-boda (motorcycle)', price: '$30', note: 'From Kisoro to Mgahinga park gate' },
      { method: '4x4 Vehicle', price: '$150', note: 'Private transfer from Kisoro to Mgahinga' },
    ],
    highlights: [
      'Summit volcanoes up to 4,127 m',
      'Stand in three countries at once on Mt Sabyinyo',
      'Stunning Afro-alpine vegetation',
      'Crater lake on Mt Muhabura',
      'Rich birdlife and unique flora',
    ],
    seo: {
      title: 'Volcano Hiking in Mgahinga | Mt Muhabura, Sabyinyo & Mgahinga | Virunga Adventure Tours',
      description:
        'Hike the Virunga Volcanoes in Mgahinga National Park, Uganda. Climb Mt Muhabura, Mt Sabyinyo, or Mt Mgahinga with expert guides. Book your volcano trek from Kisoro.',
      keywords: [
        'Mgahinga hiking',
        'volcano hiking Uganda',
        'Mt Muhabura climb',
        'Mt Sabyinyo hike',
        'Virunga volcanoes',
        'Kisoro volcano trek',
        'Mgahinga Gorilla National Park hiking',
      ],
    },
    category: 'adventure',
    featured: true,
  },
  {
    id: 'golden-monkeys',
    slug: 'golden-monkey-tracking',
    title: 'Golden Monkey Tracking',
    subtitle: 'Track Rare Golden Monkeys in Mgahinga National Park',
    description:
      'Venture into the bamboo forests of Mgahinga Gorilla National Park to track the endangered golden monkey — one of the rarest primates in Africa. A captivating wildlife experience for nature lovers.',
    longDescription: `Golden monkey tracking is one of the most delightful wildlife experiences available in southwestern Uganda. These beautiful primates, with their striking golden-orange patches, are found only in the Virunga Mountains, making this a truly exclusive encounter.

Your trek begins at the Ntebeko Gate of Mgahinga Gorilla National Park, where UWA rangers brief you on the golden monkey family and trekking etiquette. The hike through dense bamboo forest is relatively gentle and typically shorter than gorilla trekking, making it accessible to a wide range of visitors.

Once you locate the golden monkey troop — which can number up to 80 individuals — you'll spend one hour observing their playful behaviour as they leap through bamboo stalks, groom each other, and forage for food. It's an incredible photo opportunity and a memorable wildlife experience.

Golden monkey tracking pairs perfectly with gorilla trekking or volcano hiking for a multi-day Mgahinga adventure. Our team can help you plan a combined itinerary.`,
    duration: '4–6 hours',
    location: 'Mgahinga Gorilla National Park',
    pickupFrom: 'Kisoro Town',
    priceFrom: '$60',
    priceNote: 'Includes UWA golden monkey tracking permit and park entry. Transport is additional.',
    heroImage: '/images/golden-monkeys.jpg',
    accommodation: 'Can be arranged separately',
    meals: 'Not included',
    permit: 'Required (UWA golden monkey tracking permit)',
    guide: 'Included (certified UWA ranger)',
    customizable: false,
    included: [
      'Golden monkey tracking permit',
      'Certified UWA ranger guide',
      'Park entrance fees',
      'Pre-trek briefing',
    ],
    notIncluded: [
      'Meals and drinks',
      'Transport to Mgahinga National Park',
      'Tips and gratuities',
      'Personal travel insurance',
      'Rain gear',
    ],
    transportOptions: [
      { method: 'Boda-boda (motorcycle)', price: '$30', note: 'From Kisoro to Mgahinga park gate' },
      { method: '4x4 Vehicle', price: '$150', note: 'Private transfer from Kisoro to Mgahinga' },
    ],
    highlights: [
      'Track one of Africa\'s rarest primates',
      'Beautiful bamboo forest setting',
      'Spend one hour with a golden monkey troop',
      'Easier trek than gorilla trekking',
      'Excellent photography opportunities',
    ],
    seo: {
      title: 'Golden Monkey Tracking in Mgahinga | Virunga Adventure Tours',
      description:
        'Track endangered golden monkeys in Mgahinga Gorilla National Park, Uganda. Permits included. Expert guides. Book your golden monkey experience from Kisoro.',
      keywords: [
        'golden monkey tracking Uganda',
        'Mgahinga golden monkeys',
        'Uganda primate safari',
        'Kisoro golden monkey tour',
        'Mgahinga Gorilla National Park',
        'endangered primates Uganda',
      ],
    },
    category: 'wildlife',
    featured: true,
  },
  {
    id: 'bike-tours',
    slug: 'bike-tours-kisoro',
    title: 'Bike Tours',
    subtitle: 'Cycle Through the Villages and Hills of Kisoro',
    description:
      'Explore the beautiful countryside around Kisoro on two wheels. Our guided bike tours take you through vibrant villages, terraced hillsides, and scenic backroads — a fun and active way to connect with local life.',
    longDescription: `Our Kisoro bike tours offer a refreshing way to experience the stunning landscapes and vibrant culture of southwestern Uganda. Pedal through rolling green hills, past banana plantations and terraced farms, and into welcoming rural villages where everyday life unfolds at a peaceful pace.

Your knowledgeable local guide will lead you along selected routes that showcase the best of Kisoro's countryside. Along the way, you'll meet friendly locals, learn about traditional farming practices, and enjoy panoramic views of the Virunga volcanoes.

The tour is fully customizable — whether you prefer a leisurely ride through flat village roads or a more challenging hill route, we'll tailor the experience to your fitness level and interests.

Bikes and safety equipment are provided. No prior cycling experience is required — just a sense of adventure and curiosity.

This is a wonderful activity for families, couples, or solo travellers looking for something different from the typical safari experience.`,
    duration: '2 hours',
    location: 'Kisoro Town and surrounding villages',
    pickupFrom: 'Kisoro Town',
    priceFrom: '$30',
    priceNote: 'Per person. Includes bike rental and guide.',
    heroImage: '/images/bike-tours.jpg',
    accommodation: 'Can be arranged separately',
    meals: 'Not included',
    permit: 'Not required',
    guide: 'Included',
    customizable: true,
    included: [
      'Mountain bike rental',
      'Safety helmet',
      'Experienced local guide',
      'Customizable route',
      'Village and cultural stops',
    ],
    notIncluded: [
      'Meals and drinks',
      'Personal travel insurance',
      'Tips and gratuities',
    ],
    transportOptions: [
      { method: 'Start from Kisoro Town', price: 'Included', note: 'Tour departs from town centre' },
    ],
    highlights: [
      'Ride through scenic village landscapes',
      'Meet local communities',
      'Views of the Virunga volcanoes',
      'Customizable routes and difficulty',
      'Family-friendly option available',
    ],
    seo: {
      title: 'Bike Tours in Kisoro | Village Cycling Experience | Virunga Adventure Tours',
      description:
        'Explore Kisoro, Uganda by bike. Guided cycling tours through villages, hills, and farmlands with stunning views of the Virunga volcanoes. Book your bike tour today.',
      keywords: [
        'Kisoro bike tours',
        'cycling Kisoro Uganda',
        'village bike ride Uganda',
        'things to do in Kisoro',
        'Uganda adventure activities',
        'Kisoro tourism',
      ],
    },
    category: 'adventure',
    featured: false,
  },
  {
    id: 'coffee-experience',
    slug: 'coffee-experience-kisoro',
    title: 'Coffee Experience',
    subtitle: 'From Bean to Cup — A Ugandan Coffee Farm Journey',
    description:
      'Visit a local coffee farm near Kisoro and discover the entire coffee-making process — from picking ripe cherries to roasting and brewing your own cup of authentic Ugandan arabica coffee.',
    longDescription: `Uganda is one of Africa's largest coffee producers, and the highlands around Kisoro are home to some of the finest arabica coffee beans on the continent. Our Coffee Experience invites you to step into the world of Ugandan coffee farming and discover the journey from bean to cup.

Your visit begins at a family-run coffee farm, where your host will walk you through the coffee plantation, explaining cultivation techniques, harvesting seasons, and the importance of coffee to the local economy.

You'll participate in the hands-on process of picking ripe coffee cherries, washing and sorting the beans, roasting them over a traditional fire, and finally grinding and brewing your very own cup of freshly made Kisoro coffee.

A light meal featuring local specialties is included, giving you a taste of authentic Ugandan cuisine alongside your freshly brewed coffee.

This is a deeply immersive cultural experience that supports local farming families and provides genuine insight into rural Ugandan life. It's perfect for coffee lovers, foodies, and anyone interested in sustainable agriculture.`,
    duration: '2 hours',
    location: 'Local coffee farm near Kisoro',
    pickupFrom: 'Kisoro Town',
    priceFrom: '$35',
    priceNote: 'Per person. Includes farm visit, coffee tasting, and light meal.',
    heroImage: '/images/coffee-experience.jpg',
    accommodation: 'Can be arranged separately',
    meals: 'Included (light local meal and coffee tasting)',
    permit: 'Not required',
    guide: 'Included',
    customizable: true,
    included: [
      'Guided farm tour',
      'Hands-on coffee processing',
      'Coffee roasting and brewing',
      'Fresh coffee tasting',
      'Light local meal',
      'Experienced local guide',
    ],
    notIncluded: [
      'Transport to the farm',
      'Additional meals and drinks',
      'Tips and gratuities',
      'Personal travel insurance',
    ],
    transportOptions: [
      { method: 'Boda-boda (motorcycle)', price: '$5–10', note: 'Short ride from Kisoro Town' },
      { method: '4x4 Vehicle', price: '$30', note: 'Private transfer from Kisoro' },
    ],
    highlights: [
      'Pick, roast, and brew your own coffee',
      'Visit a family-run arabica coffee farm',
      'Learn about Uganda\'s coffee heritage',
      'Taste fresh local cuisine',
      'Support local farming communities',
    ],
    seo: {
      title: 'Coffee Farm Experience in Kisoro | Bean to Cup Tour | Virunga Adventure Tours',
      description:
        'Experience authentic Ugandan coffee farming near Kisoro. Pick, roast, and brew arabica coffee on a local farm. Includes tasting and local meal. Book now.',
      keywords: [
        'Uganda coffee experience',
        'Kisoro coffee farm tour',
        'coffee tasting Uganda',
        'things to do in Kisoro',
        'Uganda farm visit',
        'arabica coffee Uganda',
      ],
    },
    category: 'cultural',
    featured: false,
  },
  {
    id: 'cultural-experience',
    slug: 'cultural-experience-kisoro',
    title: 'Cultural Experience',
    subtitle: 'Immerse Yourself in the Living Culture of Kisoro',
    description:
      'Dive into the rich cultural heritage of the Bafumbira and Batwa communities around Kisoro. Enjoy traditional dances, storytelling, craft-making, and authentic village life during this customizable cultural journey.',
    longDescription: `The Kisoro region is home to diverse ethnic communities with centuries of rich cultural traditions. Our Cultural Experience tours offer an authentic window into the daily life, beliefs, music, and crafts of the Bafumbira, Batwa, and other local communities.

Depending on your interests and available time, the experience can be tailored from a half-day village visit to an immersive two-day cultural journey. Activities may include:

- **Traditional dance and music performances** — Watch and participate in energetic drumming and dance celebrations.
- **Home visits** — Sit with local families, share stories, and learn about traditional customs and daily life.
- **Craft workshops** — Try your hand at basket weaving, pottery, or other traditional crafts.
- **Local cooking** — Help prepare and enjoy a traditional Ugandan meal.
- **Storytelling and history** — Hear tales of the region's past, from ancient kingdoms to colonial history.

This experience is fully customizable to match your schedule and interests. Whether you have two hours or two days, we'll design a meaningful cultural encounter that leaves a lasting impression.

All cultural visits are organized in partnership with local communities, ensuring that tourism benefits reach the people who make these experiences possible.`,
    duration: '2 hours – 2 days',
    location: 'Kisoro Town and surrounding communities',
    pickupFrom: 'Kisoro Town',
    priceFrom: '$40',
    priceNote: 'Starting price for half-day experience. Multi-day options available on request.',
    heroImage: '/images/cultural-experience.jpg',
    accommodation: 'Available for multi-day experiences',
    meals: 'Not included (can be arranged)',
    permit: 'Required for some community visits',
    guide: 'Included',
    customizable: true,
    included: [
      'Local cultural guide',
      'Traditional dance and music performance',
      'Village or community visit',
      'Craft demonstration or workshop',
      'Community entry fees',
    ],
    notIncluded: [
      'Meals and drinks (can be added)',
      'Transport beyond Kisoro Town',
      'Accommodation for multi-day visits',
      'Tips and gratuities',
      'Personal travel insurance',
    ],
    transportOptions: [
      { method: 'Walking', price: 'Free', note: 'Many cultural sites accessible on foot from town' },
      { method: 'Boda-boda (motorcycle)', price: '$5–10', note: 'For villages further from town' },
      { method: '4x4 Vehicle', price: '$30–50', note: 'For remote community visits' },
    ],
    highlights: [
      'Experience traditional dances and music',
      'Visit local homes and communities',
      'Learn traditional crafts',
      'Customizable to your schedule',
      'Community-based and ethical tourism',
    ],
    seo: {
      title: 'Cultural Experience in Kisoro | Village Tours | Virunga Adventure Tours',
      description:
        'Discover the rich cultural heritage of Kisoro, Uganda. Traditional dance, village visits, craft workshops, and authentic community encounters. Book your cultural tour.',
      keywords: [
        'Kisoro cultural tour',
        'Uganda cultural experience',
        'Bafumbira culture',
        'village tour Kisoro',
        'things to do in Kisoro',
        'community tourism Uganda',
      ],
    },
    category: 'cultural',
    featured: false,
  },
  {
    id: 'batwa-trail',
    slug: 'batwa-trail-experience',
    title: 'Batwa Trail',
    subtitle: 'Walk in the Footsteps of the Forest People',
    description:
      'Follow the ancient Batwa pygmy trail and learn about the traditions, survival skills, and history of one of Africa\'s oldest indigenous communities — the Batwa "Keepers of the Forest."',
    longDescription: `The Batwa Trail is a deeply moving cultural experience that takes you into the world of the Batwa people — one of the oldest indigenous communities in Central Africa. Often called the "Keepers of the Forest," the Batwa lived as hunter-gatherers in the forests of the Virunga Mountains for thousands of years before being relocated to make way for gorilla conservation.

On this guided trail, Batwa community members lead you through significant sites in the forest, sharing their traditional knowledge of medicinal plants, hunting techniques, fire-making, and forest survival skills.

You'll witness traditional songs and dances, hear oral histories passed down through generations, and gain a profound understanding of the challenges and resilience of the Batwa people in the modern world.

The experience is organized in partnership with the Bafumbira community, ensuring that all proceeds benefit local communities directly. This is not just a tour — it is a genuine cultural exchange rooted in respect and understanding.

The Batwa Trail is suitable for all ages and fitness levels. The walk is gentle and the storytelling is engaging for both adults and children.`,
    duration: '2–3 hours',
    location: 'Near Mgahinga Gorilla National Park, Kisoro',
    pickupFrom: 'Kisoro Town',
    priceFrom: '$50',
    priceNote: 'Per person. Includes community guide and trail access.',
    heroImage: '/images/batwa-trail.jpg',
    accommodation: 'Can be arranged separately',
    meals: 'Not included',
    permit: 'Not required',
    guide: 'Included (Batwa community guide)',
    customizable: false,
    included: [
      'Batwa community guide',
      'Trail access and cultural demonstrations',
      'Traditional music and dance performance',
      'Fire-making and survival skills demonstration',
      'Storytelling and oral history session',
    ],
    notIncluded: [
      'Meals and drinks',
      'Transport to trail location',
      'Tips and gratuities',
      'Personal travel insurance',
    ],
    transportOptions: [
      { method: 'Boda-boda (motorcycle)', price: '$10–15', note: 'From Kisoro to trail start' },
      { method: '4x4 Vehicle', price: '$50', note: 'Private transfer from Kisoro' },
    ],
    highlights: [
      'Meet the ancient Batwa "Keepers of the Forest"',
      'Learn traditional survival and forest skills',
      'Experience authentic songs and dances',
      'Support indigenous community livelihoods',
      'Suitable for all ages and fitness levels',
    ],
    seo: {
      title: 'Batwa Trail Experience | Indigenous Culture Tour | Virunga Adventure Tours',
      description:
        'Walk the Batwa Trail near Mgahinga National Park, Kisoro. Experience the traditions, music, and survival skills of Uganda\'s ancient Batwa people. Book your trail visit.',
      keywords: [
        'Batwa trail Uganda',
        'Batwa pygmy experience',
        'indigenous culture Kisoro',
        'Batwa people tour',
        'things to do in Kisoro',
        'cultural tour Uganda',
      ],
    },
    category: 'cultural',
    featured: false,
  },
  {
    id: 'nature-walk',
    slug: 'nature-walk-lake-mutanda',
    title: 'Nature Walk',
    subtitle: 'Scenic Walking Tour Around Beautiful Lake Mutanda',
    description:
      'Enjoy a peaceful guided walk around Lake Mutanda — one of Uganda\'s most beautiful lakes. Discover birdlife, lush vegetation, and stunning views of the Virunga volcanoes reflected in crystal-clear waters.',
    longDescription: `Lake Mutanda is widely regarded as one of the most beautiful lakes in Uganda, and our Nature Walk gives you the perfect opportunity to experience its serene beauty on foot.

Your guided walk begins from the lakeside and takes you along scenic paths through verdant hills, past traditional fishing villages, and along the lake's tranquil shores. The crystal-clear waters of Lake Mutanda, framed by the dramatic silhouettes of the Virunga volcanoes, create a landscape of breathtaking beauty.

Along the way, your guide will point out native bird species — including kingfishers, herons, and weaver birds — as well as interesting plants and trees. You'll learn about the lake's ecology, the local fishing communities, and the cultural significance of the area.

This gentle walk is perfect for nature lovers, photographers, and anyone seeking a peaceful escape from the bustle of daily life. It can easily be combined with a canoeing or boat tour on the lake for a full-day Lake Mutanda experience.

No special permits are required, and the walk is suitable for all ages and fitness levels.`,
    duration: '2 hours',
    location: 'Lake Mutanda, Kisoro',
    pickupFrom: 'Kisoro Town',
    priceFrom: '$30',
    priceNote: 'Per person. Transport to the lake is additional.',
    heroImage: '/images/nature-walk.jpg',
    accommodation: 'Can be arranged separately',
    meals: 'Not included',
    permit: 'Not required',
    guide: 'Included',
    customizable: false,
    included: [
      'Experienced nature guide',
      'Scenic lakeside walking trail',
      'Bird and plant identification',
      'Cultural commentary on local communities',
    ],
    notIncluded: [
      'Meals and drinks',
      'Transport to Lake Mutanda',
      'Tips and gratuities',
      'Personal travel insurance',
    ],
    transportOptions: [
      { method: 'Boda-boda (motorcycle)', price: '$25', note: 'From hotel/Kisoro to Lake Mutanda' },
      { method: '4x4 Vehicle', price: '$100', note: 'Private transfer from hotel to lake' },
    ],
    highlights: [
      'Walk along one of Uganda\'s most beautiful lakes',
      'Stunning views of Virunga volcanoes',
      'Rich birdlife and flora',
      'Peaceful and family-friendly',
      'Combine with canoeing for a full day',
    ],
    seo: {
      title: 'Lake Mutanda Nature Walk | Scenic Guided Trek | Virunga Adventure Tours',
      description:
        'Explore Lake Mutanda on a guided nature walk near Kisoro, Uganda. Stunning volcano views, birdwatching, and lakeside scenery. Book your nature walk today.',
      keywords: [
        'Lake Mutanda nature walk',
        'Lake Mutanda activities',
        'Kisoro nature walk',
        'things to do in Kisoro',
        'Uganda lake tours',
        'birdwatching Kisoro',
      ],
    },
    category: 'nature',
    featured: false,
  },
  {
    id: 'canoeing-boat-tour',
    slug: 'canoeing-boat-tour-lake-mutanda',
    title: 'Canoeing & Boat Tour',
    subtitle: 'Paddle or Cruise the Waters of Lake Mutanda',
    description:
      'Glide across the pristine waters of Lake Mutanda by traditional dugout canoe or motorboat. Enjoy spectacular views of the Virunga volcanoes, visit lake islands, and experience the tranquillity of one of Uganda\'s hidden gems.',
    longDescription: `Lake Mutanda is a hidden gem of southwestern Uganda — a crystal-clear, island-dotted lake surrounded by lush green hills and framed by the towering Virunga volcanoes. Our Canoeing & Boat Tour lets you experience this stunning landscape from the water.

**Traditional Dugout Canoe** — For an authentic and intimate experience, paddle across the lake in a handcrafted local canoe. Your guide will navigate you through calm waters, past small islands, and along scenic shorelines. Each canoe accommodates up to 4 passengers and is guided by an experienced local paddler.

**Motorboat Tour** — For a more comfortable and extended tour, opt for the motorboat experience. Cover more of the lake, visit distant islands, and enjoy a leisurely cruise with stunning 360-degree views of the volcanoes. The motorboat accommodates up to 10 passengers.

Both options offer excellent birdwatching opportunities and the chance to spot otters and other wildlife. Your guide will share fascinating stories about the lake's history, ecology, and the fishing communities that call its shores home.

This activity pairs beautifully with a nature walk around the lake for a complete Lake Mutanda day trip.`,
    duration: '2–3 hours',
    location: 'Lake Mutanda, Kisoro',
    pickupFrom: 'Kisoro Town',
    priceFrom: '$30',
    priceNote: 'Canoeing from $30/person; Boat ride from $50 base + $35/person. Transport to the lake is additional.',
    heroImage: '/images/canoeing-boat-tour.jpg',
    accommodation: 'Can be arranged separately',
    meals: 'Not included',
    permit: 'Not required',
    guide: 'Included',
    customizable: true,
    included: [
      'Canoe or motorboat hire',
      'Experienced boat guide',
      'Life safety equipment',
      'Island visits (boat tour)',
      'Birdwatching commentary',
    ],
    notIncluded: [
      'Meals and drinks',
      'Transport to Lake Mutanda',
      'Tips and gratuities',
      'Personal travel insurance',
    ],
    transportOptions: [
      { method: 'Boda-boda (motorcycle)', price: '$25', note: 'From hotel/Kisoro to Lake Mutanda' },
      { method: '4x4 Vehicle', price: '$100', note: 'Private transfer from hotel to lake' },
    ],
    highlights: [
      'Paddle a traditional dugout canoe',
      'Cruise past volcanic landscapes',
      'Visit lake islands',
      'Spot kingfishers, herons, and otters',
      'Perfect for families and couples',
    ],
    seo: {
      title: 'Canoeing & Boat Tours on Lake Mutanda | Virunga Adventure Tours',
      description:
        'Canoe or boat ride on Lake Mutanda near Kisoro, Uganda. Traditional dugout canoes and motorboat tours with volcano views. Book your Lake Mutanda water experience.',
      keywords: [
        'Lake Mutanda canoeing',
        'Lake Mutanda boat tour',
        'Kisoro lake activities',
        'things to do in Kisoro',
        'Uganda boat tours',
        'Lake Mutanda activities',
      ],
    },
    category: 'nature',
    featured: true,
  },
  {
    id: 'kigali-city-tour',
    slug: 'kigali-city-tour',
    title: 'Kigali City Tour',
    subtitle: 'Discover the Vibrant Capital of Rwanda',
    description:
      'Combine your Kisoro adventure with a full-day guided tour of Kigali, Rwanda\'s dynamic capital. Visit the Genocide Memorial, explore local markets, enjoy Rwandan cuisine, and experience the cleanest city in Africa.',
    longDescription: `Kisoro sits just a short drive from the Rwandan border, making a Kigali City Tour an excellent addition to your Uganda adventure. Our full-day guided tour of Rwanda's capital city offers a rich blend of history, culture, and urban exploration.

**Kigali Genocide Memorial** — Begin your tour with a powerful and moving visit to the Kigali Genocide Memorial, which commemorates the 1994 genocide against the Tutsi. The museum provides essential context for understanding Rwanda's history and its remarkable journey of reconciliation.

**Kimironko Market** — Dive into the colours and energy of Kigali's largest local market. Browse vibrant fabrics, fresh produce, handmade crafts, and engage with friendly vendors.

**City Centre Exploration** — Walk through Kigali's modern streets, admire contemporary architecture, visit coffee shops and art galleries, and see why Kigali is considered the cleanest and most organized city in Africa.

**Inema Art Centre** — Discover Rwanda's vibrant contemporary art scene at this renowned creative hub, featuring works by local and international artists.

**Rwandan Cuisine** — Enjoy a delicious lunch at a local restaurant featuring traditional dishes like brochettes, plantains, and Rwandan coffee.

Transport from Kisoro to Kigali and back is included, along with an experienced bilingual guide who will bring the city's stories to life. Border crossing assistance is provided — please ensure you have the required visa or travel documents.`,
    duration: 'Full day (8–10 hours)',
    location: 'Kigali, Rwanda',
    pickupFrom: 'Kisoro Town',
    priceFrom: '$120',
    priceNote: 'Per person. Includes transport from Kisoro, guide, and city tour. Meals and entry fees at some sites may be extra.',
    heroImage: '/images/kigali-city-tour.jpg',
    accommodation: 'Can be arranged in Kigali on request',
    meals: 'Not included (restaurant recommendations provided)',
    permit: 'Rwanda visa required for some nationalities',
    guide: 'Included (bilingual English/French guide)',
    customizable: true,
    included: [
      'Return transport from Kisoro to Kigali',
      'Experienced bilingual guide',
      'Border crossing assistance',
      'City tour itinerary',
      'Genocide Memorial visit',
      'Market and cultural site visits',
    ],
    notIncluded: [
      'Rwanda visa fees',
      'Meals and drinks',
      'Entry fees at some attractions',
      'Tips and gratuities',
      'Personal travel insurance',
      'Shopping and personal purchases',
    ],
    transportOptions: [
      { method: '4x4 Vehicle', price: 'Included', note: 'Private return transfer Kisoro–Kigali (approx. 3 hours each way)' },
    ],
    highlights: [
      'Visit the powerful Kigali Genocide Memorial',
      'Explore vibrant Kimironko Market',
      'Discover Rwanda\'s contemporary art scene',
      'Taste authentic Rwandan cuisine',
      'Cross into Rwanda from Kisoro in just 1 hour',
    ],
    seo: {
      title: 'Kigali City Tour from Kisoro | Rwanda Day Trip | Virunga Adventure Tours',
      description:
        'Full-day guided tour of Kigali, Rwanda from Kisoro, Uganda. Visit the Genocide Memorial, explore markets, and discover Rwandan culture. Transport included.',
      keywords: [
        'Kigali city tour',
        'Kigali day trip from Kisoro',
        'Rwanda tour from Uganda',
        'Kigali Genocide Memorial',
        'things to do in Kigali',
        'Kisoro to Kigali tour',
      ],
    },
    category: 'city',
    featured: false,
  },
];

export const getExperienceBySlug = (slug: string): Experience | undefined => {
  return experiences.find((exp) => exp.slug === slug);
};

export const getFeaturedExperiences = (): Experience[] => {
  return experiences.filter((exp) => exp.featured);
};

export const getExperiencesByCategory = (category: Experience['category']): Experience[] => {
  return experiences.filter((exp) => exp.category === category);
};

export const COMPANY_INFO = {
  name: 'Virunga Adventure Tours Ltd',
  tagline: 'Your Gateway to the Virunga Mountains',
  description:
    'Virunga Adventure Tours Ltd is a locally owned and operated tour company based in Kisoro, Uganda — the gateway to Bwindi Impenetrable National Park and Mgahinga Gorilla National Park. We specialize in gorilla trekking, volcano hiking, golden monkey tracking, and authentic cultural experiences across southwestern Uganda and Rwanda.',
  phone: '+256 XXX XXX XXX',
  email: 'info@virungaadventuretours.com',
  whatsapp: '+256 XXX XXX XXX',
  address: 'Kisoro Town, Kisoro District, South-Western Uganda',
  socials: {
    instagram: '#',
    facebook: '#',
    tripadvisor: '#',
  },
};
