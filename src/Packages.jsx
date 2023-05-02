import React from 'react'
import aboutImg from '../src/assets/about-us.png'

const Packages = () => {
    return (
        <div className='main-container p-0 m-0 d-flex align-items-center' id='About'>
            <div className='row p-3 my-2'>
                <h4 className='heading-text text-white py-2 px-5 m-3 fw-bold animate__animated animate__fadeInLeft'>SPECIAL<span className='sub-heading-split text-pri-green'> PACKAGES</span></h4>
                <div className="row d-flex justify-content-center align-items-center">

                <div className='col-md-5 col-10 animate__animated animate__fadeInLeft d-flex align-items-center justify-content-center'>
                    <div className="package-card px-4 py-2 m-3">
                        <div className='package-header p-2'>Monthly (online )</div>
                        <div className='package-price p-2'>10,000 INR</div>
                        <div className="trail-text p-2">7 days free trail, monthly thereafter</div>
                        <div className='text-center my-3 w-100'>
                            <button type="button" className="btn package-button w-100">FREE TRAIL</button>
                        </div>
                    </div>
                </div>
                <div className='col-md-5 col-10 animate__animated animate__fadeInRight d-flex align-items-center justify-content-center'>
                    <div className="package-card px-4 py-2 m-3">
                        <div className='package-header p-2'>Monthly (online )</div>
                        <div className='package-price p-2'>12,000 INR</div>
                        <div className="trail-text p-2">7 days free trail, monthly thereafter</div>
                        <div className='text-center my-3 w-100'>
                            <button type="button" className="btn package-button w-100">FREE TRAIL</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Packages
