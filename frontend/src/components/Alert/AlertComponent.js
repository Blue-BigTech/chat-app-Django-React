import React from 'react'
import { AlertClose, AlertCont, AlertText, AlertCompo } from './Alert.styles'
import {IoCloseSharp} from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { removeAlert } from '../../redux/alert/actions'
export default function AlertComponent() {
    const alerts = useSelector(state => state.alerts)
    const dispatch = useDispatch()
    return (
        <>
            <AlertCont>
                {
                    alerts.map(({message, alertType, id}) => {
                        return (
                            <AlertCompo key={id} alertType={alertType}>
                                <AlertText>{message}</AlertText> 
                                <AlertClose onClick={() => dispatch(removeAlert(id))}>
                                    <IoCloseSharp />
                                </AlertClose>
                            </AlertCompo>
                        )
                    })
                }
                
                
                
            </AlertCont>
 
        </>
    )
}
