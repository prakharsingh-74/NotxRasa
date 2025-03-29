export interface Product {
  id: string
  name: string
  description: string
  price: number
  salePrice?: number
  onSale?: boolean
  image: string
  images?: string[]
  category: string
  tags?: string[]
  rating: number
  stock: number
  sizes?: string[]
  colors?: string[]
}

