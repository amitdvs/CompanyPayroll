// import { app } from './config/firebase-config.js'
import { initializeApp } from 'firebase/app'
import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { LayoutComponent } from './components/layout/LayoutComponent'
import theme from './styles/theme'
import { ThemeProvider } from '@mui/material'
import Form from './components/layout/common/Form'
import { config } from './config/firebase-config'
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getAdditionalUserInfo,
} from 'firebase/auth'

import { Dashboard } from './components/layout/views/Dashboard'
import { Logout } from './components/layout/views/Logout'
import { Contact } from './components/layout/views/Contact'
import Employees from './components/layout/views/Employees'
import { Allmails } from './components/layout/views/Allmails'
import { Sendmails } from './components/layout/views/Sendmails'
import { Inbox } from './components/layout/views/Inbox'
import Sidebar from './components/layout/sidebar/Sidebar'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export enum userResponse {
  login,
  register,
}

initializeApp(config.firebaseConfig)

function App() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')

    if (authToken) {
      navigate('/')
    }
  }, [])
  let navigate = useNavigate()
  const handleAction = (id: userResponse) => {
    const authentication = getAuth()
    if (id === userResponse.register) {
      createUserWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate('/')
          const details = getAdditionalUserInfo(response)
          // sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        })
        .catch((error) => {
          console.log(error.code)
          if (error.code === 'auth/wrong-password') {
            toast.error('Please check the Password')
          }
          if (error.code === 'auth/user-not-found') {
            toast.error('Please check the Email')
          }
        })
    }
    if (id === userResponse.login) {
      signInWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate('/')
          // sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        })
        .catch((error) => {
          console.log(error.code)
          if (error.code === 'auth/email-already-in-use') {
            toast.error('Email Already in Use')
          }
        })
    }
  }
  return (
    <ThemeProvider theme={theme}>
      {/* <BrowserRouter> */}
      <ToastContainer autoClose={5000} />
      <Routes>
        {/* <Route path="/" element={<LayoutComponent />} /> */}
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
        <Route path="/" element={<Sidebar />}>
          {/* <Sidebar /> */}
          {/* {console.log('Hello')} */}
          <Route path="/" element={<Dashboard />} />

          <Route path="employees" element={<Employees />} />
          <Route path="contact" element={<Contact />} />
          <Route path="logout" element={<Logout />} />
          <Route path="allmails" element={<Allmails />} />
          <Route path="inbox" element={<Inbox />} />
          <Route path="sendmails" element={<Sendmails />} />
        </Route>
      </Routes>
      {/* </BrowserRouter> */}
    </ThemeProvider>
  )
}

export default App
