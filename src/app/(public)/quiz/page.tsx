"use client"

import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

export default function Quiz() {
  const router = useRouter()

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#17153b] via-[#2e236c] to-[#433d8b] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col w-full max-w-xs"
      >
        
      </motion.div>
    </main>
  )
}

