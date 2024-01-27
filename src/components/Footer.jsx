import React, { useState } /* , { useRef } */ from 'react';
import { Link, /* useLocation */ } from 'react-router-dom'
import { contactInfo, social } from '../utils/data'
// import { allTransitions } from '../utils/style'

import { Contact, Button, abssignature, Logo } from "../utils/components"

import abslogoblack from '../components/.branding/abslogo_black.svg'
import { allTransitions } from '../utils/style';

// import emailjs from '@emailjs/browser';



const Footer = () => {

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

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

  const [emailSent, setEmailSent] = useState(false)
  
  // function emailModal() {
  //   useEffect(() => {
  //     setEmailSent(true)
  //   }, [emailSent])
  // }

  return (

    <footer className={`w-screen flexV center relative z-[200]  bg-gray-50 text-black`}>

      {emailSent &&
        <div className='fixed inset-0 bg-white/90 flex center p-4 z-[40]'>

          <div className='relative inset-10 signal h-1/2 rounded m-auto aspect-4/6 z-[42]'>
            <div className='relative flexV gap-4 center full signal ======'>
              <button className='ri-close-line w-[44px] aspect-square text-2xl bg-gray-100 group-hover:bg-gray-200 rounded-full absolute right-4 top-4'/>

              <img src={abssignature} className='absolute bottom-6 h-10 mix-blend-difference' alt="absisgnature" />
              
              <h3>Your email has been added to our list.</h3>
              <h4>We won't spam you.</h4>

            </div>
          </div>

        </div>
      }

      <div className="wrapper w-full flexV items-start lg:max-w-7xl pt-14 pb-6    
                      sm:flex-row sm:items-end
                      md:flex md:justify-around===
                      lg:items-end=== lg:flex=== 
                      ">

        <div className='section1 w-full md:w-1/2 flexV start relative pl-2 lg:pl-10 h-fit mt-[6rem] ml-2'>
          <Link to='/' className='absLOGO w-[250px] animate-slidedown group flex start max-w-[150px] absolute mx-auto left-0 right-0= md:left-0 md:ml-8 -top-[50%] sm:-top-[35%] md:-top-[70%]'>
            <Logo />
            {/* <img className='full object-contain px-4 scale-[75%]= group-hover:scale-[80%]= duration-500' src={abslogoblack} alt="abslogo" /> */}
          </Link>

          <div id="contacts" className="md:flexV grid grid-cols-2 sm:grid-cols-1 start gap-4 pr-4 md:gap-4 w-full">
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

        <div id="Subscribe" className='section2  md:flexV start paddingX w-full md:w-1/2 mt-8 md:mt-[2rem] px-6 mb-2'>
          <h3 className='md:h3 ml-2 w-fit'>Subscribe</h3>
          <div className='flexV start gap-2 w-full px-2 md:w-fit= text-left mt-2'>
            Sign up to receive ABS 2024 news and updates.
            <form action="type" className='flex items-start justify-center h-full w-full lg:max-w-[500px] bg-white start border mt-4'>
              <input type="email" className='flex center my-auto bg-none bg-transparent border-none px-4 outline-none rounded-lg focus:outline-none full lg:w-full grow' placeholder='Enter your email' />
              <button className='bg-blakk hover:bg-primary text-white py-3 px-6 transition' type='submit'>
                Subscribe
              </button>
            </form>

          </div>
        </div>

      </div>

      <div className='border-y relative flex flex-col lg:flex-row justify-evenly items-center w-full lg:max-w-7xl mt-6 lg:pb-4 pb-16'>
        <p className='whitespace-nowrap lg:w-1/2 w-full relative text-center lg:text-left lg:pl-10 fit mx-auto md:opacity-70 p-6 md:hover:opacity-100 text-sm  text-blakk'>© Copyright 2024, ABS2024 #YoonWi</p>
        <div className='socialNetworks lg:w-1/2 w-full lg:start center lg:pl-10 relative flex gap-2 self-center !text-black '>
          {social?.map((item, index) => (
            <button
              key={item.icon}
              onClick={() => openInNewTab(`https://${item.link}${item.icon}`)}
              className={`group gap-2 min-h-[40px] aspect-square center overflow-hidden rounded-full hover:bg-gray-100/80
            `}>
              <i className={`ri-${item.title.replaceAll(' ', '')}-fill flex center mx-auto rounded-full p-3 w-10 h-10 !aspect-square !text-[1.4em] z-[3] opacity-70 group-hover:opacity-100 ${allTransitions}`} />
            </button>
          ))}
        </div>
      </div>



    </footer>
  )
}

export default Footer