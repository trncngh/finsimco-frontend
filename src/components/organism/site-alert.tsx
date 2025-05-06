import { AlertCircle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '../ui/alert'

export type SiteAlertProps = {
  title: string
  content: string
}

export const SiteAlert = ({ title, content }: SiteAlertProps) => {
  return (
    <Alert variant="destructive" className="mb-4 animate-pulse">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{content}</AlertDescription>
    </Alert>
  )
}
