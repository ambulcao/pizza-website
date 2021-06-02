import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
    return (
        <FeatureContainer>
            <h1>Pizza do dia</h1>
            <p>Molho de trufas Alfredo coberto com pó de ouro de 24 quilates.</p>
            <FeatureButton>Peça Agora</FeatureButton>
        </FeatureContainer>
    )
}

export default Feature
