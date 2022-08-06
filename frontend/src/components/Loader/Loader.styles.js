import styled, {keyframes} from 'styled-components'



const preloader =  keyframes`
    0%{
        opacity: 0;
        transform: translateX(100%); 
    }
    100%{
        opacity: 1;
        transform:translateX(0%); 
    }
`


const dotPreloader = keyframes`
    0%{
        transform: translateY(0px); 
        
        box-shadow: 0px 75px 20px 0px #0000005e;
    }
    50%{
        transform: translateY(25px); 
        box-shadow: 0px 25px 20px 0px #0000005e;

    }
    100%{
        transform: translateY(0px); 
        box-shadow: 0px 75px 20px 0px #0000005e;
    }
`

export const Preloader = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background: #ef2673;
    width: 100%;
    z-index: 2;
    animation: ${preloader} .4s  1 ;
    animation-timing-function: cubic-bezier(0.6, 0.1, 0.04, 0.93);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    flex-direction: column;
    height: 100vh;
    z-index: 4343434;
    backdrop-filter: blur(3px);
    background: #0000004f;

`

export const Dots = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 80px;
    width: 200px;
`

export const Dot = styled.div`
    background-color: var(--secendory-text-color);
    width: 20px;
    height: 20px;
    border-radius: 60px;
    animation: ${dotPreloader}  .8s linear  infinite  ;
    box-shadow: 0px 15px 5px 0px #0000005e;
    animation-delay: ${({dot}) => `.${dot}s`};

`