"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"

interface TypingEffectProps {
  text: string
  className?: string
}

export const TypingEffect: React.FC<TypingEffectProps> = ({ text, className }) => {
  const [displayText, setDisplayText] = useState("")
  const controls = useAnimation()

  useEffect(() => {
    const animateText = async () => {
      while (true) {
        // Type out the text
        for (let i = 0; i <= text.length; i++) {
          setDisplayText(text.slice(0, i))
          await new Promise((resolve) => setTimeout(resolve, 100))
        }
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Erase the text
        for (let i = text.length; i >= 0; i--) {
          setDisplayText(text.slice(0, i))
          await new Promise((resolve) => setTimeout(resolve, 50))
        }
        await new Promise((resolve) => setTimeout(resolve, 500))
      }
    }

    animateText()
  }, [text])

  return (
    <motion.h1 className={className} animate={controls}>
      {displayText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.8, ease: "linear" }}
      >
        |
      </motion.span>
    </motion.h1>
  )
}

