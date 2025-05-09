import { TUserAvatarProps, UserAvatar } from '@/components/mocule/user-avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import Link from 'next/link'
import { HTMLAttributes } from 'react'

type TUserAccountNavProps = {
  user: TUserAvatarProps['user']
  team: 'team1' | 'team2'
} & HTMLAttributes<HTMLElement>

export const UserAccountNav = ({
  user,
  team = 'team1',
  ...props
}: TUserAccountNavProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        {...props}
        className="flex flex-col items-end justify-end"
      >
        <UserAvatar user={user} team={team} />
        <span className="mr-2 font-medium text-white">Team: {team}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            {user.name && <p className="font-medium">{user.name}</p>}
            {user.email && (
              <p className="w-[200px] truncate text-sm">{user.email}</p>
            )}
            <p className="text-xs capitalize">Team: {team}</p>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="#">Settings</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onSelect={(event) => {
            event.preventDefault()
          }}
        >
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
