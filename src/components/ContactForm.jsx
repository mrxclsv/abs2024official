import React from 'react'
import emailjs from '@emailjs/browser';


const ContactForm = ({ css, simplified }) => {


  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm("gmail", "abs00", e.target, process.env.YOUR_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text)
      });
    e.target.reset();
  }


  return (
    <div className={`w-full bg-gray-100 ${simplified && '!w-fit !bg-transparent'} flex center`}>
      <form
        className="Form flexV fit items-start justify-center bg-gray-100 shrink-0  text-black lg:max-w-7xl rounded-lg p-8 m-auto gap-4"
        onSubmit={sendEmail}>

        <h2 className='text-4xl lg:h2 lg:pl-6=== text-black mb-8'>Get in touch</h2>

        <div className='fullName flex gap-4 sm:flex-col md:flex-row w-full !text-black'>
          <div className='formDiv'>
            <input className='formInput' type="text" name="firstName" placeholder='First name' required />
          </div>

          <div className='formDiv '>
            <input className='formInput' type="text" name="lastName" placeholder='Last name' required />
          </div>
        </div>

        <div className='formDiv w-full '>
          <input className='formInput  ' type="email" name="email" placeholder='Email address' required />
        </div>

        <div className='formDiv w-full '>
          <input className='formInput' type="phone" name="phone" placeholder='Phone Number' required />
        </div>

        <div className='formDiv w-full !text-black'>
          <input className='formInput' type="text" name="subject" placeholder='Subject' />
        </div>

        <div className='formDiv w-full'>
          <textarea className='formInput max-h-[150px] sm:min-h-[100px] h-fit !text-black placeholder:text-black/50 ' type="text" name="project" placeholder='Message' required cols="30" rows="8" />
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