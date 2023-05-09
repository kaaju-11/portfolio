import React from "react";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { RiGitlabFill, RiInstagramFill } from "react-icons/ri";
import { ChildContainer, FooterContainer, Para, AnkerTag, SocialSec,CvContainer  } from "style/footer";
import { Heading } from "style/skills";
import fileSaver from 'file-saver';
import { Button } from "style/testomonial";

const Footer = () => {
  const saveFile = () => {
    fileSaver.saveAs(
      process.env.PUBLIC_URL + "/resume/cv.pdf",
      "MyCV.pdf"
    );
  }
  return (
    <CvContainer>
      <Button onClick={saveFile}>
    Download CV
</Button>

    <FooterContainer>
      <ChildContainer>
        <Heading style={{border:"none", color:"black"}}>Web Developer</Heading>
        <Para>
          A spcialist in UI/UX design.A passion of mine is designing and
          solving problems through user experience,primarly on modern web
          UI.A passion of mine is designing and
          solving problems through user experience,primarly on modern web
          UI.
        </Para>
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
      </ChildContainer>
    </FooterContainer>
    </CvContainer>
  );
};

export default Footer
