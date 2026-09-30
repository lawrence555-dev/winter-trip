import { 
  Plane, 
  ShoppingBag, 
  Camera, 
  Utensils, 
  Hotel, 
  MapPin, 
  Coffee, 
  Car, 
  Flame, 
  Sparkles, 
  Activity, 
  Compass, 
  Heart, 
  Waves, 
  Smile, 
  ShieldCheck, 
  Sun,
  Footprints,
  Baby
} from 'lucide-react';

export const winterItineraryEn = [
  {
    day: 1,
    date: 'Dec 19 (Sat)',
    title: 'Arrival in Fukuoka ➔ Beppu Hells Onsen ➔ Luxury Glamping BBQ',
    summary: 'Arrive at Fukuoka Airport at 11:15 AM (Flight BR106), pick up rental car at International Terminal, activate KEP Pass, drive to Beppu to explore Umi Jigoku, and check in at GRAND VERDE RESORT for an outdoor Wagyu BBQ feast.',
    region: 'Fukuoka ➔ Beppu, Oita',
    driveTime: 'Approx. 2 hrs (Expressway)',
    stay: 'GRAND VERDE RESORT (Luxury Glamping Dome)',
    activities: [
      {
        time: '11:15',
        title: 'Arrive at Fukuoka Airport (FUK) & Car Rental Pick-up (BR106)',
        desc: 'Arrive at Fukuoka Airport via EVA Air Flight BR106. Clear customs, proceed to the car rental counter at the International Terminal, install child safety seats, and make sure to purchase the KEP (Kyushu Expressway Pass).',
        icon: Plane,
        type: 'transit',
        highlight: true,
        map: 'Fukuoka Airport International Terminal'
      },
      {
        time: '12:30–14:30',
        title: 'Scenic Expressway Drive to Beppu Onsen',
        desc: 'Drive directly from Fukuoka to Beppu via the expressway (approx. 2 hours). Enjoy winter mountain views of Kyushu and make a brief stop at an Expressway Service Area (SA) for a quick lunch.',
        icon: Car,
        type: 'transit',
        map: 'Kusu Service Area'
      },
      {
        time: '14:30–16:00',
        title: 'Quick Visit to Beppu Sea Hell (Umi Jigoku)',
        desc: 'Visit Beppu’s most famous geothermal hot spring, featuring a 98°C boiling cobalt-blue pond with rising steam plumes. Taste onsen-steamed eggs and legendary hot spring pudding.',
        icon: Flame,
        type: 'activity',
        map: 'Umi Jigoku Beppu'
      },
      {
        time: '16:30 onwards',
        title: 'Check-in at GRAND VERDE RESORT & Wagyu Glamping BBQ',
        desc: 'Arrive early at the highland resort to check in. Enjoy premium glamping amenities under starry skies and savor an exclusive Wagyu beef and seafood BBQ dinner at your private outdoor deck.',
        icon: Hotel,
        type: 'stay',
        highlight: true,
        map: 'GRAND VERDE RESORT'
      }
    ],
    notes: [
      { text: 'KEP Pass Reminder: Tolls on Kyushu expressways are substantial. Ensure you request an ETC card and activate the unlimited KEP (Kyushu Expressway Pass) upon pick-up.' },
      { text: 'Winter Warmth: Temperatures in highland Beppu drop significantly after sunset (3-8°C). Keep warm windproof jackets handy for the outdoor BBQ.' }
    ]
  },
  {
    day: 2,
    date: 'Dec 20 (Sun)',
    title: 'Kyushu African Safari Jungle Bus ➔ Yufuin Private Onsen Villa',
    summary: 'Drive 25 minutes to Kyushu African Safari to feed wild beasts from the Jungle Bus, then head to Yufuin to check in at Rakuten STAY VILLA with a private hot spring bath and stroll around Yunotsubo Street.',
    region: 'Beppu ➔ Yufuin',
    driveTime: 'Approx. 50 mins (25m + 25m)',
    stay: 'Rakuten STAY VILLA Yufuin Onsen (Private Detached Villa)',
    activities: [
      {
        time: '09:00',
        title: 'Check-out & Drive to African Safari',
        desc: 'Enjoy morning breakfast at the resort, check out, and take a scenic 25-minute drive to Kyushu African Safari.',
        icon: Car,
        type: 'transit',
        map: 'African Safari Kyushu'
      },
      {
        time: '09:30–13:30',
        title: 'Kyushu African Safari: Jungle Bus Feeding Experience',
        desc: 'Board the cage-protected Jungle Bus to enter open-range wildlife zones and feed lions, elephants, and bears using long tongs. Afterwards, visit the petting zoo to interact with kangaroos and miniature horses.',
        icon: Heart,
        type: 'activity',
        highlight: true,
        map: 'African Safari Kyushu'
      },
      {
        time: '13:30–14:00',
        title: 'Scenic Drive to Yufuin Onsen Town',
        desc: 'Drive along the picturesque foothills of Mount Yufu (approx. 25 minutes) directly into Yufuin.',
        icon: Car,
        type: 'transit',
        map: 'Yufuin'
      },
      {
        time: '14:30 onwards',
        title: 'Check-in at Rakuten STAY VILLA & Stroll Yunotsubo Street',
        desc: 'Check in to your private detached villa with dedicated parking. Spend the afternoon exploring Yunotsubo Street and the Yufuin Floral Village for desserts and snacks, then return for a private natural onsen soak.',
        icon: Hotel,
        type: 'stay',
        highlight: true,
        map: 'Rakuten STAY VILLA Yufuin Onsen'
      }
    ],
    notes: [
      { text: 'Jungle Bus Reservation: If busy upon arrival, reserve your Jungle Bus boarding time first at the ticket desk before visiting the petting zoo.' },
      { text: 'Private Villa Perk: Rakuten STAY VILLA provides private reserved parking right in front of your villa, eliminating the need to haul heavy luggage upstairs.' }
    ]
  },
  {
    day: 3,
    date: 'Dec 21 (Mon)',
    title: 'Kinrin Lake Morning Mist ➔ Tosu Premium Outlets ➔ LaLaport Gundam ➔ Tenjin',
    summary: 'Photograph the winter morning mist over Lake Kinrin, drive to Tosu Premium Outlets for premier sportswear shopping, visit the 1:1 scale Gundam at LaLaport Fukuoka, and check in at Tenjin.',
    region: 'Yufuin ➔ Tosu ➔ Fukuoka Tenjin',
    driveTime: 'Approx. 2 hrs 15 mins (1h15m + 45m)',
    stay: 'Fukuoka Tenjin Central Hotel (City Base)',
    activities: [
      {
        time: '08:30–09:30',
        title: 'Lake Kinrin Morning Walk & Floating Torii Gate',
        desc: 'Witness the fairy-tale morning steam rising from Lake Kinrin where thermal spring waters meet crisp winter air. Stroll to Tenso Shrine’s submerged torii gate.',
        icon: Waves,
        type: 'nature',
        map: 'Lake Kinrin Yufuin'
      },
      {
        time: '10:30–11:45',
        title: 'Check-out & Drive to Tosu Premium Outlets',
        desc: 'Check out and take the expressway towards Tosu in Saga Prefecture (approx. 1 hour 15 minutes).',
        icon: Car,
        type: 'transit',
        map: 'Tosu Premium Outlets'
      },
      {
        time: '11:45–14:30',
        title: 'Outlet #1: Tosu Premium Outlets Sportswear Shopping',
        desc: 'California-style open-air outlet mall featuring Nike, Adidas, Under Armour, New Balance, and The North Face. Enjoy lunch at the food court and load your shopping hauls directly into the trunk.',
        icon: ShoppingBag,
        type: 'shopping',
        highlight: true,
        map: 'Tosu Premium Outlets'
      },
      {
        time: '14:30–15:15',
        title: 'Drive to Fukuoka City ➔ LaLaport Fukuoka',
        desc: 'Drive approx. 40-45 minutes into southern Fukuoka to arrive at Mitsui Shopping Park LaLaport.',
        icon: Car,
        type: 'transit',
        map: 'Mitsui Shopping Park LaLaport FUKUOKA'
      },
      {
        time: '15:15–18:30',
        title: 'LaLaport Fukuoka: 1:1 Scale RX-93ff ν Gundam & Dinner',
        desc: 'Marvel at the 24.8-meter life-sized Gundam statue, watch the dynamic light and motion show, explore GUNDAM SIDE-F for exclusive models, and enjoy dinner at the mall.',
        icon: Sparkles,
        type: 'activity',
        map: 'RX-93ff Gundam LaLaport Fukuoka'
      },
      {
        time: '19:00',
        title: 'Hotel Check-in at Tenjin & Overnight Bag Strategy',
        desc: 'Park at the hotel parking facility. Keep main suitcases and outlet shopping bags locked securely inside the car trunk, taking only lightweight overnight bags upstairs.',
        icon: Hotel,
        type: 'stay',
        map: 'Tenjin Fukuoka'
      }
    ],
    notes: [
      { text: 'Luggage Strategy: By leaving heavy bags in the car trunk, you avoid hauling multiple suitcases up and down the hotel elevators in Tenjin.' },
      { text: 'Tosu Focus: Best suited for major Western sports and outdoor performance apparel (deep discounts on running and ski gear).' }
    ]
  },
  {
    day: 4,
    date: 'Dec 22 (Tue)',
    title: 'Ohori Park Zone 2 Morning Run ＋ Lakeside Starbucks Family Breakfast',
    summary: 'Drive to Ohori Park for a premier 2km Zone 2 loop run; family enjoys a relaxed breakfast overlooking the lake at Starbucks, followed by casual Tenjin shopping.',
    region: 'Fukuoka City (Ohori / Tenjin)',
    driveTime: 'Approx. 15 mins (City drive)',
    stay: 'Fukuoka Tenjin Central Hotel',
    activities: [
      {
        time: '07:30–09:00',
        title: 'Ohori Park Zone 2 Morning Run & Lakeside Starbucks Breakfast',
        desc: 'Drive 10 minutes to Ohori Park paid parking (spacious at 7:30 AM). Put on your running shoes for a premier Zone 2 morning run around the 2km cushioned rubber track, while family enjoys warm coffee and breakfast at the lakeside Starbucks.',
        icon: Activity,
        type: 'sport',
        highlight: true,
        map: 'Starbucks Coffee - Ohori Park'
      },
      {
        time: '09:00–10:30',
        title: 'Park Island Walk & Return to Hotel to Freshen Up',
        desc: 'Rejoin family at the scenic Moon Viewing Bridge, take a gentle walk feeding waterfowl and exploring the pine islands, then drive back to the hotel to shower.',
        icon: Sun,
        type: 'nature',
        map: 'Ohori Park Fukuoka'
      },
      {
        time: '11:30–14:30',
        title: 'HUMAN MADE Fukuoka Flagship Store & Daimyo Streetwear',
        desc: 'Drive back to the trendy Daimyo district to visit NIGO’s iconic HUMAN MADE Flagship Store. Pick up Fukuoka-exclusive tees, accessories, and explore Supreme, Stussy, and BEAMS. Enjoy Hakata Motsunabe or Issou Tonkotsu Ramen for lunch.',
        icon: ShoppingBag,
        type: 'shopping',
        highlight: true,
        map: 'HUMAN MADE FUKUOKA'
      },
      {
        time: 'Afternoon–Evening',
        title: 'Tenjin Department Store Shopping (PARCO / Iwataya) & Family Leisure',
        desc: 'Explore Fukuoka PARCO, Iwataya, and Mitsukoshi Department Store for curated Japanese fashion, children’s lifestyle goods, and coffee breaks.',
        icon: ShoppingBag,
        type: 'shopping',
        map: 'Fukuoka PARCO'
      }
    ],
    notes: [
      { text: 'Parking Tip: Ohori Park has two major parking lots. At 7:30 AM, spaces are plentiful and right next to the running track entrance.' },
      { text: 'Track Details: Ohori Park features a dedicated 2,000-meter polyurethane rubber track with precise distance markers and running etiquette.' }
    ]
  },
  {
    day: 5,
    date: 'Dec 23 (Wed)',
    title: 'Kids Fun Day: Anpanman Children’s Museum ➔ Tenjin Shopping',
    summary: 'Full indoor winter-proof day: Anpanman Children’s Museum at Hakata Riverain with live shows and character bakery, afternoon shopping at Iwataya/Daimaru, and authentic Hakata Ramen for dinner.',
    region: 'Fukuoka City (Nakasu-Kawabata / Tenjin)',
    driveTime: 'Approx. 10 mins (Short city drive)',
    stay: 'Fukuoka Tenjin Central Hotel',
    activities: [
      {
        time: '10:00–14:30',
        title: 'Fukuoka Anpanman Children’s Museum in Mall',
        desc: 'Fully indoor climate-controlled wonderland on floors 5-6 of Hakata Riverain. Watch character dance performances, play in rainbow slides and ball pits, and buy freshly baked character bread at Uncle Jam’s Bakery.',
        icon: Baby,
        type: 'activity',
        highlight: true,
        map: 'Fukuoka Anpanman Children’s Museum in Mall'
      },
      {
        time: '15:00–18:30',
        title: 'Tenjin Department Stores: Iwataya & Daimaru',
        desc: 'Explore premium fashion, children’s apparel, and curated Japanese lifestyle goods with convenient tax-free shopping services.',
        icon: ShoppingBag,
        type: 'shopping',
        map: 'Iwataya Main Store'
      },
      {
        time: '19:00',
        title: 'Dinner: Authentic Hakata Tonkotsu Ramen',
        desc: 'Savor rich tonkotsu broth ramen (Issou, Shin-Shin, or Danbo) served with bite-sized gyoza dumplings and spicy cod roe rice.',
        icon: Utensils,
        type: 'dining',
        map: 'Hakata Issou Fukuoka'
      }
    ],
    notes: [
      { text: 'Weather-Proof: Anpanman Museum is 100% indoors and directly connected to Nakasu-Kawabata Subway Station, shielding you from winter winds.' },
      { text: 'Bakery Tip: Uncle Jam’s Bakery has the freshest selection before noon; visit early to pick up popular character buns.' }
    ]
  },
  {
    day: 6,
    date: 'Dec 24 (Thu)',
    title: 'Dazaifu Starbucks ➔ Mitsui LaLaport Gundam ➔ KidZania Fukuoka (Christmas Eve Special)',
    summary: 'Early morning coffee at Kengo Kuma’s Dazaifu Starbucks and shrine blessings, midday photos with the 1:1 scale RX-93ff ν Gundam at LaLaport Fukuoka, and a magical afternoon at KidZania Fukuoka where kids role-play real careers on Christmas Eve!',
    region: 'Dazaifu ➔ Mitsui LaLaport Fukuoka (KidZania) ➔ Tenjin',
    driveTime: 'Approx. 35 mins (Dazaifu to LaLaport 20m, LaLaport to Tenjin 15m)',
    stay: 'Fukuoka Tenjin Central Hotel',
    activities: [
      {
        time: '08:00–08:30',
        title: 'Scenic Morning Drive to Dazaifu Tenmangu',
        desc: 'Depart at 8:00 AM to beat rush hour and tour buses, arriving at Dazaifu parking in approx. 25 minutes.',
        icon: Car,
        type: 'transit',
        map: 'Dazaifu Tenmangu Parking'
      },
      {
        time: '08:30–10:30',
        title: 'Dazaifu Omotesando Kengo Kuma Starbucks & Plum Cake Blessings',
        desc: 'Enjoy morning coffee inside the architectural masterpiece designed by Kengo Kuma with 2,000 interlocking cedar timbers. Pray for family blessings at the historic Tenmangu Shrine and savor freshly toasted Umegae Mochi plum cakes.',
        icon: Coffee,
        type: 'dining',
        highlight: true,
        map: 'Starbucks Coffee - Dazaifu Tenmangu Omotesando'
      },
      {
        time: '11:00–12:30',
        title: 'Drive to Mitsui LaLaport Fukuoka & 1:1 Life-Size ν Gundam',
        desc: 'Drive 20 minutes to Mitsui Shopping Park LaLaport Fukuoka (spacious indoor parking). Photograph the towering 24.8-meter RX-93ff ν Gundam statue at the forest plaza and enjoy lunch at the 3F Food Court.',
        icon: Car,
        type: 'transit',
        map: 'RX-93ff Gundam LaLaport Fukuoka'
      },
      {
        time: '13:00–18:30',
        title: 'KidZania Fukuoka (キッザニア福岡) Real Career City Experience (Christmas Eve Edition)',
        desc: 'Located on 2F of LaLaport Fukuoka! Children put on authentic mini uniforms to role-play 60+ real-world professions including airline pilots, firefighters, pastry chefs, pizza makers, voice actors, and police officers. Kids earn official "KidZo" currency to learn financial independence. Enjoy special Christmas Eve tasks in a warm, weather-proof indoor environment while parents shop across 200+ retail brands (Gundam Side-F, Jump Shop, Japanese lifestyle goods).',
        icon: Baby,
        type: 'activity',
        highlight: true,
        map: 'KidZania Fukuoka'
      },
      {
        time: '19:00 onwards',
        title: 'Christmas Eve Dinner & Fukuoka Winter Illuminations',
        desc: 'Enjoy a celebratory Christmas Eve dinner at LaLaport or back in Tenjin, then stroll through Tenjin Kego Park and Nakasu-Kawabata to admire sparkling Christmas trees and holiday light festivals.',
        icon: Utensils,
        type: 'dining',
        map: 'Tenjin Christmas Market'
      }
    ],
    notes: [
      { text: 'KidZania Advance Booking: KidZania Fukuoka runs Part 1 (09:00-14:30) and Part 2 (15:30-20:00) sessions. Advance online reservation is highly recommended for Christmas Eve.' },
      { text: 'LaLaport Parking: Features over 3,000 indoor parking spaces; retail purchases qualify for complimentary parking validation.' },
      { text: 'Golden Hour at Dazaifu: 8:30 AM arrival guarantees serene photos with zero queues at Starbucks.' }
    ]
  },
  {
    day: 7,
    date: 'Dec 25 (Fri)',
    title: 'Northern Kyushu Expedition: Karato Market ➔ Mojiko Retro ➔ THE OUTLETS KITAKYUSHU',
    summary: 'Cross the Kanmon Straits Bridge for fresh sashimi at Karato Market, explore Mojiko Retro Railway Museum, and spend the afternoon at THE OUTLETS KITAKYUSHU with Wagyu Yakiniku dinner.',
    region: 'Fukuoka ➔ Shimonoseki ➔ Mojiko ➔ Kitakyushu',
    driveTime: 'Approx. 2 hrs 40 mins (Full-day circuit)',
    stay: 'Fukuoka Tenjin Central Hotel',
    activities: [
      {
        time: '08:30–09:45',
        title: 'Drive North & Cross the Kanmon Straits Bridge',
        desc: 'Drive north on the expressway across the suspension bridge connecting Kyushu to Honshu, arriving in Shimonoseki, Yamaguchi (approx. 1 hr 15 mins).',
        icon: Car,
        type: 'transit',
        map: 'Kanmon Bridge'
      },
      {
        time: '09:45–12:00',
        title: 'Karato Fish Market: Ultra-Fresh Nigiri & Seafood Feast',
        desc: 'Sample prime Bluefin Otoro tuna, local Fugu blowfish sashimi, and sea urchin rice bowls, enjoying your meal on the boardwalk overlooking the strait.',
        icon: Utensils,
        type: 'dining',
        highlight: true,
        map: 'Karato Sea Market'
      },
      {
        time: '12:00–14:00',
        title: 'Mojiko Retro District & Kyushu Railway History Museum',
        desc: 'Drive across to Mojiko Retro to admire Taisho-era European brick architecture and let the kids drive mini electric trains at the Railway History Museum.',
        icon: Camera,
        type: 'activity',
        map: 'Kyushu Railway History Museum'
      },
      {
        time: '14:00–14:30',
        title: 'Drive to Yahatahigashi, Kitakyushu',
        desc: 'Drive approx. 30 minutes to Kyushu’s state-of-the-art regional shopping destination.',
        icon: Car,
        type: 'transit',
        map: 'THE OUTLETS KITAKYUSHU'
      },
      {
        time: '14:30–19:00',
        title: 'Outlet #2: THE OUTLETS KITAKYUSHU & Wagyu Yakiniku Dinner',
        desc: 'Opened in 2022 and connected to AEON MALL. Features Japanese lifestyle labels and a huge indoor ASOBI PARK entertainment zone for children. Enjoy premium charcoal-grilled Wagyu dinner before driving back to Tenjin.',
        icon: ShoppingBag,
        type: 'shopping',
        highlight: true,
        map: 'THE OUTLETS KITAKYUSHU'
      }
    ],
    notes: [
      { text: 'Outlet Distinction: Tosu focuses on global sportswear; Kitakyushu Outlets features modern Japanese lifestyle brands, an expansive indoor kids park, and gourmet Wagyu dining.' },
      { text: 'Return Drive: The expressway drive from Yahatahigashi IC back to Tenjin takes approx. 1 hour with smooth evening traffic.' }
    ]
  },
  {
    day: 8,
    date: 'Dec 26 (Sat)',
    title: 'Itoshima Coastal Holiday: Sakurai Futamigaura ➔ Grilled Oyster Feast at Noburin',
    summary: 'Drive 45 minutes west to scenic Itoshima to see the White Torii Gate & Married Couple Rocks, indulge in winter charcoal-grilled oysters at Noburin, and take a coastal drive.',
    region: 'Fukuoka City ➔ Itoshima Coast',
    driveTime: 'Approx. 45 mins (Westbound drive)',
    stay: 'Fukuoka Tenjin Central Hotel',
    activities: [
      {
        time: '09:30–10:15',
        title: 'Scenic Drive West to Itoshima Peninsula',
        desc: 'Drive along the coastline of western Fukuoka (approx. 45 minutes) enjoying panoramic winter sea views.',
        icon: Car,
        type: 'transit',
        map: 'Itoshima'
      },
      {
        time: '10:15–11:30',
        title: 'Sakurai Futamigaura: Sacred White Torii & Married Rocks',
        desc: 'Itoshima’s most iconic scenic spot, featuring the white ocean torii gate and twin sacred rocks set against deep blue winter waters.',
        icon: Waves,
        type: 'nature',
        highlight: true,
        map: 'Sakurai Futamigaura of Meotoiwa'
      },
      {
        time: '11:45–13:30',
        title: 'Kishi Fishing Port: Charcoal-Grilled Oysters at Noburin',
        desc: 'Winter is prime season for plump Itoshima oysters. Put on your protective aprons and grill sweet oysters, scallops, and seafood rice over live coals in a family-friendly setup.',
        icon: Utensils,
        type: 'dining',
        highlight: true,
        map: 'Oyster hut Noburin Itoshima'
      },
      {
        time: 'Afternoon',
        title: 'Itoshima Coastal Cruise: London Bus Cafe & Palm Swing',
        desc: 'Cruise along the coastal highway, stopping at the popular Yellow London Double-Decker Bus for artisanal gelato and taking family photos by the beach.',
        icon: Coffee,
        type: 'activity',
        map: 'London Bus Cafe Itoshima'
      }
    ],
    notes: [
      { text: 'Seasonal Oysters: Itoshima oyster huts operate from November to March; Noburin offers spacious seating with excellent child safety.' },
      { text: 'Sea Breeze: Coastal winds can be brisk in winter; keep hats and scarves on hand.' }
    ]
  },
  {
    day: 9,
    date: 'Dec 27 (Sun)',
    title: 'Uminonakamichi Seaside Park: Marine World Aquarium & Giant Playgrounds',
    summary: 'Drive to Uminonakamichi to watch dolphin shows at Marine World, followed by high-energy outdoor climbing domes and giant roller slides, with your car ready for afternoon naps.',
    region: 'Fukuoka City ➔ Uminonakamichi',
    driveTime: 'Approx. 40 mins (Across bay bridge)',
    stay: 'Fukuoka Tenjin Central Hotel',
    activities: [
      {
        time: '09:30–10:15',
        title: 'Drive to Uminonakamichi Seaside Park',
        desc: 'Drive across the bay highway (approx. 40 minutes) to the expansive seaside park parking area.',
        icon: Car,
        type: 'transit',
        map: 'Uminonakamichi Seaside Park'
      },
      {
        time: '10:15–13:00',
        title: 'Marine World Uminonakamichi: Dolphin & Sea Lion Shows',
        desc: 'Spectacular ocean-view performance pool with acrobatic dolphin jumps against the backdrop of Hakata Bay, plus giant panoramic tanks with schooling sardines.',
        icon: Waves,
        type: 'activity',
        highlight: true,
        map: 'Marine World Uminonakamichi'
      },
      {
        time: '13:00–16:00',
        title: 'National Seaside Park: Giant Inflatable Domes & Roller Slides',
        desc: 'One of Japan’s premier national parks. Features giant cloud jumping domes (Kujira-gumo) and extensive adventure playgrounds where kids can play freely and nap in the car when tired.',
        icon: Smile,
        type: 'activity',
        highlight: true,
        map: 'Uminonakamichi Seaside Park'
      },
      {
        time: 'Evening',
        title: 'Return to Fukuoka & Final Packing & Celebration Dinner',
        desc: 'Drive back to Tenjin, enjoy a celebratory dinner for your last night in Fukuoka, and pack your dual outlet shopping hauls in your room.',
        icon: Hotel,
        type: 'stay',
        map: 'Tenjin Fukuoka'
      }
    ],
    notes: [
      { text: 'Car Logistics: Having a car at Uminonakamichi allows you to store picnic gear and let young children sleep comfortably in their car seats after playing.' }
    ]
  },
  {
    day: 10,
    date: 'Dec 28 (Mon)',
    title: 'Final Morning ➔ Fukuoka Airport Car Return ➔ 12:15 BR105 Departure',
    summary: 'Check out of hotel, return rental car at the airport branch, take the complimentary shuttle to International Terminal, and board EVA Air Flight BR105 back home.',
    region: 'Fukuoka City ➔ Fukuoka Airport ➔ Home',
    driveTime: 'Approx. 25 mins (City to airport)',
    stay: 'Home Sweet Home',
    activities: [
      {
        time: '08:30–09:00',
        title: 'Hotel Check-out & Final Vehicle Check',
        desc: 'Complete hotel check-out, load all suitcases into the trunk, and verify passports, travel documents, and car chargers.',
        icon: Hotel,
        type: 'stay',
        map: 'Tenjin Fukuoka'
      },
      {
        time: '09:00–09:30',
        title: 'Drive to Fukuoka Airport Car Rental Return',
        desc: 'Refuel with regular gasoline at the designated station near the airport, return the car, and settle KEP expressway fees.',
        icon: Car,
        type: 'transit',
        highlight: true,
        map: 'Fukuoka Airport Car Rental Return'
      },
      {
        time: '09:30 onwards',
        title: 'Terminal Check-in & Souvenir Shopping',
        desc: 'Take the rental company’s complimentary shuttle to International Terminal. Check in for EVA Air Flight BR105 and pick up famous Hakata Torimon and Fukusaya castella at duty-free shops.',
        icon: ShoppingBag,
        type: 'shopping',
        map: 'Fukuoka Airport International Terminal'
      },
      {
        time: '12:15',
        title: 'EVA Air Flight BR105 Departure',
        desc: 'Depart Fukuoka on EVA Air BR105 (12:15 PM), concluding a memorable 10-day Kyushu self-drive family expedition.',
        icon: Plane,
        type: 'transit',
        highlight: true,
        map: 'Taoyuan International Airport'
      }
    ],
    notes: [
      { text: 'Refuel Requirement: Standard Japanese rental contracts require a full-tank return; keep the fuel receipt for the inspection staff.' },
      { text: 'Duty-Free Highlights: Pick up Hakata Torimon, Mentai Senbei crackers, and boxed Ichiran ramen inside the departure terminal.' }
    ]
  }
];

export const drivingHighlightsEn = [
  {
    title: 'Ohori Park Zone 2 Running & Parking Strategy',
    summary: 'Empty spaces at 7:30 AM with direct access to the 2km cushioned track',
    desc: 'Ohori Park features dedicated paid parking lots that are very empty around 7:30 AM. Park directly at the track entrance to start your Zone 2 morning run seamlessly while family enjoys breakfast at the lakeside Starbucks.',
    tag: 'Running & Parking',
    icon: Activity
  },
  {
    title: 'Dual Outlets Strategic Comparison',
    summary: 'Tosu (US Sports & Outdoor) vs Kitakyushu (Modern Japanese & Kids)',
    desc: 'Tosu Premium Outlets specializes in Western sportswear (Nike, Adidas, UA, North Face); THE OUTLETS KITAKYUSHU (opened in 2022) offers contemporary Japanese apparel, connects to AEON MALL, and houses a massive indoor ASOBI PARK playground plus premium Wagyu dining.',
    tag: 'Dual Outlets',
    icon: ShoppingBag
  },
  {
    title: 'KEP (Kyushu Expressway Pass) Essential',
    summary: 'Unlimited ETC expressway access for international visitors',
    desc: 'With over 600 km driven across Fukuoka, Beppu, Yufuin, Tosu, and Kitakyushu, purchasing the KEP Pass at airport pick-up saves over 40% on toll fees without stopping at cash booths.',
    tag: 'Toll Savings',
    icon: ShieldCheck
  },
  {
    title: 'Overnight Bag & Trunk Logistics Strategy',
    summary: 'Leave main suitcases locked in trunk; carry only light overnight bags',
    desc: 'While staying at Yufuin and Tenjin hotels, keep heavy suitcases and outlet shopping bags locked securely inside the car trunk, taking only lightweight overnight bags upstairs to eliminate daily luggage hauling.',
    tag: 'Luggage Logistics',
    icon: Hotel
  }
];

export const packingChecklistEn = [
  { 
    category: 'Thai Traveler Documents & Driving', 
    items: [
      'Original Thai Passport (Valid 6+ months, 15-day visa-free for tourism)', 
      'International Driving Permit (IDP) 1949 Geneva Convention Model (issued by DLT Thailand)', 
      'Original Thai 5-Year / Lifetime Physical Driving License', 
      'Car Rental Confirmation & KEP / ETC Booking Voucher', 
      'Travel Insurance Policy & Emergency Contact Card'
    ] 
  },
  { 
    category: 'Running & Sport Gear', 
    items: [
      'Zone 2 Running Shoes (e.g. Nike / Hoka / Asics)', 
      'Breathable Windproof Running Jacket & Layers', 
      'Running Tights / Compression Shorts', 
      'GPS Sports Watch (Garmin / Apple Watch) & Heart Rate Monitor', 
      'Hydration Bottle & Running Headband'
    ] 
  },
  { 
    category: 'Electronics & Car Essentials', 
    items: [
      'Dual-Port Fast Car Charger & Magnetic Phone Mount', 
      'High-Capacity Power Bank (20,000mAh)', 
      'Universal Travel Adapters & Charging Cables', 
      'Noise-Cancelling Headphones / Kids Ear Protection'
    ] 
  },
  { 
    category: 'Family & Winter Apparel', 
    items: [
      'Thermal Heattech Base Layers (Adults & 4-5yo Child)', 
      'Down Jacket & Windproof Outerwear', 
      'Beanies, Gloves & Warm Winter Scarves', 
      'Family First-Aid Kit (Fever, Cough, Motion Sickness)', 
      'Compact Folding Umbrella, Wet Wipes & Sanitizer', 
      'Insulated Thermos Flask'
    ] 
  }
];
