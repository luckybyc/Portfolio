import React from 'react'
import {SidebtnWrap,SidebarScroll,SidebarContainer,SidebarMenu,Icon,SidebarLink,SidebarWrapper,CloseIcon} from '../StyledElements/sideMenu.StyledElements'

const SideMenu = ({toggle,isOpen}) => {
    return (
        <>
        <SidebarContainer isOpen={isOpen}   onClick={toggle}>
                <Icon >
                    <CloseIcon/>
 
                </Icon>

            <SidebarWrapper>
              
                <SidebarMenu >
                
                      <SidebarLink to ="About" onClick={toggle}>About</SidebarLink>
                      <SidebarLink to ="Skills" onClick={toggle}>Skills</SidebarLink>
                      <SidebarLink to ="Services" onClick={toggle}>Services</SidebarLink>
                      <SidebarLink to ="Projects" onClick={toggle}>Projects</SidebarLink>
                      <SidebarLink to ="Contact" onClick={toggle}>Contact</SidebarLink>  
                      <SidebtnWrap>  
                            <SidebarScroll>Hire Me</SidebarScroll>
                       </SidebtnWrap>
                </SidebarMenu>
                       
            </SidebarWrapper>
        </SidebarContainer>
            
        </>
    )
}

export default SideMenu
