import React from 'react'
import './Contact.css'
import { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import { Element } from 'react-scroll'


export const ContactUs = () => {
    const [success, setSuccess] = useState(false);

    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_hnyaphj', 'template_v3j2oeu', form.current, 'SiTh0VBlUPAmbVEge')
        .then((result) => {
            console.log(result.text);
            setSuccess(true);
        }, (error) => {
            console.log(error.text);
            setSuccess(false);
        });
    };
  

  return (
    <Element className='contact-form' name='contact'>
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
                <input type="submit" value={success ?  "Sent"  : "Send" } style={success ? { background: 'green' } : {}} className='button'/>
                {success && <span>Thanks for contacting me!</span>}
                {/* blur divs */}
                <div className="blur" style={{backgroundColor:'var(--purple)',left:'6%',top:'10%'}}></div>
            </form>
        </div>
    </Element>
  )
}

export default ContactUs