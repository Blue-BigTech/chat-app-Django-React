import styled, {keyframes} from 'styled-components'
import { Flex } from '../../globalStyles'

export const AlertAnimation = keyframes`
    from {
        transform: translateY(-100%);
    }
    to {
        transform: translateY(0);
    }

`


export const AlertCont = styled.div`
    position: fixed;
    ${Flex}
    
    top: 30px;
    left: 0;
    right: 0;
    min-width: 55vw;
    margin: auto;
    max-width: fit-content;

    flex-direction: column;

    z-index: 1000000;

`

export const AlertCompo = styled.div`
    ${Flex}
    padding: 0px 32px;

    background: ${({alertType}) => alertType=='success'? 'forestgreen':alertType=='danger'?'#dc3545':'var(--object-color)'};
    color: var(--secendory-text-color);
    justify-content: space-between;
    
    width: 100%;
    min-height: 75px;
    margin: 11px 0px;
    animation: ${AlertAnimation} .4s linear 1;
`

export const AlertText = styled.p`
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 1px;
`

export const AlertClose = styled.div`
    background: var(--secendory-color);
    margin: 0px 5px;
    border-radius: 60%;
    font-size: 20px;
    cursor: pointer;
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    color: var(--secendory-text-color);
    &:hover{
        background: var(--secendory-hover-color);
    }
    &:active{
        transform: var(--for-active-click);
    }

`

