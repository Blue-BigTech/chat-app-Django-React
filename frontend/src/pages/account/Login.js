import React, {useState} from 'react'
import LoginImg from '../../assets/img/login.svg'
import Switch from "react-switch";
import {
    FormWrap, 
    FormPictureWrap, 
    FromImg, 
    FormHeading,
    Form,
    InputDiv,
    Input,
    Label,
    SubmitBtn,
    FormCont,
    NewLink,
    Text,
    TextBox,
} from './Account.styles'

import { useDispatch } from 'react-redux';
import { hideLoader, showLoader, login } from '../../redux/';
import axios from 'axios'
import alert from '../../redux/alert/actions';
import REACT_APP_API_URL from '../../testurl'


export default function Login() {
    const [formData, setformData] = useState({
        email: '',
        password: '',
    })
    const [checked, setchecked] = useState(false)
    const dispatch = useDispatch()
    const {email, password} = formData
    const changeFormData = e => setformData({...formData, [e.target.name]: e.target.value})

    const onSubmit = async (e) => {
        e.preventDefault()
        dispatch(login(email, password, checked))
    }
    
    
    
    return (
        <>
            <FormCont>

                <FormPictureWrap>
                    <FromImg src={LoginImg}/>
                </FormPictureWrap>
                <FormWrap>
                    <FormHeading>Please Enter Your Email And Password To Login</FormHeading>
                    <Form onSubmit={onSubmit}>
                        <InputDiv>
                            <Input name="email" onChange={changeFormData} type="email" placeholder="Email"/>
                        </InputDiv>
                        <InputDiv>
                            <Input name="password" onChange={changeFormData} type="password" placeholder="Password"/>
                        </InputDiv>
                        <TextBox>
                            <Label>Keep Me Logged In</Label>
                            <Switch  
                            onColor="#dc3545"
                            onHandleColor="#ffffff"
                            handleDiameter={25}
                            uncheckedIcon={false}
                            checkedIcon={false}
                            height={25}
                            width={45}
                            checked={checked}
                            onChange={e => setchecked(!checked)}
                            
                            />
                        </TextBox>
                        <TextBox>
                            <Text>Don't Have An Account? <NewLink to="/signup/">Create An Account</NewLink> </Text>
                        </TextBox>
                        {/* <TextBox>
                            <Text>Forgot Password? <NewLink to="/reset-password/">Reset Password</NewLink> </Text>
                        </TextBox> */}

                        <SubmitBtn type="submit">Login</SubmitBtn>

                    </Form>
                </FormWrap>
                    
            </FormCont>

        </>
    )
}
