import React, { useState } from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {MdWorkOutline} from 'react-icons/md'
import {BiMessageSquareDetail } from 'react-icons/bi'



const Nav = () => {
  
  const[activnav, setActivNav] = useState('#')

  return (
    <nav>
    <a href='#' onClick={()=>setActivNav('#')} className={activnav === '#' ? 'active' : ''}><AiOutlineHome /></a>
    <a href='#about' onClick={()=>setActivNav('#about')} className={activnav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
    <a href='#experience' onClick={()=>setActivNav('#experience')} className={activnav === '#experience' ? 'active' : ''}><BiBook /></a>
    <a href='#portfolio' onClick={()=>setActivNav('#portfolio')} className={activnav === '#portfolio' ? 'active' : ''}><MdWorkOutline /></a>
    <a href='#contact' onClick={()=>setActivNav('#contact')} className={activnav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav