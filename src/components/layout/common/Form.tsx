import React, { Dispatch, SetStateAction, FC } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from './Button'
import { userResponse } from '../../../App'

export type ComponentProps = {
  title: string
  setEmail: Dispatch<SetStateAction<string>>
  setPassword: Dispatch<SetStateAction<string>>
  handleAction: (id: userResponse) => void
  log: userResponse
}

const Form: FC<ComponentProps> = ({ title, setEmail, setPassword, handleAction, log }) => {
  return (
    <div>
      <div className="heading-container">
        <h3>{title} Form</h3>
      </div>

      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="email"
          label="Enter the Email"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="password"
          label="Enter the Password"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          log={log}
          title={title}
          handleAction={handleAction}
          setEmail={function (value: SetStateAction<string>): void {
            throw new Error('Function not implemented.')
          }}
          setPassword={function (value: SetStateAction<string>): void {
            throw new Error('Function not implemented.')
          }}
        />
      </Box>
    </div>
  )
}

export default Form
