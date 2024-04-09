'use client'
import './contact.scss'
import { useState } from 'react'

const Contact = () => {

    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

  return (
    <div className='contact'>
        <h1>
            Contact
        </h1>

        <div className="line"></div>

        <form>
            <div className='nameEmail'>
                <label>
                    Name: <br /></label>
                    <input type="text" required placeholder='Name' name='user_name' placeholder ="Your name" />
                
                <label>
                    Email Address: <br /></label>
                    <input type="email" required placeholder='Email' name='user_email' placeholder ="Email address" />
                
            </div>
            
            <div className='textArea'>
            <label>
                    Your Message: <br /></label>
                <textarea rows="8" placeholder='Message' name='message' rows = '5'/>
            </div>
            <button>Submit</button>
            {error && 'Error! Please try again'}
            {success && 'Thank you! I will get back to you so soon!'}
        </form>
    </div>
  )
}

export default Contact