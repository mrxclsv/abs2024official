import React from 'react'
import { allTransitions } from '../utils/style'

const Button = ({ label, type, }) => {
  return (
    <button className={`px-4 py-2 rounded-sm cursor-pointer ${allTransitions}
    ${type === "primary" && 'bg-blakk text-white hover:bg-primary hover:text-blakk'}
    `}>
      {label}
      
    </button>
  )
}

export default Button