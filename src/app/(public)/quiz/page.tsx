"use client"

import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function Quiz() {
  const router = useRouter()

  const handleBackToHome = () => {
    router.back();
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#17153b] via-[#2e236c] to-[#433d8b] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col w-full max-w-xs"
      >
        <Button 
          onClick={() => handleBackToHome()}
          variant="outline"
          className="max-w-sm w-max px-4 py-1 bg-white/10 text-zinc-400 justify-start flex items-center rounded-full"
        >
          <ArrowLeft size={18}/>
          Back
        </Button>
      </motion.div>
    </main>
  )
}

