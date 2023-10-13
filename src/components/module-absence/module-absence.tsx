'use client'

import { useAbsence } from '@/context/absence-context'
import { Absences } from '@/interfaces/types'
import { ListAbsences } from '@/ux/absence/list-absences'
import { Typography } from '@mui/material'
import React from 'react'

export const ModuleAbsence = () => {
  const { absences } = useAbsence()
  const { setAbsences } = useAbsence()

  //Delete items
  const DeleteItems = (index: number) => {
    const newLists: Absences[] = absences.filter(
      (item, listIndex) => listIndex !== index
    )
    setAbsences(newLists)
  }
  return (
    <React.Fragment>
      <Typography
        component={`div`}
        sx={{ height: '85vh', width: '100%', display: 'flex' }}
      >
        <Typography
          variant="h2"
          sx={{ color: '#0090F5', width: '100%', fontWeight: 600 }}
        >
          <ListAbsences absences={absences} DeleteItems={DeleteItems} />
        </Typography>
      </Typography>
    </React.Fragment>
  )
}
