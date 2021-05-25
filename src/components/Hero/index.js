import React from 'react';
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

const Hero = () => {
    return (
       <HeroContainer>
           <Navbar/>
           <Sidebar />
           <HeroContent>
               <HeroItems>
                   <HeroH1>Pizzaria 🍕 e Cervejaria 🍺</HeroH1>
                   <HeroP>A melhor pizza de todos os tempos</HeroP>
                   <HeroBtn>Faça a encomenda</HeroBtn>
               </HeroItems>
           </HeroContent>
       </HeroContainer>
    );
};

export default Hero;
