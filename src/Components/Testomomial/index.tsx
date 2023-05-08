import React, { useState } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import {
  Header,
  WebName,
  CloseBtn,
  Form,
  Label,
  Input,
  Textarea,
  InputWrapper,
  InputContainer,
  TextareaWrapper,
  ButtonWrapper,
  Button,
  Image,
  OpenButton,
} from "style/testomonial";
import { FaPenAlt } from "react-icons/fa";
import { Heading } from "style/skills";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "15px",
    background:
      " linear-gradient(90deg, rgba(146,12,222,1) 0%, rgba(6,6,242,0.9601873536299765) 0%, rgba(114,7,237,0.955503512880562) 100%)",
  },
};

const Testomonial = () => {
  const { register } = useForm();
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Heading
        style={{
          color: "#6600cc",
          borderBottom: " none",
        }}
      >
        Testimonial
      </Heading>
      <OpenButton onClick={openModal}>
        <FaPenAlt />
      </OpenButton>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Header>
          <WebName>Your Testimonial</WebName>
          <CloseBtn onClick={closeModal}></CloseBtn>
        </Header>

        <Form>
          <InputContainer>
            <InputWrapper>
              <Label>
                Your Name<sup>*</sup>
              </Label>
              <Input {...register("title")} placeholder="Enter Title" />
            </InputWrapper>
            <InputWrapper></InputWrapper>
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
        <ButtonWrapper>
          <Button onClick={openModal}>Cancel</Button>
          <Button style={{ backgroundColor: "#1D2E88", color: "white" }}>
            Submit
          </Button>
        </ButtonWrapper>
      </Modal>
    </div>
  );
};

export default Testomonial;
