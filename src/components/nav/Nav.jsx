import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {BiUserCircle} from 'react-icons/bi'
import {MdComputer} from 'react-icons/md'
import {MdConnectWithoutContact} from 'react-icons/md'
import {BsPersonWorkspace} from 'react-icons/bs'

export const Nav = () => {
  return (
    <nav>
      <a href="#" ><AiFillHome/></a>
      <a href="#about" ><BiUserCircle/></a>
      <a href="#experience" > <BsPersonWorkspace/></a>
      <a href="#portfolio" > <MdComputer/></a>
    </nav>
  )
}

export default Nav
