import React from 'react';
import { Button } from 'react-bootstrap';
import './Contact.css';


const Contact = () => {
    return (
        <div className='ContactForm'>
            <div className='container'>
                
                <div className='row'>
                    <div className='col-12 text-center'>
                        <div className='contactForm'>
                        <h2 className="fw-bold">Please <span className="text-warning">Contact Us</span></h2>
                            <form id='contact-form' noValidate>
                                {/* Row 1 of form */}
                                <div className='row formRow'>
                                    <div className='col-6'>
                                        <input
                                            type='text'
                                            name='name'

                                            className='form-control formInput'
                                            placeholder='Name'
                                        ></input>

                                    </div>
                                    <div className='col-6'>
                                        <input
                                            type='email'
                                            name='email'

                                            className='form-control formInput'
                                            placeholder='Email address'
                                        ></input>

                                    </div>
                                </div>
                                {/* Row 2 of form */}
                                <div className='row formRow'>
                                    <div className='col'>
                                        <input
                                            type='text'
                                            name='subject'

                                            className='form-control formInput'
                                            placeholder='Subject'
                                        ></input>

                                    </div>
                                </div>
                                {/* Row 3 of form */}
                                <div className='row formRow'>
                                    <div className='col'>
                                        <textarea
                                            rows={3}
                                            name='message'

                                            className='form-control formInput'
                                            placeholder='Message'
                                        ></textarea>

                                    </div>
                                </div>

                                <Button className="btn btn-md btn-secondary mt-3">Submit</Button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;