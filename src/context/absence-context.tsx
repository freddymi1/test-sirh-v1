'use client'

import { Absences } from '@/interfaces/types'
import { createContext, useContext, useState, ReactNode } from 'react'

type AbsenceContextProps = {
  absences: Absences[]
  setAbsences: (value: Absences[]) => void
}

// create context
const AbsenceContext = createContext<AbsenceContextProps | undefined>(undefined)

// init value
const initialValue: Absences[] = [
  {
    users: 'Freddy',
    category: 'Congés payés',
    periode: '2023',
    soldeActuel: 20000,
    soldePris: 4500,
    soldeFutur: 15500
  },
  {
    users: 'Michel',
    category: 'RTT',
    periode: '2023',
    soldeActuel: 25000,
    soldePris: 5000,
    soldeFutur: 20000
  },
  {
    users: 'John Doe',
    category: 'Congés payés',
    periode: '2023',
    soldeActuel: 45000,
    soldePris: 5000,
    soldeFutur: 40000
  }
]

// create absence provider
export function AbsenceProvider({ children }: { children: ReactNode }) {
  const [absences, setAbsences] = useState<Absences[]>(initialValue)
  return (
    <AbsenceContext.Provider value={{ absences, setAbsences }}>
      {children}
    </AbsenceContext.Provider>
  )
}

// create hooks for absence
export function useAbsence() {
  const context = useContext(AbsenceContext)
  if (context === undefined) {
    throw new Error('Cette context doit placer dans un provider')
  }
  return context
}
