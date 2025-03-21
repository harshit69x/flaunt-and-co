"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Loader2 } from "lucide-react"
import { supabase, type Product, type Brand } from "@/lib/supabase"
import { ProductCard } from "@/components/product-card"
import { PostgrestError } from "@supabase/supabase-js"

export function ProductListing() {
  const [brands, setBrands] = useState<Brand[]>([])
  const [products, setProducts] = useState<Product[]>([])
  const [selectedBrand, setSelectedBrand] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch brands
  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const { data, error } = await supabase
          .from('Products')
          .select('*')
          .order('Brand', { ascending: true })

        if (error) throw error

        if (data) {
          // Remove duplicates and create unique brands array
          const uniqueBrands = Array.from(
            new Map(data.map(item => [item.Bid, item])).values()
          ).sort((a, b) => a.Brand.localeCompare(b.Brand))

          setBrands(uniqueBrands)
          if (uniqueBrands.length > 0 && !selectedBrand) {
            setSelectedBrand(uniqueBrands[0].Bid)
          }
        }
      } catch (err) {
        const error = err as PostgrestError
        console.error("Error fetching brands:", error.message)
        setError("Failed to load brands. Please try again later.")
      }
    }

    fetchBrands()
  }, [selectedBrand])

  // Fetch products based on selected brand
  useEffect(() => {
    const fetchProducts = async () => {
      if (!selectedBrand) return

      setIsLoading(true)
      setError(null)

      try {
        const { data, error } = await supabase
          .from("Products")
          .select("*")
          .eq("Bid", selectedBrand)
          .order("Product", { ascending: true })

        if (error) throw error

        setProducts(data || [])
      } catch (err) {
        const error = err as PostgrestError
        console.error("Error fetching products:", error.message)
        setError("Failed to load products. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    }

    fetchProducts()
  }, [selectedBrand])

  const handleBrandChange = (brandId: number) => {
    setSelectedBrand(brandId)
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="max-w-2xl mx-auto mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-pink-800 dark:text-pink-300 md:text-4xl font-display">
            Shop by Brand
          </h2>
          <p className="text-pink-600 dark:text-pink-400">
            Explore our collection of premium beauty products from top brands
          </p>
        </motion.div>

        {/* Brand Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {brands.map((brand) => (
            <motion.button
              key={brand.Bid}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleBrandChange(brand.Bid)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors backdrop-blur-md ${selectedBrand === brand.Bid
                  ? "bg-pink-600 text-white dark:bg-pink-500"
                  : "glass-button text-pink-700 hover:bg-pink-100/70 dark:text-pink-300 dark:hover:bg-pink-900/50"
                }`}
            >
              {brand.Brand}
            </motion.button>
          ))}
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-pink-600 dark:text-pink-400" />
            <span className="ml-2 text-pink-600 dark:text-pink-400">Loading products...</span>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-12">
            <p className="text-red-500 dark:text-red-400">{error}</p>
            <Button
              onClick={() => setSelectedBrand(selectedBrand)}
              className="mt-4 bg-pink-600 hover:bg-pink-700 dark:bg-pink-500 dark:hover:bg-pink-600"
            >
              Try Again
            </Button>
          </div>
        )}

        {/* Products Grid */}
        {!isLoading && !error && (
          <>
            {products.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-pink-600 dark:text-pink-400">No products found for this brand.</p>
              </div>
            ) : (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              >
                {products.map((product) => (
                  <motion.div key={product.Pid} variants={fadeIn}>
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </>
        )}
      </div>
    </section>
  )
}

