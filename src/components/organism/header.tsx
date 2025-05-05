'use client'
import { UserAccountNav } from './user-account-nav'

export const Header = () => {
  return (
    <header className="flex items-center justify-end bg-slate-800 px-4 py-2">
      <UserAccountNav
        user={{ name: 'John Doe', email: 'john.doe@example.com' }}
        team="team2"
      />
    </header>
  )
}
