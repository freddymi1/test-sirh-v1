import { Absences } from '@/interfaces/types'

// verify if user exist
export const isUserUnique = (item: Absences, absences: Absences[]): boolean => {
  return !absences.some((existingItem) => existingItem.users === item.users)
}

// verify if category existe in list of items
export const isCategoryUnique = (
  item: Absences,
  absences: Absences[]
): boolean => {
  return !absences.some(
    (existingItem) => existingItem.category === item.category
  )
}

// verify if period exist in list of items
export const isPeriodUnique = (
  item: Absences,
  absences: Absences[]
): boolean => {
  return !absences.some((existingItem) => existingItem.periode === item.periode)
}
