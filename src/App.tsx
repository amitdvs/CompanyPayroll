import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import theme from './styles/theme'
import { ThemeProvider } from '@mui/material'
import Form from './components/layout/common/Form'

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

import firebase from 'firebase'
import AddEdit from './components/pages/AddEdit'
import ViewPage from './components/pages/ViewPage'

export enum userResponse {
  login,
  register,
}

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
    const authentication = firebase.auth()
    if (id === userResponse.register) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((response: any) => {
          navigate('/')
          sessionStorage.setItem('Auth token', response.user.refreshToken)
        })
        .catch((error: any) => {
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
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((response: any) => {
          navigate('/')
          sessionStorage.setItem('Auth Token', response.user.refreshToken)
        })
        .catch((error: any) => {
          console.log(error.code)
          if (error.code === 'auth/email-already-in-use') {
            toast.error('Email Already in Use')
          }
        })
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer autoClose={5000} />
      <Routes>
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
          <Route path="/" element={<Dashboard />} />
          <Route path="employees" element={<Employees />} />
          <Route path="contact" element={<Contact />} />
          <Route path="logout" element={<Logout />} />
          <Route path="allmails" element={<Allmails />} />
          <Route path="inbox" element={<Inbox />} />
          <Route path="sendmails" element={<Sendmails />} />
          <Route path="addedit" element={<AddEdit />} />
          <Route path="update/:id" element={<AddEdit />} />
          <Route path="view/:id" element={<ViewPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}

export default App
