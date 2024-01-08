import React from 'react'
import emailjs from '@emailjs/browser';


const ContactForm = ({css, }) => {

  
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm("gmail", "abs00", e.target, "ztvAQibgnrlgOuXBq")
    .then((result) => {
      console.log(result.text); 
    }, (error) => { 
      console.log(error.text)
    });
    e.target.reset();
    // navigate('/', { replace: true });
  }


  return (
    <div className={`w-full h-[90vh] lg:h-[75vh] max-w-[1024px] flex center bg-gray-100 lg:p-8`}>
        
        <form 
          className="Form flexV fit items-start justify-center bg-gray-100 shrink-0 max-w-[600px] text-black lg:max-w-7xl rounded-lg p-8 m-auto gap-4" 
          onSubmit={sendEmail}>
        
        <h2 className='lg:pl-6=== text-black mb-8'>Get in touch</h2>

        <div className='fullName flex gap-4 sm:flex-col md:flex-row w-full'>
            <div className='formDiv'>
              <input className='formInput' type="text" name="firstName" placeholder='First name' required  />
            </div>

            <div className='formDiv '>
              <input className='formInput' type="text" name="lastName" placeholder='Last name' required  />
            </div>
        </div>

        <div className='formDiv w-full'>
          <input className='formInput ' type="email" name="email" placeholder='Email address' required  />
        </div>

        <div className='formDiv w-full'>
          <input className='formInput' type="phone" name="phone" placeholder='Phone Number' required  />
        </div>

        <div className='formDiv w-full'>
          <input className='formInput' type="text" name="subject" placeholder='Subject'   />
        </div>

        <div className='formDiv w-full'>
          <textarea className='formInput max-h-[100px] sm:min-h-[100px] text-black placeholder:text-black ' type="text" name="project" placeholder='Message' required cols="30" rows="8"  />
        </div>

        <input type="submit" 
          className='submitBtn cursor-pointer p-4 text-sm text-center rounded-xl justify-between w-full transition-all duration-700 ease-in-out flex bg-black text-white mt-10' 
          value="Send message" 
        />

      </form>

    </div>

    
  )
}

export default ContactForm