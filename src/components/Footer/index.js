import React from 'react'
import {FaLinkedin,FaFacebook,FaTwitter,FaYoutube,FaInstagram} from 'react-icons/fa'
import {
    FooterLink,
    FooterLinksConatiner,
    FooterLinkItems,
    FooterWrap,
    FooterLinkTitle,
    FooterLinksWrapper,
    FooterContainer,
    SocialIconLink,
    SocialLogo,
    SocialMedia,
    SocialMediaWrap,
    WebsiteRights,
    SocialIcons
} from './FooterElements'
const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksConatiner>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us
                            </FooterLinkTitle>
                            <FooterLink to="/signin">
                                How it works
                            </FooterLink>
                            <FooterLink to="/signin">
                                Testimonials
                            </FooterLink>
                            <FooterLink to="/signin">
                                Careers
                            </FooterLink>
                            <FooterLink to="/signin">
                                Investors
                            </FooterLink>
                            <FooterLink to="/signin">Terms of Services.
                            </FooterLink>

                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us
                            </FooterLinkTitle>
                            <FooterLink to="/signin">
                                How it works
                            </FooterLink>
                            <FooterLink to="/signin">
                                Testimonials
                            </FooterLink>
                            <FooterLink to="/signin">
                                Careers
                            </FooterLink>
                            <FooterLink to="/signin">
                                Investors
                            </FooterLink>
                            <FooterLink to="/signin">Terms of Services.
                            </FooterLink>

                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us
                            </FooterLinkTitle>
                            <FooterLink to="/signin">
                                How it works
                            </FooterLink>
                            <FooterLink to="/signin">
                                Testimonials
                            </FooterLink>
                            <FooterLink to="/signin">
                                Careers
                            </FooterLink>
                            <FooterLink to="/signin">
                                Investors
                            </FooterLink>
                            <FooterLink to="/signin">Terms of Services.
                            </FooterLink>

                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us
                            </FooterLinkTitle>
                            <FooterLink to="/signin">
                                How it works
                            </FooterLink>
                            <FooterLink to="/signin">
                                Testimonials
                            </FooterLink>
                            <FooterLink to="/signin">
                                Careers
                            </FooterLink>
                            <FooterLink to="/signin">
                                Investors
                            </FooterLink>
                            <FooterLink to="/signin">Terms of Services.
                            </FooterLink>

                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksConatiner>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">
                            Coinage
                        </SocialLogo>
                        <WebsiteRights>Coinage © 2020 All rights reserved</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                <FaYoutube/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
