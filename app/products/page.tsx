"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Filter, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { featuredProducts } from "@/lib/products"

export default function ProductsPage() {
  const [products, setProducts] = useState(featuredProducts)
  const [filterOpen, setFilterOpen] = useState(false)
  const [priceRange, setPriceRange] = useState([0, 200])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [sortBy, setSortBy] = useState("featured")
  
  const categories = Array.from(new Set(featuredProducts.map(p => p.category)))
  const sizes = Array.from(new Set(featuredProducts.flatMap(p => p.sizes || [])))
  
  // Filter and sort products
  useEffect(() => {
    let filtered = [...featuredProducts]
    
    // Filter by price
    filtered = filtered.filter(p => {
      const price = p.onSale && p.salePrice ? p.salePrice : p.price
      return price >= priceRange[0] && price <= priceRange[1]
    })
    
    // Filter by category
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(p => selectedCategories.includes(p.category))
    }
    
    // Filter by size
    if (selectedSizes.length > 0) {
      filtered = filtered.filter(p => 
        p.sizes?.some(size => selectedSizes.includes(size))
      )
    }
    
    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => {
          const priceA = a.onSale && a.salePrice ? a.salePrice : a.price
          const priceB = b.onSale && b.salePrice ? b.salePrice : b.price
          return priceA - priceB
        })
        break
      case "price-high":
        filtered.sort((a, b) => {
          const priceA = a.onSale && a.salePrice ? a.salePrice : a.price
          const priceB = b.onSale && b.salePrice ? b.salePrice : b.price
          return priceB - priceA
        })
        break
      case "newest":
        // In a real app, you would sort by date
        filtered.sort((a, b) => Number.parseInt(b.id) - Number.parseInt(a.id))
        break
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      default:
        // Featured - keep original order
        break
    }
    
    setProducts(filtered)
  }, [priceRange, selectedCategories, selectedSizes, sortBy])
  
  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }
  
  const toggleSize = (size: string) => {
    setSelectedSizes(prev => 
      prev.includes(size)
        ? prev.filter(s => s !== size)
        : [...prev, size]
    )
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10" />
        </div>
        <div className="container relative z-10 h-full flex flex-col justify-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">SHOP ALL</h1>
          <p className="text-lg md:text-xl max-w-xl">
            Discover our complete collection of bold, innovative merchandise.
          </p>
        </div>
      </div>
      
      {/* Products Section */}
      <div className="container px-4 py-12">
        {/* Filter and Sort Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <Button 
            variant="outline" 
            className="flex items-center gap-2 md:hidden"
            onClick={() => setFilterOpen(!filterOpen)}
          >
            <Filter className="h-4 w-4" />
            Filters
            <ChevronDown className={`h-4 w-4 transition-transform ${filterOpen ? 'rotate-180' : ''}`} />
          </Button>
          
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400">Sort by:</span>
            <select 
              className="bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-sm"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
          
          <p className="text-sm text-gray-400">
            Showing {products.length} of {featuredProducts.length} products
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <motion.div 
            className={`w-full md:w-64 md:block ${filterOpen ? 'block' : 'hidden'}`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: filterOpen ? 1 : 0,
              height: filterOpen ? 'auto' : 0
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gray-900 rounded-lg p-6 sticky top-24">
              <h3 className="text-lg font-semibold mb-4">Filters</h3>
              
              {/* Price Range */}
              <div className="mb-6">
                <h4 className="text-sm font-medium mb-3">Price Range</h4>
                <Slider
                  defaultValue={[0, 200]}
                  max={200}
                  step={1}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="mb-2"
                />
                <div className="flex justify-between text-sm text-gray-400">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div\

