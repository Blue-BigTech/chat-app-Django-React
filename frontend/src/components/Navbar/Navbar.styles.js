import styled from 'styled-components'
import {DashLink} from '../'


export const NavbarWraper = styled.header`
    padding: 0px 30px 0px 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    box-shadow: 0px 1px 7px 0px #ffffff6b;
`

export const NavSearchForm = styled.form`
    margin-right: auto;

`

export const SearchInp = styled.input`
    padding: 10px 10px;
    border-radius: 4px;
    background: var(--secendory-color);
    border: none;
    outline: none;
    color: var(--secendory-text-color);
`

export const Submit = styled.button`
    padding: 9px 7px;
    color: var(--primary-text-color);
    background: var(--primary-color);
    border: none;
    border-radius: 4px;
    margin-left: 5px;
    cursor: pointer;
    transition: all .4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    &:hover{
        background: var(--primary-hover-color);
    }
`

export const NavEndSection = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;


`



export const NavLogout = styled.div`
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


export const HambBurgerWrap = styled.div`
    margin-right: 25px;
    cursor: pointer;
    & > div{
        background: var(--secendory-text-color);
    }
    &:hover > div{
        background: var(--secendory-text-color);
    }
    &:active{
        transform: var(--for-active-click);
    }
`

export const HambBurgerLine = styled.div`
    width: 26px;
    height: 3px;
    background: white;
    margin: 6px 0px;
    transition: all .4s cubic-bezier(0.25, 0.46, 0.45, 0.94);


`



export const ModeWrap = styled.div`
    margin-right: 20px;
    position: relative;
    top: 3.69px;
    margin-right: 12px;

`