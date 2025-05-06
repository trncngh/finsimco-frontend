import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

export type TFormToggleProps = {
  value?: string
  onValueChange: (value?: string) => void
  disabled?: boolean
  className?: string
}

export const FormToggle = ({
  value,
  onValueChange,
  disabled,
  className,
}: TFormToggleProps) => {
  return (
    <ToggleGroup
      type="single"
      value={value}
      onValueChange={(value) => onValueChange(value)}
      disabled={disabled}
      className={`justify-start self-end ${className}`}
    >
      <ToggleGroupItem
        value="TBD"
        className="cursor-pointer data-[state=on]:bg-amber-100 data-[state=on]:text-amber-700"
      >
        TBD
      </ToggleGroupItem>
      <ToggleGroupItem
        value="OK"
        className="cursor-pointer data-[state=on]:bg-green-100 data-[state=on]:text-green-700"
      >
        OK
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
