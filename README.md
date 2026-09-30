# Kyushu Winter Road Trip Planner (English Edition)

> 🚗 **10-Day 9-Night Dual Outlets, Zone 2 Running, Glamping & Family Self-Drive Expedition**
> Tailored for international travelers & Thai citizens with real-time THB to JPY currency exchange and Japanese 1949 Geneva Convention IDP regulations.

---

## 🌟 Key Highlights

- **Live THB ➔ JPY Currency Converter**: Direct API integration (`open.er-api.com`) fetching live exchange rates for Thai Baht to Japanese Yen with quick preset conversion chips (฿1,000 to ฿50,000).
- **Thai Driver & Travel Legal Guide**:
  - Detailed instructions on the **1949 Geneva Convention International Driving Permit (IDP)** model issued by DLT Thailand.
  - Clarification that Japanese translations are **not** applicable to Thai domestic licenses.
  - 15-day visa-free tourism entry guidelines and physical document checklists.
- **Flights Schedule**:
  - **Outbound**: Dec 19, 2026 (Sat) – EVA Air BR106 (Arrival FUK 11:15 AM)
  - **Inbound**: Dec 28, 2026 (Mon) – EVA Air BR105 (Departure FUK 12:15 PM)
- **10-Day Detailed Itinerary**:
  - **Day 1 (Dec 19 Sat)**: Arrival in Fukuoka ➔ Beppu Umi Jigoku ➔ GRAND VERDE RESORT Wagyu BBQ Glamping
  - **Day 2 (Dec 20 Sun)**: Kyushu African Safari (Jungle Bus feeding) ➔ Yufuin Onsen (Rakuten STAY VILLA private detached bath)
  - **Day 3 (Dec 21 Mon)**: Lake Kinrin morning mist ➔ Tosu Premium Outlets (Sportswear & outdoor) ➔ LaLaport Fukuoka (1:1 Gundam) ➔ Tenjin
  - **Day 4 (Dec 22 Tue)**: Ohori Park Zone 2 morning running ➔ HUMAN MADE Flagship & Daimyo streetwear ➔ Tenjin shopping
  - **Day 5 (Dec 23 Wed)**: Fukuoka Anpanman Children’s Museum ➔ Tenjin Department Stores ➔ Tonkotsu Ramen
  - **Day 6 (Dec 24 Thu - Christmas Eve)**: Dazaifu Tenmangu (Kengo Kuma Starbucks) ➔ Mitsui LaLaport Gundam ➔ KidZania Fukuoka career city ➔ Christmas Eve dinner
  - **Day 7 (Dec 25 Fri - Christmas Day)**: Karato Market seafood feast ➔ Mojiko Retro Port ➔ THE OUTLETS KITAKYUSHU (ASOBI PARK & Wagyu Yakiniku)
  - **Day 8 (Dec 26 Sat)**: Itoshima Coastal Drive (Futamigaura Married Couple Rocks & Noburin Oyster Huts)
  - **Day 9 (Dec 27 Sun)**: Marine World Uminonakamichi & Seaside National Park (Giant jumping domes & roller slides)
  - **Day 10 (Dec 28 Mon)**: Fukuoka Airport car return (08:30 AM) & EVA Air BR105 departure
- **Dual Outlets Strategy**: Side-by-side comparison between Tosu Premium Outlets (US sports focus) and THE OUTLETS KITAKYUSHU (Modern Japanese brands & massive indoor kids park).
- **Zero-Emoji Professional UI**: High contrast, dark mode aesthetic with clean Lucide SVG icons.
- **Interactive Packing Checklist**: Persisted locally in `localStorage` with categories for Thai driver documents, running gear, car electronics, and winter apparel.

---

## 🛠️ Technology Stack

- **Framework**: React 19 + Vite 5
- **Styling**: Tailwind CSS (Dark theme / Slate & Amber)
- **Icons**: Lucide React
- **Charts**: Chart.js + React-Chartjs-2
- **FX API**: Open Exchange Rates API (`https://open.er-api.com/v6/latest/THB`)

---

## 🚀 Getting Started Locally

```bash
# Clone the repository
git clone https://github.com/lawrence555-dev/winter-trip-en.git
cd winter-trip-en

# Install dependencies
npm install

# Start the Vite development server
npm run dev
```

---

## ☁️ Deployment (Render / Vercel / Netlify)

- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Node Version**: `>= 18.0.0`
