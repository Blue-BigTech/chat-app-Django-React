import React, { useEffect, useState } from 'react'
import Table from '../../components/ChatTable/Table'
import REACT_APP_API_URL from '../../testurl'
import axios from 'axios'
import { useSelector } from 'react-redux'

export default function Trash() {
    const [tableData, setTableData] = useState([])
    const reload = useSelector(state => state.reload)

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
        }
    }; 
    useEffect(() => {

        
        axios.get(`${REACT_APP_API_URL}/api/chats/getrash/`, config)
        .then((response) => {
            setTableData(response.data)
        })

    }, [reload])
    return (
        <>
            <Table table='trash' tableData={tableData} />
        </>
    )
}
