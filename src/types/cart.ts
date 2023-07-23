import { GetPaginationResult } from "./global";
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

export interface GetCartResult extends GetPaginationResult {
  carts: Cart[]
}