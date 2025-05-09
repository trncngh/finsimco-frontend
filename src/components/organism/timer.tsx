'use client'

import { Card, CardContent } from '@/components/ui/card'
import { STAGES } from '@/constant/stage'
import { useMediaQuery } from '@/hooks/use-mobile'
import { formatTime } from '@/lib/utils'
import { useEffect, useState } from 'react'
import { ChevronProgress } from './chevron-progress'

interface TimerProps {
  onTimeAlert: () => void
  onTimeAlertClose: () => void
}

export function Timer({ onTimeAlert, onTimeAlertClose }: TimerProps) {
  const [currentSeconds, setCurrentSeconds] = useState(0)
  const [currentStageIndex, setCurrentStageIndex] = useState(0)
  const [stageTimeRemaining, setStageTimeRemaining] = useState(0)
  const [isAlertActive, setIsAlertActive] = useState(false)
  const isMobile = useMediaQuery('(max-width: 768px)')

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSeconds((prevSeconds) => {
        const newSeconds = prevSeconds + 1

        // Calculate current stage
        let timeElapsed = 0
        let newStageIndex = 0

        for (let i = 0; i < STAGES.length; i++) {
          timeElapsed += STAGES[i].duration * 60
          if (newSeconds < timeElapsed) {
            newStageIndex = i
            break
          }
          if (i === STAGES.length - 1 && newSeconds >= timeElapsed) {
            // Simulation complete
            clearInterval(timer)
            return prevSeconds
          }
        }

        // Calculate time remaining in current stage
        const previousStagesTime =
          newStageIndex > 0
            ? STAGES.slice(0, newStageIndex).reduce(
                (acc, stage) => acc + stage.duration * 60,
                0
              )
            : 0

        const newStageTimeRemaining =
          previousStagesTime + STAGES[newStageIndex].duration * 60 - newSeconds
        setStageTimeRemaining(newStageTimeRemaining)

        // Update current stage if needed
        if (newStageIndex !== currentStageIndex) {
          setCurrentStageIndex(newStageIndex)
        }

        return newSeconds
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [currentStageIndex])

  // Handle alert state in a separate effect
  useEffect(() => {
    // Check if we need to show alert (5 minutes remaining in stage)
    if (
      stageTimeRemaining <= 5 * 60 &&
      stageTimeRemaining > 4 * 60 &&
      !isAlertActive
    ) {
      setIsAlertActive(true)
      onTimeAlert()
    } else if (
      (stageTimeRemaining <= 4 * 60 || stageTimeRemaining > 5 * 60) &&
      isAlertActive
    ) {
      setIsAlertActive(false)
      onTimeAlertClose()
    }
  }, [stageTimeRemaining, isAlertActive, onTimeAlert, onTimeAlertClose])

  // Calculate next stage
  const nextStageIndex =
    currentStageIndex < STAGES.length - 1 ? currentStageIndex + 1 : -1
  const nextStage = nextStageIndex >= 0 ? STAGES[nextStageIndex] : null

  return (
    <div className="w-full">
      <Card
        className={`border-2 ${isAlertActive ? 'animate-pulse border-red-500' : 'border-slate-200'}`}
      >
        <CardContent className="p-4">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center justify-between text-xl font-bold">
              <div>Stage: {STAGES[currentStageIndex].name}</div>
              <div>Timer: {formatTime(currentSeconds)}</div>
            </div>
            <div className="text-sm text-slate-600">
              Next Stage:{' '}
              {nextStage
                ? `${nextStage.name} - ${nextStage.duration} min`
                : 'Simulation Complete'}
            </div>
            {/* Arrow-style progress bar for desktop */}
            {!isMobile && (
              <>
                <ChevronProgress
                  currentSeconds={currentSeconds}
                  stages={STAGES}
                  currentStageIndex={currentStageIndex}
                  isAlertActive={isAlertActive}
                />
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
