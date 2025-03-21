"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { PhoneIcon as WhatsApp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Product } from "@/lib/supabase"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  // Calculate discount percentage with safety checks
  const discountPercentage =
    product.Mrp && product.Sp && product.Mrp > product.Sp
      ? Math.round(((product.Mrp - product.Sp) / product.Mrp) * 100)
      : 0

  // Format WhatsApp message with safety checks
  const formatWhatsAppMessage = () => {
    const productName = product.Product || "Product"
    const brandName = product.Brand || "Brand"
    const price = product.Sp ? `₹${product.Sp}` : "the listed price"
    const size = product.Size ? ` (${product.Size})` : ""

    const message = `Hi, I'm interested in purchasing *${productName}${size}* by *${brandName}* for ${price}. Please provide more details.`
    return encodeURIComponent(message)
  }

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/919880292842?text=${formatWhatsAppMessage()}`, "_blank")
  }

  return (
    <motion.div whileHover={{ y: -5 }} className="overflow-hidden">
      <Card className="overflow-hidden border-pink-200 dark:border-pink-800 hover:shadow-lg transition-shadow glass-card h-full flex flex-col">
        <div className="relative h-64 overflow-hidden bg-pink-50 dark:bg-pink-950">
          {product.ProductImg ? (
            <Image
              src={product.ProductImg || "/placeholder.svg"}
              alt={product.Product}
              fill
              className={`object-cover transition-transform duration-300 hover:scale-105 ${
                isImageLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setIsImageLoaded(true)}
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-pink-400 dark:text-pink-600">No image available</p>
            </div>
          )}

          {discountPercentage > 0 && (
            <div className="absolute top-2 right-2 bg-pink-600 text-white px-2 py-1 rounded-full text-xs font-bold">
              {discountPercentage}% OFF
            </div>
          )}
        </div>

        <CardContent className="p-4 flex flex-col flex-grow">
          <div className="flex-grow">
            <span className="text-xs text-pink-500 dark:text-pink-400 font-medium">{product.Brand}</span>
            <h3 className="text-lg font-semibold text-pink-800 dark:text-pink-300 line-clamp-2 mb-1">
              {product.Product}
            </h3>
            <p className="text-sm text-pink-600 dark:text-pink-400 mb-2">{product.Type}</p>

            {/* Display Size */}
            {product.Size && (
              <p className="text-sm text-pink-500 dark:text-pink-400 mb-2"><Quanity></Quanity>: {product.Size}</p>
            )}

            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-lg font-bold text-pink-700 dark:text-pink-300">₹{product.Sp}</span>
              {product.Mrp > product.Sp && (
                <span className="text-sm text-pink-500 dark:text-pink-400 line-through">₹{product.Mrp}</span>
              )}
            </div>
          </div>

          <Button
            onClick={handleWhatsAppClick}
            className="w-full gap-2 bg-pink-600 hover:bg-pink-700 dark:bg-pink-500 dark:hover:bg-pink-600 mt-auto"
          >
            <WhatsApp size={16} />
            Order on WhatsApp
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}

