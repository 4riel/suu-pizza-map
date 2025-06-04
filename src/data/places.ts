export interface Place {
  id: number
  name: string
  city: string
  country: string
  lat: number
  lng: number
  review: string
  rating: number
  image?: string
}

export const places: Place[] = [
  {
    id: 1,
    name: 'Chiang Mai Slice',
    city: 'Chiang Mai',
    country: 'Thailand',
    lat: 18.7883,
    lng: 98.9853,
    review: 'Cozy spot with thin crust perfection.',
    rating: 4,
    image: 'https://picsum.photos/seed/pizza1/400/300',
  },
  {
    id: 2,
    name: 'Seoul Pizza Lab',
    city: 'Seoul',
    country: 'South Korea',
    lat: 37.5665,
    lng: 126.9780,
    review: 'Creative toppings and great atmosphere.',
    rating: 5,
    image: 'https://picsum.photos/seed/pizza2/400/300',
  },
  {
    id: 3,
    name: 'Napoli Classic',
    city: 'Napoli',
    country: 'Italy',
    lat: 40.8518,
    lng: 14.2681,
    review: 'Authentic Neapolitan pies straight from the oven.',
    rating: 5,
    image: 'https://picsum.photos/seed/pizza3/400/300',
  },
  {
    id: 4,
    name: 'Tokyo Tomato',
    city: 'Tokyo',
    country: 'Japan',
    lat: 35.6895,
    lng: 139.6917,
    review: 'Fusion-style slices with a local twist.',
    rating: 4,
    image: 'https://picsum.photos/seed/pizza4/400/300',
  },
  {
    id: 5,
    name: 'Berlin Dough',
    city: 'Berlin',
    country: 'Germany',
    lat: 52.52,
    lng: 13.405,
    review: 'Late-night favorite with crispy bases.',
    rating: 3,
    image: 'https://picsum.photos/seed/pizza5/400/300',
  },
  {
    id: 6,
    name: 'NYC Pie Co.',
    city: 'New York',
    country: 'USA',
    lat: 40.7128,
    lng: -74.006,
    review: 'Classic New York slices done right.',
    rating: 4,
    image: 'https://picsum.photos/seed/pizza6/400/300',
  },
  {
    id: 7,
    name: 'Melbourne Mozzarella',
    city: 'Melbourne',
    country: 'Australia',
    lat: -37.8136,
    lng: 144.9631,
    review: 'Laid-back spot with rich flavors.',
    rating: 4,
    image: 'https://picsum.photos/seed/pizza7/400/300',
  },
  {
    id: 8,
    name: 'Rio Pizza House',
    city: 'Rio de Janeiro',
    country: 'Brazil',
    lat: -22.9068,
    lng: -43.1729,
    review: 'Beachside pizza with tropical vibes.',
    rating: 3,
    image: 'https://picsum.photos/seed/pizza8/400/300',
  },
  {
    id: 9,
    name: 'Parisian Pie',
    city: 'Paris',
    country: 'France',
    lat: 48.8566,
    lng: 2.3522,
    review: 'Charming bistro serving gourmet slices.',
    rating: 5,
    image: 'https://picsum.photos/seed/pizza9/400/300',
  },
  {
    id: 10,
    name: 'Toronto Toppings',
    city: 'Toronto',
    country: 'Canada',
    lat: 43.6532,
    lng: -79.3832,
    review: 'Modern take on traditional pizza.',
    rating: 4,
    image: 'https://picsum.photos/seed/pizza10/400/300',
  },
]
