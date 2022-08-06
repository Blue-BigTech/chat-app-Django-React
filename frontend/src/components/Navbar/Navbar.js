import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import prof from '../../assets/img/prof.jpg'

import {IoMdLogOut} from 'react-icons/io'


import Switch from "react-switch";


import {
    NavbarWraper,
    NavSearchForm,
    SearchInp,
    Submit,
    NavEndSection,
    NavLogout,
    HambBurgerWrap,
    HambBurgerLine,
    ModeWrap,
} from '../'
import { logout } from '../../redux/auth/actions';



export default function Navbar({toggleDash, setDarkMode, darkMode}) {

    // redux
    const dispatch = useDispatch()
    const msgRef = useRef(null)
    const notRef = useRef(null)
    

   
    

    return (
        <>
            <NavbarWraper>
                <HambBurgerWrap onClick={toggleDash}>
                    <HambBurgerLine />
                    <HambBurgerLine />
                    <HambBurgerLine />
                </HambBurgerWrap>
                <NavSearchForm>
                    {/* <SearchInp placeholder="Search" />
                    <Submit>Search</Submit> */}
                </NavSearchForm>
                <NavEndSection>
                    <ModeWrap>
                        <Switch onChange={() => setDarkMode(!darkMode)} checked={darkMode} 
                        onColor="#2f343a"
                        onHandleColor="#ffffff"
                        handleDiameter={25}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        height={25}
                        width={45}
                        />
                    </ModeWrap>
                    
                    
                    <NavLogout onClick={() => dispatch(logout())}>
                        <IoMdLogOut/>
                    </NavLogout>

                </NavEndSection>
            </NavbarWraper>
        </>
    )
}
