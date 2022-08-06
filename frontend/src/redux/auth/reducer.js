import { loginSuccess, loginFailed, userLoadedSuccess, userLoadedFailed } from './actions'
import { LOGIN_SUCCESS, LOGIN_FAILED, USER_LOADED_SUCCESS, USER_LOADED_FAIL, AUTHENTICATED_SUCCESS, AUTHENTICATED_FAIL, LOGOUT, REFRESH_TOKEN_SUCCESS } from './types'
const initialState = {
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    isAuthenticated: localStorage.getItem('isAuthenticated'),
    user: null,
}



const authReducer = (state=initialState, action) => {
    const {type, payload} = action
    
    switch (type) {
        case LOGIN_SUCCESS: 
            localStorage.setItem('access', payload.access)
            localStorage.setItem('refresh', payload.refresh)
            localStorage.setItem('isAuthenticated', true)
            return {
                ...state,
                access: payload.access,
                refresh: payload.refresh,
                isAuthenticated: true,

            }
            
        case LOGIN_FAILED:
            localStorage.removeItem('access')
            localStorage.removeItem('refresh')
            localStorage.removeItem('isAuthenticated')

            return {
                ...state,
                access: null,
                refresh: null,
                isAuthenticated: false,

            }
        case LOGOUT:

            localStorage.removeItem('access')
            localStorage.removeItem('refresh')
            localStorage.removeItem('isAuthenticated')
            return {
                ...state,
                access: null,
                refresh: null,
                isAuthenticated: false,

            }
        case USER_LOADED_SUCCESS:
            return {
                ...state,
                user: payload.user,

            }
        case USER_LOADED_FAIL:
            return {
                ...state,
                user: null,
            }

        case AUTHENTICATED_SUCCESS: 
        localStorage.setItem('isAuthenticated', true)

        return {
            ...state,
            isAuthenticated: true
        }
        case REFRESH_TOKEN_SUCCESS: 
        localStorage.setItem('access', payload.access)
        return {
            ...state,
            access: payload.access,
            
        }
        case AUTHENTICATED_FAIL: 
        localStorage.removeItem('isAuthenticated')

        return {
            ...state,
            isAuthenticated: false
        }
    
        default: return state
    }

} 


export default authReducer