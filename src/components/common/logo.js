import React from 'react'
import { NavLogo,LogoSpan } from '../StyledElements/logo.StyledElements'

const Logo = ({toggleHome}) => {
    return (
        <>
          <NavLogo to='/' onClick={toggleHome}>lu<LogoSpan>sajo.</LogoSpan></NavLogo>   
        </>
    )
}

export default Logo
