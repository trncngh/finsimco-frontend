"use client"

import { useState, useEffect } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Info } from "lucide-react"

export function FirstTimeGuidance() {
  const [isFirstTime, setIsFirstTime] = useState(true)
  const [accordionValue, setAccordionValue] = useState<string | undefined>(undefined)

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem("hasVisitedSimulation")
    if (hasVisited) {
      setIsFirstTime(false)
    } else {
      setAccordionValue("guidance")
      localStorage.setItem("hasVisitedSimulation", "true")
    }
  }, [])

  const guidanceText = `
    Welcome to the Business Negotiation Simulation! This interface allows Team 1 to input values 
    for negotiation terms while Team 2 can review and approve them. Modify the EBITDA, Interest Rate, 
    and Multiple to see how they affect the company valuation. Use the Factor Score slider to adjust 
    risk factors. When you're satisfied with your inputs, click SUBMIT to finalize your proposal.
  `

  return (
    <Accordion type="single" value={accordionValue} onValueChange={setAccordionValue} className="w-full">
      <AccordionItem value="guidance" className="border rounded-md">
        <AccordionTrigger className="px-4 py-2 text-lg font-semibold">
          <div className="flex items-center">
            <Info className="h-5 w-5 mr-2" />
            First Time Guidance
            {isFirstTime && (
              <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">New</span>
            )}
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-4 py-2 text-slate-700">{guidanceText}</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
