import { FC } from 'react'
import Button from '@mui/material/Button'

import { ComponentProps } from './Form'

const BasicButtons: FC<ComponentProps> = ({ title, handleAction, log }) => {
  return (
    <Button onClick={() => handleAction(log)} variant="contained">
      {title}
    </Button>
  )
}

export default BasicButtons
