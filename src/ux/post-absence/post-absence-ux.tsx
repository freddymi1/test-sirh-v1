'use client'

import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Button, InputLabel, Typography } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { PostAbsenceUxProps } from '@/interfaces/interfaces'
import { usersMockData } from '@/utils/users-mock-data'
import { Users } from '@/interfaces/types'

export const PostAbsenceUx: React.FC<PostAbsenceUxProps> = ({
  inputValues,
  PostAbsenceData,
  handleInputChange,
  isSubmitted
}) => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '50ch' },
        background: '#fff',
        p: 6,
        borderRadius: 4,
        height: '100%'
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <FormControl sx={{ px: 1, width: '100%', mb: 1 }}>
          <InputLabel id="demo-simple-select-helper-label">
            Utilisateurs
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={inputValues.users}
            label="Utilisateurs"
            error={isSubmitted && inputValues.users === ''}
            name="users"
            required
            onChange={(e: any) => handleInputChange(e)}
          >
            <MenuItem value="">
              <em>Selectionner un utilisateur</em>
            </MenuItem>
            {usersMockData.map((item: Users, index: number) => (
              <MenuItem key={index} value={item.name}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div>
        <TextField
          required
          error={isSubmitted && inputValues.category === ''}
          name="category"
          id="outlined-basic"
          label="Catégorie"
          variant="outlined"
          value={inputValues.category}
          onChange={(e: any) => handleInputChange(e)}
        />
        <TextField
          required
          error={isSubmitted && inputValues.periode === ''}
          name="periode"
          value={inputValues.periode}
          id="outlined-required"
          label="Période"
          onChange={(e: any) => handleInputChange(e)}
        />
      </div>
      <div>
        <TextField
          required
          error={isSubmitted && inputValues.soldeActuel === 0}
          name="soldeActuel"
          id="outlined-number"
          label="Solde actuel"
          type="number"
          value={inputValues.soldeActuel}
          onChange={(e: any) => handleInputChange(e)}
          InputLabelProps={{
            shrink: true
          }}
        />

        <TextField
          required
          error={isSubmitted && inputValues.soldePris === 0}
          name="soldePris"
          id="outlined-number"
          label="Solde pris"
          type="number"
          value={inputValues.soldePris}
          onChange={(e: any) => handleInputChange(e)}
          InputLabelProps={{
            shrink: true
          }}
        />
      </div>
      <div>
        <TextField
          required
          error={isSubmitted && inputValues.soldeFutur === 0}
          name="soldeFutur"
          id="outlined-number"
          label="Solde futur"
          type="number"
          value={inputValues.soldeFutur as number}
          onChange={handleInputChange}
          InputLabelProps={{
            shrink: true
          }}
        />
      </div>
      <Typography
        component={`div`}
        sx={{
          p: 1,
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
          mt: 5
        }}
      >
        <Button onClick={PostAbsenceData} variant="contained">
          Enregistrer
        </Button>
      </Typography>
    </Box>
  )
}
