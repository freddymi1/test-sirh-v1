import { ActionButtons } from '@/features/action-buttons'
import { Absences } from '@/interfaces/types'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    borderRadius: '4px',
    '& .MuiTableCell-root': {
      border: '1px solid #C4C4C4'
    }
  }
})

const StyledTableRow = styled(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.action.hover,
  border: '1px solid #C4C4C4',
  fontWeight: 600,
  color: '#494949'
}))

interface ListAbsencesProps {
  absences: Absences[]
  DeleteItems: (index: number) => void
}

export const ListAbsences: React.FC<ListAbsencesProps> = ({
  absences,
  DeleteItems
}) => {
  const classes = useStyles()

  const checkCategory = (categorie: string) => {
    if (categorie === 'RTT') {
      return (
        <Typography
          component={`div`}
          sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
        >
          <Typography
            component={`div`}
            sx={{
              width: 12,
              height: 12,
              borderRadius: '100%',
              background: '#A851FF'
            }}
          ></Typography>
          {categorie}
        </Typography>
      )
    } else {
      return (
        <Typography
          component={`div`}
          sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
        >
          <Typography
            component={`div`}
            sx={{
              width: 12,
              height: 12,
              borderRadius: '100%',
              background: '#FF8851'
            }}
          ></Typography>
          {categorie}
        </Typography>
      )
    }
  }
  return (
    <TableContainer sx={{ width: '100%', borderRadius: '4' }} component={Paper}>
      <Table
        className={classes.table}
        sx={{ minWidth: 700, width: '100%', borderRadius: '10px' }}
        aria-label="customized table"
      >
        <TableHead>
          <TableRow>
            <StyledTableRow>Utilisateurs</StyledTableRow>
            <StyledTableRow>Catégorie</StyledTableRow>
            <StyledTableRow>Période</StyledTableRow>
            <StyledTableRow>Solde actuel</StyledTableRow>
            <StyledTableRow>Solde pris</StyledTableRow>
            <StyledTableRow>Solde futur</StyledTableRow>
            <StyledTableRow></StyledTableRow>
          </TableRow>
        </TableHead>
        <TableBody>
          {absences.map((row: Absences, index: number) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {row.users}
              </TableCell>
              <TableCell>{checkCategory(row.category)}</TableCell>
              <TableCell>{row.periode}</TableCell>
              <TableCell>{row.soldeActuel}</TableCell>
              <TableCell>{row.soldePris}</TableCell>
              <TableCell>{row.soldeFutur}</TableCell>
              <TableCell sx={{ p: 0 }}>
                <Typography
                  component={`div`}
                  sx={{
                    py: '3px',
                    display: 'flex',
                    justifyContent: 'space-around',
                    border: 0,
                    alignItems: 'center'
                  }}
                >
                  <ActionButtons
                    img="images/Ajuster.svg"
                    width={40}
                    height={40}
                    alt="Ajuster"
                    action={() => {}}
                  />
                  <ActionButtons
                    img="images/Transferer.svg"
                    width={40}
                    height={40}
                    alt="Transferer"
                    action={() => {}}
                  />
                  <ActionButtons
                    img="images/Solder.svg"
                    width={40}
                    height={40}
                    alt="Solder"
                    action={() => DeleteItems(index)}
                  />
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
