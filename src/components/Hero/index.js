import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { 
    HeroContainer, 
    HeroContent, 
    HeroItems,
    HeroH1,
    HeroP,
    Herop,
    HeroBtn 
} from './HeroElements';

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
    <>
       <HeroContainer>
           <Navbar toggle={toggle}/>
           <Sidebar isOpen={isOpen} toggle={toggle}/>
           <HeroContent>
               <HeroItems>
                   <HeroH1>Pizzaria e Cervejaria</HeroH1>
                   <HeroP>A melhor pizza de todos os tempos</HeroP>
                   <Herop>Bordas recheadas com cheddar ou mussarela acresce + 4 € no valor da Pizza</Herop>
                   <HeroBtn>Faça a encomenda</HeroBtn>
               </HeroItems>
           </HeroContent>
       </HeroContainer>
    </>
    );
};

export default Hero;