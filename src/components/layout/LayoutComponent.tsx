import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Sidebar from './sidebar/Sidebar'
import { Box } from '@mui/material'
import { Dashboard } from './views/Dashboard'
import { Logout } from './views/Logout'
import { Contact } from './views/Contact'
import Employees from './views/Employees'
import { Allmails } from './views/Allmails'
import { Sendmails } from './views/Sendmails'
import { Inbox } from './views/Inbox'

export function LayoutComponent() {
  return (
    <div>
      <Sidebar />
      <Box mt={8}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/allmails" element={<Allmails />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/sendmails" element={<Sendmails />} />
        </Routes>
      </Box>
    </div>
  )
}
