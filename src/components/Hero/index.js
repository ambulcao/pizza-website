import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { 
    HeroContainer, 
    HeroContent, 
    HeroItems,
    HeroH1,
    HeroP,
    HeroBtn 
} from './HeroElements';
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const {t, i18n} = useTranslation();

    return (
       <HeroContainer>
           <Navbar toggle={toggle}/>
           <Sidebar isOpen={isOpen} toggle={toggle}/>
           <HeroContent>
               <HeroItems>
                        <iframe src="https://lottiefiles.com/iframe/63703-pizza" frameborder="0" height="1000"name="ballswar" scrolling="no"></iframe>
                   <HeroH1>Pizzaria e Cervejaria</HeroH1>
                   <div className="greeting">{t('greeting 🇧🇷')}</div>
                   <HeroP>A melhor pizza de todos os tempos</HeroP>
                   <HeroBtn>Faça a encomenda</HeroBtn>
               </HeroItems>
           </HeroContent>
       </HeroContainer>
    );
};

export default Hero;