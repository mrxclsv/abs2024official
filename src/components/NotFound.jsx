import React from 'react'
import { GoTo } from '../utils/components'

const NotFound = () => {
  return (
    <div className='flexV full min-h-[60vh] center relative bg-white text-blakk pt-[100px]'>
      
      <h2 className='flexV center'>Error 404 :) 
      <span className='text-sm font-normal mt-4'>Such page does not exist on ABS2024.com </span>
      </h2>

      <GoTo />

    </div>
  )
}

export default NotFound