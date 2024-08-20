// import React, { useState } from 'react'
// import {AiOutlineHome} from "react-icons/ai"
// import {MdOutlineEventNote, MdOutlinePermContactCalendar} from "react-icons/md"
// import {FaProjectDiagram} from "react-icons/fa"
// import {RiContactsFill} from "react-icons/ri"
// import {Header, Unorderli, Listitems } from 'style/Navbar'

// const Navbar = () => {
//   const [activeItem, setActiveItem] = useState('Home');
//   return (
//     <Header>
//               <div className="collapse navbar-collapse" id="navbarSupportedContent">
//               <nav className="navbar fixed-top navbar-toggleable-md navbar-inverse bg-primary" id="navbar-main">
//     <Unorderli>

//       <Listitems isActive={activeItem === 'Home'}
//           onClick={() => setActiveItem('Home')}><AiOutlineHome /><a href="#">Home</a></Listitems>
//       <Listitems  isActive={activeItem === 'About'}
//           onClick={() => setActiveItem('About')}><MdOutlineEventNote /><a href="#">About</a></Listitems>
//       <Listitems isActive={activeItem === 'Projects'}
//           onClick={() => setActiveItem('Projects')}><FaProjectDiagram /><a href="#">Projects</a></Listitems>
//       <Listitems  isActive={activeItem === 'Education'}
//           onClick={() => setActiveItem('Education')}><MdOutlinePermContactCalendar /><a href="#">Education</a></Listitems>
//       <Listitems  isActive={activeItem === 'Contact'}
//           onClick={() => setActiveItem('Contact')}><RiContactsFill /><a href="#">Contact</a></Listitems>

//     </Unorderli>
//     </nav>
//     </div>
//     </Header>
//   )
// }

// export default Navbar;


import React, { useState, useEffect } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { FaProjectDiagram } from 'react-icons/fa';
import { MdOutlineEventNote, MdOutlinePermContactCalendar } from 'react-icons/md';
import { RiContactsFill } from 'react-icons/ri';
import { HomeContent, Listitems, LogoWrapper, Navbar, ScrollUpBtn, Section, Unorderli } from 'style/Navbar';

const NavbarComponent: React.FC = () => {
  const [isSticky, setSticky] = useState(false);
  const [scrollUpBtnVisible, setScrollUpBtnVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;

    setSticky(scrollY > 20);
    setScrollUpBtnVisible(scrollY > 500);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar className={isSticky ? 'sticky' : ''}>
        <div className="max-width">
          <LogoWrapper>
              <a href="/">@KAJAL</a>
            </LogoWrapper>
          <Unorderli>
            <Listitems>
              <AiOutlineHome />
              <a href="/">Home</a>
            </Listitems>
            <Listitems>
              <MdOutlineEventNote />
              <a href="#">About</a>
            </Listitems>
            <Listitems>
              <RiContactsFill />
              <a href="#">Skills</a>
            </Listitems>
            <Listitems>
              <FaProjectDiagram />
              <a href="#">Projects</a>
            </Listitems>
            <Listitems>
              <MdOutlinePermContactCalendar />
              <a href="/Components/Education">Education</a>
            </Listitems>
            {/* <Listitems>
              <RiContactsFill />
              <a href="#">Contact</a>
            </Listitems> */}
          </Unorderli>
        
        </div>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;


