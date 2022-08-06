import React from "react";
import {BsInbox} from 'react-icons/bs'
import {RiUserReceivedLine, RiUserSharedLine} from 'react-icons/ri'
import {AiOutlineForm} from 'react-icons/ai'
import {FaRegTrashAlt} from 'react-icons/fa'

import logo from '../../assets/img/logo.png'


import { 
    DashboardWraper, 
    Logo, 
    LogoText, 
    DashLink, 
    LinkIcon,
    LinkText,
    DashboardLogo,
} from "../";


export default function Dashboard({show, toggleDashOnSmallDevice}) {
    const dashLinks = [
        {to:"/", name: 'Inbox', icon: BsInbox},
        {to:"/receive/", name: 'Receive', icon:RiUserReceivedLine},
        {to:"/sent/", name: 'Sent', icon:RiUserSharedLine},
        {to:"/compose/", name: 'Compose', icon:AiOutlineForm},
        {to:"/trash/", name: 'Trash', icon:FaRegTrashAlt},
        
    ]

    
  return (
    <>
      <DashboardWraper show={show}>
            <DashboardLogo exact to="/">
                <Logo  src={logo}/>
                <LogoText>
                    Test Project
                </LogoText>
            </DashboardLogo>
            {
                dashLinks.map((link, i) => {
                    return (
                        <DashLink  key={i} onClick={() => toggleDashOnSmallDevice()} activeClassName="active"  to={link.to} exact>
                            <LinkIcon>
                                <link.icon/>
                            </LinkIcon>
                            <LinkText>
                                {link.name}
                            </LinkText>
                        </DashLink>
                    )
                })
            }

      </DashboardWraper>
    </>
  );
}
