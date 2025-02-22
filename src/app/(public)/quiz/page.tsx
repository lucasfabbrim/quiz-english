"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { X } from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

import Men from "@/assets/homem.png"
import { quizData, type QuizItem } from "@/utils/anwsers"

export default function QuizPage() {
  const router = useRouter()
  const [questions, setQuestions] = useState<QuizItem[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [isChecked, setIsChecked] = useState(false)
  const [score, setScore] = useState(0)
  const [showCancelModal, setShowCancelModal] = useState(false)

  useEffect(() => {
    const selectedQuestions = Object.values(quizData).flatMap((verbQuestions) =>
      shuffleArray(verbQuestions).slice(0, 3),
    )
    setQuestions(shuffleArray(selectedQuestions))
  }, [])

  const totalQuestions = questions.length
  const currentQuestion = questions[currentIndex]

  const progressValue = ((currentIndex + 1) / totalQuestions) * 100

  function handleSelectAnswer(option: string) {
    if (!isChecked) {
      setSelectedAnswer(option)
    }
  }

  function handleCheck() {
    if (!selectedAnswer) return
    setIsChecked(true)

    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1)
    }
  }

  function handleNext() {
    setIsChecked(false)
    setSelectedAnswer(null)
    setCurrentIndex((prev) => prev + 1)
  }

  function handleCancel() {
    setShowCancelModal(true)
  }

  function handleConfirmCancel() {
    router.push("/")
  }

  const isLastQuestion = currentIndex === totalQuestions - 1
  const showNextButton = isChecked && !isLastQuestion
  const showFinishButton = isChecked && isLastQuestion

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#17153b] via-[#2e236c] to-[#433d8b] flex flex-col items-center p-3">
      <div className="w-full max-w-sm flex justify-end mb-4">
        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10" onClick={handleCancel}>
          <X className="h-6 w-6" />
        </Button>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col w-full max-w-sm h-full flex-1 justify-between"
      >
        {/* Top Section */}
        <div className="flex flex-col w-full">
          <Progress value={progressValue} className="mb-4" />

          <div className="flex flex-col gap-1 justify-start text-start items-start">
            <p className="text-zinc-200 tracking-tighter text-xl">Complete the blank space</p>
          </div>
          <p className="text-zinc-400 text-sm mt-2">{`Question ${currentIndex + 1} of ${totalQuestions}`}</p>

          <div className="flex items-center mt-4 py-2 space-x-3">
            <div className="relative w-16 h-16 overflow-hidden rounded-full">
              <Image alt="Men" src={Men || "/placeholder.svg"} fill className="object-cover" />
            </div>
            <Card className="bg-transparent rounded-lg text-zinc-200 border border-zinc-600 w-full">
              <CardContent className="py-3 px-3 text-base">{currentQuestion?.phrase}</CardContent>
            </Card>
          </div>

          <div className="py-4 flex flex-col space-y-4">
            {currentQuestion?.options.map((option) => {
              const isSelected = selectedAnswer === option
              const isCorrect = option === currentQuestion.correctAnswer

              let buttonClasses =
                "border text-lg border-purple-500 border-b-4 py-4 text-zinc-200 w-full bg-transparent rounded-full transition-colors"

              if (isChecked) {
                if (isSelected && isCorrect) {
                  buttonClasses += " bg-green-600/60 border-green-500"
                } else if (isSelected && !isCorrect) {
                  buttonClasses += " bg-red-600/60 border-red-500"
                } else if (isCorrect) {
                  buttonClasses += " bg-green-600/60 border-green-500"
                }
              } else if (isSelected) {
                buttonClasses += " bg-white/10"
              }

              return (
                <Button
                  key={option}
                  className={`border text-base border-purple-500 border-b-4 py-3 text-zinc-200 w-full bg-transparent rounded-full transition-colors ${buttonClasses}`}
                  onClick={() => handleSelectAnswer(option)}
                  disabled={isChecked}
                >
                  {option}
                </Button>
              )
            })}
          </div>

          {/* Feedback de correção */}
          {isChecked && selectedAnswer !== currentQuestion?.correctAnswer && (
            <div className="text-red-400 mt-2" dangerouslySetInnerHTML={{ __html: currentQuestion?.correction }} />
          )}
          {isChecked && selectedAnswer === currentQuestion?.correctAnswer && (
            <div className="text-green-400 mt-2">Correct!</div>
          )}
        </div>

        {/* Bottom Section */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="pt-4 pb-6">
          {/* Botão Check */}
          {!isChecked && (
            <Button
              variant="default"
              className="w-full bg-purple-600 rounded-full py-4 text-white text-2xl hover:bg-purple-700 transition-colors"
              onClick={handleCheck}
              disabled={!selectedAnswer}
            >
              Check
            </Button>
          )}

          {/* Botão Next */}
          {showNextButton && (
            <Button
              variant="default"
              className="mt-2 w-full bg-blue-600 rounded-full py-4 text-white text-2xl hover:bg-blue-700 transition-colors"
              onClick={handleNext}
            >
              Next
            </Button>
          )}

          {/* Botão Finish */}
          {showFinishButton && (
            <div className="flex flex-col space-y-2">
              <Button
                variant="default"
                className="w-full bg-green-600 rounded-full py-4 text-white text-2xl hover:bg-green-700 transition-colors"
                onClick={() => alert(`Quiz finished! Your score: ${score}/${totalQuestions}`)}
              >
                Finish
              </Button>
              <p className="text-center text-zinc-300">
                Your score: {score}/{totalQuestions}
              </p>
            </div>
          )}
        </motion.div>
      </motion.div>

      <AlertDialog open={showCancelModal} onOpenChange={setShowCancelModal}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure you want to cancel the quiz?</AlertDialogTitle>
            <AlertDialogDescription>Your progress will be lost if you cancel now.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Continue Quiz</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmCancel}>Cancel Quiz</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </main>
  )
}

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

