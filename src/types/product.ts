import { GetPaginationResult } from "./global";

export interface Product {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}

export interface GetProductResult extends GetPaginationResult {
  product: Product[]
}