import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { LayoutComponent } from './components/layout/LayoutComponent'
import theme from './styles/theme'
import { ThemeProvider } from '@mui/material'
import Form from './components/layout/common/Form'
import { app } from './config/firebase-config'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'

import { Dashboard } from './components/layout/views/Dashboard'
import { Logout } from './components/layout/views/Logout'
import { Contact } from './components/layout/views/Contact'
import Employees from './components/layout/views/Employees'
import { Allmails } from './components/layout/views/Allmails'
import { Sendmails } from './components/layout/views/Sendmails'
import { Inbox } from './components/layout/views/Inbox'

export enum userResponse {
  login,
  register,
}

function App() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  // let navigate = useNavigate()
  const handleAction = (id: userResponse) => {
    const authentication = getAuth()
    if (id === userResponse.register) {
      createUserWithEmailAndPassword(authentication, email, password).then((response) => {
        // navigate('./home')
        console.log(response)
      })
    }
    console.log('Hello')
  }
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutComponent />} />
          <Route
            path="/login"
            element={
              <Form
                title="Login"
                setEmail={setEmail}
                setPassword={setPassword}
                handleAction={() => handleAction(userResponse.login)}
                log={userResponse.login}
              />
            }
          />
          <Route
            path="/register"
            element={
              <Form
                title="Register"
                setEmail={setEmail}
                setPassword={setPassword}
                handleAction={() => handleAction(userResponse.register)}
                log={userResponse.register}
              />
            }
          />
          <Route path="/" element={<Dashboard />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/allmails" element={<Allmails />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/sendmails" element={<Sendmails />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
