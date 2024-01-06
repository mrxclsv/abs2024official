import React from 'react'
import { NavLink } from 'react-router-dom'

const MenuComponent = ({item}, setMenu) => {
  return (
    <NavLink to={`${item.url}`} className='flexV w-full mx-4 py-3 md:py-5 rounded' onClick={() => setMenu(false)} >
      {/* <p className='capitalize'>{item.name}</p> */}
      {/* <i className={`ri-${item.icon}-line item.icon `} /> */}

    </NavLink>
  )
}

export default MenuComponent