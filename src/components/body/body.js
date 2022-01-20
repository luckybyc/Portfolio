import React from 'react'
import { useState } from 'react'
import { aboutInfo} from '../common/data'
import SectionInfo from '../common/sectionInfo'
import Footer from '../footer/footer'
import SideMenu from '../header/sideMenu'
import TopNav from '../header/TopNav'
import ContactForm from '../sections/contact/contactForm'
import Home from '../sections/home/home'
import Services from '../sections/services/services'
import SkillsInfo from '../sections/skills/skillsinfo'
import Projects from '../sections/projects/projects'


const BodyContainer = () => {
    const [isOpen,SetIsOpen]=useState(false);
    const toggle=()=>{
        SetIsOpen(!isOpen);
    }
    return (
    <>
      <SideMenu  toggle={toggle} isOpen={isOpen}/>
      <TopNav toggle={toggle}/>
      <Home/>
      <SectionInfo {...aboutInfo}/>
      <SkillsInfo /> 
      <Services/>
      <Projects/>
      <ContactForm/>
      <Footer/>
    </>
    )
}

export default BodyContainer
