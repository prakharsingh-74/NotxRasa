"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Heart, ShoppingBag, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"
import type { Product } from "@/lib/types"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart(product)
  }

  return (
    <motion.div
      className="group relative product-card bg-gray-900 rounded-lg overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg?height=400&width=300"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Quick Actions */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="bg-white text-black hover:bg-brand-red hover:text-white border-none rounded-full h-10 w-10"
              onClick={handleAddToCart}
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Add to cart</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-white text-black hover:bg-brand-red hover:text-white border-none rounded-full h-10 w-10"
            >
              <Heart className="h-5 w-5" />
              <span className="sr-only">Add to wishlist</span>
            </Button>
            <Link href={`/products/${product.id}`}>
              <Button
                variant="outline"
                size="icon"
                className="bg-white text-black hover:bg-brand-red hover:text-white border-none rounded-full h-10 w-10"
              >
                <Eye className="h-5 w-5" />
                <span className="sr-only">Quick view</span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Sale Badge */}
        {product.onSale && (
          <div className="absolute top-2 left-2 bg-brand-red text-white text-xs font-bold px-2 py-1 rounded">SALE</div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1 text-white">
          <Link href={`/products/${product.id}`} className="hover:text-brand-red transition-colors">
            {product.name}
          </Link>
        </h3>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {product.onSale ? (
              <>
                <span className="text-brand-red font-bold">${product.salePrice?.toFixed(2)}</span>
                <span className="text-gray-400 line-through text-sm">${product.price.toFixed(2)}</span>
              </>
            ) : (
              <span className="text-white font-bold">${product.price.toFixed(2)}</span>
            )}
          </div>

          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`h-4 w-4 ${i < product.rating ? "text-yellow-400" : "text-gray-400"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>

      {/* Add to Cart Button (Mobile) */}
      <div className="p-4 pt-0 lg:hidden">
        <Button className="w-full bg-brand-red hover:bg-red-700 text-white" onClick={handleAddToCart}>
          ADD TO CART
        </Button>
      </div>
    </motion.div>
  )
}

