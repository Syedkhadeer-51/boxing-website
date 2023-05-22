import { useState } from 'react'
import About from '../src/About'
import './index.css'
import Packages from './Packages'
import Review from './Review'
import Insta from './Insta'
import Contact from './Contact'
import HeroSection from './HeroSection'
import Actions from './Actions'
import Navbar from './Navbar'

function App() {


  return (
    <>
    <Navbar/>
    <HeroSection/>
    <About/>
    <Packages/>
    <Review/>
    <Actions/>
    <Insta/>
    <Contact/>
    </>
  )
}

export default App
