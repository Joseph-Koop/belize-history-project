import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Introduction from './pages/Introduction.jsx'
import Timeline from './pages/Timeline.jsx'
import Conclusion from './pages/Conclusion.jsx'
import References from './pages/References.jsx'

function App() {

  return (
    <>
      <div className="bg-gray-950 h-auto min-h-screen w-full flex flex-col justify-start text-white">
        <Layout />
          <Routes>
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/" element={<Timeline />} />
            <Route path="/conclusion" element={<Conclusion />} />
            <Route path="/references" element={<References />} />
          </Routes>
      </div>
    </>
  )
}

export default App
