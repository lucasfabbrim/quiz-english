"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { X, CheckCircle, CircleXIcon, CornerDownLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

import { quizData, type QuizItem } from "@/utils/answer"

import Men from "@/assets/homem.png"
import { Card } from "@/components/ui/card"

export default function QuizPage() {
  const router = useRouter()
  const [questions, setQuestions] = useState<QuizItem[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    const selectedQuestions = Object.values(quizData).flatMap((verbQuestions) =>
      shuffleArray(verbQuestions).slice(0, 3),
    )
    setQuestions(shuffleArray(selectedQuestions))
  }, [])

  const currentQuestion = questions[currentIndex]
  const progressValue = ((currentIndex + 1) / questions.length) * 100

  const handleSelectAnswer = (option: string) => {
    if (!isChecked) {
      setSelectedAnswer(option)
    }
  }

  const handleCheck = () => {
    if (!selectedAnswer) return
    setIsChecked(true)
  }

  const handleNext = () => {
    setIsChecked(false)
    setSelectedAnswer(null)
    setCurrentIndex((prev) => prev + 1)
  }

  return (
    <div className=" text-white">
      <div className="max-w-md mx-auto p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-1.5">
            <Button
              variant="ghost"
              size="icon"
              className="text-white/80 hover:text-white"
              onClick={() => router.push("/")}
            >
              <X className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white/80 hover:text-white"
              onClick={() => router.back()}
            >
              <CornerDownLeft className="h-6 w-6" />
            </Button>
          </div>
          <Progress 
            value={progressValue} 
            indicatorColor="bg-emerald-500"
            className="flex-1 mx-4 bg-[#2C2B32] h-3 rounded-full overflow-hidden" />
        </div>

        <h1 className="text-2xl font-bold mb-10">Complete o espaço vazio</h1>

        <div className="flex gap-4 mb-10 border-b-2 border-b-zinc-700 pb-7">
          <div className="w-24 h-24 flex-shrink-0">
            <Image
              src={Men}
              alt="Character"
              width={96}
              height={96}
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex-1 bg-[#2C2B32]/10 border border-zinc-700 rounded-2xl p-4">
              <p className="text-base text-zinc-200">{currentQuestion?.phrase}</p>
              <p className="pt-3 text-zinc-500">Verbo: <span className="underline">{currentQuestion?.verb.replaceAll("_", "-").toLowerCase()}</span></p>
            </div>
          </div>
        </div>

        <div className="space-y-3 mb-8">
          {currentQuestion?.options.map((option) => (
            <Button
              key={option}
              className={`w-full p-2 text-lg rounded-2xl border-2 border-b-4 transition-all ${
                !isChecked && selectedAnswer === option
                  ? "border-emerald-500 bg-[#58CC02]/10 text-emerald-500"
                  : isChecked && option === currentQuestion.correctAnswer
                    ? "border-emerald-500 bg-emerald-500/10 text-emerald-500"
                    : isChecked && selectedAnswer === option
                      ? "border-[#FF4B4B] bg-[#FF4B4B]/10 text-[#FF4B4B]"
                      : "border-zinc-700 border-b-zinc-700 bg-[#2C2B32] text-white/90 hover:bg-[#3C3B42]"
              }`}
              onClick={() => handleSelectAnswer(option)}
              disabled={isChecked}
            >
              {option} 
            </Button>
          ))}
        </div>

        {isChecked && (
          <Card className="px-5 py-4 border-none bg-zinc-950/30 w-full rounded-xl">
          {isChecked && (
            <div className="mb-1 space-y-4">
              {selectedAnswer === currentQuestion?.correctAnswer ? (
                <div className="flex items-center gap-2 text-emerald-500 text-xl tracking-tighter">
                  <CheckCircle className="h-5 w-5" strokeWidth={3} />
                  <span>Congratulations</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-[#FF4B4B] text-xl tracking-tighter">
                  <CircleXIcon className="h-5 w-5" strokeWidth={3} />
                  <span>Incorrect</span>
                </div>
              )}
              {selectedAnswer !== currentQuestion.correctAnswer && (
                <div className="space-y-1 text-base tracking-tighter">
                  <p className="text-[#FF4B4B]">
                    {currentQuestion.correction}
                  </p>
                </div>
              )}
            </div>
          )}
          {isChecked && (
            <Button
              className={`w-full p-2 mt-4 text-base rounded-2xl tracking-tighter font-bold ${
                selectedAnswer === currentQuestion?.correctAnswer
                  ? "bg-emerald-600 hover:bg-emerald-700 border-emerald-800 text-white"
                  : "bg-[#FF4B4B] hover:bg-[#FF4B4B]/90 border-red-700 text-black"
              } border border-b-4`}
              onClick={handleNext}
            >
              OK!
            </Button>
          )}
        </Card>
        )}
        {!isChecked && (
          <Button
            className="w-full p-3 text-base rounded-2xl bg-emerald-500 text-white hover:bg-emerald-500/90 disabled:opacity-50 border border-b-4 border-emerald-700"
            onClick={handleCheck}
            disabled={!selectedAnswer}
          >
            VERIFICAR
          </Button>
        )}
        
      </div>
    </div>
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

