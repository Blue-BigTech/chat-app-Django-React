import { 
    REFRESH_TOKEN_SUCCESS,
    LOGIN_SUCCESS, 
    LOGIN_FAILED, 
    USER_LOADED_SUCCESS, 
    USER_LOADED_FAIL, 
    AUTHENTICATED_SUCCESS, 
    AUTHENTICATED_FAIL, 
    LOGOUT 
} from './types'
import axios from 'axios'
import REACT_APP_API_URL from '../../testurl'
import alert from '../alert/actions'
import { hideLoader, showLoader } from '../loader/actions'

export const refreshTokenSuccess = (access) => {
    return {
        type: REFRESH_TOKEN_SUCCESS,
        payload: {
            access
        }
    }
}


export const authenticatedSuccess = () => {
    return {
        type: AUTHENTICATED_SUCCESS,

    }
}

export const authenticatedFail = () => {
    return {
        type: AUTHENTICATED_FAIL,

    }
}

export const loginSuccess = (access, refresh) => {

    return {
        type: LOGIN_SUCCESS,
        payload: {
            access,
            refresh
        }
    }
}

export const loginFailed = (error) => {

    return {
        type: LOGIN_FAILED,
        payload: {error}
    }
}

export const userLoadedSuccess = (user) => {
    return {
        type: USER_LOADED_SUCCESS,
        payload: {user}
    }
}

export const userLoadedFailed = (error) => {
    return {
        type: USER_LOADED_FAIL,
        payload: {error}
    }
}
export const logOut = () => {

    return {
        type: LOGOUT,
    }
}





export const logout = () => {
    return dispatch => {
        dispatch(showLoader())
        dispatch(logOut())
        dispatch(alert('Logout Successfull', 'success'))
        dispatch(hideLoader())
        
    }
}

export const refreshToken = () => {
    return dispatch => {
        const refresh = localStorage.getItem('refresh')
        if(refresh != null){
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }; 
            const body = JSON.stringify({refresh: refresh}) 

            axios.post(`${REACT_APP_API_URL}/auth/jwt/refresh/`, body, config)
            .then((response) => {
                if(response.status === 200){
                    dispatch(refreshTokenSuccess(response.data.access))
                    dispatch(checkAuthenticated())

                } else {
                    dispatch(authenticatedFail())
                }
            }).catch(() => {
                dispatch(authenticatedFail())
            })
        }
    }
}

export const checkAuthenticated = () =>{
    return dispatch => {
        const access = localStorage.getItem('access')
        if(access){
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }; 
            const body = JSON.stringify({token: access}) 

            axios.post(`${REACT_APP_API_URL}/auth/jwt/verify/`, body, config)
            .then((response) => {
                const code = response.data.code
                if(code != 'token_not_valid'){
                    dispatch(authenticatedSuccess())

                } else {
                    dispatch(refreshToken())
                }
            }).catch(() => {
                dispatch(refreshToken())
            })

        } 
        else {
            dispatch(refreshToken())
        }
    }
}



export const loadUser = () =>{
    return (dispatch) => {
        if(localStorage.getItem('access')){

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `JWT ${localStorage.getItem('access')}`,
                    'Accept': 'application/json'
                }
            }; 
            axios.get(`${REACT_APP_API_URL}/auth/users/me/`, config)
            .then(response => {
                dispatch(userLoadedSuccess(response.data))
            }).catch(error => {
                dispatch(userLoadedFailed('Failed to load user'))

            })
        } else {
            dispatch(userLoadedFailed('Login Failed'))

        }
    }
}


export const login = (email, password, remember) => {
    return (dispatch) => {
        dispatch(showLoader())
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const body = JSON.stringify({email, password})
        axios.post(`${REACT_APP_API_URL}/auth/jwt/create/`, body, config)
        .then((response) => {
            const access = response.data.access
            const refresh =  remember? response.data.refresh : null
            dispatch(loginSuccess(access, refresh))
            dispatch(loadUser())
            dispatch(alert('Successfully Logged In', 'success'))
            dispatch(hideLoader())

        }).catch((error) => {
            dispatch(loginFailed('Login Failed'))
            dispatch(alert('Log In Failed', 'danger'))
            dispatch(hideLoader())

        })

    }
}