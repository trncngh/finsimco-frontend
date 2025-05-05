"use client"

import { Film, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface SidebarProps {
  onVideoClick: () => void
  onTextClick: () => void
}

export function Sidebar({ onVideoClick, onTextClick }: SidebarProps) {
  return (
    <div className="w-16 bg-slate-800 flex flex-col items-center py-6 shadow-lg">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="w-12 h-12 mb-6 text-white hover:bg-slate-700"
              onClick={onVideoClick}
            >
              <Film className="h-6 w-6" />
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
              className="w-12 h-12 text-white hover:bg-slate-700"
              onClick={onTextClick}
            >
              <FileText className="h-6 w-6" />
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
