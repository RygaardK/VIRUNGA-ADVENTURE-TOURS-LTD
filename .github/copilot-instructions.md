# Copilot Instructions – TravelToKisoro / Virunga Adventure Tours

You are assisting in building a tourism website for:

Virunga Adventure Tours Ltd
Location: Kisoro, Uganda

The website promotes tourism activities around:

* Bwindi Impenetrable National Park
* Mgahinga Gorilla National Park
* Lake Mutanda
* Kisoro Town

The main purpose of the website is to help international travelers discover experiences and contact the company to book tours.

---

# Tech Stack

Use the following technologies:

React
TypeScript
Bootstrap 5

Rules:

* Use functional React components
* Use TypeScript interfaces
* Keep components reusable
* Keep styling minimal and Bootstrap-based
* Do not introduce complex libraries unless necessary
* No backend or database for now (static data only)

---

# Project Data Structure

Tourism data is stored in:

/data

Files may include:

experiences.ts
accommodations.ts
transport.ts
packages.ts

Each file exports typed objects.

Example pattern:

```ts
export interface Experience {
  id: string
  name: string
  slug: string
  description: string
  location: string
  duration: string
  priceFrom: number
}
```

Always keep data structured and easy to expand later.

---

# Design Guidelines

The site should look like a modern travel website.

Design goals:

clean
modern
nature inspired
mobile friendly

Colors should reflect:

* green (nature / jungle)
* earth tones
* clean white backgrounds

Avoid overly complex styling.

---

# SEO Requirements

SEO is extremely important.

Every page must include:

SEO title
SEO description
keyword suggestions

Target keywords include:

Kisoro tourism
Things to do in Kisoro
Bwindi gorilla trekking
Mgahinga hiking
Lake Mutanda canoeing
Uganda gorilla tours

Descriptions should be written for international travelers.

---

# Content Writing Style

Write content that sounds:

professional
inspiring
friendly
adventurous

The audience is:

international tourists visiting Uganda and Rwanda.

Descriptions should make travelers excited about visiting Kisoro.

---

# Experiences

The website lists tourism activities such as:

Gorilla trekking
Golden monkey tracking
Volcano hiking
Coffee experience
Cultural tours
Batwa trail
Nature walks
Bike tours
Canoeing and boat tours
Kigali city tours

Each experience page must include:

hero image placeholder
description
duration
location
what is included
transport options
estimated price
booking contact section

---

# Accommodation

Partner accommodations include:

Ichumbi Gorilla Lodge (luxury lodge)
Mutanda Eco Community Centre (lake eco lodge)
Golden Monkey Guesthouse (budget hostel)

Low season discount: 30%

Bundle discount when booking tours + accommodation: 10%

---

# Transport Services

Transport options include:

Bodaboda motorcycle transport
4x4 safari car with driver
Boat transport on Lake Mutanda

Airport pickups available from:

Entebbe
Kampala
Kigali

Cross-border transport between Uganda and Rwanda is supported.

---

# Component Guidelines

Prefer reusable components.

Examples:

ExperienceCard
TransportCard
AccommodationCard
PackageCard
BookingCTA
Navbar
Footer

---

# Future Features (keep compatibility)

The site may later include:

tour booking system
price calculator
package builder
admin dashboard

Structure code so these features can be added easily.

---

# General Rule

Always prioritize:

clean code
SEO optimized content
clear tourism information
reusable React components

The website should feel like a professional African safari tourism website.