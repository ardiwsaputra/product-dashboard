import { Product } from "./product";

export interface Cart {
  id: number
  products: Product[]
  total: number
  discountedTotal: number
  userId: number
  totalProducts: number
  totalQuantity: number
}

export interface GetCartResult {
  carts: Cart[]
}