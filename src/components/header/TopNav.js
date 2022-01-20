import React, { useEffect, useState } from "react";
import {
  Nav,
  NavBtn,
  NavBtnLink,
  NavbarContainer,
  MobileIcon,
  NavItem,
  NavMenu,
  NavLinks,
} from "../StyledElements/NavMenu.StyledElements";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import Logo from "../common/logo";

const TopNav = ({ toggle }) => {
  const [scrolling, setScrolling] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrolling={scrolling}>
        <NavbarContainer>
          <Logo toggleHome={toggleHome} />
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="About"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
               to="Skills"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80} >
                  Skills
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks 
              to="Services"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              >Services
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks 
              to="Projects"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}>
                Projects
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
               to="Contact" 
               smooth={true}
               duration={500}
               spy={true}
               exact="true"
               offset={-80}>
                Contact
              </NavLinks>
            </NavItem>
            <NavBtn>
              <NavBtnLink to="/hireme" >
                Hire Me
              </NavBtnLink>
            </NavBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default TopNav;
