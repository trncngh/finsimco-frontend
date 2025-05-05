"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface VideoModalProps {
  onClose: () => void
}

export function VideoModal({ onClose }: VideoModalProps) {
  return (
    <Dialog open={true} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-xl">Simulation Instructions</DialogTitle>
          <Button variant="ghost" size="icon" className="absolute right-4 top-4" onClick={onClose}>
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </DialogHeader>
        <div className="aspect-video bg-slate-100 rounded-md flex items-center justify-center">
          <div className="text-center p-8">
            <p className="text-slate-500 mb-4">Video player would be embedded here</p>
            <p className="text-sm text-slate-400">This is a placeholder for the instructional video</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
