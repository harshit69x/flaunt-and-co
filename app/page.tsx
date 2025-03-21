"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Heart, ShoppingBag, Truck, PhoneIcon as WhatsApp, Mail, Star, Moon, Sun } from "lucide-react"


import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { ProductListing } from "@/components/product-listing"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    setMounted(true)
  }, [])

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
        staggerChildren: 0.2,
      },
    },
  }

  const products = [
    {
      id: 1,
      name: "Dot & Key Vitamin C Sunscreen",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-10%20at%2018.25.42_bd2a0cb4.jpg-1MSzBrfYp6Yvc5aIsdoQA6OjG8oTDf.jpeg",
      category: "Skincare",
    },
    {
      id: 2,
      name: "MARS Mascara & Lip Products",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-10%20at%2018.25.43_7717ddb6.jpg-wVe9osQy1FyGAn4qjqWphgDWZVtqyv.jpeg",
      category: "Makeup",
    },
    {
      id: 3,
      name: "MARS Drama Thick Length Mascara",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-10%20at%2018.25.43_23272c1f.jpg-oGsFE16OBbRwQaED8hQ76X0G74vACt.jpeg",
      category: "Makeup",
    },
    {
      id: 4,
      name: "Nykaa Wanderlust Shower Gel",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-10%20at%2018.25.44_84ad857d.jpg-Fmuq14Pym6GmMxI3t7ejnvMi5pZxDi.jpeg",
      category: "Bath & Body",
    },
    {
      id: 5,
      name: "Lakmé Ultimate Glam Compact",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-10%20at%2018.25.41_dfe5b4af.jpg-eVS1o2jBYQ61HyayqCVnUDmGroP8Uj.jpeg",
      category: "Makeup",
    },
    {
      id: 6,
      name: "Swiss Beauty Bold Lipliner",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-10%20at%2018.25.43_a103e953.jpg-T68nLMo0dWxUK27msIVTGtIvLdOA7t.jpeg",
      category: "Makeup",
    },
    {
      id: 7,
      name: "Himalaya Neem Face Wash",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-10%20at%2018.25.42_c42cc02a.jpg-AkLx71xwAIo16KoNEwv6rs3nTny9cG.jpeg",
      category: "Skincare",
    },
    {
      id: 8,
      name: "Bellavita Perfume Collection",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-10%20at%2018.25.42_33c03f00.jpg-78MO9Qlv9e8eAB0MhtOjlMGZhqby8L.jpeg",
      category: "Fragrance",
    },
    {
      id: 9,
      name: "Mama Earth Rice Face Wash",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-10%20at%2018.25.42_3c300420.jpg-kgo70NfQsgdNZBBgPDy2kzX11Ukod2.jpeg",
      category: "Skincare",
    },
  ]

  const categories = ["All", "Skincare", "Makeup", "Bath & Body", "Fragrance"]
  const [activeCategory, setActiveCategory] = useState("All")
  const [filteredProducts, setFilteredProducts] = useState(products)

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredProducts(products)
    } else {
      setFilteredProducts(products.filter((product) => product.category === activeCategory))
    }
  }, [activeCategory])

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919880292842", "_blank")
  }

  const handleAlternateWhatsAppClick = () => {
    window.open("https://wa.me/918296096599", "_blank")
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 dark:from-pink-950 dark:to-purple-950 transition-colors duration-300">
      {/* Theme Toggle */}
      <div className="fixed z-50 p-4 top-4 right-4">
        {mounted && (
          <Button variant="outline" size="icon" onClick={toggleTheme} className="rounded-full glass-button shadow-lg">
            {theme === "dark" ? (
              <Sun className="h-5 w-5 text-yellow-300" />
            ) : (
              <Moon className="h-5 w-5 text-pink-700" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
        )}
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-10 dark:opacity-5"></div>
        <div className="container relative px-4 py-20 mx-auto text-center">
          <motion.div
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeIn}
            className="max-w-3xl mx-auto"
          >
            <motion.div className="inline-block p-2 mb-6 rounded-full glass-card" whileHover={{ scale: 1.05 }}>
              <span className="px-4 py-1 text-sm font-medium rounded-full bg-white/70 dark:bg-black/70 backdrop-blur-md text-pink-800 dark:text-pink-300">
                ✨ Now Available ✨
              </span>
            </motion.div>

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8 flex justify-center"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-10%20at%2018.40.48_795dd12a.jpg-C6KBrVjSwdZqKw4acr6RyzEL7Lwc3G.jpeg"
                alt="Flaunt & Co. Logo"
                width={300}
                height={150}
                className="h-auto dark:invert dark:brightness-90"
              />
            </motion.div>

            <p className="mb-8 text-lg text-pink-700 dark:text-pink-300">
              Your go-to destination for high-quality, affordable cosmetics!
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="gap-2 bg-pink-600 hover:bg-pink-700 dark:bg-pink-500 dark:hover:bg-pink-600 dark:text-white"
                  onClick={handleWhatsAppClick}
                >
                  <WhatsApp size={18} />
                  Shop Now on WhatsApp
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 border-pink-300 text-pink-700 hover:bg-pink-100 dark:border-pink-700 dark:text-pink-300 dark:hover:bg-pink-950/50"
                >
                  <Heart size={18} />
                  Explore Products
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 rounded-full bg-pink-200/50 dark:bg-pink-900/30 backdrop-blur-md"
          animate={{
            y: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-16 h-16 rounded-full bg-purple-200/50 dark:bg-purple-900/30 backdrop-blur-md"
          animate={{
            y: [0, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-12 h-12 rounded-full bg-yellow-200/50 dark:bg-yellow-900/30 backdrop-blur-md"
          animate={{
            y: [0, 8, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-8 md:grid-cols-3"
          >
            <motion.div variants={fadeIn} className="p-6 text-center rounded-xl glass-card">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-pink-100 dark:bg-pink-900">
                <ShoppingBag className="text-pink-600 dark:text-pink-300" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-pink-800 dark:text-pink-300">Premium Products</h3>
              <p className="text-pink-600 dark:text-pink-400">High-quality cosmetics at affordable prices</p>
            </motion.div>

            <motion.div variants={fadeIn} className="p-6 text-center rounded-xl glass-card">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-pink-100 dark:bg-pink-900">
                <WhatsApp className="text-pink-600 dark:text-pink-300" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-pink-800 dark:text-pink-300">Easy Ordering</h3>
              <p className="text-pink-600 dark:text-pink-400">Simply DM us on WhatsApp for prices & orders</p>
            </motion.div>

            <motion.div variants={fadeIn} className="p-6 text-center rounded-xl glass-card">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-pink-100 dark:bg-pink-900">
                <Truck className="text-pink-600 dark:text-pink-300" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-pink-800 dark:text-pink-300">Fast Delivery</h3>
              <p className="text-pink-600 dark:text-pink-400">Available within 5km radius of our store</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Supabase Products Section */}
      <ProductListing />

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-r from-pink-50/80 to-purple-50/80 dark:from-pink-950/80 dark:to-purple-950/80 backdrop-blur-md">
        <div className="container px-4 mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="max-w-2xl mx-auto mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-pink-800 dark:text-pink-300 md:text-4xl font-display">
              What Our Customers Say
            </h2>
            <p className="text-pink-600 dark:text-pink-400">
              Join our growing community of beauty enthusiasts who love our products!
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {[1, 2, 3].map((item) => (
              <motion.div key={item} variants={fadeIn} className="p-6 rounded-xl glass-card">
                <div className="flex mb-4 text-pink-500">
                  <Star className="fill-pink-500" size={20} />
                  <Star className="fill-pink-500" size={20} />
                  <Star className="fill-pink-500" size={20} />
                  <Star className="fill-pink-500" size={20} />
                  <Star className="fill-pink-500" size={20} />
                </div>
                <p className="mb-4 italic text-pink-700 dark:text-pink-300">
                  "I absolutely love the products from Flaunt & Co.! The quality is amazing and the prices are so
                  reasonable. The WhatsApp ordering makes it super convenient too!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 mr-3 overflow-hidden rounded-full bg-pink-100 dark:bg-pink-900">
                    <div className="flex items-center justify-center h-full text-pink-600 dark:text-pink-300">
                      {String.fromCharCode(65 + item)}
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-pink-800 dark:text-pink-300">Happy Customer {item}</p>
                    <p className="text-sm text-pink-600 dark:text-pink-400">Beauty Enthusiast</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="max-w-4xl p-8 mx-auto overflow-hidden rounded-xl shadow-lg glass-card-prominent"
          >
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="mb-4 text-3xl font-bold text-pink-800 dark:text-pink-300 font-display">Contact Us</h2>
                <p className="mb-6 text-pink-600 dark:text-pink-400">
                  Got questions? Reach out to us on WhatsApp or email for quick responses!
                </p>

                <div className="space-y-4">
                  <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-pink-100 dark:bg-pink-900">
                      <WhatsApp size={18} className="text-pink-700 dark:text-pink-300" />
                    </div>
                    <div>
                      <p className="text-sm text-pink-600 dark:text-pink-400">Primary WhatsApp</p>
                      <button
                        onClick={handleWhatsAppClick}
                        className="font-medium text-pink-800 dark:text-pink-300 hover:underline"
                      >
                        +91 9880292842
                      </button>
                    </div>
                  </motion.div>

                  <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-pink-100 dark:bg-pink-900">
                      <WhatsApp size={18} className="text-pink-700 dark:text-pink-300" />
                    </div>
                    <div>
                      <p className="text-sm text-pink-600 dark:text-pink-400">Alternate WhatsApp</p>
                      <button
                        onClick={handleAlternateWhatsAppClick}
                        className="font-medium text-pink-800 dark:text-pink-300 hover:underline"
                      >
                        +91 8296096599
                      </button>
                    </div>
                  </motion.div>

                  <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-pink-100 dark:bg-pink-900">
                      <Mail size={18} className="text-pink-700 dark:text-pink-300" />
                    </div>
                    <div>
                      <p className="text-sm text-pink-600 dark:text-pink-400">Email Us</p>
                      <a
                        href="mailto:varshini.ha@gmail.com"
                        className="font-medium text-pink-800 dark:text-pink-300 hover:underline"
                      >
                        varshini.ha@gmail.com
                      </a>
                    </div>
                  </motion.div>

                  <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-pink-100 dark:bg-pink-900">
                      <Truck size={18} className="text-pink-700 dark:text-pink-300" />
                    </div>
                    <div>
                      <p className="text-sm text-pink-600 dark:text-pink-400">Delivery Information</p>
                      <p className="font-medium text-pink-800 dark:text-pink-300">Available within 5km radius</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="p-6 text-center rounded-xl glass-card"
                >
                  <div className="w-20 h-20 mx-auto mb-4 overflow-hidden rounded-full bg-pink-100 dark:bg-pink-900">
                    <div className="flex items-center justify-center h-full">
                      <ShoppingBag size={32} className="text-pink-600 dark:text-pink-300" />
                    </div>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-pink-800 dark:text-pink-300">Shop Now!</h3>
                  <p className="mb-4 text-pink-600 dark:text-pink-400">
                    DM us for the latest products, prices, and special offers!
                  </p>
                  <Button
                    className="w-full gap-2 bg-pink-600 hover:bg-pink-700 dark:bg-pink-500 dark:hover:bg-pink-600"
                    onClick={handleWhatsAppClick}
                  >
                    <WhatsApp size={18} />
                    Contact on WhatsApp
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-pink-800 dark:bg-pink-950 text-pink-100">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-10%20at%2018.40.48_795dd12a.jpg-C6KBrVjSwdZqKw4acr6RyzEL7Lwc3G.jpeg"
                alt="Flaunt & Co. Logo"
                width={180}
                height={90}
                className="h-auto mb-2 invert brightness-90"
              />
              <p className="text-pink-300">Make beauty fun, fresh, and fabulous!</p>
            </div>

            <div className="flex gap-4">
              <motion.button
                whileHover={{ y: -3 }}
                onClick={handleWhatsAppClick}
                className="p-2 rounded-full bg-pink-700 hover:bg-pink-600"
              >
                <WhatsApp size={20} />
              </motion.button>
              <motion.a
                whileHover={{ y: -3 }}
                href="mailto:varshini.ha@gmail.com"
                className="p-2 rounded-full bg-pink-700 hover:bg-pink-600"
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </div>

          <div className="mt-8 text-center text-pink-300">
            <p>© {new Date().getFullYear()} Flaunt & Co. All rights reserved.</p>
          </div>
        </div>
      </footer>
   
    </div>
  )
}

