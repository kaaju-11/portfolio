import React from "react";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { RiGitlabFill, RiInstagramFill } from "react-icons/ri";
import { ChildContainer, FooterContainer, Para, AnkerTag, SocialSec,CvContainer  } from "style/Footer";
import { Heading } from "style/Skill";
import fileSaver from 'file-saver';
import { Button } from "style/Testomonial";

const Footer = () => {
  return (
    <FooterContainer>
      <ChildContainer>
        {/* <Heading>Web Developer</Heading> */}
        <Para>
        {/* Designed and Developed by Kajal Raj  */}
        © 2024 All rights reserved by Kajal Raj
        {/* © 2024 All rights reserved by ThemeJunction */}
        </Para>
        {/* <SocialSec>
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
        </SocialSec> */}
      </ChildContainer>
    </FooterContainer>
  );
};

export default Footer
