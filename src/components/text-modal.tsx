'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { X } from 'lucide-react'

interface TextModalProps {
  onClose: () => void
}

export function TextModal({ onClose }: TextModalProps) {
  const instructionText = `
    This simulation is designed to help you practice business negotiation skills in a controlled environment.
    
    Team 1 is responsible for proposing terms by inputting values for EBITDA, Interest Rate, Multiple, Factor Score, Company Name, and Description.
    
    Team 2 reviews these terms and can mark each one as either "TBD" (To Be Determined) or "OK" (Approved).
    
    The valuation is calculated using the formula: EBITDA × Multiple × Factor Score.
    
    The pie chart represents the interest distribution based on the Interest Rate value.
    
    Use the timer to keep track of the current stage and remaining time. The simulation progresses through four stages: Briefing, Analysis, Deal Structuring, and Completion.
  `

  return (
    <Dialog open={true} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl">Text Instructions</DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </DialogHeader>
        <div className="max-h-[60vh] overflow-y-auto">
          <p className="whitespace-pre-line text-slate-700">
            {instructionText}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
