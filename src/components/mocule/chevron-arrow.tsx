export type TChevronArrowProps = {
  isFirstElement?: boolean
  isLastElement?: boolean
  isActive: boolean
  isCompleted: boolean
  isOnAlert: boolean
  stageWidth: string
  progressPercentage: number
  title: string
}

export const ChevronArrow = ({
  isFirstElement = false,
  isLastElement = false,
  isActive,
  isCompleted,
  isOnAlert,
  stageWidth,
  progressPercentage,
  title,
}: TChevronArrowProps) => {
  const arrowWidth = 16 // Width of arrow tip
  return (
    <div
      className={`relative flex items-center p-1 ${isActive ? 'bg-orange-500' : 'bg-blue-500'} ${isCompleted ? 'bg-green-500' : ''} ${
        isActive && isOnAlert ? 'animate-pulse' : ''
      }`}
      style={{
        width: stageWidth,
        clipPath: `polygon(0 0, calc(100% - ${arrowWidth}px) 0, 100% 50%, calc(100% - ${arrowWidth}px) 100%, 0 100%, ${arrowWidth}px 50%)`,
        marginLeft: isFirstElement ? '0' : `-${arrowWidth}px`,
      }}
    >
      {/* Progress overlay  */}
      {isActive && (
        <div
          className={`absolute top-0 bottom-0 left-0 bg-orange-700`}
          style={{
            width: `${progressPercentage}%`,
            boxShadow: '0 0 8px rgba(255, 255, 255, 0.5) inset',
            zIndex: 5,
          }}
        />
      )}

      {/* Stage label */}
      <span className="z-10 w-full text-center text-sm font-bold text-white md:text-base">
        {title}
      </span>
    </div>
  )
}
