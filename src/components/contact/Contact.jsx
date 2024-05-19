'use client'
import './contact.scss'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const formRef = useRef()

    function sendEmail(e){
        e.preventDefault();
    
        emailjs
          .sendForm('service_qes66hs', 'template_uxvoebn', formRef.current, {
            publicKey: 'XHM38tfM4cFjaIgaE',
          })
          .then(
            () => {
              setSuccess(true)
            },
            (error) => {
                setError(true)
            },
          );
    }

  return (
    <div className='contact' id='Contact'>
        <div className="title">
          <h1>
              Contact
          </h1>
        </div>

        <div className="line"></div>

        <form ref={formRef} onSubmit={sendEmail}>
            
            
          <div className="inputFields">
            <div className='nameEmail'>
              <div className="nameOrEmail">
                <label>Name: <br /></label>
                <input type="text" required name='user_name' placeholder ="Your name" />
              </div>
                
                <div className="nameOrEmail">
                  <label>Email Address: <br /></label>
                  <input type="email" required name='user_email' placeholder ="Email address" />
                </div>
                
                
            </div>
            
            <div className='textArea'>
                <label>Your Message: <br /></label>
                <textarea name='message' rows = '5' placeholder = 'Your Message'/>
            </div>
          </div>
          
          <button>Submit</button>
          <div className='error'>
              {error && 'Error! Please try again'}
          {success && 'Thank you! I will get back to you so soon!'}
          </div>
            
        </form>
    </div>
  )
}

export default Contact