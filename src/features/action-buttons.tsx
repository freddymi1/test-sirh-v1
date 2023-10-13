import { Typography } from '@mui/material'
import Image from 'next/image'

interface ActionButtonsProps {
  img: string
  width: number
  height: number
  alt: string
  action: () => void
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  img,
  width,
  height,
  alt,
  action
}) => {
  return (
    <Typography
      component={`div`}
      onClick={action}
      sx={{
        cursor: 'pointer',
        display: 'flex',
        border: 0,
        alignItems: 'center'
      }}
    >
      <Image src={img} width={width} height={height} alt={alt} />
    </Typography>
  )
}
