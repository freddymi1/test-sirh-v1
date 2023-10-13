'use client'

import { useAbsence } from '@/context/absence-context'
import { Absences } from '@/interfaces/types'
import {
  isCategoryUnique,
  isPeriodUnique,
  isUserUnique
} from '@/utils/check-value'
import { PostAbsenceUx } from '@/ux/post-absence/post-absence-ux'
import { Typography } from '@mui/material'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast'

export default function PostAbsence() {
  const { absences, setAbsences } = useAbsence()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [inputValues, setInputValues] = useState<Absences | any>({
    users: '',
    category: '',
    periode: '',
    soldeActuel: 0,
    soldePris: 0,
    soldeFutur: 0
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInputValues({
      ...inputValues,
      [name]: value
    })
  }

  const isAnyInputEmpty = Object.values(inputValues).some(
    (value) => value === ''
  )
  const areAllInputsEmpty = Object.values(inputValues).every(
    (value) => value === ''
  )

  // Post item
  const PostAbsenceData = () => {
    setIsSubmitted(true)
    if (isAnyInputEmpty || areAllInputsEmpty) {
      toast.error(`Certains champs sont vides, vérifient les SVP`)
    } else if (!isUserUnique(inputValues, absences)) {
      toast.error(`L'utilisateur ${inputValues.users} existe deja`)
    } else if (!isCategoryUnique(inputValues, absences)) {
      toast.error(`La categorie ${inputValues.category} existe deja`)
    } else if (!isPeriodUnique(inputValues, absences)) {
      toast.error(`La periode ${inputValues.periode} existe deja`)
    } else {
      toast.success("Ajout d'absence effectue avec succès")
      setAbsences([...absences, inputValues])
      setIsSubmitted(false)
      setInputValues({
        users: '',
        category: '',
        periode: '',
        soldeActuel: 0,
        soldePris: 0,
        soldeFutur: 0
      })
    }
  }

  return (
    <React.Fragment>
      <Typography
        component={`div`}
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <PostAbsenceUx
          inputValues={inputValues}
          PostAbsenceData={PostAbsenceData}
          handleInputChange={handleInputChange}
          isSubmitted={isSubmitted}
        />
      </Typography>
    </React.Fragment>
  )
}
