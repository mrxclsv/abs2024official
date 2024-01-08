import React from 'react'
import emailjs from '@emailjs/browser';


const ContactForm = ({css, }) => {

  
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm("gmail", "llnnDefault", e.target, "ztvAQibgnrlgOuXBq")
    .then((result) => {
      console.log(result.text); 
    }, (error) => { 
      console.log(error.text)
    });
    e.target.reset();
    // navigate('/', { replace: true });
  }


  return (
    <div className={`w-full flex center `}>
        <form 
          className="Form flexV fit items-start justify-center bg-gray-100/50 shrink-0 max-w-[600px] rounded-lg p-10 m-auto" 
          onSubmit={sendEmail}>
        
        <h2 className='lg:pl-6'>General inquiries</h2>
        {/* <h2>Contact Information</h2> */}

        <div className='fullName flex gap-4 sm:flex-col md:flex-row'>
            <div className='formDiv'>
              <input className='formInput' type="text" name="firstName" placeholder='First name' required  />
            </div>

            <div className='formDiv'>
              <input className='formInput' type="text" name="lastName" placeholder='Last name' required  />
            </div>
        </div>

        <div className='formDiv '>
          <input className='formInput ' type="email" name="email" placeholder='Email address' required  />
        </div>

        <div className='formDiv'>
          <input className='formInput' type="phone" name="phone" placeholder='Phone Number' required  />
        </div>


        <div className='formDiv '>
          <input className='formInput' type="text" name="subject" placeholder='Subject'   />
        </div>

        <div className='formDiv'>
          <textarea className='formInput max-h-[100px] sm:min-h-[100px] ' type="text" name="project" placeholder='Message' required cols="30" rows="8"  />
        </div>

        <input type="submit" className='submitBtn text-white p-4 text-sm rounded-xl justify-between w-full lg:w-fit mx-auto flex bg-primary lg:ml-6 mt-10' value="Send message" />

      </form>

    </div>

    
  )
}

export default ContactForm