import { ModuleAbsence } from '@/components/module-absence/module-absence'
import { Button } from '@mui/material'

export async function generateMetadata() {
  return {
    title: 'Absence',
    description: "Page d'absence"
  }
}

async function Absence() {
  return <ModuleAbsence />
}
export default Absence
