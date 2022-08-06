import axios from 'axios'
import React, { useState } from 'react'
import styled, {keyframes} from 'styled-components'
import {Flex} from '../../globalStyles'
import REACT_APP_API_URL from '../../testurl'
import { useDispatch, useSelector } from 'react-redux'
import { hideLoader, showLoader } from '../../redux'
import alert from '../../redux/alert/actions'


export default function Compose() {
    const [formData, setFormData] = useState({
        email: '',
        recipient: '',
        title: '',
        body: '',
    })
    const dispatch = useDispatch()

    const {recipient, title, body} = formData
    
    const changeFormData = e => setFormData({...formData, [e.target.name]: e.target.value})

    const auth = useSelector(state => state.auth)
    const sendMessage = e => {
        e.preventDefault()
        dispatch(showLoader())
        
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
            }
        };             
        const user = auth.user.email
        const data = JSON.stringify({user, recipient, title, body})
        axios.post(`${REACT_APP_API_URL}/api/chats/`, data, config)
        .then((response) => {
            dispatch(hideLoader())
            dispatch(alert('Message Sent', 'success'))
            setFormData({
                email: '',
                recipient: '',
                title: '',
                body: '',
            })
        }).catch(() => {
            dispatch(hideLoader())
            dispatch(alert('Failed to Send Message', 'danger'))
        })
    }
    
    return (
        <>
            <ComposeFormWrap>
                <ComposeForm onSubmit={sendMessage}>
                    <InputDiv>
                        <Input type="email" name="recipient" placeholder="Email" onChange={changeFormData} value={recipient}/>
                    </InputDiv>
                    <InputDiv>
                        <Input type="text" name="title" placeholder="Title" onChange={changeFormData} value={title} />
                    </InputDiv>
                    <InputDiv>
                        <Textarea onChange={changeFormData} value={body} name="body"  placeholder="Your Body">

                        </Textarea>
                    </InputDiv>
                    <InputDiv>
                        <Button >Send</Button>
                    </InputDiv>
                </ComposeForm>
            </ComposeFormWrap>
        </>
    )
}





const ComposeFormWrap = styled.div`
        width: 95%;
    margin: 30px 0px;

`

const ComposeForm = styled.form`


`

const InputDiv = styled.div`
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`


const Input = styled.input`
    padding: 15px 16px;
    border-radius: 4px;
    background: var(--secendory-color);
    border: none;
    outline: none;
    color: var(--secendory-text-color);
    font-size: 18px;
    width: 100%;
    font-weight: 500;
    letter-spacing: 1px;
`

const Textarea = styled.textarea`
    padding: 15px 16px;
    border-radius: 4px;
    background: var(--secendory-color);
    border: none;
    outline: none;
    color: var(--secendory-text-color);
    font-size: 18px;
    width: 100%;
    font-weight: 500;
    letter-spacing: 1px;
    margin: 0px;
    height: 333px;
    min-width: 100%;

`

const Button = styled.button`
    
color: var(--primary-text-color);
background: var(--primary-color);
border: none;
border-radius: 4px;
cursor: pointer;
transition: all .4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
&:hover{
    background: var(--primary-hover-color);
}
&:active{
    transform: var(--for-active-click);
}
padding: 15px 16px;
letter-spacing: 1px;
font-weight: 500;
font-size: 18px;
width: 150px;

margin-left: auto;

`