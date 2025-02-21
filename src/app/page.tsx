"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRightCircle, List, Timer } from "lucide-react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { TypingEffect } from "./components/typing-effect"

export default function Home() {
  const router = useRouter()
  const [isHovered, setIsHovered] = useState(false)

  const handleStartQuiz = () => {
    router.push("/verbs")
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#17153b] via-[#2e236c] to-[#433d8b] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col w-full max-w-xs"
      >
        <TypingEffect
          text="practice your english..."
          className="text-zinc-200 text-4xl font-medium tracking-tighter mb-4"
        />        <div className="flex items-center space-x-3 mb-8">
          <div className="flex items-center gap-2">
            ⏰
            <span className="tracking-tighter text-zinc-400">10 - 30m</span>
          </div>
          <div className="text-zinc-600" aria-hidden="true">
            |
          </div>
          <div className="flex items-center gap-2">
            📚
            <span className="text-zinc-400">6 questions per verb</span>
          </div>
        </div>
        <div className="text-zinc-300 space-y-2 mb-8">
          <p className="text-base">how well do you really know the most commonly used <span className="underline">english verbs?</span> 👇🏼</p>
          <p className="text-sm tracking-tighter text-zinc-400 font-light">
            (to be, to have, to be able, to come, to go, to know, to take, to want, to say/tell, to do/make, to see, to
            give)
          </p>
        </div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="default"
            onClick={handleStartQuiz}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="w-full bg-gradient-to-r from-white/10 to-zinc-600/10 rounded-full py-4 text-white text-xl flex items-center justify-center gap-4 transition-all duration-300 hover:from-white/20 hover:to-zinc-600/20"
          >
            Start quiz
            <motion.div animate={{ x: isHovered ? 5 : 0 }} transition={{ type: "spring", stiffness: 300, damping: 10 }}>
              <ArrowRightCircle size={24} className="text-zinc-300" aria-hidden="true" />
            </motion.div>
          </Button>
        </motion.div>
      </motion.div>
    </main>
  )
}

