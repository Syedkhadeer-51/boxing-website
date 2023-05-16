import React from 'react';
import reviewImg from '../src/assets/instaImage-1.png'
import instaImg_2 from '../src/assets/instaImage-2.png'
import instaImg_3 from '../src/assets/instaImage-3.png'




const Insta = () => {
  return (
    <div className='main-container p-0 m-0' id='insta'>
      <div className="row p-3 my-2">
        <h4 className='heading-text text-white py-2 px-5 m-3 fw-bold animate__animated animate__fadeInLeft'>ON<span className='sub-heading-split text-pri-green'> INSTAGRAM</span></h4>
        <div className="row d-flex justify-content-center align-items-center p-0 m-0">
        <div className="col-lg-3 col-md-4 col-12 m-2 p-1">
          <div className='text-center p-3 m-2'>
            <img className='img-fluid' src={reviewImg} alt="about-img" />
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-12 m-2 p-1">
          <div className='text-center p-3 m-2'>
            <img className='img-fluid' src={instaImg_3} alt="about-img" />
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-12 m-2 p-1">
          <div className='text-center p-3 m-2'>
            <img className='img-fluid' src={instaImg_2} alt="about-img" />
          </div>
        </div>
       
        
        </div>
      </div>
    </div>
  )
}

export default Insta