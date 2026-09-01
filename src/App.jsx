import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import  Navbar  from './components/Navbar.jsx'
import './App.css'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Internship from './components/Internship.jsx'
import Contact from './components/Contact.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Navbar /><Home /></div>
  },
  {
    path: "/about",
    element: <div><Navbar /><About /></div>
  },
  {
    path: "/skills",
    element: <div><Navbar /><Skills /></div>
  },
  {
    path: "/projects",
    element: <div><Navbar /><Projects /></div>
  },
  {
    path: "/internship",
    element: <div><Navbar /><Internship /></div>
  },
  {
    path: "/contact",
    element: <div><Navbar /><Contact /></div>
  },
])

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
