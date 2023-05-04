import React from "react";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { GrSend } from "react-icons/gr";
// import {IoArrowRedoCircleOutline} from "react-icons/io"
import {TbCircleArrowUpRight} from "react-icons/tb"
import { RiGitlabFill, RiInstagramFill } from "react-icons/ri";
import Typewriter from "typewriter-effect";
import {
  MainContainer,
  Container,
  LeftContainer,
  Proffesion,
  Paragraph,
  ButtonContainer,
  FButton,
  SButton,
  SocialSec,
  AnkerTag,
  SocialIcon,
  RightContainer,
  Image,
} from "style/home";

const HomeSec = () => {
  return (
    <MainContainer>
      <Container>
        <LeftContainer>
          <Proffesion>
            <h3>Hello There!</h3>
            <h3>
              I'm a{" "}
              <span>
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 40,
                    strings: ["Web Developer", "Frontend Developer"],
                  }}
                />
              </span>
            </h3>
          </Proffesion>
          <Paragraph>
            Hi, I'm Kajal Raj,Frontend Web Developer - creating bold & brave
            interface design and web application for companies all across the
            world.
          </Paragraph>
          <SocialSec>
            <AnkerTag href="#">
              <FaFacebookF />
            </AnkerTag>
            <AnkerTag href="#">
              <RiInstagramFill />
            </AnkerTag>
            <AnkerTag href="#">
              <AiFillLinkedin />
            </AnkerTag>
            <AnkerTag href="#">
              <AiOutlineGithub />
            </AnkerTag>
            <AnkerTag href="#">
              <RiGitlabFill />
            </AnkerTag>
          </SocialSec>

          <ButtonContainer>
            <SButton>Let's Talk<GrSend /></SButton>
            <FButton>Projects<TbCircleArrowUpRight /></FButton>
          </ButtonContainer>
        </LeftContainer>
        <RightContainer>
          <Image />
        </RightContainer>
      </Container>
    </MainContainer>
  );
};

export default HomeSec;
