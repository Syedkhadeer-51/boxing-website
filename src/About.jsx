import React from 'react'
import aboutImg from '../src/assets/about-us.png'



const About = () => {
  return (
    <div className='main-container p-0 m-0' id='About'>
      <div className='row p-3 my-2'>
        <h4 className='heading-text text-white py-2 px-5 m-3 fw-bold animate__animated animate__fadeInLeft'>ABOUT<span className='sub-heading-split text-pri-green'> US</span></h4>
        <div className='col-md-6 col-12 image-section animate__animated animate__fadeInLeft d-flex align-items-center justify-content-center'>
          <div className='text-center p-3 m-2'>
        <img className='img-fluid' src={aboutImg} alt="about-img" />
          </div>
        </div>
        <div className='col-md-6 col-12 d-flex flex-column justify-content-center align-items-center  animate__animated animate__fadeInRight'>
          <div className='description-text text-white m-2 px-sm-5 px-3'>
          We are here to help you achieve your health and fitness goals with focus training of mind and body. With a blend of my expertise in Boxing fitness, the fitness module is created in such a way that you will enjoy your workout session and aim everyday to do more and more
          </div>
          <div className='text-center my-3 w-50'>
          <button type="button" className="btn prinary-btn w-100">CONTINUE</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About