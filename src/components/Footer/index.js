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

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/"><img href="../../images/whatss.png"/>+351 999 999 999 (Consultar taxa de entrega)</SocialLogo>
                        <SocialIcons>
                            <SocialIconLink href="https://www.facebook.com/domorropizzariacervejaria/" target="_blank" arial-label="Facebook" rel="nooper noreferrer">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" arial-label="Instagram" rel="nooper noreferrer">
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
