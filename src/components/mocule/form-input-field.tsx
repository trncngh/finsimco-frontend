'use client'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ReactNode } from 'react'

export type TFormInputFieldProps = {
  label: string
  id: string
  type: string
  value: string | number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
  leadIcon?: string | ReactNode
  trailIcon?: string | ReactNode
}

export const FormInputField = ({
  label,
  id,
  type,
  value,
  onChange,
  disabled,
  leadIcon,
  trailIcon,
}: TFormInputFieldProps) => {
  return (
    <div className="md:col-span-2">
      <Label htmlFor={id} className="mb-1 block text-base font-medium">
        {label}
      </Label>
      <div className="relative">
        {leadIcon && (
          <span className="absolute top-1/2 left-3 -translate-y-1/2 text-slate-500">
            {leadIcon}
          </span>
        )}
        <Input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          className={`${leadIcon ? 'pl-8' : ''}`}
          disabled={disabled}
        />
        {trailIcon && (
          <span className="absolute top-1/2 right-3 mr-4 -translate-y-1/2 text-slate-500">
            {trailIcon}
          </span>
        )}
      </div>
    </div>
  )
}
