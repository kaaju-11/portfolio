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
import { Link } from 'react-router-dom';
import { FaProjectDiagram } from 'react-icons/fa';
import { MdOutlineEventNote, MdOutlinePermContactCalendar } from 'react-icons/md';
import { RiContactsFill } from 'react-icons/ri';
import { Listitems, LogoWrapper, Navbar, Unorderli } from 'style/Navbar';
import { FaArrowUp } from 'react-icons/fa'; // Add an icon for the scroll-up button

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
            <Link to="/">@KAJAL</Link>
          </LogoWrapper>
          <Unorderli>
            {/* <Listitems>
              <AiOutlineHome />
              <a href="#home">Home</a>
            </Listitems> */}
            <Listitems>
              <MdOutlineEventNote />
              <a href="#home">About</a>
            </Listitems>
            <Listitems>
              <RiContactsFill />
              <a href="#skills">Skills</a>
            </Listitems>
            <Listitems>
              <FaProjectDiagram />
              <a href="#contact">Projects</a>
            </Listitems>
            <Listitems>
              <MdOutlinePermContactCalendar />
              <a href="#education">Education</a>
            </Listitems>
            {/* <Listitems>
              <RiContactsFill />
              <a href="#contact">Contact</a>
            </Listitems> */}
          </Unorderli>
        </div>
      </Navbar>

      {scrollUpBtnVisible && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '50px',
            right: '30px',
            backgroundColor: '#964fdd',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            padding: '10px',
            cursor: 'pointer',
            zIndex: 1000,
          }}
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default NavbarComponent;
