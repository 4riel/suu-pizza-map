import pizzaData from './pizzaPlaces.json'

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
  address?: string
  phone?: string
  website?: string
  hours?: string
  specialty?: string
  priceRange?: string
  suuQuote?: string
  visitDate?: string
  mustTry?: string[]
}

export const places: Place[] = pizzaData.places
