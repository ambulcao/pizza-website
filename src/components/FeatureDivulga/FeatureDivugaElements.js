import styled from 'styled-components';
import FeaturePic from '../../images/BannerPizza.jpg';

export const FeatureContainer = styled.div`
   /**  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), 
    url(${FeaturePic}); */
    background-image: url(${FeaturePic});
    height: 100vh;
    max-height: 500px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-color: #150f0f;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
    padding: 0 1rem;

    h1 {
        font-size: clamp(3rem, 5vw, 5rem);
    }

    p {
        margin-bottom: 1rem;
        font-size: clamp(1rem, 3vw, 2rem);
    }
`