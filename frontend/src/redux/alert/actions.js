import { SET_ALERT, REMOVE_ALERT } from './types'
import {v4 } from 'uuid'

export const setAlert = (message, alertType, id) => {
    return {
        type: SET_ALERT,
        payload: {message, alertType, id}
    }
}


export const removeAlert = (id) => {
    return {
        type: REMOVE_ALERT,
        payload: {id}
    }
}


const alert =  (message, alertType, timeout = 10000) =>{
    return async dispatch =>{
        const id = v4()
        dispatch(setAlert(message, alertType, id))
        await setTimeout(() => {
            dispatch(removeAlert(id))
        }, timeout);
    }
}

export default alert

