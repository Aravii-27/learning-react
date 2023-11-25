import { IconButton } from '@mui/material'
import React from 'react'
import { LinkedIn, GitHub, Mail } from '@mui/icons-material'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contactContainer' id='contact'>
        <h1>CONTACT</h1>
        <div className='contactContainer__info'>
        <p>
            Email: <span>aravindh@gmail.com </span>
        </p>
         <p>Github UserName: <span> @aravii-27</span>
         </p>   
         <div className='contactIcons'>
            <a href='#google.com'>
                <IconButton>
                  <Mail/>
                </IconButton>

            </a>
            <a href='https://github.com/Aravii-27' target='blank'>
                <IconButton>
                  <GitHub/>
                </IconButton>

            </a>
            <a href='https://www.linkedin.com/in/aravindh-shanmugam/' target='blank'>
                <IconButton>
                  <LinkedIn/>
                </IconButton>

            </a>
         </div>
        </div>
    </div>
  )
}

export default Contact