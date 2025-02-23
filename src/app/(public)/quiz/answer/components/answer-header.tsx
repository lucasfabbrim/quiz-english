"use client"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { QuizItem } from "@/utils/answer"
import { X } from "lucide-react"
import { useRouter } from "next/navigation"

interface AnswerHeaderProps{
  current: QuizItem
}

export function AnswerHeader(){

  const router = useRouter();

  const handleCloseQuizClicked = () => {
    router.push("/quiz")
  }

  return(
    <header className="w-full text-start justify-start items-start mb-4">
      <Button
        onClick={() => handleCloseQuizClicked()}
        size="icon"
        variant="outline"
        className="bg-transparent border-none flex"
      >
        <X strokeWidth={3} size={10} className="text-white transition-all hover:scale-110 hover:text-zinc-200"/>
      </Button>
    </header>
  )
}