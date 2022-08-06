import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

export default function PrivateRoute({children}) {
    const auth = useSelector(state => state.auth)
   
    if(auth.isAuthenticated){            
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
                               <Redirect to="/login" />
                           </Route>
                        </div>
                     ))
            }
            </>
        )
    }
}