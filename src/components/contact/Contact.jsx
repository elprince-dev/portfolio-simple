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
                    Name: <br />
                    <input type="text" required placeholder='Name' name='user_name' />
                </label>
                <label>
                    Email Address: <br />
                    <input type="email" required placeholder='Email' name='user_email' />
                </label>
            </div>
            
            <div className='textArea'>
                <textarea rows="8" placeholder='Message' name='message'/>
            </div>
            <button>Submit</button>
            {error && 'Error! Please try again'}
            {success && 'Thank you! I will get back to you so soon!'}
        </form>
    </div>
  )
}

export default Contact