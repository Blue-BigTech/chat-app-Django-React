import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { hideLoader, showLoader } from '../../redux/loader/actions';
import axios from 'axios'
import alert from '../../redux/alert/actions';
import REACT_APP_API_URL from '../../testurl'
import {useHistory} from 'react-router-dom'

export default function Activate({match}) {
    const dispatch = useDispatch()
    const history = useHistory()
    const uid = match.params.uid
    const token = match.params.token
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }; 
    const body = JSON.stringify({uid, token}) 
    useEffect(() => {
        dispatch(showLoader())
        axios.post(`${REACT_APP_API_URL}/auth/users/activation/`, body, config)
        .then((response) => {
            if(response.status == 204){
                dispatch(hideLoader())
                dispatch(alert('Your Account Has Been Activated Successfully.', 'success'))
                return history.push("/login/")
            }
            
        }).catch((error) => {
            dispatch(hideLoader())
            dispatch(alert('Failed To Acctivate Your Account', 'danger'))
        })
    }, [])
    return (
        <>
            
        </>
    )
}
