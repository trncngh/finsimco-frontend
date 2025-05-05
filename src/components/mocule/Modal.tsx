'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

type TModalProps = {
  onClose: () => void
  children: React.ReactNode
}

export const Modal = ({ onClose, children }: TModalProps) => {
  return (
    <Dialog open={true} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl">Text Instructions</DialogTitle>
        </DialogHeader>
        <div className="max-h-[60vh] overflow-y-auto">{children}</div>
      </DialogContent>
    </Dialog>
  )
}
