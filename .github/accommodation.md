# VIRUNGA ADVENTURE TOURS LTD
## Accommodation information
## Accommodation Data (Structured)
export interface Accommodation {
  id: string
  name: string
  type: "luxury_hotel" | "eco_lodge" | "hostel"
  location: string
  partnerRates: boolean
  seasonalPricing: boolean
  lowSeasonDiscount: number
  bundleDiscount: number
  commissionAgreement: "verbal_operator_rate"
}

export const accommodations: Accommodation[] = [
  {
    id: "ichumbi-gorilla-lodge",
    name: "Ichumbi Gorilla Lodge",
    type: "luxury_hotel",
    location: "Bwindi Impenetrable National Park",
    partnerRates: true,
    seasonalPricing: true,
    lowSeasonDiscount: 30,
    bundleDiscount: 10,
    commissionAgreement: "verbal_operator_rate"
  },
  {
    id: "mutanda-eco-community",
    name: "Mutanda Eco Community Centre",
    type: "eco_lodge",
    location: "Lake Mutanda",
    partnerRates: true,
    seasonalPricing: true,
    lowSeasonDiscount: 30,
    bundleDiscount: 10,
    commissionAgreement: "verbal_operator_rate"
  },
  {
    id: "golden-monkey-guesthouse",
    name: "Golden Monkey Guesthouse",
    type: "hostel",
    location: "Kisoro",
    partnerRates: true,
    seasonalPricing: true,
    lowSeasonDiscount: 30,
    bundleDiscount: 10,
    commissionAgreement: "verbal_operator_rate"
  }
]


### Text Description (för AI Content)

Detta kan AI använda för SEO och hemsidan:

export const accommodationInfo = `
Virunga Adventure Tours Ltd works with trusted local accommodation partners in Kisoro and around Bwindi and Lake Mutanda.

Accommodation options include:
Luxury lodge stays near Bwindi for gorilla trekking,
eco-community lodges at Lake Mutanda,
and budget friendly guesthouses in Kisoro.

Partner accommodations offer fixed tour operator rates. 
During the low season prices are typically reduced by 30%.

Guests booking accommodation together with tours can receive
bundle discounts of approximately 10%.
`