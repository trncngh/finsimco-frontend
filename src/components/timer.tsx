"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { useMediaQuery } from "@/hooks/use-mobile"

interface Stage {
  name: string
  duration: number // in minutes
  color: string
}

interface TimerProps {
  onTimeAlert: () => void
  onTimeAlertClose: () => void
}

export function Timer({ onTimeAlert, onTimeAlertClose }: TimerProps) {
  const [seconds, setSeconds] = useState(0)
  const [currentStageIndex, setCurrentStageIndex] = useState(0)
  const [stageTimeRemaining, setStageTimeRemaining] = useState(0)
  const [isAlertActive, setIsAlertActive] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  const stages: Stage[] = [
    { name: "BRIEFING", duration: 1, color: "bg-blue-500" },
    { name: "ANALYSIS", duration: 5, color: "bg-green-500" },
    { name: "STRUCTURING", duration: 15, color: "bg-amber-500" },
    { name: "COMPLETION", duration: 20, color: "bg-purple-500" },
  ]

  // Calculate total simulation time in seconds
  const totalSimulationTime = stages.reduce((acc, stage) => acc + stage.duration * 60, 0)

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => {
        const newSeconds = prevSeconds + 1

        // Calculate current stage
        let timeElapsed = 0
        let newStageIndex = 0

        for (let i = 0; i < stages.length; i++) {
          timeElapsed += stages[i].duration * 60
          if (newSeconds < timeElapsed) {
            newStageIndex = i
            break
          }
          if (i === stages.length - 1 && newSeconds >= timeElapsed) {
            // Simulation complete
            clearInterval(timer)
            return prevSeconds
          }
        }

        // Calculate time remaining in current stage
        const previousStagesTime =
          newStageIndex > 0 ? stages.slice(0, newStageIndex).reduce((acc, stage) => acc + stage.duration * 60, 0) : 0

        const newStageTimeRemaining = previousStagesTime + stages[newStageIndex].duration * 60 - newSeconds
        setStageTimeRemaining(newStageTimeRemaining)

        // Check if we need to show alert (15 minutes remaining in stage)
        if (newStageTimeRemaining <= 15 * 60 && newStageTimeRemaining > 14 * 60 && !isAlertActive) {
          setIsAlertActive(true)
          onTimeAlert()
        } else if (newStageTimeRemaining <= 14 * 60 && isAlertActive) {
          setIsAlertActive(false)
          onTimeAlertClose()
        }

        // Update current stage if needed
        if (newStageIndex !== currentStageIndex) {
          setCurrentStageIndex(newStageIndex)
        }

        return newSeconds
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [currentStageIndex, stages, isAlertActive, onTimeAlert, onTimeAlertClose])

  // Format time as HH:MM:SS
  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60

    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  }

  // Calculate next stage
  const nextStageIndex = currentStageIndex < stages.length - 1 ? currentStageIndex + 1 : -1
  const nextStage = nextStageIndex >= 0 ? stages[nextStageIndex] : null

  // Calculate progress for each stage
  const calculateStageProgress = (index: number) => {
    if (index < currentStageIndex) {
      return 100 // Completed stages
    } else if (index > currentStageIndex) {
      return 0 // Future stages
    } else {
      // Current stage
      const previousStagesTime =
        index > 0 ? stages.slice(0, index).reduce((acc, stage) => acc + stage.duration * 60, 0) : 0

      const stageStartTime = previousStagesTime
      const stageDuration = stages[index].duration * 60
      const currentTime = seconds

      return Math.min(100, Math.max(0, ((currentTime - stageStartTime) / stageDuration) * 100))
    }
  }

  // Calculate relative width for each stage in the arrow bar
  const calculateStageWidth = (stageDuration: number) => {
    const totalDuration = stages.reduce((acc, stage) => acc + stage.duration, 0)
    return `${(stageDuration / totalDuration) * 100}%`
  }

  return (
    <div className="w-full max-w-md">
      <Card className={`border-2 ${isAlertActive ? "border-red-500 animate-pulse" : "border-slate-200"}`}>
        <CardContent className="p-4">
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between items-center">
              <div className="text-xl font-bold">Timer: {formatTime(seconds)}</div>
              <div className="text-xl font-bold">Stage: {stages[currentStageIndex].name}</div>
            </div>

            <div className="text-sm text-slate-600">
              Next Stage: {nextStage ? `${nextStage.name} - ${nextStage.duration} min` : "Simulation Complete"}
            </div>

            {/* Arrow-style progress bar for desktop */}
            {!isMobile && (
              <div className="mt-4 relative h-10 flex">
                {stages.map((stage, index) => {
                  const isCurrentStage = index === currentStageIndex
                  const isCompletedStage = index < currentStageIndex
                  const stageWidth = calculateStageWidth(stage.duration)
                  const progress = calculateStageProgress(index)

                  return (
                    <div
                      key={index}
                      className={`relative flex items-center ${stage.color} ${
                        isCurrentStage && isAlertActive ? "animate-pulse" : ""
                      }`}
                      style={{ width: stageWidth }}
                    >
                      {/* Arrow body */}
                      <div className="h-10 w-full flex items-center justify-center relative">
                        {/* Progress overlay for current stage */}
                        {isCurrentStage && (
                          <div
                            className="absolute left-0 top-0 bottom-0 bg-opacity-30 bg-white"
                            style={{ width: `${100 - progress}%`, right: 0 }}
                          />
                        )}

                        {/* Stage label */}
                        <span className="text-white font-bold z-10 text-sm md:text-base">{stage.name}</span>

                        {/* Arrow tip - except for the last stage */}
                        {index < stages.length - 1 && (
                          <div
                            className="absolute right-0 w-0 h-0 border-t-[20px] border-b-[20px] border-l-[15px] border-r-0 border-transparent z-20"
                            style={{
                              borderLeftColor: `var(--${stage.color.replace("bg-", "")})`,
                              transform: "translateX(15px)",
                            }}
                          ></div>
                        )}

                        {/* Arrow notch - except for the first stage */}
                        {index > 0 && (
                          <div
                            className="absolute left-0 w-0 h-0 border-t-[20px] border-b-[20px] border-l-0 border-r-[15px] border-transparent z-10"
                            style={{
                              borderRightColor: `var(--${stage.color.replace("bg-", "")})`,
                              transform: "translateX(-15px)",
                            }}
                          ></div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
