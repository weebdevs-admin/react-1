import React, { useState } from 'react'
import './Header.scss'
import moon from './../assets/image/moon.svg'
import instagram from './../assets/image/instagram.svg'
import telegram from './../assets/image/telegram.svg'
import linkedin from './../assets/image/linkedin.svg'

function Header() {
  const [dark, setDark]= useState(true)
  const handler = ()=>{
    setDark(!dark)
  }
  return (
    
    <div className={dark?'Header bglight':'Header bgdark'}>
        <nav className={dark?'navbar container bglight':'navbar container NavbarShadow bgdark'}>
          <ul>
            <li><a className={dark?'item dark': 'item light'} href="/">main</a></li>
            <li><a className={dark?'item dark': 'item light'} href="/">abaut me</a></li>
            <li><a className={dark?'item dark': 'item light'} href="/">help</a></li>
            <li><a className={dark?'item dark': 'item light'} href="/">contact us</a></li>
            <li><img onClick={handler} src={moon} alt="" /></li>
            <li><h1 className={dark? " dark":" NavbarLogo"}>WeeB.Dev</h1></li>
          </ul>
        </nav>
        <div className="abaut">
          <ul className="abaut__list container">
            <li className="abaut__item">
              <h2 className={dark?'abaut__title ':'abaut__title NavbarLogo'}>WeeB DevolopmeNT</h2>
              <p className={dark?'abaut__desc':'abaut__desc NavbarLogo'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptatem architecto molestiae voluptate at ullam laudantium blanditiis consequatur hic nostrum? Itaque omnis est aperiam facilis provident, atque dolorem quas. Quibusdam.</p><br />
              <button className="abaut__btn">contact us</button>
            </li>
            <li className={dark?'abaut__item2 ':'abaut__item2 NavbarShadow'}></li>
          </ul>
        </div>
        <ul className="icon">
          <li><a href="https://instagram.com/weeb.dev"><img src={instagram} alt="" /></a></li>
          <li><a href="https://www.linkedin.com/in/weebdev-weeb-dev-73928a25b/"><img src={linkedin} alt="" /></a></li>
          <li><a href="https://t.me/weebuz"><img src={telegram} alt="" /></a></li>
        </ul>
    </div>
  )
}

export default Header