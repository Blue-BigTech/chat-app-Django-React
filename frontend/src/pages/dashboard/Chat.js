import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled, {keyframes} from 'styled-components'
import {Flex} from '../../globalStyles'
import REACT_APP_API_URL from '../../testurl'
import { useDispatch, useSelector } from 'react-redux'
import { hideLoader, showLoader } from '../../redux'
import alert from '../../redux/alert/actions'


export default function Chat({match}) {
    const [chat, setChat] = useState({
        id: '',
        user: '',
        recipient: '',
        title: '',
        body: '',
    })

    useEffect(() => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
            }
        }; 
        axios.get(`${REACT_APP_API_URL}/api/chats/${match.params.id}/`,  config)
        .then((response) => {
            setChat(response.data)
        }).catch(() => {

        })
    }, [])
    
    
    
    return (
        <>
            <ComposeFormWrap>
                <ComposeForm >
                    <InputDiv>
                        <Label>From</Label>
                        <Input disabled type="email" name="recipient" placeholder="Email" value={chat.user}/>
                    </InputDiv>
                    <InputDiv>
                        <Label>To</Label>
                        <Input disabled type="email" name="recipient" placeholder="Email" value={chat.recipient}/>
                    </InputDiv>
                    <InputDiv>
                        <Label>Title</Label>
                        <Input disabled type="text" name="title" placeholder="Title" value={chat.title} />
                    </InputDiv>
                    <InputDiv>
                        <Label>Body</Label>
                        <Textarea disabled value={chat.body} name="body"  placeholder="Your Body">

                        </Textarea>
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
    flex-direction: column;
    align-items: baseline;
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

const Label = styled.label`
    padding: 15px 16px;
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