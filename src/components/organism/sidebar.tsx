'use client'

import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { FileText, Film } from 'lucide-react'

interface SidebarProps {
  onVideoClick: () => void
  onTextClick: () => void
}

export function Sidebar({ onVideoClick, onTextClick }: SidebarProps) {
  return (
    <div className="flex w-16 flex-col items-center bg-slate-800 py-6 shadow-lg">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="mb-6 h-12 w-12 cursor-pointer text-white hover:bg-slate-700"
              onClick={onVideoClick}
            >
              <Film className="h-8 w-8" />
              <span className="sr-only">Video Instructions</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Video Instructions</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 cursor-pointer text-white hover:bg-slate-700"
              onClick={onTextClick}
            >
              <FileText className="h-8 w-8" />
              <span className="sr-only">Text Instructions</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Text Instructions</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
