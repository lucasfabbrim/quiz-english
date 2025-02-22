"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { X } from "lucide-react"

import { quizData, type QuizItem } from "@/utils/answer"

import Men from "@/assets/homem.png"

export default function QuizPage() {
  const router = useRouter()
  const [questions, setQuestions] = useState<QuizItem[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [isChecked, setIsChecked] = useState(false)
  const [score, setScore] = useState(0)

  useEffect(() => {
    const selectedQuestions = Object.values(quizData).flatMap((verbQuestions) =>
      shuffleArray(verbQuestions).slice(0, 3),
    )
    setQuestions(shuffleArray(selectedQuestions))
  }, [])

  const totalQuestions = questions.length
  const currentQuestion = questions[currentIndex]
  const progressValue = ((currentIndex + 1) / totalQuestions) * 100

  const handleSelectAnswer = (option: string) => {
    if (!isChecked) {
      setSelectedAnswer(option)
    }
  }

  const handleCheck = () => {
    if (!selectedAnswer) return
    setIsChecked(true)

    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1)
    }
  }

  const handleNext = () => {
    setIsChecked(false)
    setSelectedAnswer(null)
    setCurrentIndex((prev) => prev + 1)
  }

  const handleConfirmCancel = () => router.push("/")

  const isLastQuestion = currentIndex === totalQuestions - 1
  const showNextButton = isChecked && !isLastQuestion
  const showFinishButton = isChecked && isLastQuestion

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#17153b] via-[#2e236c] to-[#433d8b] flex flex-col items-center p-3">
      <div className="w-full max-w-sm flex justify-end mb-4">
        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10" onClick={handleConfirmCancel}>
          <X className="h-6 w-6" />
        </Button>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col w-full max-w-sm h-full flex-1 justify-between"
      >
        <QuizContent
          currentQuestion={currentQuestion}
          currentIndex={currentIndex}
          totalQuestions={totalQuestions}
          progressValue={progressValue}
          selectedAnswer={selectedAnswer}
          isChecked={isChecked}
          handleSelectAnswer={handleSelectAnswer}
          score={score}
        />
        <QuizActions
          currentQuestion={currentQuestion}
          isChecked={isChecked}
          selectedAnswer={selectedAnswer}
          showNextButton={showNextButton}
          showFinishButton={showFinishButton}
          handleCheck={handleCheck}
          handleNext={handleNext}
          score={score}
          totalQuestions={totalQuestions}
        />
      </motion.div>
      
    </main>
  )
}

function QuizContent({
  currentQuestion,
  currentIndex,
  totalQuestions,
  progressValue,
  selectedAnswer,
  isChecked,
  handleSelectAnswer,
}: {
  currentQuestion: QuizItem
  currentIndex: number
  totalQuestions: number
  progressValue: number
  selectedAnswer: string | null
  isChecked: boolean
  handleSelectAnswer: (option: string) => void
  score: number
}) {
  return (
    <div className="flex flex-col w-full">
      <Progress value={progressValue} className="mb-4" />
      <div className="flex flex-col gap-1 justify-start text-start items-start">
        <p className="text-zinc-200 tracking-tighter text-xl">Complete the blank space</p>
      </div>
      <p className="text-zinc-400 text-sm mt-2">{`Question ${currentIndex + 1} of ${totalQuestions}`}</p>
      <div className="flex items-center mt-4 py-2 space-x-3">
        <div className="relative w-16 h-16 overflow-hidden rounded-full">
          <Image alt="Men" src={Men} fill className="object-cover" />
        </div>
        <Card className="bg-transparent rounded-lg text-zinc-200 border border-zinc-600 w-full">
          <CardContent className="py-3 px-3 text-base">{currentQuestion?.phrase}</CardContent>
        </Card>
      </div>
      <div className="py-4 flex flex-col space-y-4">
        {currentQuestion?.options.map((option) => (
          <AnswerButton
            key={option}
            option={option}
            selectedAnswer={selectedAnswer}
            isChecked={isChecked}
            correctAnswer={currentQuestion.correctAnswer}
            onClick={() => handleSelectAnswer(option)}
          />
        ))}
      </div>
    </div>
  )
}

function AnswerButton({
  option,
  selectedAnswer,
  isChecked,
  correctAnswer,
  onClick,
}: {
  option: string
  selectedAnswer: string | null
  isChecked: boolean
  correctAnswer: string
  onClick: () => void
}) {
  const isSelected = selectedAnswer === option
  const isCorrect = option === correctAnswer

  let buttonClasses =
    "border text-base border-purple-500 border-b-4 py-3 text-zinc-200 w-full bg-transparent rounded-full transition-colors"

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
    <Button className={buttonClasses} onClick={onClick} disabled={isChecked}>
      {option}
    </Button>
  )
}

function FeedbackMessage({
  isChecked,
  selectedAnswer,
  correctAnswer,
  correction,
}: {
  isChecked: boolean
  selectedAnswer: string | null
  correctAnswer: string
  correction: string
}) {
  if (!isChecked) return null

  if (selectedAnswer === correctAnswer) {
    return <div className="text-green-400 mt-2 pb-4 px-2 text-sm">Congratulations! 🎉</div>
  }

  return <div className="text-rose-400 mt-2 pb-4 px-2 text-sm" dangerouslySetInnerHTML={{ __html: correction }} />
}

function QuizActions({
  currentQuestion,
  isChecked,
  selectedAnswer,
  showNextButton,
  showFinishButton,
  handleCheck,
  handleNext,
  score,
  totalQuestions,
}: {
  currentQuestion: QuizItem
  isChecked: boolean
  selectedAnswer: string | null
  showNextButton: boolean
  showFinishButton: boolean
  handleCheck: () => void
  handleNext: () => void
  score: number
  totalQuestions: number
}) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="pb-28">
      <FeedbackMessage
        isChecked={isChecked}
        selectedAnswer={selectedAnswer}
        correctAnswer={currentQuestion?.correctAnswer}
        correction={currentQuestion?.correction}
      />
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
      {showNextButton && (
        <Button
          variant="default"
          className="w-full bg-purple-600 rounded-full py-4 text-white text-2xl hover:bg-purple-700 transition-colors"
          onClick={handleNext}
        >
          Continue
        </Button>
      )}
      {showFinishButton && (
        <div className="flex flex-col space-y-2">
          <Button
            variant="default"
            className="w-full bg-purple-600 rounded-full py-4 text-white text-2xl hover:bg-purple-700 transition-colors"
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