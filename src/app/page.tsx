import { Header } from '@/components/organism/header'
import SimulationInterface from '@/components/simulation-interface'
import { getTeam } from '@/lib/action/team'

export default function Home() {
  const team = getTeam()
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      <SimulationInterface team={team} />
    </main>
  )
}
