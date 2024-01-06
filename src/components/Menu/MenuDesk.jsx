import React from 'react'
import { headers } from '../../utils/data'
import { allTransitions } from '../../utils/style'
import MenuComponent from './MenuComponent'


const MenuDesk = ({ handleMenu, menu}) => {


  return (

    <div id='menuDESK' className={`bg-blakk ' } ${allTransitions}`}>
    
    <div className='flexV center justify-between gap-4 my-auto'>
      {headers.map((item, index) => (
        <MenuComponent key={index} item={item} />
        ))
      }
    </div>
      
    </div>
  )
}

export default MenuDesk