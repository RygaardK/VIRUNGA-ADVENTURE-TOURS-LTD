# VIRUNGA ADVENTURE TOURS LTD
## Transportation information

### Transportation Data Structure

export type TransportType =
  | "bodaboda"
  | "4x4_car"
  | "boat"

export interface TransportService {
  id: string
  name: string
  type: TransportType
  pricingModel: "per_day"
  fuelIncluded: boolean
  englishDriver: boolean
  driverIncluded: boolean
  crossBorder: boolean
  airportPickup: string[]
}

export const transportServices: TransportService[] = [
  {
    id: "bodaboda",
    name: "Bodaboda Motorcycle Transport",
    type: "bodaboda",
    pricingModel: "per_day",
    fuelIncluded: true,
    englishDriver: true,
    driverIncluded: true,
    crossBorder: false,
    airportPickup: []
  },
  {
    id: "4x4-car",
    name: "4x4 Safari Car with Driver",
    type: "4x4_car",
    pricingModel: "per_day",
    fuelIncluded: true,
    englishDriver: true,
    driverIncluded: true,
    crossBorder: true,
    airportPickup: [
      "Entebbe International Airport",
      "Kampala",
      "Kigali"
    ]
  },
  {
    id: "boat",
    name: "Boat with Driver",
    type: "boat",
    pricingModel: "per_day",
    fuelIncluded: true,
    englishDriver: true,
    driverIncluded: true,
    crossBorder: false,
    airportPickup: []
  }
]

### Airport Transfer Data
export const airportTransfers = [
  {
    location: "Entebbe International Airport",
    destination: "Kisoro"
  },
  {
    location: "Kampala",
    destination: "Kisoro"
  },
  {
    location: "Kigali",
    destination: "Kisoro"
  }
]

### Transport Description (SEO Content)

AI kan använda detta på hemsidan.

export const transportDescription = `
Virunga Adventure Tours offers reliable transportation services in Uganda and Rwanda.

Guests can travel with professional English-speaking drivers using comfortable 4x4 safari vehicles.

Transportation options include:
- 4x4 safari vehicles with driver
- Bodaboda motorcycle transport for local travel
- Boat transportation on Lake Mutanda

Airport transfers are available from Entebbe International Airport, Kampala and Kigali.

Cross-border transportation between Rwanda and Uganda can also be arranged for travelers visiting Bwindi and Mgahinga National Parks.
`