import { FileText, MonitorPlay } from 'lucide-react'

export type SidebarMenuItem = {
  title: string
  icon: React.ComponentType<{ className?: string }>
  action: 'video' | 'text'
}

export const SIDEBAR_MENU: SidebarMenuItem[] = [
  {
    title: 'Video Instructions',
    icon: MonitorPlay,
    action: 'video',
  },
  {
    title: 'Text Instructions',
    icon: FileText,
    action: 'text',
  },
]
