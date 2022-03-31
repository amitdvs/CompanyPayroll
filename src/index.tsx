import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import AddEdit from './components/pages/AddEdit'
import FirebaseContent from './components/pages/FirebaseContent'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
ReactDOM.render(
  <React.StrictMode>
    <ToastContainer autoClose={5000} />
    <BrowserRouter>
      {/* <AddEdit />
      <FirebaseContent /> */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
