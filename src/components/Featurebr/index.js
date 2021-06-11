import React from 'react';
import { FeatureContainer } from './FeaturebrElements';
import FeaturePicBr from '../../images/fundobrasil.jpg';

const FeatureBr = () => {
    return (
        <FeatureContainer>
        <img src={`${FeaturePicBr}`} />
        </FeatureContainer>
    )
}

export default FeatureBr