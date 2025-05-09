import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { ChevronDown, UserIcon } from 'lucide-react'

export type TUserAvatarProps = {
  user: { name: string; image?: string; email?: string }
  team: 'team1' | 'team2'
  className?: string
}

export const UserAvatar = ({ user, team, className }: TUserAvatarProps) => {
  return (
    <>
      <div className="flex items-center gap-2 rounded-md p-2 text-white hover:bg-slate-700">
        <Avatar className="h-8 w-8">
          <AvatarFallback>
            <UserIcon className="h-4 w-4 rounded-full ring-1 ring-slate-500" />
          </AvatarFallback>
        </Avatar>
        <span className="font-medium">{user.name}</span>
        <ChevronDown className="h-4 w-4 text-slate-500" />
      </div>
    </>
  )
}
