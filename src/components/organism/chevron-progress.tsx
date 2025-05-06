import { TStage } from '@/constant/stage'
import { ChevronArrow } from '../mocule/chevron-arrow'

export const ChevronProgress = ({
  stages,
  currentStageIndex,
  isAlertActive,
  currentSeconds,
}: {
  stages: TStage[]
  currentStageIndex: number
  isAlertActive: boolean
  currentSeconds: number
}) => {
  const calculateStageProgress = (index: number) => {
    if (index < currentStageIndex) {
      return 100 // Completed stages
    } else if (index > currentStageIndex) {
      return 0 // Future stages
    } else {
      // Current stage
      const previousStagesTime =
        index > 0
          ? stages
              .slice(0, index)
              .reduce((acc, stage) => acc + stage.duration * 60, 0)
          : 0

      const stagestartTime = previousStagesTime
      const stageDuration = stages[index].duration * 60

      return Math.min(
        100,
        Math.max(0, ((currentSeconds - stagestartTime) / stageDuration) * 100)
      )
    }
  }

  // Calculate relative width for each stage in the arrow bar
  const calculateStageWidth = (stageDuration: number) => {
    const totalDuration = stages.reduce((acc, stage) => acc + stage.duration, 0)
    return `${(stageDuration / totalDuration) * 100}%`
  }

  return (
    <div className="relative mt-4 flex h-12 space-x-1 overflow-hidden rounded-md">
      {stages.map((stage, index) => {
        const isCurrentStage = index === currentStageIndex
        const isCompletedStage = index < currentStageIndex
        const stageWidth = calculateStageWidth(stage.duration)
        const progress = calculateStageProgress(index)

        return (
          <ChevronArrow
            key={index}
            isFirstElement={index === 0}
            isLastElement={index === stages.length - 1}
            isActive={isCurrentStage}
            isCompleted={isCompletedStage}
            isOnAlert={isAlertActive}
            stageWidth={stageWidth}
            progressPercentage={progress}
            title={stage.name}
          />
        )
      })}
    </div>
  )
}
