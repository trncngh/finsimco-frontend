"use client"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

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
  onToggleChange: (field: string, value: "TBD" | "OK") => void
  isTeam1: boolean
}

export function InputFields({ formData, toggleStates, onInputChange, onToggleChange, isTeam1 }: InputFieldsProps) {
  const handleToggleChange = (field: string, value: string | undefined) => {
    if (value) {
      onToggleChange(field, value as "TBD" | "OK")
    }
  }

  return (
    <div className="space-y-6">
      {/* EBITDA */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        <div className="md:col-span-2">
          <Label htmlFor="ebitda" className="text-base font-medium mb-1 block">
            EBITDA:
          </Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
            <Input
              id="ebitda"
              type="number"
              value={formData.ebitda}
              onChange={(e) => onInputChange("ebitda", Number.parseFloat(e.target.value))}
              className="pl-8"
              disabled={!isTeam1}
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">million</span>
          </div>
        </div>
        <div>
          <ToggleGroup
            type="single"
            value={toggleStates.ebitda}
            onValueChange={(value) => handleToggleChange("ebitda", value)}
            disabled={isTeam1}
            className="justify-start"
          >
            <ToggleGroupItem value="TBD" className="data-[state=on]:bg-amber-100 data-[state=on]:text-amber-700">
              TBD
            </ToggleGroupItem>
            <ToggleGroupItem value="OK" className="data-[state=on]:bg-green-100 data-[state=on]:text-green-700">
              OK
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      {/* Interest Rate */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        <div className="md:col-span-2">
          <Label htmlFor="interestRate" className="text-base font-medium mb-1 block">
            Interest Rate:
          </Label>
          <div className="relative">
            <Input
              id="interestRate"
              type="number"
              value={formData.interestRate}
              onChange={(e) => onInputChange("interestRate", Number.parseFloat(e.target.value))}
              className="pr-8"
              disabled={!isTeam1}
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">%</span>
          </div>
        </div>
        <div>
          <ToggleGroup
            type="single"
            value={toggleStates.interestRate}
            onValueChange={(value) => handleToggleChange("interestRate", value)}
            disabled={isTeam1}
            className="justify-start"
          >
            <ToggleGroupItem value="TBD" className="data-[state=on]:bg-amber-100 data-[state=on]:text-amber-700">
              TBD
            </ToggleGroupItem>
            <ToggleGroupItem value="OK" className="data-[state=on]:bg-green-100 data-[state=on]:text-green-700">
              OK
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      {/* Multiple */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        <div className="md:col-span-2">
          <Label htmlFor="multiple" className="text-base font-medium mb-1 block">
            Multiple:
          </Label>
          <div className="relative">
            <Input
              id="multiple"
              type="number"
              value={formData.multiple}
              onChange={(e) => onInputChange("multiple", Number.parseFloat(e.target.value))}
              className="pr-6"
              disabled={!isTeam1}
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">x</span>
          </div>
        </div>
        <div>
          <ToggleGroup
            type="single"
            value={toggleStates.multiple}
            onValueChange={(value) => handleToggleChange("multiple", value)}
            disabled={isTeam1}
            className="justify-start"
          >
            <ToggleGroupItem value="TBD" className="data-[state=on]:bg-amber-100 data-[state=on]:text-amber-700">
              TBD
            </ToggleGroupItem>
            <ToggleGroupItem value="OK" className="data-[state=on]:bg-green-100 data-[state=on]:text-green-700">
              OK
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      {/* Factor Score */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        <div className="md:col-span-2">
          <Label htmlFor="factorScore" className="text-base font-medium mb-1 block">
            Factor Score:
          </Label>
          <div className="px-2">
            <Slider
              id="factorScore"
              min={1}
              max={5}
              step={1}
              value={[formData.factorScore]}
              onValueChange={(value) => onInputChange("factorScore", value[0])}
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
        <div>
          <ToggleGroup
            type="single"
            value={toggleStates.factorScore}
            onValueChange={(value) => handleToggleChange("factorScore", value)}
            disabled={isTeam1}
            className="justify-start"
          >
            <ToggleGroupItem value="TBD" className="data-[state=on]:bg-amber-100 data-[state=on]:text-amber-700">
              TBD
            </ToggleGroupItem>
            <ToggleGroupItem value="OK" className="data-[state=on]:bg-green-100 data-[state=on]:text-green-700">
              OK
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      {/* Company Name */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        <div className="md:col-span-2">
          <Label htmlFor="companyName" className="text-base font-medium mb-1 block">
            Company Name:
          </Label>
          <Input
            id="companyName"
            value={formData.companyName}
            onChange={(e) => onInputChange("companyName", e.target.value)}
            disabled={!isTeam1}
          />
        </div>
        <div>
          <ToggleGroup
            type="single"
            value={toggleStates.companyName}
            onValueChange={(value) => handleToggleChange("companyName", value)}
            disabled={isTeam1}
            className="justify-start"
          >
            <ToggleGroupItem value="TBD" className="data-[state=on]:bg-amber-100 data-[state=on]:text-amber-700">
              TBD
            </ToggleGroupItem>
            <ToggleGroupItem value="OK" className="data-[state=on]:bg-green-100 data-[state=on]:text-green-700">
              OK
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      {/* Description */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
        <div className="md:col-span-2">
          <Label htmlFor="description" className="text-base font-medium mb-1 block">
            Description:
          </Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={(e) => onInputChange("description", e.target.value)}
            rows={4}
            disabled={!isTeam1}
          />
        </div>
        <div className="pt-8">
          <ToggleGroup
            type="single"
            value={toggleStates.description}
            onValueChange={(value) => handleToggleChange("description", value)}
            disabled={isTeam1}
            className="justify-start"
          >
            <ToggleGroupItem value="TBD" className="data-[state=on]:bg-amber-100 data-[state=on]:text-amber-700">
              TBD
            </ToggleGroupItem>
            <ToggleGroupItem value="OK" className="data-[state=on]:bg-green-100 data-[state=on]:text-green-700">
              OK
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
    </div>
  )
}
