import React, { useState } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { Carousel } from "antd";
import { BackwardOutlined, ForwardOutlined } from "@ant-design/icons";
import Slider from "react-slick";
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
  CaroselContainer,
  WCaroselContainer,
} from "style/Testomonial";
import { FaPenAlt } from "react-icons/fa";
import { Heading } from "style/Skill";
import { Container } from "style/Home";
import Column from "antd/es/table/Column";

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

const SampleNextArrow = (props: {
  className: any;
  style: any;
  onClick: any;
}) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        color: "black",
        fontSize: "15px",
        lineHeight: "1.5715",
      }}
      onClick={onClick}
    >
      <ForwardOutlined />
    </div>
  );
};

const SamplePrevArrow = (props: {
  className: any;
  style: any;
  onClick: any;
}) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        color: "black",
        fontSize: "15px",
        lineHeight: "1.5715",
      }}
      onClick={onClick}
    >
      <BackwardOutlined />
    </div>
  );
};
const settings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  nextArrow: (
    <SampleNextArrow
      className={undefined}
      style={undefined}
      onClick={undefined}
    />
  ),
  prevArrow: (
    <SamplePrevArrow
      className={undefined}
      style={undefined}
      onClick={undefined}
    />
  ),
};

const contentStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#6600cc",
};

const details = {
  id: 0,
  title: "",
  decreption: "",
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
    <Container style={{ flexDirection: "column", marginBottom: "100px" }}>
      <Heading
        style={{
          color: "#6600cc",
          borderBottom: "2px dotted #6600cc",
        }}
      >
        Testimonial
      </Heading>
      <WCaroselContainer>
        <CaroselContainer>
          <Carousel arrows {...settings}>
            <div>
              <h3 style={contentStyle}>1</h3>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>4</h3>
            </div>
          </Carousel>
        </CaroselContainer>
      </WCaroselContainer>
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
                {...register("decreption")}
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
    </Container>
  );
};

export default Testomonial;
