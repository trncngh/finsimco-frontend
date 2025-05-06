import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'

export type TFormSliderProps = {
  id: string
  label: string
  min?: number
  max?: number
  step?: number
  value: number[]
  onValueChange: (value: number) => void
  disabled?: boolean
  className?: string
}

export const FormSlider = ({
  id,
  label,
  min = 1,
  max = 5,
  step = 1,
  value,
  onValueChange,
  disabled,
  className,
}: TFormSliderProps) => {
  return (
    <>
      <Label htmlFor={id} className="mb-1 block text-base font-medium">
        {label}
      </Label>
      <div className="px-2">
        <Slider
          id={id}
          min={min}
          max={max}
          step={step}
          value={value}
          onValueChange={(value) => onValueChange(value[0])}
          disabled={disabled}
          className={className}
        />
        <div className="flex justify-between text-sm text-slate-500">
          {Array.from({ length: max - min + 1 }, (_, i) => min + i).map(
            (value) => (
              <span key={value}>{value}</span>
            )
          )}
        </div>
      </div>
    </>
  )
}
