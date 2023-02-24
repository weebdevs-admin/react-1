import React from 'react'
import './Header.scss'

function Header({data, count}) {
  return (
    <div className='Header'>
        <button className='btn' onClick={()=>data(count+1)}>+</button>
        <button className='btn' onClick={()=>data(count>0?count-1: 0)}>-</button>
    </div>
  )
}

export default Header