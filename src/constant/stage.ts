export type TStage = {
  name: string
  duration: number // in minutes
}

export const STAGES: TStage[] = [
  { name: 'BRIEFING', duration: 15 },
  { name: 'ANALYSIS', duration: 45 },
  { name: 'STRUCTURING', duration: 45 },
  { name: 'COMPLETION', duration: 20 },
]
