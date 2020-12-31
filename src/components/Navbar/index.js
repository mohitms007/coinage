import React,{useState,useEffect} from 'react';
import {IconContext} from 'react-icons/lib'
import {FaBars} from 'react-icons/fa';
import{ animateScroll as scroll} from 'react-scroll'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements'


const Navbar = ({toggle}) => {

    const [scrollNav,setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY > 80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll',changeNav)
    },[])
    const toggleHome = ()=>{
        scroll.scrollToTop();
    }


    return ( <> 
    <IconContext.Provider value={{color: '#fff'}}>
    <Nav scrollNav={scrollNav}>
        <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome}>
                Coinage
            </NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars/>
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks smooth={true} duration={500} spy={true} exact='true'  to="about">About</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks smooth={true} duration={500} spy={true} exact='true' to="discover">Discover</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks smooth={true} duration={500} spy={true} exact='true' to="services">Services</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks smooth={true} duration={500} spy={true} exact='true' to="signup">Sign Up</NavLinks>
                </NavItem>
            </NavMenu>
            <NavBtn>
                <NavBtnLink smooth={true} duration={500} spy={true} exact='true'  to="/signin">Sign In </NavBtnLink>
            </NavBtn>
        </NavbarContainer>
    </Nav></IconContext.Provider></>
    )
}

export default Navbar;