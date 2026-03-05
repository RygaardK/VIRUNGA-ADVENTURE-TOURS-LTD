# VIRUNGA ADVENTURE TOURS LTD
## Activity information
### Gorillas
Duration: 1 day activity
Accommodation: optional
Transportation: customize
Meals: optional
Permits: included
Guide: included
Pickup from: kisoro
Information: Bwindi and also Mgahinga. We recommend Bwindi.
Transport: Bwindi - Bodaboda  

### HIKING CALDERA
Duration: 2h
Accommodation:full
Transportation:full
Meals: no
Permits: not required
Guide:yes
Pickup from: kisoro
Information:
Transport:

### VOLCANO HIKING
Duration: 8h
Accommodation:full
Transportation:full
Meals: no
Permits: yes
Guide:yes
Pickup from:kisoro
Information: Mt Muhabura, Mt Mgahinga, Mt Sabyinyo.
Transport:
Mgahinga - Bodaboda 30$
Mgahinga - Car option 4x4 150$

### GOLDEN MONKEYS
Duration: 6h
Accommodation:full
Transportation:full
Meals: no
Permits: yes
Guide:yes
Pickup from: kisoro
Information: 
Transport:
Mgahinga - Bodaboda 30$
Mgahinga - Car option 4x4 150$

### BIKETOURS
Duration: 2hrs
Accommodation:full
Transportation:full
Meals:no
Permits: X
Guide: yes
Pickup from:kisoro
Customizable: yes
Information: In the village
Transport:
Price: 30$

### COFFEE EXPERIENCE
Duration: 2h
Accommodation:full
Transportation:full
Meals:yes
Permits: X
Guide:yes
Pickup from:kisoro
Customizable:yes
Information: farm vist with process
Transport:

### CULTURAL EXPERIENCE
Duration: 2h - 2days
Accommodation:full
Transportation:full
Meals:no
Permits:yes
Guide:yes
Pickup from:kisoro
Customizable:yes
Information:
Transportation:

### BATWA TRAIL
Duration: 2h
Accommodation:full
Transportation:full
Meals:no
Permits: X
Guide:yes
Pickup from:kisoro
Customizable:no
Information: Bafumbira tradition
Transportation:

### NATURE WALK
Duration: 2h
Accommodation:full
Transportation:no
Meals:no
Permits: X
Guide: yes
Pickup from:kisoro
Customizable:no
Information: Nature walk around lake mutanda
Transportation:
Bodaboda from Hotel to the lake 25$
Car from hotel to lake 100$
Price: 30$

### CANOEING & BOAT TOUR
Duration: 2h
Accommodation:full
Transportation:full
Meals:no
Permits: X
Guide:yes
Pickup from:kisoro
Bodaboda from Hotel to the lake 25$
Car from hotel to lake 100$
Canoeing 30$ per person (max 4 ppl - local dugout canoe)
Boatride 50$, then extra 35$ per person (max 10 ppl)


### KIGALI CITY TOURS
Duration: 8h
Accommodation:full
Transportation:full
Meals:no
Permits:yes
Guide:yes
Pickup from:kisoro
Transport
Information:

## Activity Pricing Data
export interface ActivityPrice {
  id: string
  name: string
  price: number
  currency: "USD"
  includes: string[]
}

export const activityPrices: ActivityPrice[] = [
  {
    id: "coffee-tour",
    name: "Coffee Experience",
    price: 50,
    currency: "USD",
    includes: [
      "transport",
      "local guide",
      "coffee farm visit",
      "coffee making experience"
    ]
  }
]


## Seasonal Pricing Rules

export const seasonalPricing = {
  highSeason: {
    priceModifier: 1
  },
  lowSeason: {
    priceModifier: 0.7,
    description: "30% discount during low season"
  }
}

## Bundle Discount Rules 
export const bundleDiscount = {
  default: 10,
  description: "10% discount when accommodation and activities are booked together"
}