"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRightCircle } from "lucide-react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { TypingEffect } from "@/components/typing-effect"
import Link from "next/link"

export default function Home() {
  const router = useRouter()
  const [isHovered, setIsHovered] = useState(false)

  const handleStartQuiz = () => {
    router.push("/quiz")
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col w-full max-w-xs"
      >
        <TypingEffect
          text="Pratique seu inglês..."
          className="text-zinc-200 text-3xl font-medium tracking-tighter mb-4"
        />        
        <div className="flex items-center space-x-3 mb-8">
          <div className="flex items-center gap-2">
            ⏰
            <span className="tracking-tighter text-zinc-400">30m</span>
          </div>
          <div className="text-zinc-600" aria-hidden="true">
            |
          </div>
          <div className="flex items-center gap-2">
            📚
            <span className="text-zinc-400">36 questões</span>
          </div>
        </div>
        <div className="text-zinc-300 space-y-2 mb-8">
          <p className="text-base">
            Você realmente sabe quando utilizar os <span className="underline">verbos em inglês?</span> 👇🏼
          </p>
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
            className="w-full bg-purple-600/80 rounded-full py-3 text-white text-lg flex items-center justify-center gap-4 transition-all duration-300 hover:bg-purple-600/90 hover:to-purple-600/20 border border-b-4 border-purple-900"
          >
            Teste seus Conhecimentos
            <motion.div animate={{ x: isHovered ? 5 : 0 }} transition={{ type: "spring", stiffness: 300, damping: 10 }}>
              <ArrowRightCircle size={20} className="text-zinc-200" aria-hidden="true" />
            </motion.div>
          </Button>
        </motion.div>
        <div className="mt-10 justify-center text-center">
          <Link 
            href="https://linkedin.com/in/lucas-mendes-f" 
            className="underline text-xs text-zinc-400"
          >
            Criado por Lucas Mendes
          </Link>
        </div>
      </motion.div>
    </main>
  )
}
