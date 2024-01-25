import React from 'react'
import { Link } from 'react-router-dom'

const Contact = ({
  title, contact, action

}) => {

  return (
    <Link to={action} className='flexV md:flex-row  items-start text-left gap-3 md:gap-2 py-1 relative w-full px-4 '>
      <h4 className='capitalize font-bold w-1/4 max-w-[80px] leading-[180%]'>{title || "2000"}</h4>
      <span className='-translate-x-[150%] hidden md:inline'>:</span>
      <h4 className='h4 w-full -translate-y-1 md:translate-y-[0px] leading-[180%] pr-14= lg:pr-4'>{contact || "2000"}</h4>
    </Link>
  )
}

export default Contact