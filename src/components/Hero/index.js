import React from 'react';
import Navbar from '../Navbar';
import { 
    HeroContainer, 
    HeroContent, 
    HeroItems,
    HeroH1,
    HeroP,
    HeroBtn 
} from './HeroElements';

const Hero = () => {
    return (
       <HeroContainer>
           <Navbar/>
           <HeroContent>
               <HeroItems>
                   <HeroH1>Do Morro - Pizzaria e Cervejaria</HeroH1>
                   <HeroP>A melhor pizza de todos os tempos</HeroP>
                   <HeroBtn>Faça a encomenda</HeroBtn>
               </HeroItems>
           </HeroContent>
       </HeroContainer>
    );
};

export default Hero;
