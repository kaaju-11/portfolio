import React from 'react'
import {AiOutlineHome} from "react-icons/ai"
import {MdOutlineEventNote, MdOutlinePermContactCalendar} from "react-icons/md"
import {FaProjectDiagram} from "react-icons/fa"
import {RiContactsFill} from "react-icons/ri"
import {Header, Unorderli, Listitems } from 'style/Navbar'

const Navbar = () => {
  return (
    <Header>
    <Unorderli>
      <Listitems><AiOutlineHome /><a href="#">Home</a></Listitems>
      <Listitems><MdOutlineEventNote /><a href="#">About</a></Listitems>
      <Listitems><FaProjectDiagram /><a href="#">Projects</a></Listitems>
      <Listitems><MdOutlinePermContactCalendar /><a href="#">Education</a></Listitems>
      <Listitems><RiContactsFill /><a href="#">Contact</a></Listitems>
      {/* <Listitems><a href="#">Home</a></Listitems> */}
    </Unorderli> 
    </Header>
  )
}

export default Navbar;