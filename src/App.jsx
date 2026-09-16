import { useState } from 'react'
import ScrollToTop from './components/ScrollToTop'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import  Navbar  from './components/Navbar.jsx'
import './App.css'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Internship from './components/Internship.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/footer.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div><ScrollToTop /><Navbar /><Home /><Footer /></div>
  },
  {
    path: "/about",
    element: <div><ScrollToTop /><Navbar /><About /><Footer /></div>
  },
  {
    path: "/skills",
    element: <div><ScrollToTop /><Navbar /><Skills /><Footer /></div>
  },
  {
    path: "/projects",
    element: <div><ScrollToTop /><Navbar /><Projects /><Footer /></div>
  },
  {
    path: "/internship",
    element: <div><ScrollToTop /><Navbar /><Internship /><Footer /></div>
  },
  {
    path: "/contact",
    element: <div><ScrollToTop /><Navbar /><Contact /><Footer /></div>
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
