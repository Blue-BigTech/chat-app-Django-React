// import React, { useEffect } from 'react'
import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

export default function GuestRoute({children}) {
    const auth = useSelector(state => state.auth)

    if(! auth.isAuthenticated){            
        return (
            <>
            {children}
            </>
        )
    } 
    else{
        return(
            <>
            {
                    React.Children.map(children, child => (
                        <div>
                           <Route exact path={child.props.path}>
                               <Redirect to="/" />
                           </Route>
                        </div>
                     ))
            }
            </>
        )
    }
}