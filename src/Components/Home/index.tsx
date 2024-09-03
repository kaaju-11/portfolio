import React from "react";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { GrSend } from "react-icons/gr";
// import {IoArrowRedoCircleOutline} from "react-icons/io"
import {TbCircleArrowUpRight} from "react-icons/tb"
import { RiGitlabFill, RiInstagramFill } from "react-icons/ri";
import Typewriter from "typewriter-effect";
import portimage from "assets/images/resumeimage.jpg"
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
  RightContainer,
  Image,
  BoxContainer,
  SecondBoxContainer,
} from "style/Home";
import DownloadIcon from "assets/svg/DownloadIcon";
import fileSaver from "file-saver";

const HomeSec = () => {
  const saveFile = () => {
    fileSaver.saveAs(
      process.env.PUBLIC_URL + "/resume/cv.pdf",
      "MyCV.pdf"
    );
  }
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
                    delay: 45,
                    strings: ["Web Developer","Software Engineer", "Frontend Developer","Open Source Contributor", "UI Developer"],
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
            <SButton href="https://www.linkedin.com/in/kajal-raj" target="_blank" rel="noopener noreferrer">Let's Talk<GrSend /></SButton>
            <FButton onClick={saveFile}>Download CV
              {/* <TbCircleArrowUpRight /> */}
              <DownloadIcon />
              </FButton>
          </ButtonContainer>
        </LeftContainer>
        <RightContainer>

          <BoxContainer></BoxContainer>
          <SecondBoxContainer></SecondBoxContainer>
          
          <Image src={portimage} />

        </RightContainer>
      </Container>
    </MainContainer>
  );
};

export default HomeSec;
