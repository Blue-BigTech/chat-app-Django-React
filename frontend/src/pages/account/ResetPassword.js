import React from "react";
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
} from "./Account.styles";

export default function ResetPassword() {
  return (
    <>
      <FormCont>
        
        <FormWrap style={{alignItems: 'center', width: '100%'}}>
          <FormHeading>
            Please Enter Your Email To Change Password 
          </FormHeading>
          <Form>
            <InputDiv>
              <Input type="email" placeholder="Email" />
            </InputDiv>
            <TextBox>
              <Text>
                  Already Created An Account? 
                  <NewLink to="/login/">Login</NewLink> 
              </Text>
            </TextBox>
            <TextBox>
                <Text>Don't Have An Account? <NewLink to="/signup/">Create An Account</NewLink> </Text>
            </TextBox>

            <SubmitBtn>Reset Password</SubmitBtn>
          </Form>
        </FormWrap>
      </FormCont>
    </>
  );
}
