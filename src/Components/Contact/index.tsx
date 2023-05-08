import { useForm } from 'react-hook-form';
import { Form, Input, InputContainer, InputWrapper, Label, Textarea, TextareaWrapper } from 'style/testomonial'
import {MainContiner, ContactContainer} from "style/contact"
import { Heading } from 'style/skills';
import { MdContactPhone } from 'react-icons/md';

const Contacts = () => {
    const { register } = useForm();
    
  return (
    <MainContiner>
        <Heading
          style={{
            color: "#6600cc",
            border: "none",
            padding:"40px",
            fontSize:"60px" 
          }}
        >
          {/* <MdContactPhone /> */}
          Contact Info
        </Heading>
        <ContactContainer>
        <Form>
            <InputContainer>
              <InputWrapper>
                <Label>
                  Your Name<sup>*</sup>
                </Label>
                <Input {...register("title")} placeholder="Enter Title" />
              </InputWrapper>
              <InputWrapper>
              </InputWrapper>
            </InputContainer>   
            <InputWrapper>
            <Label>
                Message<sup>*</sup>
              </Label>
            <TextareaWrapper>
              <Textarea
                {...register("aboutYou")}
                placeholder="Enter the Job Description"
              />
            </TextareaWrapper>
            </InputWrapper>
          </Form>
        </ContactContainer>
    </MainContiner>
  )
}

export default Contacts;