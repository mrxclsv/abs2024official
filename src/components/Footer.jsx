import React /* , { useRef } */ from 'react';
import { Link, /* useLocation */ } from 'react-router-dom'
import { contactInfo } from '../utils/data'
// import { allTransitions } from '../utils/style'

import { Contact, Button } from "../utils/components"

import abslogoblack from '../components/.branding/abslogo_black.svg'

// import emailjs from '@emailjs/browser';



const Footer = () => {

  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
  //   .then((result) => {
  //       console.log(result.text);
  //   }, (error) => {
  //       console.log(error.text);
  //   });
  // }
  
  // const notActiveCSS = 'flexV center text-xs text-neutral-700 hover:text-black cursor-pointer w-full h-full rounded-lg capitalize px-6 relative z-[2] duration-500'
  // const activeCSS = `${notActiveCSS} text-black z-[2] md:text-black ${allTransitions} ` 

  // const location = useLocation()
  // var pageTitle = String(location.pathname).substring(6)/* .replace(/\/$/, ''); */ 
  

  return (

    <footer className={`w-screen flexV center relative z-[200]  bg-gray-50 text-black`}>

      <div className="wrapper w-full flexV items-start max-w-7xl pt-14 pb-6    
                      sm:flex-row sm:items-end
                      md:flex md:justify-around===
                      lg:items-end=== lg:flex=== 
                      ">

        <div className='section1 w-full md:w-1/2 flexV start relative pl-2 lg:pl-10 h-fit mt-[6rem] ml-2'>
          <Link to='/' className='absLOGO w-[250px] animate-slidedown group flex start max-w-[150px] absolute mx-auto left-0 right-0= md:left-0 md:ml-10 -top-[60%] sm:-top-[35%] md:-top-[50%]'>
            <img className='full object-contain px-4 scale-[75%]= group-hover:scale-[80%]= duration-500' src={abslogoblack} alt="abslogo" />
          </Link>

          <div className="md:flexV grid grid-cols-2 sm:grid-cols-1 start gap-0 pr-4 md:gap-1 w-full" id="contacts">
            {contactInfo?.map((item, index) => (
              <Contact
                key={index}
                title={item.title}
                contact={item.contact}
                action={item.action}
              />
            ))}
          </div>
        </div>

        <div id="Subscribe" className='section2  md:flexV start paddingX w-full md:w-fit mt-8 md:mt-[2rem] px-6 mb-2'>
          <h3 className='md:h3 ml-2 w-fit'>Subscribe</h3>
          <div className='flexV start gap-2 w-full px-2 md:w-fit text-left mt-2'>
            Sign up to receive ABS 2024 news and updates.
            <form action="type" className='flex items-start justify-center h-full w-full bg-white start border mt-4'>
              <input type="text" className='flex center my-auto bg-none bg-transparent border-none px-4 outline-none rounded-lg focus:outline-none full lg:w-full grow' placeholder='Enter your email' />
              <Button
                label="Subscribe"
                type="primary" 
              />
            </form>

          </div>
        </div>

      </div>

      <p className='absolute== bottom-0 left-0 right-0 border-y-2 mx-auto md:opacity-70 p-6 md:hover:opacity-100 text-sm mt-10 text-blakk'>© Copyright 2024, ABS2024 #YoonWi</p>


    </footer>
  )
}

export default Footer