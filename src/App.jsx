import { useState } from 'react'
import About from '../src/About'
import './index.css'
import Packages from './Packages'
import Review from './Review'
import Insta from './Insta'
import Contact from './Contact'
import HeroSection from './HeroSection'

function App() {


  return (
    <>
    <HeroSection/>
    <About/>
    <Packages/>
    <Review/>
    <Insta/>
    <Contact/>
    </>
  )
}

export default App
