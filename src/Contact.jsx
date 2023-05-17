import React from 'react'
import contactImg from '../src/assets/contact.png'

const Contact = () => {
    return (
        <div className="main-container p-0 m-0" id='contact'>
            <div className="row p-3 my-2 d-flex justify-content-center align-items-center">
                <div className='col-md-6 col-12 image-section animate__animated animate__fadeInLeft d-flex align-items-center justify-content-center'>
                    <div className='text-center p-3 m-2'>
                        <img className='img-fluid' src={contactImg} alt="about-img" />
                    </div>
                </div>
                <div className='col-md-6 col-12 d-flex flex-column justify-content-center align-items-center  animate__animated animate__fadeInRight'>
                    <h4 className='heading-text text-white py-2 px-5 m-3 fw-bold animate__animated animate__fadeInLeft'>GAIN YOUR CHANGE NOW !</h4>
                    <div className='description-text text-white m-2 px-sm-5 px-3'>
                        Stay motivated and  engaged with a little  help from
                        a supportive community of other members
                    </div>
                    <div className='text-center my-3 w-50'>
                        <button type="button" className="btn prinary-btn w-100" data-bs-toggle="modal" data-bs-target="#contactModal">CONTACT</button>
                    </div>
                </div>
                <div className="modal fade" id="contactModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header text-center">
                                <h4 className="modal-title w-100 font-weight-bold">Get in touch with us</h4>
                            </div>
                            <div className="modal-body mx-3">
                                <div className="md-form mb-5">
                                    <i className="fas fa-user prefix grey-text"></i>
                                    <input type="text" id="form34" className="form-control validate" placeholder='Name'/>
                                </div>

                                <div className="md-form mb-5">
                                    <i className="fas fa-envelope prefix grey-text"></i>
                                    <input type="email" id="form29" className="form-control validate" placeholder='Email'/>
                                </div>
                                <div className="md-form">
                                    <i className="fas fa-pencil prefix grey-text"></i>
                                    <textarea type="text" id="form8" className="md-textarea form-control" rows="4" placeholder='Message'></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <a href="" className="btn btn-default btn-rounded mb-4" data-toggle="modal" data-target="#modalContactForm">Launch
                        Modal Contact Form</a>
                </div>
            </div>
        </div>
    )
}

export default Contact