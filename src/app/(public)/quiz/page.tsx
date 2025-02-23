"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRightCircle, LoaderIcon } from "lucide-react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { TypingEffect } from "@/components/typing-effect"
import Link from "next/link"

export default function Home() {
  const router = useRouter()
  const [isHovered, setIsHovered] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleStartQuiz = () => {
    setIsLoading(true)
    setTimeout(() => {
      router.push("/quiz/answer")
    }, 1000)
  }

  return (
    <main className="min-h-screen bg-indigo-950 flex items-center justify-center p-4">
      {isLoading ? (
        <div className="text-white text-2xl"><LoaderIcon className="animate-spin text-zinc-200"/></div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col w-full max-w-xs"
        >
          <TypingEffect
            text="Do you're already?"
            className="text-zinc-200 text-4xl font-medium tracking-tighter mb-4"
          />        
          <div className="text-zinc-300 space-y-2 mb-8">
            <p className="text-base">Don't forget, this would be the content! 👇🏻</p>
            <p className="text-sm tracking-tighter text-zinc-400 font-light">
              (to be, to have, to be able, to come, to go, to know, to take, to want, to say/tell, to do/make, to see, to give)
            </p>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="default"
              onClick={handleStartQuiz}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="w-full bg-purple-600/80 rounded-full py-3 text-white text-xl flex items-center justify-center gap-4 transition-all duration-300 hover:from-purple-600/90 hover:to-zinc-600/20"
            >
              Let's go
              <motion.div animate={{ x: isHovered ? 5 : 0 }} transition={{ type: "spring", stiffness: 300, damping: 10 }}>
                <ArrowRightCircle size={24} className="text-zinc-300" aria-hidden="true" />
              </motion.div>
            </Button>
          </motion.div>
          <div className="mt-10 justify-center text-center">
            <Link 
              href="https://linkedin.com/in/lucas-mendes-f" 
              className="underline text-xs text-zinc-400"
            >
              created by lucas mendes
            </Link>
          </div>
        </motion.div>
      )}
    </main>
  )
}
