'use client'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Textarea } from '@/components/ui/textarea'
import { FormInputField } from './mocule/form-input-field'
import { FormToggle } from './mocule/form-toggle'

interface InputFieldsProps {
  formData: {
    ebitda: number
    interestRate: number
    multiple: number
    factorScore: number
    companyName: string
    description: string
  }
  toggleStates: {
    ebitda: string
    interestRate: string
    multiple: string
    factorScore: string
    companyName: string
    description: string
  }
  onInputChange: (field: string, value: any) => void
  onToggleChange: (field: string, value: 'TBD' | 'OK') => void
  isTeam1: boolean
}

export function InputFields({
  formData,
  toggleStates,
  onInputChange,
  onToggleChange,
  isTeam1,
}: InputFieldsProps) {
  const handleToggleChange = (field: string, value: string | undefined) => {
    if (value) {
      onToggleChange(field, value as 'TBD' | 'OK')
    }
  }

  return (
    <div className="space-y-6">
      {/* EBITDA */}
      <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-3">
        <FormInputField
          label="EBITDA"
          id="ebitda"
          type="number"
          value={formData.ebitda}
          onChange={(e) =>
            onInputChange('ebitda', Number.parseFloat(e.target.value))
          }
          disabled={!isTeam1}
          leadIcon="$"
          trailIcon="million"
        />
        <FormToggle
          value={toggleStates.ebitda}
          onValueChange={(value) => handleToggleChange('ebitda', value)}
          disabled={isTeam1}
        />
      </div>

      {/* Multiple */}
      <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-3">
        <FormInputField
          label="Multiple"
          id="multiple"
          type="number"
          value={formData.multiple}
          onChange={(e) =>
            onInputChange('multiple', Number.parseFloat(e.target.value))
          }
          disabled={!isTeam1}
          leadIcon="X"
        />
        <FormToggle
          value={toggleStates.multiple}
          onValueChange={(value) => handleToggleChange('multiple', value)}
          disabled={isTeam1}
        />
      </div>

      {/* Factor Score */}
      <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-3">
        <div className="md:col-span-2">
          <Label
            htmlFor="factorScore"
            className="mb-1 block text-base font-medium"
          >
            Factor Score:
          </Label>
          <div className="px-2">
            <Slider
              id="factorScore"
              min={1}
              max={5}
              step={1}
              value={[formData.factorScore]}
              onValueChange={(value) => onInputChange('factorScore', value[0])}
              disabled={!isTeam1}
              className="my-4"
            />
            <div className="flex justify-between text-sm text-slate-500">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
            </div>
          </div>
        </div>
        <FormToggle
          value={toggleStates.factorScore}
          onValueChange={(value) => handleToggleChange('factorScore', value)}
          disabled={isTeam1}
          className="justify-start self-center"
        />
      </div>

      {/* Interest Rate */}
      <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-3">
        <FormInputField
          label="Interest Rate"
          id="interestRate"
          type="number"
          value={formData.interestRate}
          onChange={(e) =>
            onInputChange('interestRate', Number.parseFloat(e.target.value))
          }
          disabled={!isTeam1}
          leadIcon="%"
        />
        <FormToggle
          value={toggleStates.interestRate}
          onValueChange={(value) => handleToggleChange('interestRate', value)}
          disabled={isTeam1}
        />
      </div>

      {/* Company Name */}
      <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-3">
        <FormInputField
          label="Company Name"
          id="companyName"
          type="text"
          value={formData.companyName}
          onChange={(e) => onInputChange('companyName', e.target.value)}
          disabled={!isTeam1}
        />
        <FormToggle
          value={toggleStates.companyName}
          onValueChange={(value) => handleToggleChange('companyName', value)}
          disabled={isTeam1}
        />
      </div>

      {/* Description */}
      <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-3">
        <div className="md:col-span-2">
          <Label
            htmlFor="description"
            className="mb-1 block text-base font-medium"
          >
            Description:
          </Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={(e) => onInputChange('description', e.target.value)}
            rows={4}
            disabled={!isTeam1}
          />
        </div>
        <FormToggle
          value={toggleStates.description}
          onValueChange={(value) => handleToggleChange('description', value)}
          disabled={isTeam1}
          className="self-start pt-8"
        />
      </div>
    </div>
  )
}
