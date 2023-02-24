import React from 'react'
import './Footer.scss'

function Footer({count}) {
  return (
    <div className='Footer'>
        <h1>
        {count}
        </h1>
    </div>
  )
}

export default Footer