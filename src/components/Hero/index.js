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

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
       <HeroContainer>
           <Navbar toggle={toggle}/>
           <Sidebar isOpen={isOpen} toggle={toggle}/>
           <HeroContent>
               <HeroItems>
                   
                        <iframe src="https://lottiefiles.com/iframe/63703-pizza"></iframe>
                    
           
                   <HeroH1>Pizzaria 🍕 e Choperia 🍺</HeroH1>
                   <HeroP>A melhor pizza de todos os tempos</HeroP>
                   <HeroBtn>Faça a encomenda</HeroBtn>
               </HeroItems>
           </HeroContent>
       </HeroContainer>
    );
};

export default Hero;
