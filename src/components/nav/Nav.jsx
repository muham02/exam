import React from 'react'
import h from './Nav.module.scss'
import headerImgOne from '../../images/headerImg1.png'
import headerImgTwo from '../../images/headerImg2.png'
import headerImgThree from '../../images/headerImg3.png'
import { NavLink } from 'react-router-dom'


const Nav = () => {
  return (
   <nav className={h.header__nav}>
   <div className={h.container}>
  <div className={h.header__navParent}>
 <div className={h.selectParent}>
 <select  id="" className={h.header__select}>
        <option value="" className={h.header__selectOption}>
           EN
        </option>
        <option value="" className={h.header__selectOption}>
            UZB
            </option>
    </select>
 </div>
    <div className={h.header__listParent}>
  <ul className={h.header__list}>
    <img src={headerImgOne} alt="" className={h.header__listImg} />
    <img src={headerImgTwo} alt="" className={h.header__listImg} />
   <NavLink to="/korzinka"> <img src={headerImgThree} alt="" className={h.header__listImg} /></NavLink>
  </ul>
  </div>
    </div>
   </div>
   </nav>
  )
}

export default Nav