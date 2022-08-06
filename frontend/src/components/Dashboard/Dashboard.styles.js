import styled from "styled-components";
import {NavLink} from "react-router-dom"
export const DashboardWraper = styled.div`
    width: 255px;
    min-height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    background-color: var(--object-bg-color);
    overflow-y: scroll;
    height: 100vh;
    transition: var(--main-transition);
    transform: translateX(${({show}) => show? '0': '-100%'});
    position: fixed;
    z-index: 500;

    
`



export const DashLink = styled(NavLink)`
    /* border: 2px solid red; */
    width: 95%;
    height: 50px;
    min-height: 50px;
    margin: 5px 0px;
    padding: 0px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--secendory-color);
    border-radius: 5px;
    transition: var(--main-transition);
    position: relative;
    z-index: 1;



    &:hover::after{
        background: var(--secendory-hover-color);
        transform: scaleX(1);
        opacity: 1;
    }
    &:active{
        transform: var(--for-active-click);
    }
    &::after{
        opacity: .6;
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        transition: var(--main-transition);
        transform: scaleX(0);
        z-index: -2;

    }

    &.active{
        background: var(--primary-color);
        color: var(--primary-text-color) ;
    }
    &.active:hover::after{
        background: var(--primary-hover-color);
        transform: scaleX(1);
    }

`

export const DashboardLogo = styled(DashLink)`
    height: 70px;
    background: var(--object-bg-color) !important;
    color: var(--secendory-text-color);
    justify-content: space-between;
    padding: 0px 10px;
    &::after{
        content: none;
    }
    &.active{
        color: var(--secendory-text-color) ;
    }


`

export const Logo = styled.img`
    width: 25%;
    border-radius: 60%;

`

export const LogoText = styled.p`
    /* right: 30px; */
    font-size: 22px;
`





export const LinkIcon = styled.div`
    width: 18%;
    font-size: 24px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    z-index: 100;

`

export const LinkText = styled.div`
    width: 82%;
    font-size: 17px;
    font-weight: 500;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    z-index: 100;

`
