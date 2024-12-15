export interface Category {
  id: string
  title: string
  slug: string
  description: string
  image: string
}

export interface Gig {
  id: string
  title: string
  description: string
  price: number
  deliveryTime: number
  categoryId: string
  sellerId: string
  image: string
  rating: number
  reviews: number
}

export interface User {
  id: string
  name: string
  email: string
  image?: string
  bio?: string
  rating?: number
  totalReviews?: number
  memberSince: Date
}