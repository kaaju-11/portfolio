import React from "react";
import {
  WrapperContainer,
  Container,
  FlexContainer,
  Heading,
} from "style/skills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import {
  MainContainer,
  Box,
  BoxContainer,
  Date,
  Degree,
  AboutDegree,
} from "style/education";
import { GiGraduateCap } from "react-icons/gi";
import { FaUserGraduate } from "react-icons/fa";

const Educations = () => {
  return (
    <MainContainer style={{ background: "none" }}>
      <Container>
        <Heading
          style={{
            color: "#6600cc",
            borderBottom: " 2px dotted #6600cc",
            margin: "60px",
          }}
        >
          <FaUserGraduate />
          Educaton
        </Heading>
        <BoxContainer>
          <Box>
            <Date>2020-2023</Date>
            <Degree>High School Degree</Degree>
            <AboutDegree>
              The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam.
              consequat.Lorem Ipsum is a piece of text, used by designers to
              fill a space where the content will eventually sit. It helps show
              how text will look once a piece of content is finished, during the
              planning phase.
            </AboutDegree>
          </Box>
          <Box>
            <Date>2020-2023</Date>
            <Degree>High School Degree</Degree>
            <AboutDegree>
              The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam. consequat
            </AboutDegree>
          </Box>
          <Box>
            <Date>2020-2023</Date>
            <Degree>High School Degree</Degree>
            <AboutDegree>
              The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam. consequat
            </AboutDegree>
          </Box>
        </BoxContainer>
      </Container>
    </MainContainer>
  );
};

export default Educations;
