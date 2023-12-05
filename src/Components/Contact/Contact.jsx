import React from 'react'
import './Contact.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_hnyaphj', 'template_0kwgw6w', form.current, 'XPZA61xqs8f7Tzqtx')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  

  return (
    <div className='contact-form'>
         {/* left side */}
         <div className="c-left">
            <div className="awesome">
                <span>Let's get in touch!</span>
                <span>Contact me</span>
                {/* blur divs */}
                <div className="blur" style={{background:'skyblue',left:'-18rem',top:'58%'}}></div>
            </div>
         </div>

        {/* right side */}
        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" placeholder="Name" className='user'/>
                <input type="email" name="user_email" placeholder="Email" className='user'/>
                <textarea name="message" placeholder='Message' className='user'></textarea>
                <input type="submit" value="Send"  className='button'/>
                {/* blur divs */}
                <div className="blur" style={{background:'var(--purple)',left:'6%',top:'10%'}}></div>
            </form>
        </div>
    </div>
  )
}

export default Contact