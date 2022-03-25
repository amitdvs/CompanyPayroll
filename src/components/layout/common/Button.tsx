import React, { Dispatch, SetStateAction, FC } from 'react'
import Button from '@mui/material/Button'
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'

import { userResponse } from '../../../App'
import { ComponentProps } from './Form'
// type ComponentProps = {
//   title: string
//   handleAction: (log: string) => void
//   log: userResponse
// }

const BasicButtons: FC<ComponentProps> = ({ title, handleAction, log }) => {
  return (
    <Button onClick={() => handleAction(log)} variant="contained">
      {title}
    </Button>
  )
}

export default BasicButtons
