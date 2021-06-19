import React from 'react';
import { 
    FaFacebook, 
    FaInstagram, 
    FaLinkedin, 
    FaTwitter, 
    FaYoutube 
} from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink
} from './FooterElements';
import whatssapp from '../../images/whatss.png'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/"><img className="App-logo" alt="" role="img" src={whatssapp}/>+351 999 999 999 (Consultar taxa de entrega)</SocialLogo>
                        <SocialIcons>
                            <SocialIconLink href="https://www.facebook.com/domorropizzariacervejaria/" target="_blank" arial-label="Facebook" rel="nooper noreferrer">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href="https://www.instagram.com/domorropizzariacervejaria/" target="_blank" arial-label="Instagram" rel="nooper noreferrer">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" arial-label="Youtube" rel="nooper noreferrer">
                                <FaYoutube/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" arial-label="Twitter" rel="nooper noreferrer">
                                <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" arial-label="Linkedin" rel="nooper noreferrer">
                                <FaLinkedin/>
                            </SocialIconLink>
                        </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>
    )
}

export default Footer;
