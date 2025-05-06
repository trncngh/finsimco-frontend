'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { GUIDANCE_TEXT } from '@/constant/text'
import { Info } from 'lucide-react'
import { useEffect, useState } from 'react'

export function FirstTimeGuidance() {
  const [isFirstTime, setIsFirstTime] = useState(true)
  const [accordionValue, setAccordionValue] = useState<string | undefined>(
    undefined
  )

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem('hasVisitedSimulation')
    if (hasVisited) {
      setIsFirstTime(false)
    } else {
      setAccordionValue('guidance')
      localStorage.setItem('hasVisitedSimulation', 'true')
    }
  }, [])

  return (
    <Accordion
      type="single"
      value={accordionValue}
      onValueChange={setAccordionValue}
      className="w-full"
      collapsible
    >
      <AccordionItem value="guidance" className="rounded-md border">
        <AccordionTrigger className="px-4 py-2 text-lg font-semibold">
          <div className="flex items-center">
            <Info className="mr-2 h-5 w-5" />
            {GUIDANCE_TEXT.title}
            {isFirstTime && (
              <span className="ml-2 rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-800">
                New
              </span>
            )}
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-4 py-2 text-slate-700">
          {GUIDANCE_TEXT.content}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
