import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideLoader, showLoader } from '../../redux/';
import alert from '../../redux/alert/actions'
import REACT_APP_API_URL from '../../testurl'
import {
    HtmlTable,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    Button,
} from './Table.styles'
import {Link } from 'react-router-dom'

export default function Table({tableData, table=''}) {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const moveToTrash = id =>{
        dispatch(showLoader())
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
            }
        }; 
        axios.post(`${REACT_APP_API_URL}/api/chats/${id}/trash/`,'{}', config)
        .then((response) => {
            if(response.status == 200){
                dispatch({type:'RELOAD'})
                dispatch(alert('Successfully Moved To Trash', 'success'))
            }
            dispatch(hideLoader())
        }).catch(() => {
            dispatch(hideLoader())
            dispatch(alert('Failed To Move In Trash', 'danger'))
        })
    }
    const restoreFromTrash = id =>{
        dispatch(showLoader())
        
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
            }
        }; 
        axios.post(`${REACT_APP_API_URL}/api/chats/${id}/rmtrash/`,'{}', config)
        .then((response) => {
            if(response.status == 200){
                dispatch({type:'RELOAD'})
                dispatch(alert('Successfully Restored from Trash', 'success'))
            }
            dispatch(hideLoader())
        }).catch(() => {
            dispatch(hideLoader())
            dispatch(alert('Failed To Restored from Trash', 'danger'))
        })
    }
    const deleteChatR = id => {
        dispatch(showLoader())
        
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
            }
        }; 
        axios.delete(`${REACT_APP_API_URL}/api/chats/${id}/`, config)
        .then((response) => {
            dispatch({type:'RELOAD'})
            dispatch(alert('Message Unsent Successfull', 'success'))
            
            dispatch(hideLoader())
        }).catch(() => {
            dispatch(hideLoader())
            dispatch(alert('Message Unsent Failed', 'danger'))
        })
    }
    return (
        <>
            <HtmlTable>
                <Thead>
                    <Tr>
                        <Th>$</Th>
                        <Th>Title</Th>
                        <Th>From</Th>
                        <Th>To</Th>
                        <Th>Action</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        tableData.map((data, i) => {
                            const {title, id, user, recipient} = data
                            return (
                                <Tr key={id}>
                                    <Td>{i + 1}</Td>
                                    <Td>{title}</Td>
                                    <Td>{user}</Td>
                                    <Td>{recipient}</Td>
                                    <Td >
                                        <Button onClick={() => table=='trash'?restoreFromTrash(id):moveToTrash(id)}>{table=='trash'? 'Restore': 'Move To Trash'}</Button>  
                                        {
                                            auth.user!=null && user == auth.user.email? 
                                            <Button onClick={() => deleteChatR(id)}>UnSent</Button>:''
                                        }
                                        <Link to={`/chats/${id}/`}>
                                            <Button>View</Button>  
                                        </Link>
                                    </Td>
                                </Tr>
                            )
                        })
                    }
                    
                    
                </Tbody>
            </HtmlTable>  
        </>
    )
}
