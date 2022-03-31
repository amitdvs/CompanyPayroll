import React, { Dispatch, SetStateAction, FC } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from './Button'
import { userResponse } from '../../../App'
import { Typography, Grid, Paper } from '@mui/material'
import { Link } from 'react-router-dom'

export type ComponentProps = {
  title: string
  setEmail: Dispatch<SetStateAction<string>>
  setPassword: Dispatch<SetStateAction<string>>
  handleAction: (id: userResponse) => void
  log: userResponse
}

const styles = (theme: any) => ({
  margin: {
    margin: theme.spacing.unit * 2,
  },
  padding: {
    padding: theme.spacing.unit,
  },
})

const Form: FC<ComponentProps> = ({ title, setEmail, setPassword, handleAction, log }) => {
  return (
    <div>
      <Paper elevation={5} style={{ padding: 16, height: '70vh', width: 280, margin: '20px auto' }}>
        <Grid
          container
          alignItems="center"
          alignContent="center"
          justifyContent="center"
          spacing={2}
          style={{ minHeight: '70vh' }}
          item
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <Grid item justifyContent="center">
            <Typography variant="h3">Sign Up</Typography>
          </Grid>
          <Grid item>
            <TextField
              id="email"
              label="Enter the Email"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              id="password"
              label="Enter the Password"
              variant="outlined"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          {/* <Grid > */}
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
          {/* </Grid> */}
          {title === 'Register' && (
            <Grid item>
              <Typography>
                Already have an account ? <Link to="/login">Log In</Link>
              </Typography>
            </Grid>
          )}
          {title === 'Login' && (
            <Grid item>
              <Typography>
                Create an account <Link to="/register">Register</Link>
              </Typography>
            </Grid>
          )}
        </Grid>
        {/* </Grid> */}
      </Paper>
    </div>
  )
}

export default Form
