// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'
import Navbar from "./Navbar"
import Body_section from "./Body_section"
import Testimonial from "./Testimonial"
import Recent_work from "./Recent_woek"
import Footer from "./Footer"

function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <Body_section></Body_section>
      <Testimonial></Testimonial>
      <Recent_work></Recent_work>
      <Footer></Footer>
    </>
  )
}

export default App
