import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Distribute from './Distribute'
import Invoice from './Invoice'
import Layout from './Layout'

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Distribute />} />
            <Route path="/invoice" element={<Invoice />} />
        </Route>
        </Routes>
    </Router>
  )
}

export default Routing